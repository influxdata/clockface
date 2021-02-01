// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components

import {Icon} from '../Icon/Base/Icon'

// Styles
import './Pagination.scss'

// Types
import {IconFont, StandardFunctionProps, DirectionType} from '../../Types'

export interface PaginationDirectionItemProps extends StandardFunctionProps {
  /** Caret Left or Caret Right on button */
  direction: DirectionType
  onClick?: (e?: MouseEvent<HTMLLIElement>) => void
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
      testID = 'Pagination-direction-item',
      className,
      direction,
      onClick,
    },
    ref
  ) => {
    const paginationClassName = classnames(
      'cf-pagination--direction--button',
      '',
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
        onClick={onClick}
      >
        <div className="cf-pagination--icon--direction">
          <Icon glyph={directionIcon} className="cf-pagination--icon" />
        </div>
      </li>
    )
  }
)

PaginationDirectionItem.displayName = 'PaginationDirectionItem'
