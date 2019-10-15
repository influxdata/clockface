// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, AutoComplete, EncType, Method} from '../../Types'

// Styles
import './Form.scss'

export interface FormProps extends StandardFunctionProps {
  /** Form submit URI */
  action?: string
  /** A space-delimited list of character encodings. */
  acceptCharset?: string
  /** Allows or disallows browser autocomplete functionality */
  autoComplete?: AutoComplete
  /** Type of content to be submitted to the server */
  encType?: EncType
  /** HTTP Method to be used on form submit */
  method?: Method
  /** Input field name attribute */
  name?: string
  /** Enable or disable form validation */
  noValidate?: boolean
  /** Function to be called on form submit */
  onSubmit?: (e: React.FormEvent) => void
  /** Context name or keyword */
  target?: string
  /** If true prevents default event during onSubmit */
  preventDefault?: boolean
}

export type FormRef = HTMLFormElement

export const FormRoot = forwardRef<FormRef, FormProps>(
  (
    {
      id,
      name,
      style,
      method,
      target,
      action,
      encType,
      onSubmit,
      children,
      className,
      noValidate,
      autoComplete,
      acceptCharset,
      testID = 'form-container',
      preventDefault = true,
    },
    ref
  ) => {
    const formWrapperClass = classnames('cf-form--wrapper', {
      [`${className}`]: className,
    })

    const handleSubmit = (e: React.FormEvent): void => {
      if (preventDefault) {
        e.preventDefault()
      }

      if (onSubmit) {
        onSubmit(e)
      }
    }

    return (
      <form
        id={id}
        ref={ref}
        name={name}
        style={style}
        method={method}
        target={target}
        action={action}
        encType={encType}
        data-testid={testID}
        onSubmit={handleSubmit}
        noValidate={noValidate}
        autoComplete={autoComplete}
        className={formWrapperClass}
        acceptCharset={acceptCharset}
      >
        {children}
      </form>
    )
  }
)

FormRoot.displayName = 'Form'
