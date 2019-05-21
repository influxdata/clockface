// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {IconFont, InfluxColors} from '../../Types'

interface Props {
  /** Icon to display */
  glyph: IconFont | string
  /** Class name for custom styles */
  className?: string
  /** Optional color string, can use InfluxColors enum or pass in your own value */
  color?: InfluxColors | string
  /** Used for unit and e2e tests */
  testID: string
}

export class Icon extends Component<Props> {
  public static defaultProps = {
    testID: 'icon',
  }

  render() {
    const {glyph, testID} = this.props

    const className = this.props.className
      ? `icon ${glyph} ${this.props.className}`
      : `icon ${glyph}`

    return (
      <span className={className} data-testid={testID} style={this.style} />
    )
  }

  private get style(): CSSProperties | undefined {
    const {color} = this.props

    if (color) {
      return {color}
    }

    return
  }
}
