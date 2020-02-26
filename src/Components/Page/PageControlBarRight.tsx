// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageControlBarRightProps extends StandardFunctionProps {}

export type PageControlBarRightRef = HTMLDivElement

export const PageControlBarRight = forwardRef<
  PageControlBarRightRef,
  PageControlBarRightProps
>(
  (
    {children, id, style, className, testID = 'page-control-bar--right'},
    ref
  ) => {
    const noChildren = React.Children.count(children) === 0

    const pageControlBarRightClass = classnames('cf-page-control-bar--right', {
      'cf-page-control-bar__no-children': noChildren,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={pageControlBarRightClass}
      >
        {children}
      </div>
    )
  }
)

PageControlBarRight.displayName = 'PageControlBarRight'
