// Libraries
import React, {Component, MouseEvent} from 'react'

// Components
import {Icon} from '../../Icon/Icon'
import {ButtonBase} from '../../Button/Base/ButtonBase'

// Types
import {
  IconFont,
  ButtonType,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
  ButtonShape,
  StandardClassProps,
} from '../../../Types'

// Styles
import '../DropdownButton.scss'

interface Props extends StandardClassProps {
  /** Function to be called on click of dropdown button */
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  /** Button status state default, loading, or disabled */
  status: ComponentStatus
  /** Button color */
  color: ComponentColor
  /** Button size */
  size: ComponentSize
  /** Toggles button highlighted active state */
  active: boolean
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Text to be displayed on hover tooltip */
  title?: string
}

export class DropdownButton extends Component<Props> {
  public static readonly displayName = 'DropdownButton'

  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    status: ComponentStatus.Default,
    active: false,
    testID: 'dropdown--button',
  }

  public render() {
    const {
      onClick,
      children,
      title,
      icon,
      testID,
      active,
      size,
      color,
      id,
      style,
    } = this.props
    return (
      <ButtonBase
        shape={ButtonShape.StretchToFit}
        className={this.className}
        onClick={onClick}
        status={this.status}
        titleText={title}
        type={ButtonType.Button}
        testID={testID}
        active={active}
        color={color}
        size={size}
        id={id}
        style={style}
      >
        {!!icon && <Icon glyph={icon} className="cf-dropdown--icon" />}
        <span className="cf-dropdown--selected">{children}</span>
        <Icon glyph={IconFont.CaretDown} className="cf-dropdown--caret" />
      </ButtonBase>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className
      ? `cf-dropdown--button ${className}`
      : 'cf-dropdown--button'
  }

  private get status(): ComponentStatus {
    const {status} = this.props

    const isDisabled = [
      ComponentStatus.Disabled,
      ComponentStatus.Error,
    ].includes(status)

    return isDisabled ? ComponentStatus.Disabled : ComponentStatus.Default
  }
}
