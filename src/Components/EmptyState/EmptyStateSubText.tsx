// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

export type EmptyStateSubTextRef = HTMLParagraphElement

export const EmptyStateSubText = forwardRef<
  EmptyStateSubTextRef,
  StandardFunctionProps
>(({id, children, style, className, testID = 'empty-state--sub-text'}, ref) => {
  const EmptyStateSubTextClass = `cf-empty-state--sub-text ${className}`

  return (
    <p
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={EmptyStateSubTextClass}
    >
      {children}
    </p>
  )
})

EmptyStateSubText.displayName = 'EmptyStateSubText'
