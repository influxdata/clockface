// Libraries
import React, {Component, MouseEvent, RefObject} from 'react'
import classnames from 'classnames'

// Components
import {SquareButton} from './SquareButton'

// Styles
import './DismissButton.scss'

// Types
import {
  StandardProps,
  ComponentStatus,
  ComponentColor,
  IconFont,
  ComponentSize,
  ButtonType,
} from '../../../Types'

interface Props extends StandardProps {
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
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

export class DismissButton extends Component<Props> {
  public static readonly displayName = 'DismissButton'

  public static defaultProps = {
    color: ComponentColor.Primary,
    testID: 'dismiss-button',
    size: ComponentSize.ExtraSmall,
    status: ComponentStatus.Default,
    active: false,
    type: ButtonType.Button,
  }

  public render() {
    const {
      testID,
      id,
      color,
      onClick,
      size,
      status,
      active,
      type,
      style,
      refObject,
    } = this.props

    return (
      <SquareButton
        icon={IconFont.Remove}
        color={color}
        className={this.className}
        testID={testID}
        id={id}
        size={size}
        onClick={onClick}
        status={status}
        active={active}
        type={type}
        style={style}
        refObject={refObject}
      />
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-dismiss-button', {
      [`${className}`]: className,
    })
  }
}
