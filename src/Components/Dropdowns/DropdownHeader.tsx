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
  /** Text to be displayed on hover tooltip when disabled */
  disabledTitleText?: string
  buttonShape?: ButtonShape
}
/**
 * a header for our dropdown that is NOT a button, that is designed to take a text input as the child for the
 * type-ahead dropdown.
 *
 * This was built because the other header is a button, and the input has a button inside it (the 'x') which makes it clearable,
 * and React DOM does not allow a button to be nested inside another button.
 */
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
    fontSize: 30,
  }
  const buttonBaseClass = classnames(
    `cf-button cf-button-${size} cf-button-${color} dropdown-caret`,
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
      className={dropdownButtonClass}
      title={titleTextToBeUsed}
      style={containerStyle}
      data-testid={`${testID}-parent`}
    >
      <span className="cf-dropdown--selected">{children}</span>
      <button
        className={buttonBaseClass}
        style={buttonStyle}
        disabled={disabled}
        onClick={onClick}
        data-testid={testID}
      >
        {!!icon && <Icon glyph={icon} className="cf-dropdown--icon" />}
        <Icon glyph={IconFont.CaretDown_New} className="cf-dropdown--caret" />
      </button>
    </div>
  )
}
