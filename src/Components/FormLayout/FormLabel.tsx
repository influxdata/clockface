// Libraries
import React, {Component} from 'react'

interface Props {
  /** Label Text */
  label: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
}

export class FormLabel extends Component<Props> {
  public render() {
    const {label, children} = this.props

    return (
      <label className="form--label">
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
}
