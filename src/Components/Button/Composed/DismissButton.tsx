// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {SquareButton, SquareButtonRef} from './SquareButton'

// Styles
import './DismissButton.scss'

// Types
import {
  StandardFunctionProps,
  ComponentStatus,
  ComponentColor,
  IconFont,
  ComponentSize,
  ButtonType,
} from '../../../Types'

export interface DismissButtonProps extends StandardFunctionProps {
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
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

export type DismissButtonRef = SquareButtonRef

export const DismissButton = forwardRef<DismissButtonRef, DismissButtonProps>(
  (
    {
      id,
      style,
      onClick,
      className,
      active = false,
      type = ButtonType.Button,
      testID = 'dismiss-button',
      color = ComponentColor.Primary,
      size = ComponentSize.ExtraSmall,
      status = ComponentStatus.Default,
    },
    ref
  ) => {
    const SquareButtonClass = classnames('cf-dismiss-button', {
      [`${className}`]: className,
    })

    return (
      <SquareButton
        icon={IconFont.Remove}
        color={color}
        className={SquareButtonClass}
        testID={testID}
        id={id}
        size={size}
        onClick={onClick}
        status={status}
        active={active}
        type={type}
        style={style}
        ref={ref}
      />
    )
  }
)

DismissButton.displayName = 'DismissButton'
