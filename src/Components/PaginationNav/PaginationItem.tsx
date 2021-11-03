// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'
import {Button} from '../Button/Composed/Button'

// Components

// Styles
import './Pagination.scss'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  ComponentSize,
} from '../../Types'

export interface PaginationItemProps extends StandardFunctionProps {
  page?: string
  isActive: boolean
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  size?: ComponentSize
}

export type PaginationItemRef = HTMLLIElement
export const PaginationItem = forwardRef<
  PaginationItemRef,
  PaginationItemProps
>(
  (
    {
      id,
      style,
      testID = 'pagination-item',
      className,
      page,
      isActive,
      onClick,
      size = ComponentSize.Small,
    },
    ref
  ) => {
    const paginationItemContainerClassName = classnames(
      'cf-pagination--item--container',
      {
        'cf-pagination--item--container__active': isActive && page,
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
        <Button
          size={size}
          color={ComponentColor.Tertiary}
          onClick={onClick}
          active={isActive}
          text={page}
        />
      </li>
    )
  }
)

PaginationItem.displayName = 'PaginationItem'
