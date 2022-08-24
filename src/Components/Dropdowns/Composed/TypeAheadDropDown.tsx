// Libraries
import React, {ChangeEvent, FC, useEffect, useMemo, useState} from 'react'
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
import {FixedSizeList} from 'react-window'
import '../ScrollBarStyles.scss'
import './TypeAheadDropDownStyles.scss'
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

const enCollator = new Intl.Collator('en-us')

const LIST_ITEM_HEIGHT = 33

export const TypeAheadDropDown: FC<OwnProps> = ({
  id,
  style,
  items,
  onSelect,
  testID,
  placeholderText = 'Select a Value',
  selectedOption = null,
  className,
  menuTheme = DropdownMenuTheme.Onyx,
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
  const [menuStatus, setMenuStatus] = useState<MenuStatus>(MenuStatus.Closed)
  const [userHasTyped, setUserHasTyped] = useState(false)
  const [selectedItem, setSelectedItem] = useState<SelectableItem | null>(
    selectedOption
  )

  const listRef = React.createRef<FixedSizeList<SelectableItem[]>>()

  let initialInputValue = ''

  if (selectedOption) {
    initialInputValue = selectedOption.name || defaultNameText
  }

  const [inputValue, setInputValue] = useState<string>(initialInputValue)
  const [backupSelectionValue, setBackupSelectionValue] = useState<string>(
    initialInputValue
  )

  useEffect(() => {
    // If selectedOption is invalid (not in the list of items), then we want to clear the input value
    if (
      selectedOption &&
      !items.some(item => item.name === selectedOption.name)
    ) {
      setInputValue('')
      return
    }
    setInputValue(selectedOption?.name || defaultNameText)
    setBackupSelectionValue(selectedOption?.name || defaultNameText)
  }, [selectedOption])

  useEffect(() => {
    // only filter the list to show the results if the user has typed something
    if (inputValue.length > 0 && userHasTyped) {
      const result = items.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(inputValue.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the queryResults changes
      // so need to reset
      setQueryResults(result)
      setSelectIndex(-1)
    } else {
      setQueryResults(items)
    }
  }, [items, inputValue])

  const itemNames = useMemo(() => items.map(item => item.name?.toLowerCase()), [
    items.length,
  ])

  const filter = (filterStr: string) => {
    if (!filterStr) {
      setQueryResults(items)
      setInputValue('')
      setSelectIndex(-1)
    } else {
      const result = items.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(filterStr.toLowerCase())
      })

      setQueryResults(result)
      setUserHasTyped(true)
      setInputValue(filterStr)
      setSelectIndex(-1)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filterStr = event?.target?.value
    filter(filterStr)
  }

  const onClear = () => {
    selectItem(null)
    filter('')
  }

  const setTypedValueToSelectedName = (backupName?: string) => {
    let selectedName = backupName ?? selectedItem?.name
    if (!selectedName) {
      selectedName = ''
    }
    setInputValue(selectedName)
  }

  const handleKeyboardUpDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    let newIndex = -1

    if (event.key === 'ArrowDown') {
      newIndex = selectIndex + 1
    } else if (event.key === 'ArrowUp') {
      newIndex = selectIndex - 1
    }

    const numItems = queryResults.length
    const newValueWasHighlighted =
      numItems && newIndex >= 0 && newIndex < numItems
    if (newValueWasHighlighted) {
      setSelectIndex(newIndex)
      return
    }

    if (event.key === 'Enter') {
      // reset the selectIndex to -1, & close the menu:
      if (numItems && selectIndex >= 0 && selectIndex < numItems) {
        selectItem(queryResults[selectIndex])
      } else {
        // the person could have been typing and pressed return, need to
        // make sure the value in the input field is real/legal:

        // but:  if the value they typed is LEGAL (in the list/dropdown values), set it;
        // else: reset to the previous real/legal value:
        const foundIndex = itemNames.indexOf(inputValue.toLowerCase())

        if (foundIndex >= 0) {
          // is a real legal value
          selectItem(items[foundIndex])
        } else {
          setTypedValueToSelectedName()
          setMenuStatus(MenuStatus.Closed)
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
      return item.name ?? defaultNameText
    }
    return ''
  }

  const selectItem = (item: SelectableItem | null) => {
    setSelectedItem(item)
    const actualName = getDisplayName(item)
    setInputValue(actualName)
    setSelectIndex(-1)

    // selectItem is called from onClear, we don't close the menu
    if (item !== null) {
      setMenuStatus(MenuStatus.Closed)
      setBackupSelectionValue(actualName)
    }
    onSelect(item)
  }

  const onClickOutside = () => {
    //  reset to the selected value; if the user typed in
    //  something not allowed it will go back to the last selected value:
    setTypedValueToSelectedName(backupSelectionValue)
    setQueryResults(items)
    setMenuStatus(MenuStatus.Closed)
    setUserHasTyped(false)
    setSelectIndex(-1)
  }

  const placeText =
    status === ComponentStatus.Loading ? 'Loading...' : placeholderText

  const selectAllTextInInput = (event?: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const target = event.target
      setTimeout(() => target.select(), 0)
    }
  }

  const inputComponent = (
    <Input
      placeholder={placeText}
      onChange={handleInputChange}
      value={inputValue}
      onKeyDown={handleKeyboardUpDown}
      testID={`${testID}--typeAhead-input`}
      onClear={onClear}
      status={status}
      onFocus={selectAllTextInInput}
    />
  )

  const props: any = {id, style, className, menuOpen: menuStatus}

  const toggleMenu = (event: any) => {
    if (
      (event.target.className === 'cf-input-field' ||
        event.target.className.includes('cf-dismiss-button')) &&
      menuStatus === MenuStatus.Open
    ) {
      return
    }
    // toggle the menu:
    if (menuStatus === MenuStatus.Closed) {
      setMenuStatus(MenuStatus.Open)
    } else {
      setMenuStatus(MenuStatus.Closed)
    }
  }

  const getSelectedItemIndex = (): number => {
    if (selectedItem) {
      return items.findIndex(item => item.id === selectedItem.id)
    }
    return 0
  }

  return (
    <Dropdown
      {...props}
      testID={testID}
      onClickAway={onClickOutside}
      disableAutoFocus
      button={active => (
        <DropdownHeader
          active={active}
          onClick={toggleMenu}
          testID={`typeAhead-dropdown--button`}
        >
          {inputComponent}
        </DropdownHeader>
      )}
      menu={() => (
        <Dropdown.Menu testID={`${testID}-dropdown-menu`} theme={menuTheme}>
          {queryResults && queryResults.length > 0 ? (
            <FixedSizeList
              height={
                queryResults.length * LIST_ITEM_HEIGHT > 150
                  ? 150
                  : queryResults.length * LIST_ITEM_HEIGHT
              }
              itemCount={queryResults.length}
              itemSize={33}
              width={'100%'}
              layout="vertical"
              itemData={queryResults}
              className="menu-dropdown"
              ref={listRef}
              initialScrollOffset={getSelectedItemIndex() * LIST_ITEM_HEIGHT}
            >
              {({data, index, style}) => {
                const value = data[index]
                // add the 'active' class to highlight when arrowing; like a hover
                const classN = classnames('menu-dropdown-typeahead-item', {
                  active: index === selectIndex,
                })

                return (
                  <div key={value.id} style={style}>
                    <Dropdown.Item
                      id={value.id.toString()}
                      value={value}
                      onClick={() => selectItem(value)}
                      selected={value.id === selectedItem?.id}
                      testID={`typeAhead-dropdown--item`}
                      className={classN}
                    >
                      {value.name || defaultNameText}
                    </Dropdown.Item>
                  </div>
                )
              }}
            </FixedSizeList>
          ) : (
            <Dropdown.Item
              key="no-values-in-filter"
              testID="nothing-in-filter-typeAhead"
              disabled={true}
            >
              {inputValue.length > 0
                ? `no matches for ${inputValue}`
                : 'No results'}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      )}
      menuOpen={menuStatus}
    />
  )
}
