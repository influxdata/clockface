// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageControlBarCenterProps extends StandardFunctionProps {}

export type PageControlBarCenterRef = HTMLDivElement

export const PageControlBarCenter = forwardRef<
  PageControlBarCenterRef,
  PageControlBarCenterProps
>(
  (
    {className, children, id, style, testID = 'page-control-bar--center'},
    ref
  ) => {
    const noChildren = React.Children.count(children) === 0

    const pageControlBarCenterClass = classnames(
      'cf-page-control-bar--center',
      {
        'cf-page-control-bar__no-children': noChildren,
        [`${className}`]: className,
      }
    )

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={pageControlBarCenterClass}
      >
        {children}
      </div>
    )
  }
)

PageControlBarCenter.displayName = 'PageControlBarCenter'
