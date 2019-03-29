// Libraries
import React, {Component} from 'react'

interface Props {
  /** Text to be displayed on error */
  message: string
  /** Test ID for Integration Tests */
  testID: string
}

export class FormElementError extends Component<Props> {
  public static defaultProps = {
    testID: 'form--element-error',
  }

  public render() {
    const {testID} = this.props
    return (
      <span className="form--element-error" data-testid={testID}>
        {this.message}
      </span>
    )
  }

  private get message() {
    const {message} = this.props

    // TODO(watts): temporary workaround for: https://github.com/influxdata/influxdb/issues/11372
    if (!message) {
      return '\u00a0\u00a0'
    }

    return message
  }
}
