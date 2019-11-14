// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

export interface FunnelPageFooterSectionProps extends StandardFunctionProps {}

export type FunnelPageFooterSectionRef = HTMLDivElement

export const FunnelPageFooterSection = forwardRef<
  FunnelPageFooterSectionRef,
  FunnelPageFooterSectionProps
>(
  (
    {id, style, testID = 'funnel-page--footer-section', children, className},
    ref
  ) => {
    const funnelPageFooterSectionClassName = classnames(
      'cf-funnel-page--footer-section',
      {
        [`${className}`]: className,
      }
    )

    return (
      <div
        className={funnelPageFooterSectionClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <div className="cf-funnel-page--footer-container">{children}</div>
      </div>
    )
  }
)

FunnelPageFooterSection.displayName = 'FunnelPageFooterSection'
