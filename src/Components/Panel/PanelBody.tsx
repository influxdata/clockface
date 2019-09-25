// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PanelBodyProps extends StandardFunctionProps {
  /** Controls padding */
  size?: ComponentSize
}

export type PanelBodyRef = HTMLDivElement

export const PanelBody = forwardRef<PanelBodyRef, PanelBodyProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      testID = 'panel--body',
      children,
      className,
    },
    ref
  ) => {
    const panelBodyClass = classnames('cf-panel--body', {
      [`cf-panel--body__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={panelBodyClass}
      >
        {children}
      </div>
    )
  }
)

PanelBody.displayName = 'PanelBody'
