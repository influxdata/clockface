// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components

import {Icon} from '../Icon/Base/Icon'

// Styles
import './Pagination.scss'

// Types
import {IconFont, StandardFunctionProps, Direction} from '../../Types'

export interface PaginationDirectionItemProps extends StandardFunctionProps {
  /** Caret Left or Caret Right on button */
  direction: Direction
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
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
    },
    ref
  ) => {
    const paginationClassName = classnames('cf-pagination--item--container', {
      [`${className}`]: className,
    })

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
        <button className="cf-pagination--button" onClick={onClick}>
          <Icon glyph={directionIcon} className="cf-pagination-icon" />
        </button>
      </li>
    )
  }
)

PaginationDirectionItem.displayName = 'PaginationDirectionItem'
