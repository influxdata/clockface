// Libraries
import React, {Component, MouseEvent, RefObject} from 'react'
import classnames from 'classnames'

// Styles
import '../Button.scss'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  ButtonType,
  StandardProps,
} from '../../../Types'

interface ComponentProps {
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Button color */
  color: ComponentColor
  /** Button size */
  size: ComponentSize
  /** Square or rectangle */
  shape: ButtonShape
  /** Button status state default, loading, or disabled */
  status: ComponentStatus
  /** Toggles button highlighted active state */
  active: boolean
  /** Button type of 'button' or 'submit' */
  type: ButtonType
  /** React Ref object */
  refObject?: RefObject<HTMLButtonElement>
}

type Props = ComponentProps & StandardProps

export class ButtonBase extends Component<Props> {
  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    status: ComponentStatus.Default,
    active: false,
    type: ButtonType.Button,
    testID: ButtonType.Button,
  }

  public render() {
    const {
      onClick,
      titleText,
      tabIndex,
      type,
      testID,
      children,
      refObject,
    } = this.props

    return (
      <button
        className={this.className}
        disabled={this.disabled}
        onClick={onClick}
        title={titleText}
        tabIndex={!!tabIndex ? tabIndex : 0}
        type={type}
        data-testid={testID}
        ref={refObject}
      >
        {children}
      </button>
    )
  }

  private get disabled(): boolean {
    const {status} = this.props

    return (
      status === ComponentStatus.Disabled || status === ComponentStatus.Loading
    )
  }

  private get className(): string {
    const {color, size, shape, status, active, className} = this.props

    return classnames(`button button-${size} button-${color}`, {
      'button-square': shape === ButtonShape.Square,
      'button-stretch': shape === ButtonShape.StretchToFit,
      'button--loading': status === ComponentStatus.Loading,
      'button--disabled': status === ComponentStatus.Disabled,
      active,
      [`${className}`]: className,
    })
  }
}
