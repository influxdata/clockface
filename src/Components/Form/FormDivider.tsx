// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Optional coloration for horizontal rule in divider */
  lineColor?: InfluxColors | string
}

export class FormDivider extends Component<Props> {
  public static readonly displayName = 'FormDivider'

  public static defaultProps = {
    testID: 'form--divider',
  }

  public render() {
    const {testID, id} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        style={this.style}
        id={id}
      />
    )
  }

  private get className(): string {
    const {className, lineColor} = this.props

    return classnames('cf-form--divider', {
      [`${className}`]: className,
      'cf-form--divider-line': lineColor,
    })
  }

  private get style(): CSSProperties | undefined {
    const {lineColor, style} = this.props

    if (lineColor) {
      return {
        backgroundColor: lineColor,
        ...style,
      }
    }

    return style
  }
}
