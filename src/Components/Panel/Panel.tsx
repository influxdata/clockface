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

interface Props extends StandardProps {
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Optional background color of panel */
  backgroundColor: InfluxColors | string
  /** Controls header font size and padding of Panel */
  size: ComponentSize
  /** If a function is passed in a dismiss button will appear on the Panel */
  onDismiss?: () => void
}

export class Panel extends Component<Props> {
  public static readonly displayName = 'Panel'

  public static defaultProps = {
    size: ComponentSize.Small,
    testID: 'panel',
    backgroundColor: InfluxColors.Castle,
  }

  public static Header = PanelHeader
  public static Body = PanelBody
  public static Footer = PanelFooter

  public render() {
    const {children, testID, id} = this.props

    return (
      <div
        className={this.className}
        style={this.style}
        data-testid={testID}
        id={id}
      >
        {this.dismissButton}
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, gradient, size, onDismiss} = this.props

    return classnames(`cf-panel cf-panel--${size}`, {
      [`${className}`]: className,
      'cf-panel__gradient': gradient,
      'cf-panel__dismissable': onDismiss,
      [`cf-panel__${this.useContrastText}-text`]: this.useContrastText,
    })
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

  private get useContrastText(): string {
    const {gradient, backgroundColor} = this.props

    const mediumGrey = 0.34

    if (gradient) {
      const {start} = getColorsFromGradient(gradient)
      return chroma(start).luminance() >= mediumGrey ? 'dark' : 'light'
    }

    return chroma(backgroundColor).luminance() >= mediumGrey ? 'dark' : 'light'
  }

  private get dismissButton(): JSX.Element | undefined {
    const {onDismiss} = this.props

    if (onDismiss) {
      return (
        <button
          className="cf-panel--dismiss"
          type="button"
          onClick={onDismiss}
        />
      )
    }

    return
  }
}
