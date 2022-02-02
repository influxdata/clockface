// Libraries
import React, {forwardRef} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'
import {DropdownHeader} from '../DropdownHeader'
import {Input} from '../../Inputs/Input'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface CreatableTypeAheadDropdownProps extends StandardFunctionProps {
  /** Text to render in button as currently selected option */
  selectedOption: string
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** TODO: input type and dropdown type */
  /** enum
"text" | "color" */
  type: string
}

export type CreatableTypeAheadDropdownReadmeRef = DropdownRef

export const CreatableTypeAheadDropdown = forwardRef<
  CreatableTypeAheadDropdownReadmeRef,
  CreatableTypeAheadDropdownProps
>(({options, children}, ref) => {
  const inputComponent = <Input />

  return (
    <Dropdown
      button={(active, onClick) => (
        <DropdownHeader active={active} onClick={onClick} testID="test TODO">
          {inputComponent}
        </DropdownHeader>
      )}
      menu={onCollapse => (
        <Dropdown.Menu onCollapse={onCollapse}>
          {options.map(option => (
            <Dropdown.Item key={option}>
              {!!children ? children : option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    />
  )
})
CreatableTypeAheadDropdown.displayName = 'CreatableTypeAheadDropdown'
