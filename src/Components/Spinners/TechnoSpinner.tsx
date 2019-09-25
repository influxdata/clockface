// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardFunctionProps} from '../../Types'

// Utils
import {generateTechnoSpinnerStyle} from '../../Utils'

// Styles
import './TechnoSpinner.scss'

export interface TechnoSpinnerProps extends StandardFunctionProps {
  /** Diameter of spinner circle */
  diameterPixels?: number
  /** Width of spinner stroke */
  strokeWidth?: ComponentSize
}

export type TechnoSpinnerRef = HTMLDivElement

export const TechnoSpinner = forwardRef<TechnoSpinnerRef, TechnoSpinnerProps>(
  (
    {
      id,
      style,
      testID = 'techno-spinner',
      className,
      strokeWidth = ComponentSize.Small,
      diameterPixels = 100,
    },
    ref
  ) => {
    const technoSpinnerClass = classnames('cf-techno-spinner', {
      [`${className}`]: className,
    })

    const technoSpinnerStyle = generateTechnoSpinnerStyle(
      diameterPixels,
      strokeWidth,
      style
    )

    return (
      <div
        id={id}
        ref={ref}
        data-testid={testID}
        style={technoSpinnerStyle}
        className={technoSpinnerClass}
      />
    )
  }
)

TechnoSpinner.displayName = 'TechnoSpinner'
