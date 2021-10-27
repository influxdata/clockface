// Libraries
import React, {ChangeEvent, FC, useRef, useState} from 'react'
import classnames from 'classnames'

import {Dropdown} from '../.'
import {MenuStatus} from '../Dropdown'

import {
  ComponentStatus,
  DropdownMenuTheme,
  StandardFunctionProps,
} from '../../../Types'

import {Input} from '../../Inputs/Input'

export interface SelectableItem {
  id: string
  name?: string
}

interface OwnProps extends StandardFunctionProps {
  items: SelectableItem[]
  onSelect: (item: SelectableItem) => void
  placeholderText?: string
  name?: string
  selectedOption?: SelectableItem | null
  menuTheme?: DropdownMenuTheme
  disableAutoFocus?: boolean
  buttonTestId?: string
  menuTestID?: string
  itemTestIdPrefix?: string
}

export const TypeAheadDropDown: FC<OwnProps> = ({
  id,
  style,
  items,
  onSelect,
  testID,
  placeholderText,
  name,
  selectedOption,
  className,
  menuTheme,
  disableAutoFocus,
  buttonTestId,
  menuTestID,
  itemTestIdPrefix,
}) => {
  const [typedValue, setTypedValue] = useState<string>('')
  const [selectIndex, setSelectIndex] = useState(-1)
  const [shownValues, setShownValues] = useState(items)
  //const [selectHappened, setSelectHappened] = useState(false)
  const [menuOpen, setMenuOpen] = useState<MenuStatus>(MenuStatus.Closed)
  if (!selectedOption) {
    selectedOption = null
  }
  const [selectedItem, setSelectedItem] = useState<SelectableItem | null>(
    selectedOption
  )
  //let backupValue: React.MutableRefObject<{ name: string }>
  let backupValue = useRef<string>('')

  if (!menuTheme) {
    menuTheme = DropdownMenuTheme.Onyx
  }

  const itemNames = items.map(item => item.name?.toLowerCase())

  const filterVals = (event: ChangeEvent<HTMLInputElement>) => {
    const needle = event?.target?.value
    console.log('in filtervals....')
    // if there is no value, set the shownValues to everything
    // and set the typedValue to nothing (zero it out)
    // reset the selectIndex too
    if (!needle) {
      console.log('no needle :(')
      setShownValues(items)
      setTypedValue('')
      setSelectIndex(-1)
    } else {
      console.log('stuff to filter!')
      const result = items.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(needle.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the shownValues changes
      // so need to reset
      setShownValues(result)
      setTypedValue(needle)
      setMenuOpen(MenuStatus.Open)
      setSelectIndex(-1)
    }
  }

  if (!placeholderText) {
    placeholderText = 'Select a Value'
  }

  if (!name) {
    name = 'header'
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

    const numItems = shownValues.length
    const newValueWasHighlighted =
      numItems && newIndex >= 0 && newIndex < numItems
    if (newValueWasHighlighted) {
      setSelectIndex(newIndex)
      return
    }

    if (event.keyCode === 13) {
      // return/enter key
      // lose focus, reset the selectIndex to -1, & close the menu:
      //event.target.blur()

      if (numItems && selectIndex >= 0 && selectIndex < numItems) {
        // they used the arrows; just pressed return
        doSelection(shownValues[selectIndex], true)
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

  const doSelection = (item: SelectableItem, closeMenuNow?: boolean) => {
    console.log('just triggered doSelection; with item:', item)
    setSelectedItem(item)
    const actualName = item.name || ''
    console.log('fubar2 actual name in doselection???', actualName)
    setTypedValue(actualName)
    backupValue.current = actualName
    setSelectIndex(-1)

    if (closeMenuNow) {
      setMenuOpen(MenuStatus.Closed)
    }
    onSelect(item)
  }

  const onClickAwayHere = () => {
    //  reset:
    console.log('clicking away')
    setTypedValueToSelectedName(backupValue.current)
  }

  const dropdownStatus =
    items.length === 0 ? ComponentStatus.Disabled : ComponentStatus.Default

  // do rendering:
  const inputComponent = (
    <Input
      placeholder={placeholderText}
      onChange={filterVals}
      value={typedValue}
      onKeyDown={maybeSelectNextItem}
      testID={`dropdown-input-typeAhead--${name}`}
    />
  )

  const props: any = {id, style}

  return (
    <Dropdown
      {...props}
      className={className}
      testID={testID || `typeAhead-dropdown--${name}`}
      onClickAway={onClickAwayHere}
      menuOpen={menuOpen}
      disableAutoFocus
      button={(active, onClick) => (
        <Dropdown.Button
          active={active}
          onClick={onClick}
          testID="variable-dropdown--button"
          status={dropdownStatus}
        >
          {inputComponent}
        </Dropdown.Button>
      )}
      menu={onCollapse => (
        <Dropdown.Menu onCollapse={onCollapse} theme={menuTheme}>
          {shownValues.map((value, index) => {
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
                testID="dropdown--item"
                className={classN}
              >
                {value.name}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      )}
    />
  )
}
