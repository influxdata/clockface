// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PaginationTruncationItemProps extends StandardFunctionProps {
  onClick?: (e?: MouseEvent<HTMLElement>) => void
}

export type PaginationTruncationItemRef = HTMLLIElement
export const PaginationTruncationItem = forwardRef<
  PaginationTruncationItemRef,
  PaginationTruncationItemProps
>(
  (
    {id, style, testID = 'pagination-truncation-item', className, onClick},
    ref
  ) => {
    const paginationClassName = classnames('cf-pagination--item--container', {
      [`${className}`]: className,
    })

    return (
      <li
        className={paginationClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <button className="cf-pagination--button__disabled" onClick={onClick}>
          <span className="cf-pagination--truncation-icon">&#8230;</span>
        </button>
      </li>
    )
  }
)

PaginationTruncationItem.displayName = 'PaginationTruncationItem'
