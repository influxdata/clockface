// Libraries
import React, {forwardRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

// Styles
import './SquareGrid.scss'

export interface SquareGridProps extends StandardFunctionProps {
  /** Approximate size of each card, must be in px, rem, or em */
  cardSize: string
  /** Gap between cards */
  gutter?: ComponentSize
}

export type SquareGridRef = HTMLDivElement

export const SquareGridRoot = forwardRef<SquareGridRef, SquareGridProps>(
  (
    {
      id,
      style = {width: '100%'},
      testID = 'square-grid',
      children,
      className,
      cardSize,
      gutter,
    },
    ref
  ) => {
    const gridClass = classnames('cf-square-grid', {
      [`cf-square-grid__gutter-${gutter}`]: gutter,
      [`${className}`]: className,
    })

    const gridStyle: CSSProperties = {
      gridTemplateColumns: `repeat(auto-fill, minmax(${cardSize}, 1fr))`,
      ...style,
    }

    return (
      <div
        id={id}
        ref={ref}
        style={gridStyle}
        className={gridClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

SquareGridRoot.displayName = 'SquareGrid'
