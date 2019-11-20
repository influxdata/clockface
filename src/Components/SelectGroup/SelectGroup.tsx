// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  StandardFunctionProps,
} from '../../Types'

// Styles
import './Radio.scss'

export interface RadioProps extends StandardFunctionProps {
  /** Radio color */
  color?: ComponentColor
  /** Radio size */
  size?: ComponentSize
  /** Shape... */
  shape?: ButtonShape
}

export type RadioRef = HTMLDivElement

export const RadioRoot = forwardRef<RadioRef, RadioProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      shape = ButtonShape.Default,
      color = ComponentColor.Primary,
      testID = 'radio-button',
      children,
      className,
    },
    ref
  ) => {
    const radioClassName = classnames('cf-radio-buttons', {
      [`cf-radio-buttons__${color}`]: color,
      [`cf-radio-buttons__${size}`]: size,
      'cf-radio-buttons__square': shape === ButtonShape.Square,
      'cf-radio-buttons__stretch': shape === ButtonShape.StretchToFit,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={radioClassName}
      >
        {children}
      </div>
    )
  }
)

RadioRoot.displayName = 'Radio'
