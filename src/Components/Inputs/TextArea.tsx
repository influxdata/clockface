// Libraries
import React, {ChangeEvent, KeyboardEvent, forwardRef, RefObject} from 'react'
import classnames from 'classnames'

// Components
import {StatusIndicator} from './StatusIndicator'

// Types
import {
  ComponentStatus,
  ComponentSize,
  AutoComplete,
  StandardFunctionProps,
  Wrap,
} from '../../Types'

// Styles
import './TextArea.scss'

export interface TextAreaProps extends StandardFunctionProps {
  /** TextArea Component size */
  size?: ComponentSize
  /** TextArea status state */
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
  autocomplete?: AutoComplete
  /** Whether or not the input receives autofocus when mounted */
  autoFocus?: boolean
  /** Associates the text area with a form even if outside the form */
  form?: string
  /** Maximum string length for input value */
  maxLength?: number
  /** Minimum string length for input value */
  minLength?: number
  /** TextArea field name attribute */
  name?: string
  /** Placeholder text when no value is present */
  placeholder?: string
  /** Toggles read-only state of text area */
  readOnly?: boolean
  /** Specified text area as a required field */
  required?: boolean
  /** Sets width in columns */
  cols?: number
  /** sets height in rows */
  rows?: number
  /** Allows or disallows browser spellcheck functionality */
  spellCheck?: boolean
  /** Sets text wrap */
  wrap?: Wrap
  /** TextArea field value to be updated with 'on X' functions */
  value?: string
  /** Container ref */
  containerRef?: RefObject<TextAreaContainerRef>
  /** Use a monospace font */
  monospace?: boolean
}

export type TextAreaRef = HTMLTextAreaElement
export type TextAreaContainerRef = HTMLDivElement

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
  (
    {
      id,
      cols = 20,
      rows = 20,
      wrap = Wrap.Hard,
      size = ComponentSize.Small,
      form = '',
      name = '',
      style = {width: '100%'},
      value = '',
      status = ComponentStatus.Default,
      testID = 'textarea',
      onBlur,
      onKeyUp,
      onFocus,
      onChange,
      readOnly = false,
      required = false,
      className,
      maxLength,
      minLength,
      monospace = false,
      onKeyDown,
      autoFocus = false,
      spellCheck = false,
      onKeyPress,
      placeholder = '',
      autocomplete = AutoComplete.Off,
      containerRef,
    },
    ref
  ) => {
    const textAreaClass = classnames('cf-text-area', {
      [`cf-text-area__${size}`]: size,
      [`cf-text-area__${status}`]: status,
      'cf-text-area__monospace-font': monospace,
      'cf-text-area__regular-font': !monospace,
      [`${className}`]: className,
    })

    return (
      <div className={textAreaClass} style={style} ref={containerRef}>
        <StatusIndicator
          status={status}
          size={size}
          shadow={false}
          testID={testID}
        />
        <textarea
          id={id}
          ref={ref}
          form={form}
          name={name}
          cols={cols}
          rows={rows}
          wrap={wrap}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyUp={onKeyUp}
          onChange={onChange}
          disabled={status === ComponentStatus.Disabled}
          readOnly={readOnly}
          required={required}
          className="cf-text-area--input"
          autoFocus={autoFocus}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          minLength={minLength}
          spellCheck={spellCheck}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          data-testid={testID}
          autoComplete={autocomplete}
        />
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
