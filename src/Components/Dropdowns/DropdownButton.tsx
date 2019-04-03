// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Icon'

// Types
import {
  IconFont,
  ButtonType,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
} from '../../Types'

// Styles
import './DropdownButton.scss'

interface Props {
  /** Function to be called on click of dropdown button */
  onClick: (e: MouseEvent<HTMLElement>) => void
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
  /** Test ID for Integration Tests */
  testID: string
}

export class DropdownButton extends Component<Props> {
  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    status: ComponentStatus.Default,
    active: false,
    testID: 'dropdown--button',
  }

  public render() {
    const {onClick, children, title, icon, testID} = this.props
    return (
      <button
        className={this.classname}
        onClick={onClick}
        disabled={this.isDisabled}
        title={title}
        type={ButtonType.Button}
        data-testid={testID}
      >
        {!!icon && <Icon glyph={icon} className="dropdown--icon" />}
        <span className="dropdown--selected">{children}</span>
        <span className="dropdown--caret icon caret-down" />
      </button>
    )
  }

  private get isDisabled(): boolean {
    const {status} = this.props

    const isDisabled = [
      ComponentStatus.Disabled,
      ComponentStatus.Loading,
      ComponentStatus.Error,
    ].includes(status)

    return isDisabled
  }

  private get classname(): string {
    const {active, color, size} = this.props

    return classnames('dropdown--button button', {
      'button-stretch': true,
      'button-disabled': this.isDisabled,
      [`button-${color}`]: color,
      [`button-${size}`]: size,
      active,
    })
  }
}
