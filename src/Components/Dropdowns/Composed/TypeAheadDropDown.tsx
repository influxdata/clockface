// Libraries
import React, {
  ChangeEvent,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classnames from 'classnames'
import {Dropdown} from '../.'
import {MenuStatus} from '../Dropdown'

import {
  ComponentStatus,
  DropdownMenuTheme,
  StandardFunctionProps,
} from '../../../Types'

import {Input} from '../../Inputs/Input'
import {DropdownHeader} from '../DropdownHeader'

export interface SelectableItem {
  id: string
  name?: string
}

interface OwnProps extends StandardFunctionProps {
  items: SelectableItem[]
  onSelect: (item: SelectableItem | null) => void
  /** what shows in the input when nothing is selected */
  placeholderText?: string
  /** used for generating test ids */
  testIdSuffix?: string
  /**optional pre-selected option, must match exactly (name and id) an item in the items array */
  selectedOption?: SelectableItem | null
  /**enables forced searching once dropdown list exceeds largeListSearch value */
  largeListSearch?: boolean
  /**the number of total items in the dropdown list before search is forced */
  largeListCeiling?: number
  /** which theme to apply */
  menuTheme?: DropdownMenuTheme
  buttonTestId?: string
  menuTestID?: string
  itemTestIdPrefix?: string
  /** the name/label to show in the dropdown where there is an item with an id but without a name; defaults to the empty string */
  defaultNameText?: string
  sortNames?: boolean
  /** status state: default, loading, or disabled */
  status?: ComponentStatus
}
const isBlank = (pString: string | undefined): boolean =>
  // Checks for falsiness or a non-white space character
  !pString || !/[^\s]+/.test(pString)

const getValueWithBackup = (
  val: string | undefined,
  backup: string
): string => {
  if (isBlank(val)) {
    return backup
  }
  return val as string
}
const enCollator = new Intl.Collator('en-us')

export const TypeAheadDropDown: FC<OwnProps> = ({
  id,
  style,
  items,
  onSelect,
  testID,
  placeholderText,
  testIdSuffix = 'typeAhead',
  selectedOption = null,
  className,
  largeListSearch = false,
  largeListCeiling = 0,
  menuTheme = DropdownMenuTheme.Onyx,
  buttonTestId = 'type-ahead-dropdown--button',
  menuTestID = 'type-ahead-dropdown--menu',
  itemTestIdPrefix = 'type-ahead-dropdown--item',
  sortNames = true,
  defaultNameText = '',
  status = ComponentStatus.Default,
}) => {
  if (sortNames) {
    items.sort((a, b) => {
      const aname = a?.name || ''
      const bname = b?.name || ''
      return enCollator.compare(aname, bname)
    })
  }

  const [selectIndex, setSelectIndex] = useState(-1)
  const [queryResults, setQueryResults] = useState(items)
  const [menuOpen, setMenuOpen] = useState<MenuStatus>(MenuStatus.Closed)

  const [selectedItem, setSelectedItem] = useState<SelectableItem | null>(
    selectedOption
  )

  let initialTypedValue = ''

  if (selectedOption) {
    initialTypedValue = getValueWithBackup(selectedOption.name, defaultNameText)
  }

  const [typedValue, setTypedValue] = useState<string>(initialTypedValue)

  const largeListValidation =
    largeListSearch && queryResults.length > largeListCeiling

  useEffect(() => {
    if (typedValue.length > 0) {
      const result = items.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(typedValue.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the queryResults changes
      // so need to reset
      setQueryResults(result)
      setSelectIndex(-1)
    } else {
      setQueryResults(items)
    }
  }, [items, typedValue])

  /**
   *  using a ref to hold an instance variable:  what was last typed,
   *  because without this 'click to select' doesn't work.
   *  (you click to select, which clicks out of the dropdown, so then the dropdown sets
   * the text to what was last selected.  this works fine for a class component,
   * but here it uses the stale state of what was previously selected.
   * this way, what was selected is saved in the ref.)
   */
  const backupValue = useRef<string>(initialTypedValue)

  const itemNames = useMemo(() => items.map(item => item.name?.toLowerCase()), [
    items.length,
  ])

  /**
   *  filter the selections/options based on the search string: needle
   * if the needle is empty; then there is nothing to filter; so return everything
   */
  const doFilter = (needle: string) => {
    // if there is no value, set the queryResults to everything
    // and set the typedValue to nothing (zero it out)
    // reset the selectIndex too
    if (!needle) {
      setQueryResults(items)
      setTypedValue('')
      setSelectIndex(-1)
    } else {
      const result = items.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(needle.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the queryResults changes
      // so need to reset
      setQueryResults(result)
      setTypedValue(needle)
      setMenuOpen(MenuStatus.Open)
      setSelectIndex(-1)
    }
  }

  const clear = () => {
    doSelection(null)
    doFilter('')
  }

  const filterVals = (event: ChangeEvent<HTMLInputElement>) => {
    const needle = event?.target?.value
    doFilter(needle)
  }

  if (!placeholderText) {
    placeholderText = 'Select a Value'
  }

  const setTypedValueToSelectedName = (backupName?: string) => {
    let selectedName = backupName ?? selectedItem?.name
    if (!selectedName) {
      selectedName = ''
    }
    setTypedValue(selectedName)
  }

  const maybeSelectNextItem = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    let newIndex = -1

    if (event.keyCode === 40) {
      // down arrow
      newIndex = selectIndex + 1
    } else if (event.keyCode === 38) {
      // up arrow
      newIndex = selectIndex - 1
    }

    const numItems = queryResults.length
    const newValueWasHighlighted =
      numItems && newIndex >= 0 && newIndex < numItems
    if (newValueWasHighlighted) {
      setSelectIndex(newIndex)
      return
    }

    if (event.keyCode === 13) {
      // return/enter key
      // reset the selectIndex to -1, & close the menu:

      if (numItems && selectIndex >= 0 && selectIndex < numItems) {
        // they used the arrows; just pressed return
        doSelection(queryResults[selectIndex], true)
      } else {
        // the person could have been typing and pressed return, need to
        // make sure the value in the input field is real/legal:

        // but:  if the value they typed is LEGAL (in the list/dropdown values), set it;
        // else: reset to the previous real/legal value:
        const foundIndex = itemNames.indexOf(typedValue.toLowerCase())

        if (foundIndex >= 0) {
          // is a real legal value
          doSelection(items[foundIndex], true)
        } else {
          setTypedValueToSelectedName()
          setMenuOpen(MenuStatus.Closed)
          setSelectIndex(-1)
        }
      }
    }
  }

  /**
   *  if there is a value, get its name, else show the empty string.
   * only want to show the default name text when there is an item selected.
   * */
  const getDisplayName = (item: SelectableItem | null): string => {
    if (item && item.id) {
      return getValueWithBackup(item.name, defaultNameText)
    }
    return ''
  }

  const doSelection = (item: SelectableItem | null, closeMenuNow?: boolean) => {
    setSelectedItem(item)
    const actualName = getDisplayName(item)
    setTypedValue(actualName)
    backupValue.current = actualName
    setSelectIndex(-1)

    if (closeMenuNow) {
      setMenuOpen(MenuStatus.Closed)
    }
    onSelect(item)
  }

  const onClickAwayHere = () => {
    //  reset to the selected value; if the user typed in
    //  something not allowed it will go back to the last selected value:
    setTypedValueToSelectedName(backupValue.current)
  }

  const dropdownStatus = items.length === 0 ? ComponentStatus.Disabled : status

  const placeText =
    status === ComponentStatus.Loading ? 'Loading...' : placeholderText

  const selectAllTextInInput = (event?: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      event.target.select()
    }
  }

  // do rendering:
  const inputComponent = (
    <Input
      placeholder={placeText}
      onChange={filterVals}
      value={typedValue}
      onKeyDown={maybeSelectNextItem}
      testID={`dropdown-input-typeAhead--${testIdSuffix}`}
      onClear={clear}
      status={status}
      onFocus={selectAllTextInInput}
    />
  )

  const props: any = {id, style, className, menuOpen}

  const largeListValidationText =
    typedValue.length >= 1
      ? 'There are still too many results. Please input more characters.'
      : 'Please input a character to start seeing results.'

  return (
    <Dropdown
      {...props}
      testID={testID || `typeAhead-dropdown--${testIdSuffix}`}
      onClickAway={onClickAwayHere}
      disableAutoFocus
      button={(active, onClick) => (
        <DropdownHeader
          active={active}
          onClick={onClick}
          testID={buttonTestId}
          status={dropdownStatus}
        >
          {inputComponent}
        </DropdownHeader>
      )}
      menu={onCollapse => (
        <Dropdown.Menu
          testID={menuTestID}
          onCollapse={onCollapse}
          theme={menuTheme}
        >
          {largeListValidation ? (
            <Dropdown.Item
              key="nada-no-values-in-filter"
              testID="nothing-in-filter-typeAhead"
              disabled={true}
              wrapText={true}
            >
              {largeListValidationText}
            </Dropdown.Item>
          ) : (
            queryResults.map((value, index) => {
              // add the 'active' class to highlight when arrowing; like a hover
              const classN = classnames({
                active: index === selectIndex,
              })

              return (
                <Dropdown.Item
                  key={value.id}
                  id={value.id}
                  value={value}
                  onClick={doSelection}
                  selected={value.id === selectedItem?.id}
                  testID={`${itemTestIdPrefix}-${value.id}`}
                  className={classN}
                >
                  {value.name || defaultNameText}
                </Dropdown.Item>
              )
            })
          )}
          {!queryResults || queryResults.length === 0 ? (
            <Dropdown.Item
              key="nada-no-values-in-filter"
              testID="nothing-in-filter-typeAhead"
              disabled={true}
            >
              {`no matches for ${typedValue}`}
            </Dropdown.Item>
          ) : null}
        </Dropdown.Menu>
      )}
    />
  )
}
