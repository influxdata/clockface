// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export type EmptyStateTextRef = HTMLHeadingElement

export const EmptyStateText = forwardRef<
  EmptyStateTextRef,
  StandardFunctionProps
>(({id, style, className, children, testID = 'empty-state--text'}, ref) => {
  const emptyStateTextClass = classnames('cf-empty-state--text', {
    [`${className}`]: className,
  })

  return (
    <h4
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={emptyStateTextClass}
    >
      {children}
    </h4>
  )
})

EmptyStateText.displayName = 'EmptyStateText'
