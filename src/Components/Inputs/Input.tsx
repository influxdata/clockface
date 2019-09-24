// Libraries
import React, {
  FunctionComponent,
  CSSProperties,
  ChangeEvent,
  KeyboardEvent,
  RefObject,
} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Icon'

// Styles
import './Input.scss'

// Types
import {
  ComponentStatus,
  ComponentSize,
  IconFont,
  AutoComplete,
  StandardFunctionProps,
  InputType,
} from '../../Types'

interface Props extends StandardFunctionProps {
  /** Minimum value for number & range types */
  min?: number
  /** Maximum value for number & range types */
  max?: number
  /** Stepping interval granularity for range type */
  step?: number
  /** Determines whether checkbox is checked */
  checked?: boolean
  /** Function to be called on field value change */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on focus loss */
  onBlur?: (e?: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on focus gain */
  onFocus?: (e?: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on key press */
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Function to be called on key up */
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Function to be called on key down */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Icon to be displayed to the left of text */
  icon?: IconFont
  /** Maximum string length for input value */
  maxLength?: number
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Input type (text, number, password, email, checkbox)  */
  type?: InputType
  /** Input field name attribute */
  name?: string
  /** Input field value to be updated with 'on X' functions */
  value?: string | number
  /** Placeholder text when no value is present */
  placeholder?: string
  /** Allows or disallows browser autocomplete functionality */
  autocomplete?: AutoComplete
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
  /** Input Component size */
  size?: ComponentSize
  /** Input status state */
  status?: ComponentStatus
  /** Whether or not the input receives autofocus when mounted */
  autoFocus?: boolean
  /** Allows or disallows browser spellcheck functionality */
  spellCheck?: boolean
  /** CSS attributes for the input element */
  inputStyle?: CSSProperties
  /** For use within a form, marks the input as required */
  required?: boolean
  /** Pass in a RegEx matcher for best results */
  pattern?: string
  /** Pass through for input ref */
  ref?: RefObject<HTMLInputElement>
  /** Pass through for container ref */
  containerRef?: RefObject<HTMLDivElement>
}

export const Input: FunctionComponent<Props> = ({
  id,
  ref,
  min,
  max,
  step,
  icon,
  size = ComponentSize.Small,
  name = '',
  type = InputType.Text,
  style = {width: '100%'},
  value = '',
  status = ComponentStatus.Default,
  onBlur,
  testID = 'input-field',
  pattern,
  onFocus,
  checked,
  onKeyUp,
  required = false,
  tabIndex,
  onChange,
  titleText = '',
  className,
  autoFocus = false,
  maxLength,
  onKeyDown,
  spellCheck = false,
  onKeyPress,
  inputStyle,
  placeholder = '',
  containerRef,
  autocomplete = AutoComplete.Off,
  disabledTitleText = 'This input is disabled',
}) => {
  const inputClass = classnames('cf-input', {
    [`cf-input-${size}`]: size,
    'cf-input__has-checkbox': type === InputType.Checkbox,
    'cf-input__has-icon': icon,
    'cf-input__valid': status === ComponentStatus.Valid,
    'cf-input__error': status === ComponentStatus.Error,
    'cf-input__loading': status === ComponentStatus.Loading,
    'cf-input__disabled': status === ComponentStatus.Disabled,
    [`${className}`]: className,
  })

  const inputCheckboxClass = classnames('cf-input--checkbox', {checked})

  const correctlyTypedValue: string | number =
    type === InputType.Number ? Number(value) : `${value}`

  const iconElement = icon && <Icon glyph={icon} className="cf-input-icon" />

  const title =
    status === ComponentStatus.Disabled ? disabledTitleText : titleText

  return (
    <div className={inputClass} style={style} ref={containerRef}>
      <input
        id={id}
        ref={ref}
        min={min}
        max={max}
        step={step}
        checked={checked}
        title={title}
        autoComplete={autocomplete}
        name={name}
        type={type}
        value={correctlyTypedValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        spellCheck={spellCheck}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        className="cf-input-field"
        disabled={status === ComponentStatus.Disabled}
        maxLength={maxLength}
        tabIndex={tabIndex}
        data-testid={testID}
        style={inputStyle}
        required={required}
        pattern={pattern}
      />
      {type === InputType.Checkbox && <div className={inputCheckboxClass} />}
      {iconElement}
      {type !== InputType.Checkbox && <InputStatusIndicator status={status} />}
    </div>
  )
}

Input.displayName = 'Input'

interface InputStatusIndicatorProps {
  status: ComponentStatus
}

const InputStatusIndicator: FunctionComponent<InputStatusIndicatorProps> = ({
  status,
}) => {
  if (status === ComponentStatus.Loading) {
    return (
      <>
        <div className="cf-input-status">
          <div className="cf-input-spinner" />
        </div>
        <div className="cf-input-shadow" />
      </>
    )
  }

  if (status === ComponentStatus.Error) {
    return (
      <>
        <Icon
          glyph={IconFont.AlertTriangle}
          className="cf-input-status"
          testID="input-error"
        />
        <div className="cf-input-shadow" />
      </>
    )
  }

  if (status === ComponentStatus.Valid) {
    return (
      <>
        <Icon
          glyph={IconFont.Checkmark}
          className="cf-input-status"
          testID="input-valid"
        />
        <div className="cf-input-shadow" />
      </>
    )
  }

  return <div className="cf-input-shadow" />
}
