// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface IndexListRowProps extends StandardFunctionProps {
  /** Renders the row with disabled styles */
  disabled?: boolean
  /** Brightens the row so it can contrast with components such as Panel or Tabs */
  brighten?: boolean
}

export type IndexListRowRef = HTMLTableRowElement

export const IndexListRow = forwardRef<IndexListRowRef, IndexListRowProps>(
  (
    {
      children,
      id,
      style,
      brighten,
      className,
      disabled = false,
      testID = 'table-row',
    },
    ref
  ) => {
    const IndexListRowClass = classnames('cf-index-list--row', {
      'cf-index-list--row__nested': brighten,
      'cf-index-list--row__disabled': disabled,
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
