// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface RadioButtonProps extends StandardFunctionProps {
  /** Toggles radio button active state */
  active: boolean
  /** Input value of the selected radio button */
  value: any
  /** Function to be called on radio button click */
  onClick: (value: any) => void
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Toggles disabled state */
  disabled?: boolean
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
}

export type RadioButtonRef = HTMLButtonElement

export const RadioButton = forwardRef<RadioButtonRef, RadioButtonProps>(
  (
    {
      id,
      value,
      style,
      testID = 'radio--button',
      active,
      onClick,
      disabled = false,
      children,
      className,
      titleText,
      disabledTitleText = 'This option is disabled',
    },
    ref
  ) => {
    const radioButtonClass = classnames('cf-radio-button', {
      active,
      disabled,
      [`${className}`]: className,
    })

    const title = disabled ? disabledTitleText : titleText

    const handleClick = () => {
      onClick(value)
    }

    return (
      <button
        id={id}
        ref={ref}
        type="button"
        style={style}
        title={title}
        onClick={handleClick}
        disabled={disabled}
        className={radioButtonClass}
        data-testid={testID}
      >
        {children}
      </button>
    )
  }
)

RadioButton.displayName = 'RadioButton'
