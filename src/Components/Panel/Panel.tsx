// Libraries
import React, {Component, CSSProperties} from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import chroma from 'chroma-js'

// Types
import {
  Gradients,
  InfluxColors,
  StandardProps,
  ComponentColor,
} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

// Components
import {PanelHeader} from './PanelHeader'
import {PanelTitle} from './PanelTitle'
import {PanelBody} from './PanelBody'
import {PanelFooter} from './PanelFooter'
import {DismissButton} from '../Button/Composed/DismissButton'

// Styles
import './Panel.scss'

interface Props extends StandardProps {
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Optional background color of panel */
  backgroundColor: InfluxColors | string
  /** If a function is passed in a dismiss button will appear on the Panel */
  onDismiss?: () => void
  /** Applies to the dismiss button rendered when onDismiss is present */
  dismissButtonColor: ComponentColor
}

export class Panel extends Component<Props> {
  public static readonly displayName = 'Panel'

  public static defaultProps = {
    testID: 'panel',
    backgroundColor: InfluxColors.Castle,
    dismissButtonColor: ComponentColor.Primary,
  }

  public static Header = PanelHeader
  public static Title = PanelTitle
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
    const {className, gradient} = this.props

    return classnames('cf-panel', {
      [`${className}`]: className,
      'cf-panel__gradient': gradient,
      [`cf-panel__${this.useContrastText}-text`]: this.useContrastText,
    })
  }

  private get style(): CSSProperties | undefined {
    const {gradient, backgroundColor, style} = this.props

    if (gradient) {
      const colors = getColorsFromGradient(gradient)

      return {
        background: `linear-gradient(45deg,  ${colors.start} 0%,${
          colors.stop
        } 100%)`,
        ...style,
      }
    }

    return {backgroundColor, ...style}
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
    const {onDismiss, dismissButtonColor} = this.props

    if (onDismiss) {
      return <DismissButton onClick={onDismiss} color={dismissButtonColor} />
    }

    return
  }
}
