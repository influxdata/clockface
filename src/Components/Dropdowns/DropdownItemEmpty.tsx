// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface DropdownItemEmptyProps extends StandardFunctionProps {
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
}

export type DropdownItemEmptyRef = HTMLDivElement

export const DropdownItemEmpty = forwardRef<
  DropdownItemEmptyRef,
  DropdownItemEmptyProps
>(
  (
    {
      id,
      style,
      testID = 'dropdown-item-empty',
      wrapText = false,
      children,
      className,
    },
    ref
  ) => {
    const dropdownItemEmptyClass = classnames('cf-dropdown-item-empty', {
      [`${className}`]: className,
      'cf-dropdown-item__wrap': wrapText,
      'cf-dropdown-item__no-wrap': !wrapText,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={dropdownItemEmptyClass}
      >
        <div className="cf-dropdown-item--children">{children}</div>
      </div>
    )
  }
)

DropdownItemEmpty.displayName = 'DropdownItemEmpty'
