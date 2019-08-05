// Libraries
import React, {Component, CSSProperties} from 'react'
import chroma from 'chroma-js'
import classnames from 'classnames'

// Components
import {NaturalLanguageElement} from './NaturalLanguageElement'

// Types
import {StandardProps, InfluxColors, ComponentSize} from '../../Types'

interface Props extends StandardProps {
  /** Contents of text block */
  text: string
  /** Background color of text block */
  backgroundColor?: InfluxColors | string
  /** Sizing of text block, should be the same as the adjacent form elements */
  size: ComponentSize
}

export class NaturalLanguageText extends Component<Props> {
  public static readonly displayName = 'NaturalLanguageText'

  public static defaultProps = {
    testID: 'natural-language--text',
    size: ComponentSize.Small,
  }

  public render() {
    const {testID, text, id} = this.props

    return (
      <NaturalLanguageElement sizeProportion={0}>
        <div
          className={this.className}
          data-testid={testID}
          id={id}
          style={this.style}
        >
          {text}
        </div>
      </NaturalLanguageElement>
    )
  }

  private get style(): CSSProperties | undefined {
    const {backgroundColor} = this.props

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

    return {backgroundColor, color}
  }

  private get className(): string {
    const {className, size} = this.props

    return classnames('cf-natural-language--text', {
      [`cf-natural-language--text__${size}`]: size,
      [`${className}`]: className,
    })
  }
}
