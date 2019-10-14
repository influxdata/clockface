// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageHeaderCenterProps extends StandardFunctionProps {}

export type PageHeaderCenterRef = HTMLDivElement

export const PageHeaderCenter = forwardRef<
  PageHeaderCenterRef,
  PageHeaderCenterProps
>(({className, children, id, style, testID = 'page-header--center'}, ref) => {
  const noChildren = React.Children.count(children) === 0

  const pageHeaderCenterClass = classnames('cf-page-header--center', {
    'cf-page-header--no-children': noChildren,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={pageHeaderCenterClass}
    >
      {children}
    </div>
  )
})

PageHeaderCenter.displayName = 'PageHeaderCenter'
