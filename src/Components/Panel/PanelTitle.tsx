// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PanelTitleProps extends StandardFunctionProps {
  /** Controls padding */
  size?: ComponentSize
}

export type PanelTitleRef = HTMLDivElement

export const PanelTitle = forwardRef<PanelTitleRef, PanelTitleProps>(
  (
    {
      id,
      style,
      size = ComponentSize.Small,
      testID = 'panel--title',
      children,
      className,
    },
    ref
  ) => {
    const panelTitleClass = classnames('cf-panel--title', {
      [`cf-panel--title__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={panelTitleClass}
      >
        {children}
      </div>
    )
  }
)

PanelTitle.displayName = 'PanelTitle'
