// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {RadioButton} from './RadioButton'

// Types
import {ComponentColor, ComponentSize, ButtonShape} from '../../Types'

// Styles
import './Radio.scss'

interface Props {
  /** Class name for custom styles */
  customClass?: string
  /** Radio color */
  color?: ComponentColor
  /** Radio size */
  size?: ComponentSize
  /** Shape... */
  shape?: ButtonShape
  /** Test ID for Integration Tests */
  testID?: string
}

export class Radio extends Component<Props> {
  public static defaultProps: Partial<Props> = {
    color: ComponentColor.Primary,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    testID: 'radio-button',
  }

  public static Button = RadioButton

  public render() {
    const {children, testID} = this.props

    this.validateChildCount()

    return (
      <div className={this.containerClassName} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get containerClassName(): string {
    const {color, size, shape, customClass} = this.props

    return classnames('radio-buttons', {
      [`radio-buttons--${color}`]: color,
      [`radio-buttons--${size}`]: size,
      'radio-buttons--square': shape === ButtonShape.Square,
      'radio-buttons--stretch': shape === ButtonShape.StretchToFit,
      [`${customClass}`]: customClass,
    })
  }

  private validateChildCount = (): void => {
    const {children} = this.props
    const MINIMUM_CHILD_COUNT = 2

    if (React.Children.count(children) < MINIMUM_CHILD_COUNT) {
      throw new Error(
        '<Radio> requires at least 2 child elements. We recommend using <Radio.Button />'
      )
    }
  }
}
