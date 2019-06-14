// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {RadioButton} from './RadioButton'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  StandardProps,
} from '../../Types'

// Styles
import './Radio.scss'

interface Props extends StandardProps {
  /** Radio color */
  color: ComponentColor
  /** Radio size */
  size: ComponentSize
  /** Shape... */
  shape: ButtonShape
}

export class Radio extends Component<Props> {
  public static readonly displayName = 'Radio'

  public static defaultProps = {
    color: ComponentColor.Primary,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    testID: 'radio-button',
  }

  public static Button = RadioButton

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.containerClassName} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get containerClassName(): string {
    const {color, size, shape, className} = this.props

    return classnames('radio-buttons', {
      [`radio-buttons--${color}`]: color,
      [`radio-buttons--${size}`]: size,
      'radio-buttons--square': shape === ButtonShape.Square,
      'radio-buttons--stretch': shape === ButtonShape.StretchToFit,
      [`${className}`]: className,
    })
  }
}
