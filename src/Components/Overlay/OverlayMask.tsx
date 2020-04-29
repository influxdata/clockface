// Libraries
import React, {forwardRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, Gradients, StandardFunctionProps} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Utils/colors'

export interface OverlayMaskProps extends StandardFunctionProps {
  /** Optional gradient theme of panel*/
  gradient?: Gradients
  /** Optional background color of panel, supercedes gradient prop  */
  backgroundColor?: InfluxColors | string
}

export type OverlayMaskRef = HTMLDivElement

export const OverlayMask = forwardRef<OverlayMaskRef, OverlayMaskProps>(
  (
    {
      id,
      style,
      testID = 'overlay--mask',
      gradient = Gradients.GundamPilot,
      className,
      backgroundColor,
    },
    ref
  ) => {
    const overlayMaskClass = classnames('cf-overlay--mask', {
      [`${className}`]: className,
    })

    const overlayMaskStyle = (): CSSProperties => {
      if (backgroundColor) {
        return {backgroundColor, ...style}
      }

      const colors = getColorsFromGradient(gradient)

      return {
        background: `linear-gradient(45deg,  ${colors.start} 0%,${colors.stop} 100%)`,
        ...style,
      }
    }

    return (
      <div
        id={id}
        ref={ref}
        style={overlayMaskStyle()}
        className={overlayMaskClass}
        data-testid={testID}
      />
    )
  }
)

OverlayMask.displayName = 'OverlayMask'
