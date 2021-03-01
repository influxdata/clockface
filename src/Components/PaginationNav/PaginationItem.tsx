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
  Direction,
  IconFont,
} from '../../Types'

export interface PaginationItemProps extends StandardFunctionProps {
  page?: string
  isActive: boolean
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  size?: ComponentSize
  direction?: Direction
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
      direction = null,
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
        {direction ? (
          <Button
            size={size}
            color={ComponentColor.Tertiairy}
            onClick={onClick}
            active={isActive}
            shape={ButtonShape.Square}
            icon={IconFont[direction]}
          ></Button>
        ) : (
          <Button
            size={size}
            color={ComponentColor.Tertiairy}
            onClick={onClick}
            active={isActive}
            shape={ButtonShape.Square}
            text={page}
          ></Button>
        )}
      </li>
    )
  }
)

PaginationItem.displayName = 'PaginationItem'
