// Libraries
import React, {
  CSSProperties,
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  RefObject,
  useState,
} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Base/Icon'
import {StatusIndicator} from './StatusIndicator'
import {DismissButton} from '../Button/Composed/DismissButton'

// Styles
import './Input.scss'

// Types
import {
  AutoComplete,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  IconFont,
  InputType,
  StandardFunctionProps,
} from '../../Types'
import {ColorPreview} from '../ColorPicker/ColorPreview'

export interface InputProps extends StandardFunctionProps {
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
  /**
   * Function to be called when the input field is cleared;
   * if not included then the 'x' clear button will NOT be added
   */
  onClear?: () => void
  /** Pass in a RegEx matcher for best results */
  pattern?: string
  /** Pass through for container ref */
  containerRef?: RefObject<InputContainerRef>
  /** Render input using monospace font */
  monospace?: boolean
  /** Color preview to be displayed to the left of text.
   * Value should be in #000000 format.
   * If both icon and colorPreview props are set, icon will take priority */
  colorPreview?: string
}

export type InputRef = HTMLInputElement
export type InputContainerRef = HTMLDivElement

export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      id,
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
      onClear,
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
      children,
      autoFocus = false,
      maxLength,
      onKeyDown,
      monospace = false,
      spellCheck = false,
      onKeyPress,
      inputStyle,
      placeholder = '',
      containerRef,
      autocomplete = AutoComplete.Off,
      disabledTitleText = 'This input is disabled',
      colorPreview,
    },
    ref
  ) => {
    const [isFocused, setFocus] = useState<boolean>(autoFocus)
    const correctStatus = value === value ? status : ComponentStatus.Error

    const inputClass = classnames('cf-input', {
      [`cf-input-${size}`]: size,
      'cf-input__focused': isFocused,
      'cf-input__has-checkbox': type === InputType.Checkbox,
      'cf-input__has-icon': icon || colorPreview,
      'cf-input__has-clear-btn': onClear && value,
      'cf-input__valid': correctStatus === ComponentStatus.Valid,
      'cf-input__error': correctStatus === ComponentStatus.Error,
      'cf-input__loading': correctStatus === ComponentStatus.Loading,
      'cf-input__disabled': correctStatus === ComponentStatus.Disabled,
      'cf-input-monospace': monospace,
      [`${className}`]: className,
    })

    const inputFieldClass = classnames('cf-input-field', {
      [`cf-input__indicator`]: status !== ComponentStatus.Default,
    })

    const handleInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
      setFocus(true)

      if (onFocus) {
        onFocus(e)
      }
    }

    const handleInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
      setFocus(false)

      if (onBlur) {
        onBlur(e)
      }
    }

    const inputCheckboxClass = classnames('cf-input--checkbox', {checked})

    const correctlyTypedValue: string | number = value === value ? value : ''
    const correctType: string = value === value ? type : 'text'
    const correctlyTypedMin: string | number | undefined =
      min === min ? min : ''
    const correctlyTypedMax: string | number | undefined =
      max === max ? max : ''

    /** If both icon and colorPreview are set in props, icon has higher priority */
    let iconElement = null
    if (icon) {
      iconElement = <Icon glyph={icon} className="cf-input-icon" />
    } else if (colorPreview) {
      iconElement = (
        <ColorPreview color={colorPreview} className="cf-input-icon" />
      )
    }

    const clearClasses = classnames('cf-input-clear-btn', {
      large: size === ComponentSize.Large,
      medium: size === ComponentSize.Medium,
      xsmall: size === ComponentSize.ExtraSmall,
    })

    const clearElement = onClear && value && (
      <DismissButton
        onClick={onClear}
        className={clearClasses}
        titleText="clear this text field"
        color={ComponentColor.Tertiary}
        size={size}
      />
    )

    const title =
      status === ComponentStatus.Disabled ? disabledTitleText : titleText

    return (
      <div className={inputClass} style={style} ref={containerRef}>
        {type !== InputType.Checkbox && (
          <StatusIndicator
            status={correctStatus}
            shadow={true}
            testID={testID}
            size={size}
          />
        )}
        <input
          id={id}
          ref={ref}
          min={correctlyTypedMin}
          max={correctlyTypedMax}
          step={step}
          checked={checked}
          title={title}
          autoComplete={autocomplete}
          name={name}
          type={correctType}
          value={correctlyTypedValue}
          placeholder={placeholder}
          autoFocus={autoFocus}
          spellCheck={spellCheck}
          onChange={onChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          className={inputFieldClass}
          disabled={status === ComponentStatus.Disabled}
          maxLength={maxLength}
          tabIndex={tabIndex}
          data-testid={testID}
          style={inputStyle}
          required={required}
          pattern={pattern}
          aria-label={testID}
        />
        {clearElement}
        {type === InputType.Checkbox && <div className={inputCheckboxClass} />}
        {iconElement}
        {children}
      </div>
    )
  }
)

Input.displayName = 'Input'
