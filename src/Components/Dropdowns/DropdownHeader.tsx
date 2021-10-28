import {
  ButtonShape,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  IconFont,
  StandardFunctionProps,
} from '../../Types'
import React, {FC, MouseEvent} from 'react'
import classnames from 'classnames'

// Styles
import './DropdownButton.scss'
import {Icon} from '../Icon'

export interface DropdownHeaderProps extends StandardFunctionProps {
  /** Function to be called on click of dropdown button */
  onClick: (e: MouseEvent<any>) => void
  /** Button status state default, loading, or disabled */
  status?: ComponentStatus
  /** Button color */
  color?: ComponentColor
  /** Button size */
  size?: ComponentSize
  /** Toggles button highlighted active state */
  active?: boolean
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Text to be displayed on hover tooltip */
  title?: string
  disabledTitleText?: string
  buttonShape?: ButtonShape
}

export const DropdownHeader: FC<DropdownHeaderProps> = ({
  id,
  style,
  onClick,
  className,
  testID,
  status = ComponentStatus.Default,
  color = ComponentColor.Default,
  size = ComponentSize.Small,
  active,
  icon,
  title,
  disabledTitleText,
  buttonShape = ButtonShape.Default,
  children,
}) => {
  const dropdownButtonClass = classnames('cf-dropdown--button', {
    [`${className}`]: className,
  })

  const disabled =
    status === ComponentStatus.Disabled ||
    status === ComponentStatus.Loading ||
    status === ComponentStatus.Error

  const titleTextToBeUsed =
    disabled && disabledTitleText ? disabledTitleText : title

  const divProps: any = {
    id,
    style,
    color,
  }

  if (!disabled) {
    divProps.onClick = onClick
  }

  const containerStyle = {display: 'flex', flexDirection: 'row'}

  const buttonStyle = {
    width: 35,
    paddingLeft: 3,
    justifyContent: 'center',
  }
  const buttonBaseClass = classnames(
    `cf-button cf-button-${size} cf-button-${color}`,
    {
      'cf-button-square': buttonShape === ButtonShape.Square,
      'cf-button-stretch': buttonShape === ButtonShape.StretchToFit,
      'cf-button--loading': status === ComponentStatus.Loading,
      'cf-button--disabled': status === ComponentStatus.Disabled,
      active,
      [`${className}`]: className,
    }
  )

  return (
    <div
      {...divProps}
      data-testid={testID}
      className={dropdownButtonClass}
      title={titleTextToBeUsed}
      style={containerStyle}
    >
      <span className="cf-dropdown--selected">{children}</span>
      <button
        className={buttonBaseClass}
        style={buttonStyle}
        disabled={disabled}
        onClick={onClick}
      >
        {!!icon && <Icon glyph={icon} className="cf-dropdown--icon" />}
        <Icon glyph={IconFont.CaretDown_New} className="cf-dropdown--caret" />
      </button>
    </div>
  )
}
