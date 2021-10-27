// Libraries
import React, {ChangeEvent, FC, useState} from 'react'
import classnames from 'classnames'

// Components
// Constants
// Types
import {MenuStatus} from '../Dropdown'
import {
  ComponentStatus,
  Dropdown,
  DropdownMenuTheme,
  Input,
} from '../../../../dist'

export interface SelectableItem {
  id: string
  name?: string
}

interface OwnProps {
  items: SelectableItem[]
  onSelect: (item: SelectableItem) => void
  testID?: string
  placeholderText?: string
  name?: string
  selectedOption?: SelectableItem | null
}

// interface MyState {
//     typedValue: string
//     actualVal: string
//     selectIndex: number
//     shownValues: string[]
//     selectHappened: boolean
//     menuOpen: MenuStatus
// }

export const TypeAheadDropDown: FC<OwnProps> = ({
  items,
  onSelect,
  testID,
  placeholderText,
  name,
  selectedOption,
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

  const itemNames = items.map(item => item.name)

  const filterVals = (event: ChangeEvent<HTMLInputElement>) => {
    const needle = event?.target?.value

    // if there is no value, set the shownValues to everything
    // and set the typedValue to nothing (zero it out)
    // reset the selectIndex too
    if (!needle) {
      setShownValues(items)
      setTypedValue('')
      setSelectIndex(-1)
    } else {
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

  const setTypedValueToSelectedName = () => {
    let selectedName = selectedItem?.name
    if (!selectedName) {
      selectedName = ''
    }
    setTypedValue(selectedName)
  }

  const maybeSelectNextItem = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    console.log('hit key down....', event)

    //const {shownValues, selectIndex, typedValue} = this.state
    //const {values} = this.props

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
        const foundIndex = itemNames.indexOf(typedValue)

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

  // // TODO:  DRY (typeaheadvariable dropdown....)
  // const getWidth = placeHolderText => {
  //   const names = items.map(item => item.name)
  //   const allVals = [placeHolderText, ...names]
  //   const longestItemWidth = Math.floor(
  //     allVals.reduce(function(a, b) {
  //       return a.length > b.length ? a : b
  //     }, '').length * 10
  //   )
  //
  //   const widthLength = Math.max(192, longestItemWidth)
  //   const widthStyle = {width: `${widthLength}px`}
  //   return widthStyle
  // }

  const doSelection = (item: SelectableItem, closeMenuNow?: boolean) => {
    console.log('arghh! 1; in doSelection:', item)
    setSelectedItem(item)
    setTypedValue(item.name || '')

    if (closeMenuNow) {
      setMenuOpen(MenuStatus.Closed)
    }
    onSelect(item)
  }
  //const widthStyle = this.getWidth(placeHolderText)

  const onClickAwayHere = () => {
    //  reset:
    //this.setState(this.getRealValue())
    console.log('just clicked away...')
    setTypedValueToSelectedName()

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

  return (
    <Dropdown
      style={{width: '192px'}}
      className="variable-dropdown--dropdown"
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
        <Dropdown.Menu
          onCollapse={onCollapse}
          theme={DropdownMenuTheme.Amethyst}
        >
          {shownValues.map((value, index) => {
            // add the 'active' class to highlight when arrowing; like a hover
            const classN = classnames('variable-dropdown--item', {
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
