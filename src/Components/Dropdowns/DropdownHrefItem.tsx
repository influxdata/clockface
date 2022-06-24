// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {DropdownItemType, StandardFunctionProps} from '../../Types'

// Components
import {DropdownItemSelectionIndicator} from './DropdownItemSelectionIndicator'

export interface DropdownHrefItemProps extends StandardFunctionProps {
  /** Value to be returned via the onClick function */
  value?: any
  /** Whether or not the item should have selected styling */
  selected?: boolean
  /** Controls which style of dropdown item is rendered */
  type?: DropdownItemType
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Title attribute */
  title?: string
  /** Whether or not the item should have selected styling */
  href: string | undefined
  /** Prevents any interaction with this element, including the onClick function */
  disabled?: boolean
}

export type DropdownHrefItemRef = HTMLButtonElement

export const DropdownHrefItem = forwardRef<
  DropdownHrefItemRef,
  DropdownHrefItemProps
>(
  (
    {
      id,
      type = DropdownItemType.None,
      style,
      title,
      href,
      testID = 'dropdown-item',
      wrapText = false,
      selected = false,
      children,
      disabled,
      className,
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

    const styles = {
      width: '100%',
      ...style,
    }

    return (
      <button
        type="button"
        id={id}
        ref={ref}
        style={styles}
        title={title}
        className={dropdownItemClass}
        data-testid={testID}
      >
        <DropdownItemSelectionIndicator type={type} />
        <a
          href={href}
          className="cf-dropdown-item--children cf-dropdown-href-text"
        >
          {children}
        </a>
      </button>
    )
  }
)

DropdownHrefItem.displayName = 'DropdownItem'
