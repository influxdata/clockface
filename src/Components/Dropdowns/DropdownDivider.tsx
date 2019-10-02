// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface DropdownDividerProps extends StandardFunctionProps {
  /** Text to be displayed on divider, a line will be displayed if no text is provided */
  text?: string
}

export type DropdownDividerRef = HTMLDivElement

export const DropdownDivider = forwardRef<
  DropdownDividerRef,
  DropdownDividerProps
>(({id, text, style, testID = 'dropdown-divider', className}, ref) => {
  const dropdownDividerClass = classnames('cf-dropdown-divider', {
    line: !text,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={dropdownDividerClass}
      data-testid={testID}
    >
      {text}
    </div>
  )
})

DropdownDivider.displayName = 'DropdownDivider'
