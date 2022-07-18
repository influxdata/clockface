// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {
  DropdownItemType,
  IconFont,
  InfluxColors,
  StandardFunctionProps,
} from '../../Types'

// Components
import {DropdownItemSelectionIndicator} from './DropdownItemSelectionIndicator'
import {Icon} from '../Icon'

export interface DropdownItemProps extends StandardFunctionProps {
  /** Value to be returned via the onClick function */
  value?: any
  /** Whether or not the item should have selected styling */
  selected?: boolean
  /** Controls which style of dropdown item is rendered */
  type?: DropdownItemType
  /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
  onClick?: (value?: any) => void
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Title attribute */
  title?: string
  /** Prevents any interaction with this element, including the onClick function */
  disabled?: boolean

  trailingIconOnSelected?: boolean
}

export type DropdownItemRef = HTMLButtonElement

export const DropdownItem = forwardRef<DropdownItemRef, DropdownItemProps>(
  (
    {
      id,
      type = DropdownItemType.None,
      style,
      value,
      title,
      testID = 'dropdown-item',
      onClick,
      wrapText = false,
      selected = false,
      children,
      disabled,
      className,
      trailingIconOnSelected = false,
    },
    ref
  ) => {
    const dropdownItemClass = classnames('cf-dropdown-item', {
      [`cf-dropdown-item__${type}`]:
        type === DropdownItemType.Checkbox || type === DropdownItemType.Dot,
      active: selected,
      [`${className}`]: className,
      'cf-dropdown-item__wrap': wrapText,
      'cf-dropdown-item__no-wrap': !wrapText,
      'cf-dropdown-item__disabled': disabled,
    })

    const handleClick = (e: MouseEvent<HTMLElement>): void => {
      e.preventDefault()

      if (onClick && !disabled) {
        onClick(value)
      }
    }

    return (
      <button
        type="button"
        id={id}
        ref={ref}
        style={style}
        title={title}
        onClick={handleClick}
        className={dropdownItemClass}
        data-testid={testID}
      >
        <DropdownItemSelectionIndicator type={type} />
        <div className="cf-dropdown-item--children">
          {children}
          {trailingIconOnSelected && selected && (
            <Icon
              glyph={IconFont.CheckMark_New}
              style={{
                float: 'right',
                color: InfluxColors.Pool,
                fontSize: '20px',
              }}
            />
          )}
        </div>
      </button>
    )
  }
)

DropdownItem.displayName = 'DropdownItem'
