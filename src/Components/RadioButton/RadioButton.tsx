// Libraries
import React, {forwardRef, ReactNode} from 'react'
import classnames from 'classnames'

// Styles
import './RadioButton.scss'

// Types
import {
  StandardFunctionProps,
  ComponentSize,
  InputToggleType,
} from '../../Types'

export interface RadioButtonProps extends StandardFunctionProps {
  id: string
  type: InputToggleType
  checked?: boolean
  name?: string
  value: string
  size?: ComponentSize
  toolTipText?: string
  labelText?: ReactNode
  onChange?: (value?: string) => void
}

export type RadioButtonRef = HTMLDivElement

export const RadioButton = forwardRef<RadioButtonRef, RadioButtonProps>(
  (
    {
      id,
      checked,
      name,
      size = ComponentSize.Small,
      value,
      type,
      labelText,
      /* eslint-disable */
      onChange = () => {},
      /* eslint-disable */

      toolTipText = '',
    },
    ref
  ) => {
    const radioButtonClass = classnames('cf-radio-button', {
      [`cf-radio-button__${size}`]: size,
    })

    const radioButtonIndicatorClass = classnames('cf-radio-button--indicator')

    const handleChange = (): void => {
      onChange(value)
    }

    return (
      <div className={radioButtonClass} ref={ref}>
        <input
          className={'cf-radio-button-input'}
          id={id}
          name={name}
          type={type}
          checked={checked}
          value={value}
          onChange={handleChange}
          title={toolTipText}
        />
        <label
          htmlFor={id}
          className={'cf-radio-button--label'}
          title={toolTipText}
        >
          <span className={radioButtonIndicatorClass}></span>
          <span>{labelText}</span>
        </label>
      </div>
    )
  }
)

RadioButton.displayName = 'RadioButton'
