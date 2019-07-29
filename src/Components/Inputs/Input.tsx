// Libraries
import React, {
  Component,
  CSSProperties,
  ChangeEvent,
  KeyboardEvent,
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
  StandardProps,
  InputType,
} from '../../Types'

interface Props extends StandardProps {
  /** Minimum value for number type */
  min?: number
  /** Maximum value for number type */
  max?: number
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
  /** Width of the text field in pixels */
  widthPixels?: number
  /** Maximum string length for input value */
  maxLength?: number
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Input type (text, number, password, email, checkbox)  */
  type: InputType
  /** Input field name attribute */
  name: string
  /** Input field value to be updated with 'on X' functions */
  value: string | number
  /** Placeholder text when no value is present */
  placeholder: string
  /** Allows or disallows browser autocomplete functionality */
  autocomplete: AutoComplete
  /** Text to be displayed on hover tooltip */
  titleText: string
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText: string
  /** Input Component size */
  size: ComponentSize
  /** Input status state */
  status: ComponentStatus
  /** Whether or not the input recieves autofocus when mounted */
  autoFocus: boolean
  /** Allows or disallows browser spellcheck functionality */
  spellCheck: boolean
}

export class Input extends Component<Props> {
  public static readonly displayName = 'Input'

  public static defaultProps = {
    type: InputType.Text,
    name: '',
    value: '',
    placeholder: '',
    titleText: '',
    autocomplete: AutoComplete.Off,
    disabledTitleText: 'This input is disabled',
    size: ComponentSize.Small,
    status: ComponentStatus.Default,
    autoFocus: false,
    spellCheck: false,
    testID: 'input-field',
  }

  public render() {
    const {
      id,
      min,
      max,
      checked,
      name,
      type,
      status,
      placeholder,
      autoFocus,
      spellCheck,
      onChange,
      onBlur,
      onFocus,
      onKeyPress,
      onKeyUp,
      onKeyDown,
      maxLength,
      autocomplete,
      tabIndex,
      testID,
    } = this.props

    return (
      <div className={this.className} style={this.containerStyle}>
        <input
          id={id}
          min={min}
          max={max}
          checked={checked}
          title={this.title}
          autoComplete={autocomplete}
          name={name}
          type={type}
          value={this.transformedValue}
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
        />
        {this.checkbox}
        {this.icon}
        {this.statusIndicator}
      </div>
    )
  }

  private get transformedValue(): string | number {
    const {value, type} = this.props

    if (type === InputType.Number) {
      return Number(value)
    }

    return `${value}`
  }

  private get checkbox(): JSX.Element | null {
    const {type, checked} = this.props

    const className = classnames('cf-input--checkbox', {checked})

    if (type === InputType.Checkbox) {
      return <div className={className} />
    }

    return null
  }

  private get icon(): JSX.Element | null {
    const {icon} = this.props

    if (icon) {
      return <Icon glyph={icon} className="cf-input-icon" />
    }

    return null
  }

  private get title(): string | undefined {
    const {titleText, disabledTitleText, status} = this.props

    if (status === ComponentStatus.Disabled) {
      return disabledTitleText
    }

    return titleText
  }

  private get statusIndicator(): JSX.Element | undefined {
    const {status, type} = this.props

    if (type === InputType.Checkbox) {
      return
    }

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

  private get className(): string {
    const {type, size, status, icon, className} = this.props

    return classnames('cf-input', {
      [`cf-input-${size}`]: size,
      'cf-input__has-checkbox': type === InputType.Checkbox,
      'cf-input__has-icon': icon,
      'cf-input__valid': status === ComponentStatus.Valid,
      'cf-input__error': status === ComponentStatus.Error,
      'cf-input__loading': status === ComponentStatus.Loading,
      'cf-input__disabled': status === ComponentStatus.Disabled,
      [`${className}`]: className,
    })
  }

  private get containerStyle(): CSSProperties {
    const {widthPixels, type} = this.props

    if (widthPixels) {
      return {width: `${widthPixels}px`}
    }

    if (type === InputType.Checkbox) {
      return {}
    }

    return {width: '100%'}
  }
}
