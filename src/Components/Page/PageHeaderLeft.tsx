// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageHeaderLeftProps extends StandardFunctionProps {}

export type PageHeaderLeftRef = HTMLDivElement

export const PageHeaderLeft = forwardRef<
  PageHeaderLeftRef,
  PageHeaderLeftProps
>(({id, style, children, className, testID = 'page-header--left'}, ref) => {
  const pageHeaderLeftClass = classnames('cf-page-header--left', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={pageHeaderLeftClass}
    >
      {children}
    </div>
  )
})

PageHeaderLeft.displayName = 'PageHeaderLeft'
