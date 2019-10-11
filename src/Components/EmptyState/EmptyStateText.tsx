// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

export type EmptyStateTextRef = HTMLHeadingElement

export const EmptyStateText = forwardRef<
  EmptyStateTextRef,
  StandardFunctionProps
>(({id, style, className, children, testID = 'empty-state--text'}, ref) => {
  const EmptyStateText = className
    ? `cf-empty-state--text ${className}`
    : 'cf-empty-state--text'

  return (
    <h4
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={EmptyStateText}
    >
      {children}
    </h4>
  )
})

EmptyStateText.displayName = 'EmptyStateText'
