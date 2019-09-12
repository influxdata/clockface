// Libraries
import React, {
  Component,
  CSSProperties,
  ChangeEvent,
  KeyboardEvent,
} from 'react'
import classnames from 'classnames'

// Styles
import 'src/Components/Inputs/TextArea.scss'

// Types
import {
  ComponentStatus,
  ComponentSize,
  AutoComplete,
  StandardClassProps,
} from 'src/Types'

export enum Wrap {
  Hard = 'hard',
  Soft = 'soft',
  Off = 'off',
}

interface Props extends StandardClassProps {
  /** Width of the text field in pixels */
  widthPixels?: number
  /** Input Component size */
  size?: ComponentSize
  /** Input status state */
  status?: ComponentStatus
  /** Function to be called on field value change */
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
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
  /** Whether or not the input receives autofocus when mounted */
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
  public static readonly displayName = 'TextArea'

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
      onChange,
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
      id,
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
          className="cf-text-area"
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onChange={onChange}
          data-testid={testID}
          id={id}
        />
      </div>
    )
  }

  private get className(): string {
    const {size, className} = this.props

    return classnames('cf-text-area--container', {
      [`cf-input-${size}`]: size,
      [`${className}`]: className,
    })
  }

  private get containerStyle(): CSSProperties {
    const {widthPixels, style} = this.props

    if (widthPixels) {
      return {width: `${widthPixels}px`, ...style}
    }

    return {width: '100%', ...style}
  }
}
