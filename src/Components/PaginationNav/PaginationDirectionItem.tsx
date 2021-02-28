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

export interface PaginationDirectionItemProps extends StandardFunctionProps {
  /** Caret Left or Caret Right on button */
  direction: Direction
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  size?: ComponentSize
}

export type PaginationDirectionItemRef = HTMLLIElement
export const PaginationDirectionItem = forwardRef<
  PaginationDirectionItemRef,
  PaginationDirectionItemProps
>(
  (
    {
      id,
      style,
      testID = 'pagination-direction-item',
      className,
      direction,
      onClick,
      size = ComponentSize.Medium,
    },
    ref
  ) => {
    const paginationClassName = classnames(
      'cf-pagination--item--container',
      'cf-pagination--direction--item',
      {
        [`${className}`]: className,
      }
    )

    const directionIcon =
      direction === 'left' ? IconFont['CaretLeft'] : IconFont['CaretRight']

    return (
      <li
        className={paginationClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <Button
          size={size}
          color={ComponentColor.Tertiairy}
          onClick={onClick}
          shape={ButtonShape.Square}
          icon={directionIcon}
        ></Button>
      </li>
    )
  }
)

PaginationDirectionItem.displayName = 'PaginationDirectionItem'
