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
    const pageControlBarLeftClass = classnames('cf-page-control-bar--left', {
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
