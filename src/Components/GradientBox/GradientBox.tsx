// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {Gradients, InfluxColors, StandardFunctionProps} from '../../Types'

// Styles
import './GradientBox.scss'
import {generateBackgroundStyle} from '../../Utils'

export interface GradientBoxProps extends StandardFunctionProps {
  /** Controls the border gradient color */
  borderGradient?: Gradients
  /** Controls the border gradient color */
  borderColor?: InfluxColors | string
}

export type GradientBoxRef = HTMLDivElement

export const GradientBox = forwardRef<GradientBoxRef, GradientBoxProps>(
  (
    {
      id,
      style,
      testID = 'gradient-box',
      children,
      className,
      borderColor = 'none',
      borderGradient,
    },
    ref
  ) => {
    const gradientBoxClass = classnames('cf-gradient-box', {
      [`${className}`]: className,
    })

    const gradientBoxStyle = {
      ...generateBackgroundStyle(borderColor, borderGradient),
      ...style,
    }

    return (
      <div
        id={id}
        ref={ref}
        className={gradientBoxClass}
        data-testid={testID}
        style={gradientBoxStyle}
      >
        {children}
      </div>
    )
  }
)

GradientBox.displayName = 'GradientBox'
