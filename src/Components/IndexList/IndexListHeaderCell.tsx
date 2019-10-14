// Libraries
import React, {forwardRef, FunctionComponent} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, Sort, StandardFunctionProps} from '../../Types'

export interface IndexListHeaderCellProps extends StandardFunctionProps {
  /** Can be a % or px */
  width: string
  /** Text to display as column header */
  columnName?: string
  /** Text alignment of column header */
  alignment?: Alignment
  /** Controls appearance of sort indicator (arrow) */
  sort?: Sort
  /** Unique identifier for use in managing sort state */
  sortKey?: string
  /** Useful for triggering a change in sort state */
  onClick?: (nextSort: Sort, sortKey: string | undefined) => void
}

export type IndexListHeaderCellRef = HTMLTableHeaderCellElement

export const IndexListHeaderCell = forwardRef<
  IndexListHeaderCellRef,
  IndexListHeaderCellProps
>(
  (
    {
      id,
      sort,
      style,
      width,
      sortKey,
      onClick,
      columnName = '',
      alignment = Alignment.Left,
      testID = 'index-list--header-cell',
    },
    ref
  ) => {
    const IndexListHeaderCellClass = classnames('cf-index-list--header-cell', {
      'cf-index-list--align-left': alignment === Alignment.Left,
      'cf-index-list--align-center': alignment === Alignment.Center,
      'cf-index-list--align-right': alignment === Alignment.Right,
      'cf-index-list--sortable': isSortable(sort),
      'cf-index-list--sort-descending': sort === Sort.Descending,
      'cf-index-list--sort-ascending': sort === Sort.Ascending,
    })

    const handleClick = (): void => {
      if (!onClick || !sort || !sortKey) {
        return
      }

      if (sort === Sort.None) {
        onClick(Sort.Ascending, sortKey)
      } else if (sort === Sort.Ascending) {
        onClick(Sort.Descending, sortKey)
      } else if (sort === Sort.Descending) {
        onClick(Sort.None, sortKey)
      }
    }

    return (
      <th
        ref={ref}
        className={IndexListHeaderCellClass}
        style={{width, ...style}}
        onClick={handleClick}
        data-testid={testID}
        id={id}
      >
        {columnName}
        <SortIndicator sortable={isSortable(sort)} />
      </th>
    )
  }
)

IndexListHeaderCell.displayName = 'IndexListHeaderCell'

const SortIndicator: FunctionComponent<{sortable: boolean}> = ({sortable}) => {
  if (sortable) {
    return (
      <span className="cf-index-list--sort-arrow">
        <span className="icon caret-down" />
      </span>
    )
  }

  return null
}

const isSortable = (sort: Sort | undefined): boolean => {
  if (
    sort === Sort.None ||
    sort === Sort.Ascending ||
    sort === Sort.Descending
  ) {
    return true
  }

  return false
}
