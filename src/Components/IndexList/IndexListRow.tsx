// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface IndexListRowProps extends StandardFunctionProps {
  /** Renders the row with disabled styles */
  disabled?: boolean
}

export type IndexListRowRef = HTMLTableRowElement

export const IndexListRow = forwardRef<IndexListRowRef, IndexListRowProps>(
  (
    {children, id, style, className, disabled = false, testID = 'table-row'},
    ref
  ) => {
    const IndexListRowClass = classnames('cf-index-list--row', {
      'cf-index-list--row-disabled': disabled,
      [`${className}`]: className,
    })

    return (
      <tr
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={IndexListRowClass}
      >
        {children}
      </tr>
    )
  }
)

IndexListRow.displayName = 'IndexListRow'
