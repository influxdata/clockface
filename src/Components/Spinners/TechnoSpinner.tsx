// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardFunctionProps} from '../../Types'

// Utils
import {generateTechnoSpinnerStyle} from '../../Utils'

// Styles
import './TechnoSpinner.scss'

interface Props extends StandardFunctionProps {
  /** Diameter of spinner circle */
  diameterPixels?: number
  /** Width of spinner stroke */
  strokeWidth?: ComponentSize
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const TechnoSpinner: FunctionComponent<Props> = ({
  id,
  ref,
  style,
  testID = 'techno-spinner',
  className,
  strokeWidth = ComponentSize.Small,
  diameterPixels = 100,
}) => {
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

TechnoSpinner.displayName = 'TechnoSpinner'
