// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components

// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PaginationItemProps extends StandardFunctionProps {
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
    {id, style, testID = 'pagination-item', className, page, isActive, onClick},
    ref
  ) => {
    const paginationItemContainerClassName = classnames(
      'cf-pagination--item--container',
      {
        'cf-pagination--item--container__active': isActive,
        [`${className}`]: className,
      }
    )

    const paginationItemClassName = classnames(
      'cf-pagination--button',
      'cf-pagination--item',
      {
        'cf-pagination--item__active': isActive,
        [`${className}`]: className,
      }
    )

    return (
      <li
        className={paginationItemContainerClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <button className={paginationItemClassName} onClick={onClick}>
          {page}
        </button>
      </li>
    )
  }
)

PaginationItem.displayName = 'PaginationItem'
