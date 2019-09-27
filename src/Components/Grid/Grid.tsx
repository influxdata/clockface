// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './Grid.scss'

export interface GridProps extends StandardFunctionProps {}

export type GridRef = HTMLDivElement

export const GridRoot = forwardRef<GridRef, GridProps>(
  ({id, style, testID = 'grid', children, className}, ref) => {
    const gridClass = classnames('cf-grid--container', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={gridClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

GridRoot.displayName = 'Grid'
