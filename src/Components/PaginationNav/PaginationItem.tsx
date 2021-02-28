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
  ButtonShape,
} from '../../Types'

export interface PaginationItemProps extends StandardFunctionProps {
  page: number
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
      size = ComponentSize.Medium,
    },
    ref
  ) => {
    const paginationItemContainerClassName = classnames(
      'cf-pagination--item--container',
      {
        'cf-pagination--item--container__active': isActive,
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
          color={ComponentColor.Tertiairy}
          onClick={onClick}
          active={isActive}
          shape={ButtonShape.Square}
          text={page.toString()}
        ></Button>
      </li>
    )
  }
)

PaginationItem.displayName = 'PaginationItem'
