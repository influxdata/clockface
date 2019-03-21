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
} from '../../Types'

export enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email',
}

interface PassedProps {
  /** Unique text field ID */
  id?: string
  /** Minimum value for number type */
  min?: number
  /** Maximum value for number type */
  max?: number
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
  /** Class name for custom styles */
  customClass?: string
  /** Maximum string length for input value */
  maxLength?: number
  /** Keyboard control tab order  */
  tabIndex?: number
}

interface DefaultProps {
  /** Input type (text, number, password, email)  */
  type?: InputType
  /** Input field name attribute */
  name?: string
  /** Input field value to be updated with 'on X' functions */
  value: string | number
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
  /** Whether or not the input recieves autofocus when mounted */
  autoFocus?: boolean
  /** Allows or disallows browser spellcheck functionality */
  spellCheck?: boolean
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

export class Input extends Component<Props> {
  public static defaultProps: DefaultProps = {
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
          className="input-field"
          disabled={status === ComponentStatus.Disabled}
          maxLength={maxLength}
          tabIndex={tabIndex}
          data-testid={testID}
        />
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

  private get icon(): JSX.Element | null {
    const {icon} = this.props

    if (icon) {
      return <Icon glyph={icon} className="input-icon" />
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

  private get statusIndicator(): JSX.Element {
    const {status} = this.props

    if (status === ComponentStatus.Loading) {
      return (
        <>
          <div className="input-status">
            <div className="input-spinner" />
          </div>
          <div className="input-shadow" />
        </>
      )
    }

    if (status === ComponentStatus.Error) {
      return (
        <>
          <Icon
            glyph={IconFont.AlertTriangle}
            className="input-status"
            testID="input-error"
          />
          <div className="input-shadow" />
        </>
      )
    }

    if (status === ComponentStatus.Valid) {
      return (
        <>
          <Icon
            glyph={IconFont.Checkmark}
            className="input-status"
            testID="input-valud"
          />
          <div className="input-shadow" />
        </>
      )
    }

    return <div className="input-shadow" />
  }

  private get className(): string {
    const {size, status, icon, customClass} = this.props

    return classnames('input', {
      [`input-${size}`]: size,
      'input--has-icon': icon,
      'input--valid': status === ComponentStatus.Valid,
      'input--error': status === ComponentStatus.Error,
      'input--loading': status === ComponentStatus.Loading,
      'input--disabled': status === ComponentStatus.Disabled,
      [`${customClass}`]: customClass,
    })
  }

  private get containerStyle(): CSSProperties {
    const {widthPixels} = this.props

    if (widthPixels) {
      return {width: `${widthPixels}px`}
    }

    return {width: '100%'}
  }
}
