// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {Columns, StandardFunctionProps} from '../../Types'

export interface GridColumnProps extends StandardFunctionProps {
  /** Number of columns spanned when viewport width is less than 750px */
  widthXS?: Columns
  /** Number of columns spanned when viewport width is greater than 750px */
  widthSM?: Columns
  /** Number of columns spanned when viewport width is greater than 1080px */
  widthMD?: Columns
  /** Number of columns spanned when viewport width is greater than 1500px */
  widthLG?: Columns
  /** Number of columns shifted when viewport width is less than 750px */
  offsetXS?: Columns
  /** Number of columns shifted when viewport width is greater than 750px */
  offsetSM?: Columns
  /** Number of columns shifted when viewport width is greater than 1080px */
  offsetMD?: Columns
  /** Number of columns shifted when viewport width is greater than 1500px */
  offsetLG?: Columns
}

export type GridColumnRef = HTMLDivElement

export const GridColumn = forwardRef<GridColumnRef, GridColumnProps>(
  (
    {
      id,
      style,
      testID = 'grid--column',
      widthXS = Columns.Twelve,
      widthSM,
      widthMD,
      widthLG,
      children,
      offsetXS,
      offsetSM,
      offsetMD,
      offsetLG,
      className,
    },
    ref
  ) => {
    const gridColumnClass = classnames('cf-grid--column', {
      [`${className}`]: className,
      [`cf-col-xs-${widthXS}`]: widthXS,
      [`cf-col-sm-${widthSM}`]: widthSM,
      [`cf-col-md-${widthMD}`]: widthMD,
      [`cf-col-lg-${widthLG}`]: widthLG,
      [`cf-col-xs-offset-${offsetXS}`]: offsetXS,
      [`cf-col-sm-offset-${offsetSM}`]: offsetSM,
      [`cf-col-md-offset-${offsetMD}`]: offsetMD,
      [`cf-col-lg-offset-${offsetLG}`]: offsetLG,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={gridColumnClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

GridColumn.displayName = 'GridColumn'
