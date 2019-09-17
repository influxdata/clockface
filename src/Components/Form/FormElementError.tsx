// Libraries
import React, {Component} from 'react'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Text to be displayed on error */
  message: string
}

export class FormElementError extends Component<Props> {
  public static readonly displayName = 'FormElementError'

  public static defaultProps = {
    testID: 'form--element-error',
  }

  public render() {
    const {testID, id, style} = this.props

    return (
      <span
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
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

  private get className(): string {
    const {className} = this.props

    return className
      ? `cf-form--element-error ${className}`
      : 'cf-form--element-error'
  }
}
