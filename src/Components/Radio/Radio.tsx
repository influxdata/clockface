// Libraries
import React, {FunctionComponent, RefObject} from 'react'
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

interface Props extends StandardFunctionProps {
  /** Radio color */
  color?: ComponentColor
  /** Radio size */
  size?: ComponentSize
  /** Shape... */
  shape?: ButtonShape
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const Radio: FunctionComponent<Props> = ({
  id,
  ref,
  size = ComponentSize.Small,
  style,
  shape = ButtonShape.Default,
  color = ComponentColor.Primary,
  testID = 'radio-button',
  children,
  className,
}) =>{
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

Radio.displayName = 'Radio'
