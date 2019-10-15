// Libraries
import React, {Component} from 'react'

// Components
import {FormRoot, FormProps} from './Form'
import {FormBox} from './FormBox'
import {FormDivider} from './FormDivider'
import {FormElement} from './FormElement'
import {FormElementError} from './FormElementError'
import {FormFooter} from './FormFooter'
import {FormHelpText} from './FormHelpText'
import {FormLabel} from './FormLabel'
import {FormValidationElement} from './FormValidationElement'

export class Form extends Component<FormProps> {
  public static readonly displayName = 'Form'

  public static Form = FormRoot
  public static Box = FormBox
  public static Divider = FormDivider
  public static Element = FormElement
  public static ElementError = FormElementError
  public static Footer = FormFooter
  public static HelpText = FormHelpText
  public static Label = FormLabel
  public static ValidationElement = FormValidationElement

  render() {
    return <FormRoot {...this.props} />
  }
}

export {FormProps} from './Form'
export * from './FormBox'
export * from './FormDivider'
export * from './FormElement'
export * from './FormElementError'
export * from './FormFooter'
export * from './FormHelpText'
export * from './FormLabel'
export * from './FormValidationElement'
