// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Styles
import '../Button.scss'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  ButtonType,
  StandardFunctionProps,
} from '../../../Types'

interface ButtonBaseProps extends StandardFunctionProps {
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Button color */
  color: ComponentColor
  /** Button size */
  size: ComponentSize
  /** Square or rectangle */
  shape: ButtonShape
  /** Button status state default, loading, or disabled */
  status: ComponentStatus
  /** Toggles button highlighted active state */
  active: boolean
  /** Button type of 'button' or 'submit' */
  type: ButtonType
}

export type ButtonBaseRef = HTMLButtonElement

export const ButtonBase = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  (
    {
      id,
      style,
      onClick,
      children,
      tabIndex,
      titleText,
      className,
      active = false,
      testID = 'button-base',
      type = ButtonType.Button,
      size = ComponentSize.Small,
      shape = ButtonShape.Default,
      color = ComponentColor.Default,
      status = ComponentStatus.Default,
    },
    ref
  ) => {
    const disabled =
      status === ComponentStatus.Disabled || status === ComponentStatus.Loading

    const buttonBaseClass = classnames(
      `cf-button cf-button-${size} cf-button-${color}`,
      {
        'cf-button-square': shape === ButtonShape.Square,
        'cf-button-stretch': shape === ButtonShape.StretchToFit,
        'cf-button--loading': status === ComponentStatus.Loading,
        'cf-button--disabled': status === ComponentStatus.Disabled,
        active,
        [`${className}`]: className,
      }
    )

    return (
      <button
        className={buttonBaseClass}
        disabled={disabled}
        onClick={onClick}
        title={titleText}
        tabIndex={!!tabIndex ? tabIndex : 0}
        type={type}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

ButtonBase.displayName = 'ButtonBase'
