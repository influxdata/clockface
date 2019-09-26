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
      [`cf-radio-buttons--${color}`]: color,
      [`cf-radio-buttons--${size}`]: size,
      'cf-radio-buttons--square': shape === ButtonShape.Square,
      'cf-radio-buttons--stretch': shape === ButtonShape.StretchToFit,
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
