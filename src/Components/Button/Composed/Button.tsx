// Libraries
import React, {Component, MouseEvent, RefObject} from 'react'

// Components
import {ButtonBase} from '../Base/ButtonBase'
import {Icon} from '../../Icon/Icon'

// Styles
import '../Button.scss'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  IconFont,
  ButtonType,
} from '../../../Types'

interface Props {
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
  className?: string
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
  /** Test ID for Integration Tests */
  testID: string
  /** Reverse ordering of text and icon */
  placeIconAfterText: boolean
}

export class Button extends Component<Props> {
  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    status: ComponentStatus.Default,
    active: false,
    type: ButtonType.Button,
    testID: ButtonType.Button,
    placeIconAfterText: false,
  }

  public ref: RefObject<HTMLButtonElement> = React.createRef()

  public render() {
    const {
      onClick,
      text,
      titleText,
      tabIndex,
      type,
      icon,
      testID,
      status,
      className,
      size,
      color,
      active,
    } = this.props

    if (!icon && !text) {
      throw new Error('Button requires either "text" or "icon" props')
    }

    return (
      <ButtonBase
        className={className}
        status={status}
        onClick={onClick}
        titleText={titleText || text}
        tabIndex={!!tabIndex ? tabIndex : 0}
        type={type}
        testID={testID}
        size={size}
        color={color}
        active={active}
      >
        {this.iconAndText}
        {this.statusIndicator}
      </ButtonBase>
    )
  }

  private get iconAndText(): JSX.Element {
    const {placeIconAfterText} = this.props

    if (placeIconAfterText) {
      return (
        <>
          {this.text}
          {this.icon}
        </>
      )
    }

    return (
      <>
        {this.icon}
        {this.text}
      </>
    )
  }

  private get icon(): JSX.Element | undefined {
    const {icon} = this.props

    if (icon) {
      return <Icon glyph={icon} className="button-icon" />
    }

    return
  }

  private get text(): JSX.Element | undefined {
    const {text, shape} = this.props

    if (shape === ButtonShape.Square) {
      return
    }

    return <span className="button--label">{text}</span>
  }

  private get statusIndicator(): JSX.Element | undefined {
    const {status, size} = this.props

    if (status === ComponentStatus.Loading) {
      return <div className={`button-spinner button-spinner--${size}`} />
    }

    return
  }
}
