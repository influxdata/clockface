// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {DropdownItemType, StandardFunctionProps} from '../../Types'

// Components
import {DropdownItemSelectionIndicator} from './DropdownItemSelectionIndicator'

export interface DropdownLinkItemProps extends StandardFunctionProps {
  /** Whether or not the item should have selected styling */
  selected: boolean
  /** Controls which style of dropdown item is rendered */
  type?: DropdownItemType
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Renders the element in a disabled state, does not affect functionality */
  disabled?: boolean
}

export type DropdownLinkItemRef = HTMLDivElement

export const DropdownLinkItem = forwardRef<
  DropdownLinkItemRef,
  DropdownLinkItemProps
>(
  (
    {
      id,
      type = DropdownItemType.None,
      style,
      testID = 'dropdown-link-item',
      wrapText = false,
      selected = false,
      children,
      disabled,
      className,
    },
    ref
  ) => {
    const dropdownLinkItemClass = classnames(
      'cf-dropdown-item cf-dropdown-link-item',
      {
        [`cf-dropdown-item__${type}`]:
          type === DropdownItemType.Checkbox || type === DropdownItemType.Dot,
        active: selected,
        [`${className}`]: className,
        'cf-dropdown-item__wrap': wrapText,
        'cf-dropdown-item__no-wrap': !wrapText,
        'cf-dropdown-item__disabled': disabled,
      }
    )

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={dropdownLinkItemClass}
        data-testid={testID}
      >
        <DropdownItemSelectionIndicator type={type} />
        {children}
      </div>
    )
  }
)

DropdownLinkItem.displayName = 'DropdownLinkItem'
