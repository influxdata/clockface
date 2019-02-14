// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {SlideToggleLabel} from './SlideToggleLabel'

// Styles
import './SlideToggle.scss'

// Types
import {ComponentColor, ComponentSize} from '../../Types'

interface Props {
  onChange: () => void
  active: boolean
  size?: ComponentSize
  color?: ComponentColor
  disabled?: boolean
  tooltipText?: string
}

export class SlideToggle extends Component<Props> {
  public static Label = SlideToggleLabel

  public static defaultProps: Partial<Props> = {
    size: ComponentSize.Small,
    color: ComponentColor.Primary,
    tooltipText: '',
    disabled: false,
  }

  public render() {
    const {tooltipText} = this.props

    return (
      <div
        className={this.className}
        onClick={this.handleClick}
        title={tooltipText}
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
    const {size, color, disabled, active} = this.props

    return classnames(
      `slide-toggle slide-toggle-${size} slide-toggle-${color}`,
      {active, disabled}
    )
  }
}