// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'
import {ButtonBase, ButtonBaseRef} from '../Button/Base/ButtonBase'
import {TechnoSpinner} from '../Spinners/TechnoSpinner'

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
  status?: ComponentStatus
  /** Button color */
  color?: ComponentColor
  /** Button size */
  size?: ComponentSize
  /** Toggles button highlighted active state */
  active?: boolean
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Icon to be displayed to the right of text */
  trailingIcon?: IconFont
  /** Text to be displayed on hover tooltip */
  title?: string
  disabledTitleText?: string
}

export type DropdownButtonRef = ButtonBaseRef

export const DropdownButton = forwardRef<
  DropdownButtonRef,
  DropdownButtonProps
>(
  (
    {
      id,
      icon,
      size = ComponentSize.Small,
      style,
      color = ComponentColor.Default,
      title,
      disabledTitleText,
      active = false,
      testID = 'dropdown--button',
      status = ComponentStatus.Default,
      onClick,
      children,
      className,
      trailingIcon = IconFont.CaretDown_New,
    },
    ref
  ) => {
    const dropdownButtonClass = classnames('cf-dropdown--button', {
      [`${className}`]: className,
      'cf-dropdown__error': status === ComponentStatus.Error,
      'cf-dropdown__loading': status === ComponentStatus.Loading,
    })

    return (
      <ButtonBase
        id={id}
        ref={ref}
        type={ButtonType.Button}
        size={size}
        style={style}
        color={color}
        shape={ButtonShape.StretchToFit}
        testID={testID}
        active={active}
        status={status}
        onClick={onClick}
        className={dropdownButtonClass}
        titleText={title}
        disabledTitleText={disabledTitleText}
      >
        {!!icon && <Icon glyph={icon} className="cf-dropdown--icon" />}
        <span className="cf-dropdown--selected">{children}</span>
        {status === ComponentStatus.Loading ? (
          <TechnoSpinner diameterPixels={20} />
        ) : (
          <Icon glyph={trailingIcon} className="cf-dropdown--caret" />
        )}
      </ButtonBase>
    )
  }
)

DropdownButton.displayName = 'DropdownButton'
