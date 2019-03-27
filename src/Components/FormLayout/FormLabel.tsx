// Libraries
import React, {Component} from 'react'

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}

interface PassedProps {
  /** Label Text */
  label: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
}

type Props = DefaultProps & PassedProps

export class FormLabel extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'form--label',
  }

  public render() {
    const {label, children, testID} = this.props

    return (
      <label className="form--label" data-testid={testID}>
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
