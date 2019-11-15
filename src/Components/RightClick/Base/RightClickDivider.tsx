// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface RightClickDividerProps extends StandardFunctionProps {}

export type RightClickDividerRef = HTMLLIElement

export const RightClickDivider = forwardRef<
  RightClickDividerRef,
  RightClickDividerProps
>(({id, style, testID = 'right-click-divider', children, className}, ref) => {
  const rightClickDividerClassName = classnames('cf-right-click--divider', {
    [`${className}`]: className,
  })

  return (
    <li
      id={id}
      ref={ref}
      style={style}
      className={rightClickDividerClassName}
      data-testid={testID}
    >
      {children}
    </li>
  )
})

RightClickDivider.displayName = 'RightClickDivider'
