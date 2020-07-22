// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface ListEmptyStateProps extends StandardFunctionProps {
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Size of this component */
  size?: ComponentSize
}

export type ListEmptyStateRef = HTMLDivElement

export const ListEmptyState = forwardRef<
  ListEmptyStateRef,
  ListEmptyStateProps
>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      testID = 'list-empty-state',
      wrapText = false,
      children,
      className,
    },
    ref
  ) => {
    const listEmptyStateClass = classnames('cf-list-empty-state', {
      [`${className}`]: className,
      [`cf-list-item__${size}`]: size,
    })

    const listEmptyStateTextClass = classnames('cf-list-empty-state--text', {
      'cf-list-item--text__wrap': wrapText,
      'cf-list-item--text__no-wrap': !wrapText,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={listEmptyStateClass}
      >
        <div className={listEmptyStateTextClass}>{children}</div>
      </div>
    )
  }
)

ListEmptyState.displayName = 'ListEmptyState'
