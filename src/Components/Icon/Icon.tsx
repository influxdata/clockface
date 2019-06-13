// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {IconFont, InfluxColors, StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Icon to display */
  glyph: IconFont | string
  /** Optional color string, can use InfluxColors enum or pass in your own value */
  color?: InfluxColors | string
}

export class Icon extends Component<Props> {
  public static readonly displayName = 'Icon'

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
