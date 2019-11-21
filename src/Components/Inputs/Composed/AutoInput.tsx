// Libraries
import React, {forwardRef, RefObject} from 'react'
import classnames from 'classnames'

// Components
import {
  SelectGroup,
  SelectGroupRef,
  SelectGroupOptionRef,
} from '../../SelectGroup/index'

// Types
import {
  StandardFunctionProps,
  ButtonShape,
  ComponentColor,
  ComponentSize,
  AutoInputMode,
} from '../../../Types'

// Styles
import './AutoInput.scss'

export interface AutoInputProps extends StandardFunctionProps {
  /** Pass in a component of type "Input" */
  inputComponent: JSX.Element
  /** Fires when the radio is toggled and the mode changes */
  onChangeMode: (mode: AutoInputMode) => void
  /** Modality of radio, either "Auto" or "Custom" */
  mode: AutoInputMode
  /** SelectGroup color */
  color?: ComponentColor
  /** Controls size of SelectGroup & Input sub-components */
  size?: ComponentSize
  /** Pass through ref for SelectGroup */
  radioRef?: RefObject<SelectGroupRef>
  /** Pass through ref for "Auto" SelectGroupOption */
  radioButtonAutoRef?: RefObject<SelectGroupOptionRef>
  /** Pass through ref for "Custom" SelectGroupOption */
  radioButtonCustomRef?: RefObject<SelectGroupOptionRef>
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
          <SelectGroup.SelectGroup
            ref={radioRef}
            shape={ButtonShape.StretchToFit}
            size={size}
            color={color}
          >
            <SelectGroup.Option
              active={mode === AutoInputMode.Auto}
              id={`${id}--${AutoInputMode.Auto}`}
              testID={`${testID}--${AutoInputMode.Auto}`}
              titleText="Decide for me"
              value={AutoInputMode.Auto}
              onClick={onChangeMode}
              ref={radioButtonAutoRef}
            >
              Auto
            </SelectGroup.Option>
            <SelectGroup.Option
              active={mode === AutoInputMode.Custom}
              id={`${id}--${AutoInputMode.Custom}`}
              testID={`${testID}--${AutoInputMode.Custom}`}
              titleText="I want to specify my own value"
              value={AutoInputMode.Custom}
              onClick={onChangeMode}
              ref={radioButtonCustomRef}
            >
              Custom
            </SelectGroup.Option>
          </SelectGroup.SelectGroup>
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
