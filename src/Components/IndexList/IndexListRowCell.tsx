// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, StandardFunctionProps} from '../../Types'

export interface IndexListRowCellProps extends StandardFunctionProps {
  /** Text alignment of contents */
  alignment?: Alignment
  /** If true the contents of this cell will be hidden until the containing row is hovered */
  revealOnHover?: boolean
}

export type IndexListRowCellRef = HTMLTableDataCellElement

export const IndexListRowCell = forwardRef<
  IndexListRowCellRef,
  IndexListRowCellProps
>(
  (
    {
      children,
      id,
      style,
      className,
      alignment = Alignment.Left,
      revealOnHover = false,
      testID = 'table-cell',
    },
    ref
  ) => {
    const IndexListRowCellClass = classnames('cf-index-list--row-cell', {
      'cf-index-list--show-hover': revealOnHover,
      'cf-index-list--align-left': alignment === Alignment.Left,
      'cf-index-list--align-center': alignment === Alignment.Center,
      'cf-index-list--align-right': alignment === Alignment.Right,
      [`${className}`]: className,
    })

    return (
      <td ref={ref} className={IndexListRowCellClass}>
        <div
          id={id}
          style={style}
          data-testid={testID}
          className="cf-index-list--cell"
        >
          {children}
        </div>
      </td>
    )
  }
)

IndexListRowCell.displayName = 'IndexListCell'
