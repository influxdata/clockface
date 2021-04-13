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
  fullScreen?: boolean
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
      fullScreen,
    },
    ref
  ) => {
    const overlayContainerClass = classnames('cf-overlay--container', {
      [`cf-overlay--container__${margin}`]: margin,
      ['cf-overlay--container__full']: fullScreen,
      [`${className}`]: className,
    })

    const overlayContainerStyle = fullScreen
      ? {...style}
      : {maxWidth: `${maxWidth}px`, ...style}
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
