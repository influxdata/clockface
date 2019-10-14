// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface OverlayContainerProps extends StandardFunctionProps {
  /** Pixel width maximum for overlay */
  maxWidth?: number
  /** Margins on all sides of overlay */
  margin?: ComponentSize
}

export type OverlayContainerRef = HTMLDivElement

export const OverlayContainer = forwardRef<
  OverlayContainerRef,
  OverlayContainerProps
>(
  (
    {
      id,
      style,
      testID = 'overlay--container',
      margin = ComponentSize.Medium,
      children,
      maxWidth = 800,
      className,
    },
    ref
  ) => {
    const overlayContainerClass = classnames('cf-overlay--container', {
      [`cf-overlay--container__${margin}`]: margin,
      [`${className}`]: className,
    })

    const overlayContainerStyle = {maxWidth: `${maxWidth}px`, ...style}

    return (
      <div
        id={id}
        ref={ref}
        style={overlayContainerStyle}
        className={overlayContainerClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

OverlayContainer.displayName = 'OverlayContainer'
