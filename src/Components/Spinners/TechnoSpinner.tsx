// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {ComponentSize, StandardClassProps} from 'src/Types'

// Styles
import 'src/Components/Spinners/TechnoSpinner.scss'

interface Props extends StandardClassProps {
  /** Diameter of spinner circle */
  diameterPixels: number
  /** Width of spinner stroke */
  strokeWidth: ComponentSize
}

export class TechnoSpinner extends Component<Props> {
  public static readonly displayName = 'TechnoSpinner'

  public static defaultProps: Props = {
    diameterPixels: 100,
    strokeWidth: ComponentSize.Small,
    testID: 'techno-spinner',
  }

  public render() {
    const {testID, id} = this.props

    return (
      <div
        className={this.className}
        style={this.style}
        data-testid={testID}
        id={id}
      />
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `cf-techno-spinner ${className}` : 'cf-techno-spinner'
  }

  private get style(): CSSProperties {
    const {diameterPixels, style} = this.props

    const borderWidth = `${this.strokeWidth}px`
    const width = `${diameterPixels}px`
    const height = `${diameterPixels}px`

    return {width, height, borderWidth, ...style}
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
