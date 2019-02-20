// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {ComponentSize} from '../../Types'

// Styles
import './TechnoSpinner.scss'

interface Props {
  diameterPixels?: number
  strokeWidth?: ComponentSize
  testID?: string
}

export class TechnoSpinner extends Component<Props> {
  public static defaultProps: Props = {
    diameterPixels: 100,
    strokeWidth: ComponentSize.Small,
    testID: "techno-spinner"
  }

  public render() {
    const {testID} = this.props

    return <div className="techno-spinner" style={this.style} data-testid={testID} />
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