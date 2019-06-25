// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {SlideToggleLabel} from './SlideToggleLabel'

// Styles
import './SlideToggle.scss'

// Types
import {ComponentColor, ComponentSize, StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Function to be called on slide toggle state change */
  onChange: () => void
  /** Toggles slide toggle active state */
  active: boolean
  /** Button size */
  size: ComponentSize
  /** Slide toggle color */
  color: ComponentColor
  /** Toggles disabled state */
  disabled: boolean
  /** Text to be displayed on hover tooltip */
  tooltipText: string
}

export class SlideToggle extends Component<Props> {
  public static readonly displayName = 'SlideToggle'

  public static Label = SlideToggleLabel

  public static defaultProps = {
    size: ComponentSize.Small,
    color: ComponentColor.Primary,
    tooltipText: '',
    disabled: false,
    testID: 'slide-toggle',
  }

  public render() {
    const {tooltipText, testID, id} = this.props

    return (
      <div
        className={this.className}
        onClick={this.handleClick}
        title={tooltipText}
        data-testid={testID}
        id={id}
      >
        <div className="slide-toggle--knob" />
      </div>
    )
  }

  public handleClick = () => {
    const {onChange, disabled} = this.props

    if (disabled) {
      return
    }

    onChange()
  }

  private get className(): string {
    const {size, color, disabled, active, className} = this.props

    return classnames('slide-toggle', {
      active,
      disabled,
      [`${className}`]: className,
      [`slide-toggle-${size}`]: size,
      [`slide-toggle-${color}`]: color,
    })
  }
}
