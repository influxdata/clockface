// Libraries
import React, {ChangeEvent, forwardRef, MouseEvent, useState} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'
import {DropdownHeader} from '../DropdownHeader'
import {Input} from '../../Inputs/Input'

// Types
import {DropdownMenuTheme, StandardFunctionProps} from '../../../Types'

export interface CreatableTypeAheadDropdownProps extends StandardFunctionProps {
  /** Text to render in button as currently selected option */
  selectedOption: string
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** Placeholder text when no value is present */
  placeholder?: string
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  /** TODO: input type and dropdown type */
  /** enum
"text" | "color" */
  type?: string
}

export type CreatableTypeAheadDropdownReadmeRef = DropdownRef

export const CreatableTypeAheadDropdown = forwardRef<
  CreatableTypeAheadDropdownReadmeRef,
  CreatableTypeAheadDropdownProps
>(
  (
    {
      selectedOption,
      options,
      onSelect,
      placeholder = 'Select...',
      menuTheme = DropdownMenuTheme.Onyx,
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
      />
    )

    const button = (
      active: boolean,
      onClick: (e: MouseEvent<HTMLElement>) => void
    ) => (
      <DropdownHeader active={active} onClick={onClick} testID="test TODO">
        {inputComponent}
      </DropdownHeader>
    )

    const menu = (onCollapse: () => void) => (
      <Dropdown.Menu onCollapse={onCollapse} theme={menuTheme}>
        {options.map(option => (
          <Dropdown.Item
            key={option}
            value={option}
            title={option}
            selected={option === selectedOption}
            onClick={handleClick}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    )

    return <Dropdown.Dropdown ref={ref} button={button} menu={menu} />
  }
)
CreatableTypeAheadDropdown.displayName = 'CreatableTypeAheadDropdown'
