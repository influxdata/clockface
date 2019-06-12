// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {ComponentSize, StandardProps} from '../../Types'

// Styles
import './TechnoSpinner.scss'

interface Props extends StandardProps {
  /** Diameter of spinner circle */
  diameterPixels: number
  /** Width of spinner stroke */
  strokeWidth: ComponentSize
}

export class TechnoSpinner extends Component<Props> {
  public static defaultProps: Props = {
    diameterPixels: 100,
    strokeWidth: ComponentSize.Small,
    testID: 'techno-spinner',
  }

  public render() {
    const {testID} = this.props

    return (
      <div className={this.className} style={this.style} data-testid={testID} />
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `techno-spinner ${className}` : 'techno-spinner'
  }

  private get style(): CSSProperties {
    const {diameterPixels} = this.props

    const borderWidth = `${this.strokeWidth}px`
    const width = `${diameterPixels}px`
    const height = `${diameterPixels}px`

    return {width, height, borderWidth}
  }

  private get strokeWidth(): number {
    const {strokeWidth} = this.props

    let width

    switch (strokeWidth) {
      case ComponentSize.ExtraSmall:
        width = 1
        break
      case ComponentSize.Small:
        width = 2
        break
      case ComponentSize.Medium:
        width = 4
        break
      case ComponentSize.Large:
      default:
        width = 8
    }

    return width
  }
}
