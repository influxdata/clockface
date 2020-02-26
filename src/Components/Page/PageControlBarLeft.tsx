// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageControlBarLeftProps extends StandardFunctionProps {}

export type PageControlBarLeftRef = HTMLDivElement

export const PageControlBarLeft = forwardRef<
  PageControlBarLeftRef,
  PageControlBarLeftProps
>(
  (
    {id, style, children, className, testID = 'page-control-bar--left'},
    ref
  ) => {
    const noChildren = React.Children.count(children) === 0

    const pageControlBarLeftClass = classnames('cf-page-control-bar--left', {
      'cf-page-control-bar__no-children': noChildren,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={pageControlBarLeftClass}
      >
        {children}
      </div>
    )
  }
)

PageControlBarLeft.displayName = 'PageControlBarLeft'
