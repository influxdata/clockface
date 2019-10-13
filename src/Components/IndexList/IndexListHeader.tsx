// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

export interface IndexListHeaderProps extends StandardFunctionProps {}

export type IndexListHeaderRef = HTMLTableSectionElement

export const IndexListHeader = forwardRef<
  IndexListHeaderRef,
  IndexListHeaderProps
>(({className, children, id, style, testID = 'index-list--header'}, ref) => {
  const IndexListHeaderClass = className
    ? `index-list--header ${className}`
    : 'index-list--header'

  return (
    <thead
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={IndexListHeaderClass}
    >
      <tr>{children}</tr>
    </thead>
  )
})

IndexListHeader.displayName = 'IndexListHeader'
