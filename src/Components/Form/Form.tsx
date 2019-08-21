// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {FormElement} from './FormElement'
import {FormValidationElement} from './FormValidationElement'
import {FormLabel} from './FormLabel'
import {FormDivider} from './FormDivider'
import {FormFooter} from './FormFooter'
import {FormBox} from './FormBox'

// Types
import {StandardProps, AutoComplete, EncType, Method} from '../../Types'

// Styles
import './Form.scss'

interface Props extends StandardProps {
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
  preventDefault: boolean
}

export class Form extends Component<Props> {
  public static readonly displayName = 'Form'

  public static defaultProps = {
    testID: 'form-container',
    preventDefault: true,
  }

  public static ValidationElement = FormValidationElement
  public static Element = FormElement
  public static Label = FormLabel
  public static Divider = FormDivider
  public static Footer = FormFooter
  public static Box = FormBox

  public render() {
    const {
      children,
      style,
      testID,
      id,
      action,
      acceptCharset,
      autoComplete,
      encType,
      method,
      name,
      noValidate,
      target,
    } = this.props

    return (
      <form
        acceptCharset={acceptCharset}
        action={action}
        autoComplete={autoComplete}
        encType={encType}
        method={method}
        name={name}
        noValidate={noValidate}
        style={style}
        target={target}
        className={this.formWrapperClass}
        onSubmit={this.handleSubmit}
        data-testid={testID}
        id={id}
      >
        {children}
      </form>
    )
  }

  private handleSubmit = (e: React.FormEvent): void => {
    const {onSubmit, preventDefault} = this.props

    if (preventDefault) {
      e.preventDefault()
    }

    if (onSubmit) {
      onSubmit(e)
    }
  }

  private get formWrapperClass(): string {
    const {className} = this.props

    return classnames('cf-form--wrapper', {
      [`${className}`]: className,
    })
  }
}
