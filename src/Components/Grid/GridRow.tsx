// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface GridRowProps extends StandardFunctionProps {}

export type GridRowRef = HTMLDivElement

export const GridRow = forwardRef<GridRowRef, GridRowProps>(
  ({id, style, testID = 'grid--row', children, className}, ref) => {
    const gridRowClass = classnames('cf-grid--row', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={gridRowClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

GridRow.displayName = 'GridRow'
