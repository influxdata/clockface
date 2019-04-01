// Libraries
import React, {Component, CSSProperties} from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import chroma from 'chroma-js'

// Types
import {Gradients, ComponentSize} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

// Components
import {PanelHeader} from './PanelHeader'
import {PanelBody} from './PanelBody'
import {PanelFooter} from './PanelFooter'

// Styles
import './Panel.scss'

interface PassedProps {
  /** Contents of the panel */
  children: JSX.Element[] | JSX.Element
  /** Class name for custom styles */
  className?: string
  /** Optional color theme of panel */
  gradient?: Gradients
}

interface DefaultProps {
  /** Controls header font size and padding of Panel */
  size?: ComponentSize
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

export class Panel extends Component<Props> {
  public static defaultProps: DefaultProps = {
    size: ComponentSize.Small,
    testID: 'panel',
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
        data-testID={testID}
      >
        {children}
      </div>
    )
  }

  private get useContrastText(): string | boolean {
    const {gradient} = this.props

    if (!gradient) {
      return false
    }

    const {start} = getColorsFromGradient(gradient)

    const mediumGrey = 0.34
    return chroma(start).luminance() >= mediumGrey ? 'dark' : 'light'
  }

  private get style(): CSSProperties | undefined {
    const {gradient} = this.props

    if (!gradient) {
      return
    }

    const colors = getColorsFromGradient(gradient)

    return {
      background: `linear-gradient(45deg,  ${colors.start} 0%,${
        colors.stop
      } 100%)`,
    }
  }
}
