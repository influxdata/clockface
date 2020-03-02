// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PageHeaderProps extends StandardFunctionProps {
  /** Allows the control bar to fill the width of the screen */
  fullWidth: boolean
  /** Controls the gutters (left and right margins) */
  gutters?: ComponentSize
}

export type PageHeaderRef = HTMLDivElement

export const PageHeader = forwardRef<PageHeaderRef, PageHeaderProps>(
  (
    {
      id,
      style,
      children,
      className,
      fullWidth,
      testID = 'page-header',
      gutters = ComponentSize.Medium,
    },
    ref
  ) => {
    const pageHeaderClass = classnames('cf-page-header', {
      [`cf-page__gutter-${gutters}`]: gutters,
      [`${className}`]: className,
    })

    const containerClassName = fullWidth
      ? 'cf-page-header--fluid'
      : 'cf-page-header--fixed'

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={pageHeaderClass}
      >
        <div className={containerClassName}>{children}</div>
      </div>
    )
  }
)

PageHeader.displayName = 'PageHeader'
