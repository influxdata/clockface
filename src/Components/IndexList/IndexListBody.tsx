// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

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
    const IndexListBodyClass = className
      ? `index-list--body ${className}`
      : 'index-list--body'

    if (React.Children.count(children)) {
      return (
        <tbody
          className={IndexListBodyClass}
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
        className="index-list--empty"
        data-testid={`${testID} empty`}
      >
        <tr className="index-list--empty-row">
          <td colSpan={columnCount}>
            <div className="index-list--empty-cell" data-testid="empty-state">
              {emptyState}
            </div>
          </td>
        </tr>
      </tbody>
    )
  }
)

IndexListBody.displayName = 'IndexListBody'
