// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageHeaderRightProps extends StandardFunctionProps {}

export type PageHeaderRightRef = HTMLDivElement

export const PageHeaderRight = forwardRef<
  PageHeaderRightRef,
  PageHeaderRightProps
>(({children, id, style, className, testID = 'page-header--right'}, ref) => {
  const noChildren = React.Children.count(children) === 0

  const pageHeaderRightClass = classnames('cf-page-header--right', {
    'cf-page-header--no-children': noChildren,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={pageHeaderRightClass}
    >
      {children}
    </div>
  )
})

PageHeaderRight.displayName = 'PageHeaderRight'
