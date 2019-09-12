// Libraries
import React, {Component, MouseEvent, RefObject} from 'react'

// Components
import {ButtonBase} from 'src/Components/Button/Base/ButtonBase'
import {Icon} from 'src/Components/Icon/Icon'

// Styles
import 'src/Components/Button/Button.scss'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  IconFont,
  ButtonType,
  StandardClassProps,
} from 'src/Types'

export interface Props extends StandardClassProps {
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
  /** Reverse ordering of text and icon */
  placeIconAfterText: boolean
  /** React Ref object */
  refObject?: RefObject<HTMLButtonElement>
}

export class Button extends Component<Props> {
  public static readonly displayName = 'Button'

  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    status: ComponentStatus.Default,
    active: false,
    type: ButtonType.Button,
    testID: 'button',
    placeIconAfterText: false,
  }

  public render() {
    const {
      className,
      titleText,
      refObject,
      tabIndex,
      onClick,
      testID,
      status,
      active,
      color,
      shape,
      text,
      type,
      icon,
      style,
      size,
      id,
    } = this.props

    if (!icon && !text) {
      throw new Error('Button requires either "text" or "icon" props')
    }

    return (
      <ButtonBase
        className={className}
        titleText={titleText || text}
        refObject={refObject}
        tabIndex={!!tabIndex ? tabIndex : 0}
        onClick={onClick}
        testID={testID}
        status={status}
        active={active}
        color={color}
        shape={shape}
        type={type}
        size={size}
        style={style}
        id={id}
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
      return <Icon glyph={icon} className="cf-button-icon" />
    }

    return
  }

  private get text(): JSX.Element | undefined {
    const {text, shape} = this.props

    if (shape === ButtonShape.Square || !text) {
      return
    }

    return <span className="cf-button--label">{text}</span>
  }

  private get statusIndicator(): JSX.Element | undefined {
    const {status, size} = this.props

    if (status === ComponentStatus.Loading) {
      return <div className={`cf-button-spinner cf-button-spinner--${size}`} />
    }

    return
  }
}
