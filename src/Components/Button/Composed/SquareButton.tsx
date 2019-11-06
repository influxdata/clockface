// Libraries
import React, {forwardRef, MouseEvent} from 'react'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'
import {Icon} from '../../Icon/Icon'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  IconFont,
  ButtonType,
  StandardFunctionProps,
} from '../../../Types'

interface SquareButtonProps extends StandardFunctionProps {
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Icon to be displayed to the left of text or in place of text */
  icon: IconFont
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Button color */
  color?: ComponentColor
  /** Button size */
  size?: ComponentSize
  /** Button status state default, loading, or disabled */
  status?: ComponentStatus
  /** Toggles button highlighted active state */
  active?: boolean
  /** Button type of 'button' or 'submit' */
  type?: ButtonType
}

export type SquareButtonRef = ButtonBaseRef

export const SquareButton = forwardRef<SquareButtonRef, SquareButtonProps>(
  (
    {
      className,
      titleText,
      tabIndex,
      onClick,
      style,
      id,
      icon,
      color = ComponentColor.Default,
      size = ComponentSize.Small,
      status = ComponentStatus.Default,
      active = false,
      type = ButtonType.Button,
      testID = 'square-button',
    },
    ref
  ) => {
    return (
      <ButtonBase
        className={className}
        titleText={titleText}
        ref={ref}
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
        {!!icon && <Icon glyph={icon} className="cf-button-icon" />}
        {status === ComponentStatus.Loading && (
          <div className={`cf-button-spinner cf-button-spinner--${size}`} />
        )}
      </ButtonBase>
    )
  }
)

SquareButton.displayName = 'SquareButton'
