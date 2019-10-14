// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'
import classnames from 'classnames'

export interface IndexListBodyProps extends StandardFunctionProps {
  /** Rendered when no children are passed in */
  emptyState: JSX.Element
  /** Used to ensure the empty state takes up the full width of the table */
  columnCount: number
}

export type IndexListBodyRef = HTMLTableSectionElement

export const IndexListBody = forwardRef<IndexListBodyRef, IndexListBodyProps>(
  (
    {
      id,
      style,
      children,
      className,
      emptyState,
      columnCount,
      testID = 'index-list--body',
    },
    ref
  ) => {
    const indexListBodyClass = classnames('cf-index-list--body', {
      [`${className}`]: className,
    })

    if (React.Children.count(children)) {
      return (
        <tbody
          className={indexListBodyClass}
          data-testid={testID}
          id={id}
          style={style}
        >
          {children}
        </tbody>
      )
    }

    return (
      <tbody
        ref={ref}
        className="cf-index-list--empty"
        data-testid={`${testID} empty`}
      >
        <tr className="cf-index-list--empty-row">
          <td colSpan={columnCount}>
            <div
              className="cf-index-list--empty-cell"
              data-testid="empty-state"
            >
              {emptyState}
            </div>
          </td>
        </tr>
      </tbody>
    )
  }
)

IndexListBody.displayName = 'IndexListBody'
