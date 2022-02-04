// Libraries
import React, {ChangeEvent, forwardRef, MouseEvent, useState} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'
import {DropdownHeader} from '../DropdownHeader'
import {Input} from '../../Inputs/Input'

// Types
import {
  ComponentSize,
  ComponentStatus,
  DropdownMenuTheme,
  IconFont,
  StandardFunctionProps,
} from '../../../Types'

export interface CreatableTypeAheadDropdownProps extends StandardFunctionProps {
  /** Text to render in button as currently selected option */
  selectedOption: string
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** Optional placeholder text when no option is selected */
  placeholder?: string
  /** Optional status of input */
  inputStatus?: ComponentStatus
  /** Optional size of input */
  inputSize?: ComponentSize
  /** Optional icon to render in input */
  inputIcon?: IconFont
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  /** Optional maximum pixel height menu */
  menuMaxHeight?: number
  /** Optional customized dropdown item */
  customizedDropdownItem?: (displayText: string) => JSX.Element
  /** TODO: input type and dropdown type */
  /** enum "text" | "color" */
  type?: string
}

export type CreatableTypeAheadDropdownReadmeRef = DropdownRef

export const CreatableTypeAheadDropdown = forwardRef<
  CreatableTypeAheadDropdownReadmeRef,
  CreatableTypeAheadDropdownProps
>(
  (
    {
      id,
      style = {width: '100%'},
      testID = 'creatable-type-ahead-dropdown',
      className,
      selectedOption,
      options,
      onSelect,
      inputStatus = ComponentStatus.Default,
      inputSize = ComponentSize.Small,
      inputIcon,
      placeholder = 'Select...',
      menuTheme = DropdownMenuTheme.Onyx,
      menuMaxHeight,
      customizedDropdownItem,
    },
    ref
  ) => {
    const [typedValue, setTypedValue] = useState<string>(selectedOption)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value
      setTypedValue(value)
    }

    const handleClear = () => {
      setTypedValue('')
      onSelect('')
    }

    const handleFocus = (event?: ChangeEvent<HTMLInputElement>) => {
      if (event) {
        event.target.select()
      }
    }

    const handleClick = (option: string) => {
      onSelect(option)
      setTypedValue(option)
    }

    const inputComponent = (
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={typedValue}
        onClear={handleClear}
        onFocus={handleFocus}
        status={inputStatus}
        size={inputSize}
        icon={inputIcon}
      />
    )

    const button = (
      active: boolean,
      onClick: (e: MouseEvent<HTMLElement>) => void
    ) => (
      <DropdownHeader
        active={active}
        onClick={onClick}
        testID="test TODO"
        size={inputSize}
      >
        {inputComponent}
      </DropdownHeader>
    )

    const menu = (onCollapse: () => void) => (
      <Dropdown.Menu
        onCollapse={onCollapse}
        theme={menuTheme}
        maxHeight={menuMaxHeight}
      >
        {options.map(option => (
          <Dropdown.Item
            key={option}
            value={option}
            title={option}
            selected={option === selectedOption}
            onClick={handleClick}
          >
            {!!customizedDropdownItem ? customizedDropdownItem(option) : option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    )

    return (
      <Dropdown.Dropdown
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        className={className}
        button={button}
        menu={menu}
      />
    )
  }
)
CreatableTypeAheadDropdown.displayName = 'CreatableTypeAheadDropdown'
