// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Styles
import './Alert.scss'

// Types
import {ComponentColor, IconFont} from '../../Types'

interface Props {
  /** Alert color */
  color: ComponentColor
  /** Icon to be displayed to the left of text */
  icon?: IconFont
}

export class Alert extends Component<Props> {
  public render() {
    const {children, icon} = this.props

    return (
      <div className={this.className}>
        {icon && <span className={`alert--icon icon ${icon}`} />}
        <div className="alert--contents">{children}</div>
      </div>
    )
  }

  private get className(): string {
    const {color, icon} = this.props

    return classnames('alert', {
      [`alert--${color}`]: color,
      'alert--has-icon': icon,
    })
  }
}
