// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Optional coloration for horizontal rule in divider */
  lineColor?: InfluxColors | string
}

export class FormDivider extends Component<Props> {
  public static readonly displayName = 'Form.Divider'

  public static defaultProps = {
    testID: 'form--divider',
  }

  public render() {
    const {testID} = this.props

    return (
      <div className={this.className} data-testid={testID} style={this.style} />
    )
  }

  private get className(): string {
    const {className, lineColor} = this.props

    return classnames('form--divider', {
      [`${className}`]: className,
      'form--divider-line': lineColor,
    })
  }

  private get style(): CSSProperties | undefined {
    const {lineColor} = this.props

    if (lineColor) {
      return {
        backgroundColor: lineColor,
      }
    }

    return
  }
}
