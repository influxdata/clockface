// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {RadioButton} from 'src/Components/Radio/RadioButton'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  StandardClassProps,
} from 'src/Types'

// Styles
import 'src/Components/Radio/Radio.scss'

interface Props extends StandardClassProps {
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
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.containerClassName}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }

  private get containerClassName(): string {
    const {color, size, shape, className} = this.props

    return classnames('cf-radio-buttons', {
      [`cf-radio-buttons--${color}`]: color,
      [`cf-radio-buttons--${size}`]: size,
      'cf-radio-buttons--square': shape === ButtonShape.Square,
      'cf-radio-buttons--stretch': shape === ButtonShape.StretchToFit,
      [`${className}`]: className,
    })
  }
}
