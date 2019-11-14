// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface FunnelPageFooterProps extends StandardFunctionProps {}

export type FunnelPageFooterRef = HTMLDivElement

export const FunnelPageFooter = forwardRef<
  FunnelPageFooterRef,
  FunnelPageFooterProps
>(({id, style, testID = 'funnel-page--footer', children, className}, ref) => {
  const funnelPageFooterClassName = classnames('cf-funnel-page--footer', {
    [`${className}`]: className,
  })

  return (
    <div
      className={funnelPageFooterClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      {children}
    </div>
  )
})

FunnelPageFooter.displayName = 'FunnelPageFooter'
