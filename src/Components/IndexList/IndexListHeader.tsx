// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface IndexListHeaderProps extends StandardFunctionProps {}

export type IndexListHeaderRef = HTMLTableSectionElement

export const IndexListHeader = forwardRef<
  IndexListHeaderRef,
  IndexListHeaderProps
>(({className, children, id, style, testID = 'index-list--header'}, ref) => {
  const indexListHeaderClass = classnames('cf-index-list--header', {
    [`${className}`]: className,
  })

  return (
    <thead
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={indexListHeaderClass}
    >
      <tr>{children}</tr>
    </thead>
  )
})

IndexListHeader.displayName = 'IndexListHeader'
