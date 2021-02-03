// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PaginationTruncationItemProps extends StandardFunctionProps {
  //Below option will alow you to display a dropdown but there isn't a coded functionality yet. soon to come.
  //startingPage?: number
  //Below option will alow you to display a dropdown but there isn't a coded functionality yet. soon to come.
  //truncatedOptions?: number[]
  onClick?: (e?: MouseEvent<HTMLElement>) => void
}

export type PaginationTruncationItemRef = HTMLLIElement
export const PaginationTruncationItem = forwardRef<
  PaginationTruncationItemRef,
  PaginationTruncationItemProps
>(
  (
    {
      id,
      style,
      testID = 'Pagination-truncation-item',
      className,
      //startingPage,
      //truncatedOptions,
      onClick,
    },
    ref
  ) => {
    const paginationClassName = classnames('cf-pagination--item', {
      [`${className}`]: className,
    })

    return (
      <li
        className={paginationClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
        onClick={onClick}
      >
        <span className="cf-pagination--truncation-icon">&#8230;</span>
      </li>
    )
  }
)

PaginationTruncationItem.displayName = 'PaginationTruncationItem'
