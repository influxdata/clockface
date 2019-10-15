// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface ResourceListHeaderProps extends StandardFunctionProps {
  /** Used for rendering a filter input above the list, opposite the sort headers */
  filterComponent?: JSX.Element
}

export type ResourceListHeaderRef = HTMLDivElement

export const ResourceListHeader = forwardRef<
  ResourceListHeaderRef,
  ResourceListHeaderProps
>(
  (
    {
      id,
      style,
      testID = 'resource-list--header',
      children,
      className,
      filterComponent,
    },
    ref
  ) => {
    const resourceListHeaderClass = classnames('cf-resource-list--header', {
      [`${className}`]: className,
    })

    const filter = filterComponent && (
      <div className="cf-resource-list--filter">{filterComponent}</div>
    )

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={resourceListHeaderClass}
        data-testid={testID}
      >
        {filter}
        <div className="cf-resource-list--sorting">{children}</div>
      </div>
    )
  }
)

ResourceListHeader.displayName = 'ResourceListHeader'
