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

// Styles
import './Form.scss'

interface Props {
  /** Inline CSS styles */
  style?: React.CSSProperties
  /** Class name for custom styles */
  className?: string
  /** Function to be called on form submit */
  onSubmit?: (e: React.FormEvent) => void
}

export class Form extends Component<Props> {
  public static ValidationElement = FormValidationElement
  public static Element = FormElement
  public static Label = FormLabel
  public static Divider = FormDivider
  public static Footer = FormFooter
  public static Box = FormBox

  public render() {
    const {children, style} = this.props

    return (
      <form
        style={style}
        className={this.formWrapperClass}
        onSubmit={this.handleSubmit}
      >
        {children}
      </form>
    )
  }

  private handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const {onSubmit} = this.props

    if (onSubmit) {
      onSubmit(e)
    }
  }

  private get formWrapperClass(): string {
    const {className} = this.props

    return classnames('form--wrapper', {
      [`${className}`]: className,
    })
  }
}
