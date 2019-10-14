// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export type EmptyStateSubTextRef = HTMLParagraphElement

export const EmptyStateSubText = forwardRef<
  EmptyStateSubTextRef,
  StandardFunctionProps
>(({id, children, style, className, testID = 'empty-state--sub-text'}, ref) => {
  const emptyStateSubTextClass = classnames('cf-empty-state--sub-text', {
    [`${className}`]: className,
  })

  return (
    <p
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={emptyStateSubTextClass}
    >
      {children}
    </p>
  )
})

EmptyStateSubText.displayName = 'EmptyStateSubText'
