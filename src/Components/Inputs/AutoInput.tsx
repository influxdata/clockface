// Libraries
import React, {forwardRef, RefObject} from 'react'
import classnames from 'classnames'

// Components
import {Radio, RadioRef, RadioButtonRef} from '../Radio'

// Types
import {
  StandardFunctionProps,
  ButtonShape,
  ComponentColor,
  ComponentSize,
  AutoInputMode,
} from '../../Types'

// Styles
import './AutoInput.scss'

export interface AutoInputProps extends StandardFunctionProps {
  /** Pass in a component of type "Input" */
  inputComponent: JSX.Element
  /** Fires when the radio is toggled and the mode changes */
  onChangeMode: (mode: AutoInputMode) => void
  /** Modality of radio, either "Auto" or "Custom" */
  mode: AutoInputMode
  /** Radio color */
  color?: ComponentColor
  /** Controls size of Radio & Input sub-components */
  size?: ComponentSize
  /** Pass through ref for Radio */
  radioRef?: RefObject<RadioRef>
  /** Pass through ref for "Auto" RadioButton */
  radioButtonAutoRef?: RefObject<RadioButtonRef>
  /** Pass through ref for "Custom" RadioButton */
  radioButtonCustomRef?: RefObject<RadioButtonRef>
}

export type AutoInputRef = HTMLDivElement

export const AutoInput = forwardRef<AutoInputRef, AutoInputProps>(
  (
    {
      id = 'auto-input',
      mode,
      size = ComponentSize.Small,
      color = ComponentColor.Primary,
      style,
      testID = 'auto-input',
      radioRef,
      className,
      onChangeMode,
      inputComponent,
      radioButtonAutoRef,
      radioButtonCustomRef,
    },
    ref
  ) => {
    const autoInputClass = classnames('cf-auto-input', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={autoInputClass}
      >
        <div className="cf-auto-input--radio">
          <Radio.Radio
            ref={radioRef}
            shape={ButtonShape.StretchToFit}
            size={size}
            color={color}
          >
            <Radio.Button
              active={mode === AutoInputMode.Auto}
              id={`${id}--${AutoInputMode.Auto}`}
              testID={`${testID}--${AutoInputMode.Auto}`}
              titleText="Decide for me"
              value={AutoInputMode.Auto}
              onClick={onChangeMode}
              ref={radioButtonAutoRef}
            >
              Auto
            </Radio.Button>
            <Radio.Button
              active={mode === AutoInputMode.Custom}
              id={`${id}--${AutoInputMode.Custom}`}
              testID={`${testID}--${AutoInputMode.Custom}`}
              titleText="I want to specify my own value"
              value={AutoInputMode.Custom}
              onClick={onChangeMode}
              ref={radioButtonCustomRef}
            >
              Custom
            </Radio.Button>
          </Radio.Radio>
        </div>
        {mode === AutoInputMode.Custom && (
          <div
            className="auto-input--input"
            data-testid={`${testID}--input`}
            id={`${id}--input`}
          >
            {inputComponent}
          </div>
        )}
      </div>
    )
  }
)

AutoInput.displayName = 'AutoInput'
