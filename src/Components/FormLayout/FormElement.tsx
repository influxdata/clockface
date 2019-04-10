// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {FormLabel} from './FormLabel'
import {FormElementError} from './FormElementError'
import {FormHelpText} from './FormHelpText'

interface Props {
  /** Label Text */
  label: string
  /** Input instruction text */
  helpText?: string
  /** Text to be displayed on error */
  errorMessage?: string
  /** Element to be displayed along with label */
  labelAddOn?: () => JSX.Element
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class FormElement extends Component<Props> {
  public static defaultProps = {
    testID: 'form--element',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {this.label}
        {children}
        {this.errorMessage}
        {this.helpText}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('form--element', {[`${className}`]: className})
  }

  private get label(): JSX.Element | undefined {
    const {label, required} = this.props

    if (!label) {
      return
    }

    return (
      <FormLabel label={label} required={required}>
        {this.labelChild}
      </FormLabel>
    )
  }

  private get labelChild(): JSX.Element | undefined {
    const {labelAddOn} = this.props

    if (!labelAddOn) {
      return
    }

    return labelAddOn()
  }

  private get helpText(): JSX.Element | undefined {
    const {helpText} = this.props

    if (!helpText) {
      return
    }

    return <FormHelpText text={helpText} />
  }

  private get errorMessage(): JSX.Element | undefined {
    const {errorMessage} = this.props

    if (!errorMessage) {
      return
    }

    return <FormElementError message={errorMessage} />
  }
}
