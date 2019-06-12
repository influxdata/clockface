// Libraries
import React, {Component, CSSProperties} from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import chroma from 'chroma-js'

// Types
import {
  Gradients,
  ComponentSize,
  InfluxColors,
  StandardProps,
} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

// Components
import {PanelHeader} from './PanelHeader'
import {PanelBody} from './PanelBody'
import {PanelFooter} from './PanelFooter'

// Styles
import './Panel.scss'

interface ComponentProps {
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Optional background color of panel */
  backgroundColor: InfluxColors | string
  /** Controls header font size and padding of Panel */
  size: ComponentSize
}

type Props = ComponentProps & StandardProps

export class Panel extends Component<Props> {
  public static defaultProps = {
    size: ComponentSize.Small,
    testID: 'panel',
    backgroundColor: InfluxColors.Castle,
  }

  public static Header = PanelHeader
  public static Body = PanelBody
  public static Footer = PanelFooter

  public render() {
    const {children, className, gradient, size, testID} = this.props

    return (
      <div
        className={classnames(`panel panel--${size}`, {
          [`${className}`]: className,
          panel__gradient: gradient,
          [`panel__${this.useContrastText}-text`]: this.useContrastText,
        })}
        style={this.style}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }

  private get useContrastText(): string {
    const {gradient, backgroundColor} = this.props

    const mediumGrey = 0.34

    if (gradient) {
      const {start} = getColorsFromGradient(gradient)
      return chroma(start).luminance() >= mediumGrey ? 'dark' : 'light'
    }

    return chroma(backgroundColor).luminance() >= mediumGrey ? 'dark' : 'light'
  }

  private get style(): CSSProperties | undefined {
    const {gradient, backgroundColor} = this.props

    if (gradient) {
      const colors = getColorsFromGradient(gradient)

      return {
        background: `linear-gradient(45deg,  ${colors.start} 0%,${
          colors.stop
        } 100%)`,
      }
    }

    return {backgroundColor}
  }
}
