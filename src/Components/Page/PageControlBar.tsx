// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PageControlBarProps extends StandardFunctionProps {
  /** Allows the control bar to fill the width of the screen */
  fullWidth: boolean
  /** Controls the gutters (left and right margins) */
  gutters?: ComponentSize
}

export type PageControlBarRef = HTMLDivElement

export const PageControlBar = forwardRef<
  PageControlBarRef,
  PageControlBarProps
>(
  (
    {
      id,
      style,
      children,
      className,
      fullWidth,
      testID = 'page-control-bar',
      gutters = ComponentSize.Medium,
    },
    ref
  ) => {
    const noChildren = React.Children.count(children) === 0

    const pageControlBarClass = classnames('cf-page-control-bar', {
      'cf-page-control-bar__no-children': noChildren,
      [`cf-page__gutter-${gutters}`]: gutters,
      [`${className}`]: className,
    })

    const containerClassName = fullWidth
      ? 'cf-page-control-bar--fluid'
      : 'cf-page-control-bar--fixed'

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={pageControlBarClass}
      >
        <div className={containerClassName}>{children}</div>
      </div>
    )
  }
)

PageControlBar.displayName = 'PageControlBar'
