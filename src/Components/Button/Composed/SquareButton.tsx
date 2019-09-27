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
  StandardClassProps,
} from '../../../Types'

interface Props extends StandardClassProps {
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Icon to be displayed to the left of text or in place of text */
  icon: IconFont
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Button color */
  color: ComponentColor
  /** Button size */
  size: ComponentSize
  /** Button status state default, loading, or disabled */
  status: ComponentStatus
  /** Toggles button highlighted active state */
  active: boolean
  /** Button type of 'button' or 'submit' */
  type: ButtonType
  /** React Ref object */
  refObject?: RefObject<HTMLButtonElement>
}

export class SquareButton extends Component<Props> {
  public static readonly displayName = 'SquareButton'

  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    status: ComponentStatus.Default,
    active: false,
    type: ButtonType.Button,
    testID: 'square-button',
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
      type,
      size,
      style,
      id,
    } = this.props

    return (
      <ButtonBase
        className={className}
        titleText={titleText}
        refObject={refObject}
        tabIndex={!!tabIndex ? tabIndex : 0}
        onClick={onClick}
        testID={testID}
        status={status}
        active={active}
        color={color}
        shape={ButtonShape.Square}
        type={type}
        size={size}
        style={style}
        id={id}
      >
        {this.icon}
        {this.statusIndicator}
      </ButtonBase>
    )
  }

  private get icon(): JSX.Element | null {
    const {icon} = this.props

    if (icon) {
      return <Icon glyph={icon} className="cf-button-icon" />
    }

    return null
  }

  private get statusIndicator(): JSX.Element | null {
    const {status, size} = this.props

    if (status === ComponentStatus.Loading) {
      return <div className={`cf-button-spinner cf-button-spinner--${size}`} />
    }

    return null
  }
}
