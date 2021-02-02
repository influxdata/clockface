// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components

// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PaginationItemProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
  page: number
  isActive: boolean
  onClick?: (e?: MouseEvent<HTMLElement>) => void
}

export type PaginationItemRef = HTMLLIElement
export const PaginationItem = forwardRef<
  PaginationItemRef,
  PaginationItemProps
>(
  (
    {id, style, testID = 'Pagination-item', className, page, isActive, onClick},
    ref
  ) => {
    const paginationClassName = classnames(
      'cf-pagination--item',
      'cf-pagination--item__clickable',
      {
        'cf-pagination--item__active': isActive,
        [`${className}`]: className,
      }
    )

    return (
      <li
        className={paginationClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
        onClick={onClick}
      >
        {page}
      </li>
    )
  }
)

PaginationItem.displayName = 'PaginationItem'
