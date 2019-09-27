// Libraries
import React, {FunctionComponent, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'
import {ButtonBase} from '../Button/Base/ButtonBase'

// Types
import {
  IconFont,
  ButtonType,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
  ButtonShape,
  StandardFunctionProps,
} from '../../Types'

// Styles
import './DropdownButton.scss'

export interface DropdownButtonProps extends StandardFunctionProps {
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

export type DropdownButtonRef = HTMLButtonElement

export const DropdownButton: FunctionComponent<DropdownButtonProps> = ({
  id,
  icon,
  size = ComponentSize.Small,
  style,
  color = ComponentColor.Default,
  title,
  active = false,
  testID = 'dropdown--button',
  status = ComponentStatus.Default,
  onClick,
  children,
  className,
}) => {
  const dropdownButtonClass = classnames('cf-dropdown--button', {
    [`${className}`]: className,
  })

  const dropdownButtonStatus = (): ComponentStatus => {
    const isDisabled = [
      ComponentStatus.Disabled,
      ComponentStatus.Error,
    ].includes(status)

    return isDisabled ? ComponentStatus.Disabled : ComponentStatus.Default
  }

  return (
    <ButtonBase
      shape={ButtonShape.StretchToFit}
      className={dropdownButtonClass}
      onClick={onClick}
      status={dropdownButtonStatus()}
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

DropdownButton.displayName = 'DropdownButton'
