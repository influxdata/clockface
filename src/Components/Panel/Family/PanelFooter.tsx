// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../../Types'

export interface PanelFooterProps extends StandardFunctionProps {
  /** Controls padding */
  size?: ComponentSize
}

export type PanelFooterRef = HTMLDivElement

export const PanelFooter = forwardRef<PanelFooterRef, PanelFooterProps>(
  (
    {
      id,
      style,
      size = ComponentSize.Small,
      testID = 'panel--footer',
      children,
      className,
    },
    ref
  ) => {
    const panelFooterClass = classnames('cf-panel--footer', {
      [`cf-panel--footer__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={panelFooterClass}
      >
        {children}
      </div>
    )
  }
)

PanelFooter.displayName = 'PanelFooter'
