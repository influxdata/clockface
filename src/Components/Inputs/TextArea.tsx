// Libraries
import React, {
  Component,
  CSSProperties,
  ChangeEvent,
  KeyboardEvent,
} from 'react'
import classnames from 'classnames'

// Styles
import './TextArea.scss'

// Types
import {
  ComponentStatus,
  ComponentSize,
  AutoComplete,
  StandardProps,
} from '../../Types'

export enum Wrap {
  Hard = 'hard',
  Soft = 'soft',
  Off = 'off',
}

interface Props extends StandardProps {
  /** Width of the text field in pixels */
  widthPixels?: number
  /** Input Component size */
  size?: ComponentSize
  /** Input status state */
  status?: ComponentStatus
  /** Function to be called on field value change */
  onChange?: (s: string) => void
  /** Function to be called on focus loss */
  onBlur?: (e?: ChangeEvent<HTMLTextAreaElement>) => void
  /** Function to be called on focus gain */
  onFocus?: (e?: ChangeEvent<HTMLTextAreaElement>) => void
  /** Function to be called on key press */
  onKeyPress?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  /** Function to be called on key up */
  onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  /** Function to be called on key down */
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  /** Allows or disallows browser autocomplete functionality */
  autocomplete: AutoComplete
  /** Whether or not the input recieves autofocus when mounted */
  autoFocus: boolean
  /** Associates the text area with a form even if outside the form */
  form: string
  /** Maximum string length for input value */
  maxLength?: number
  /** Minimum string length for input value */
  minLength?: number
  /** Input field name attribute */
  name: string
  /** Placeholder text when no value is present */
  placeholder: string
  /** Toggles read-only state of text area */
  readOnly: boolean
  /** Specified text area as a required field */
  required: boolean
  /** Sets width in columns */
  cols: number
  /** sets height in rows */
  rows: number
  /** Allows or disallows browser spellcheck functionality */
  spellCheck: boolean
  /** Sets text wrap */
  wrap: Wrap
  /** Input field value to be updated with 'on X' functions */
  value: string
}

export class TextArea extends Component<Props> {
  public static defaultProps = {
    autocomplete: AutoComplete.Off,
    autoFocus: false,
    cols: 20,
    form: '',
    name: '',
    placeholder: '',
    readOnly: false,
    required: false,
    rows: 20,
    spellCheck: false,
    wrap: Wrap.Hard,
    value: '',
    testID: 'textarea',
  }

  public render() {
    const {
      autocomplete,
      autoFocus,
      cols,
      status,
      form,
      maxLength,
      minLength,
      name,
      placeholder,
      readOnly,
      required,
      rows,
      spellCheck,
      wrap,
      value,
      onBlur,
      onFocus,
      onKeyPress,
      onKeyUp,
      onKeyDown,
      testID,
    } = this.props

    return (
      <div className={this.className} style={this.containerStyle}>
        <textarea
          autoComplete={autocomplete}
          autoFocus={autoFocus}
          disabled={status === ComponentStatus.Disabled}
          form={form}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          cols={cols}
          rows={rows}
          spellCheck={spellCheck}
          wrap={wrap}
          className="text-area"
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onChange={this.handleChange}
          data-testid={testID}
        />
      </div>
    )
  }

  private handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {onChange} = this.props

    if (onChange) {
      onChange(e.target.value)
    }
  }

  private get className(): string {
    const {size, className} = this.props

    return classnames('text-area--container', {
      [`input-${size}`]: size,
      [`className`]: className,
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
