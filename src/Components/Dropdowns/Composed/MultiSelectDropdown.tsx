// Libraries
import React, {MouseEvent, forwardRef} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'

// Constants
import {DROPDOWN_DIVIDER_SHORTCODE} from '../../../Constants'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  DropdownMenuTheme,
  DropdownItemType,
  ComponentStatus,
  StandardFunctionProps,
} from '../../../Types'

export interface MultiSelectDropdownProps extends StandardFunctionProps {
  /** Text to render in button as currently selected option */
  selectedOptions: string[]
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** Text to display when no options are selected */
  emptyText?: string
  /** Optional status of button */
  buttonStatus?: ComponentStatus
  /** Optional color of button */
  buttonColor?: ComponentColor
  /** Optional size of button */
  buttonSize?: ComponentSize
  /** Optional icon to render in button */
  buttonIcon?: IconFont
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  /** Optional maximum pixel height menu */
  menuMaxHeight?: number
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
}

export type MultiSelectDropdownRef = DropdownRef

export const MultiSelectDropdown = forwardRef<
  MultiSelectDropdownRef,
  MultiSelectDropdownProps
>(
  (
    {
      id,
      style = {width: '100%'},
      dropUp = false,
      testID = 'multiselect-dropdown',
      options,
      onSelect,
      emptyText = 'None selected',
      menuTheme = DropdownMenuTheme.Onyx,
      className,
      buttonSize = ComponentSize.Small,
      buttonIcon,
      buttonColor = ComponentColor.Default,
      buttonStatus = ComponentStatus.Default,
      menuMaxHeight,
      selectedOptions,
    },
    ref
  ) => {
    const buttonText = selectedOptions.length
      ? selectedOptions.join(', ')
      : emptyText

    const button = (
      active: boolean,
      onClick: (e: MouseEvent<HTMLElement>) => void
    ) => (
      <Dropdown.Button
        active={active}
        onClick={onClick}
        status={buttonStatus}
        color={buttonColor}
        size={buttonSize}
        icon={buttonIcon}
      >
        {buttonText}
      </Dropdown.Button>
    )

    const menu = () => (
      <Dropdown.Menu theme={menuTheme} maxHeight={menuMaxHeight}>
        {options.map(o => {
          if (o === DROPDOWN_DIVIDER_SHORTCODE) {
            return <Dropdown.Divider key={o} />
          }

          if (o.includes(DROPDOWN_DIVIDER_SHORTCODE)) {
            const dividerText = o.replace(DROPDOWN_DIVIDER_SHORTCODE, '')
            return <Dropdown.Divider key={o} text={dividerText} />
          }

          return (
            <Dropdown.Item
              key={o}
              type={DropdownItemType.Checkbox}
              value={o}
              title={o}
              selected={selectedOptions.includes(o)}
              onClick={onSelect}
            >
              {o}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    )

    return (
      <Dropdown.Dropdown
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        dropUp={dropUp}
        className={className}
        button={button}
        menu={menu}
      />
    )
  }
)

MultiSelectDropdown.displayName = 'MultiSelectDropdown'
