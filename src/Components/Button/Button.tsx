// Libraries
import React, {Component, MouseEvent, RefObject} from 'react'
import classnames from 'classnames'

// Styles
import './Button.scss'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  IconFont,
  ButtonType,
} from '../../Types'

interface PassedProps {
  /** Text to be displayed on button */
  text?: string
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Class name for custom styles */
  customClass?: string
}

interface DefaultProps {
  /** Button color */
  color?: ComponentColor
  /** Button size */
  size?: ComponentSize
  /** Square or rectangle */
  shape?: ButtonShape
  /** Button status state default, loading, or disabled */
  status?: ComponentStatus
  /** Toggles button highlighted active state */
  active?: boolean
  /** Button type of 'button' or 'submit' */
  type?: ButtonType
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

export class Button extends Component<Props> {
  public static defaultProps: DefaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    status: ComponentStatus.Default,
    active: false,
    type: ButtonType.Button,
    testID: ButtonType.Button,
  }

  public ref: RefObject<HTMLButtonElement> = React.createRef()

  public render() {
    const {onClick, text, titleText, tabIndex, type, icon, testID} = this.props

    if (!icon && !text) {
      throw new Error('Button requires either "text" or "icon" props')
    }

    return (
      <button
        className={this.className}
        disabled={this.disabled}
        onClick={onClick}
        title={titleText || text}
        tabIndex={!!tabIndex ? tabIndex : 0}
        type={type}
        ref={this.ref}
        data-testid={testID}
      >
        {this.icon}
        {this.text}
        {this.statusIndicator}
      </button>
    )
  }

  private get icon(): JSX.Element | null {
    const {icon} = this.props

    if (icon) {
      return <span className={`button-icon icon ${icon}`} />
    }

    return null
  }

  private get text(): string | undefined | null {
    const {text, shape} = this.props

    if (shape === ButtonShape.Square) {
      return null
    }

    return text
  }

  private get disabled(): boolean {
    const {status} = this.props

    return (
      status === ComponentStatus.Disabled || status === ComponentStatus.Loading
    )
  }

  private get statusIndicator(): JSX.Element | null {
    const {status, size} = this.props

    if (status === ComponentStatus.Loading) {
      return <div className={`button-spinner button-spinner--${size}`} />
    }

    return null
  }

  private get className(): string {
    const {color, size, shape, status, active, customClass} = this.props

    return classnames(`button button-${size} button-${color}`, {
      'button-square': shape === ButtonShape.Square,
      'button-stretch': shape === ButtonShape.StretchToFit,
      'button--loading': status === ComponentStatus.Loading,
      'button--disabled': status === ComponentStatus.Disabled,
      active,
      [`${customClass}`]: customClass,
    })
  }
}
