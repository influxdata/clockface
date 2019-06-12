// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Label Text */
  label: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
}

export class FormLabel extends Component<Props> {
  public static defaultProps = {
    testID: 'form--label',
  }

  public render() {
    const {label, children, testID} = this.props

    return (
      <label className={this.className} data-testid={testID}>
        <span>
          {label}
          {this.requiredIndicator}
        </span>
        {children}
      </label>
    )
  }

  private get requiredIndicator(): JSX.Element | undefined {
    const {required} = this.props

    if (!required) {
      return
    }

    return <span className="form--label-required">*</span>
  }

  private get className(): string {
    const {className} = this.props

    return className ? `form--label ${className}` : 'form--label'
  }
}
