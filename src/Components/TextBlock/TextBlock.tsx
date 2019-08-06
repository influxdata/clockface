// Libraries
import React, {Component, CSSProperties} from 'react'
import chroma from 'chroma-js'
import classnames from 'classnames'

// Types
import {StandardProps, InfluxColors, ComponentSize} from '../../Types'

// Styles
import './TextBlock.scss'

interface Props extends StandardProps {
  /** Contents of text block */
  text: string
  /** Sizing of text block, should be the same as the adjacent form elements */
  size: ComponentSize
  /** Background color of text block */
  backgroundColor?: InfluxColors | string
  /** Color of text, leave blank to have the text color computed for optimal contrast from the background */
  textColor?: InfluxColors | string
  /** Use monospace font instead of default */
  monospace: boolean
}

export class TextBlock extends Component<Props> {
  public static readonly displayName = 'TextBlock'

  public static defaultProps = {
    testID: 'text-block',
    size: ComponentSize.Small,
    monospace: false,
  }

  public render() {
    const {testID, text, id} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={this.style}
      >
        {text}
      </div>
    )
  }

  private get style(): CSSProperties | undefined {
    const {backgroundColor, textColor} = this.props

    if (!backgroundColor) {
      return
    }

    const darkContrast = chroma.contrast(
      `${backgroundColor}`,
      InfluxColors.Kevlar
    )
    const lightContrast = chroma.contrast(
      `${backgroundColor}`,
      InfluxColors.White
    )

    let color

    if (darkContrast > lightContrast) {
      color = `${InfluxColors.Kevlar}`
    } else {
      color = `${InfluxColors.White}`
    }

    if (textColor) {
      color = `${textColor}`
    }

    return {backgroundColor, color}
  }

  private get className(): string {
    const {className, size, monospace} = this.props

    return classnames('cf-text-block', {
      'cf-text-block__monospace': monospace,
      [`cf-text-block__${size}`]: size,
      [`${className}`]: className,
    })
  }
}
