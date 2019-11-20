// Libraries
import React, {forwardRef, RefObject, KeyboardEvent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InputToggleType, Omit} from '../../Types'

export interface RadioButtonProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for this radio button */
  id: string
  /** Toggles radio button active state */
  active: boolean
  /** Input value of the selected radio button */
  value: any
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Used to group toggles together in a form */
  name?: string
  /** Function to be called on radio button click */
  onClick: (value: any) => void
  /** Function to be called on key up */
  onKeyUp?: (e: KeyboardEvent<HTMLLabelElement>) => void
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Toggles disabled state */
  disabled?: boolean
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
  /** Choose either "Radio" or "Checkbox" */
  type?: InputToggleType
  /** Refers to the visible element rather than the hidden input that ref refers to */
  containerRef?: RefObject<RadioButtonContainerRef>
  /** Sets the hidden input to readonly mode */
  readOnly?: boolean
}

export type RadioButtonRef = HTMLInputElement
export type RadioButtonContainerRef = HTMLLabelElement

export const RadioButton = forwardRef<RadioButtonRef, RadioButtonProps>(
  (
    {
      id,
      name,
      type = InputToggleType.Radio,
      value,
      style,
      testID = 'radio--button',
      active,
      onClick,
      onKeyUp,
      tabIndex,
      readOnly = false,
      disabled = false,
      children,
      className,
      titleText,
      containerRef,
      disabledTitleText = 'This option is disabled',
    },
    ref
  ) => {
    const radioButtonClass = classnames('cf-radio-button', {
      'cf-radio-button__active': active,
      'cf-radio-button__disabled': disabled,
      [`${className}`]: className,
    })

    const title = disabled ? disabledTitleText : titleText

    const handleInputChange = () => {
      onClick(value)
    }

    const handleKeyUp = (e: KeyboardEvent<RadioButtonContainerRef>): void => {
      if (e.key === ' ') {
        handleInputChange()
      }

      if (onKeyUp) {
        onKeyUp(e)
      }
    }

    const tabDisabled = -1

    return (
      <>
        <input
          id={id}
          ref={ref}
          type={type}
          name={name}
          title={title}
          readOnly={readOnly}
          checked={active}
          onChange={handleInputChange}
          disabled={disabled}
          tabIndex={tabDisabled}
          data-testid={`${testID}--input`}
        />
        <label
          ref={containerRef}
          title={title}
          style={style}
          htmlFor={id}
          onKeyUp={handleKeyUp}
          tabIndex={disabled ? tabDisabled : tabIndex}
          className={radioButtonClass}
          data-testid={testID}
        >
          {children}
        </label>
      </>
    )
  }
)

RadioButton.displayName = 'RadioButton'
