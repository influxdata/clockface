// Libraries
import React, {forwardRef} from 'react'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'
import {Icon} from '../../Icon/Base/Icon'

// Types
import {
  Omit,
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  IconFont,
  ButtonType,
} from '../../../Types'
import {ButtonBaseProps} from '../Base/ButtonBase'

export interface SquareButtonProps extends Omit<ButtonBaseProps, 'Shape'> {
  /** Icon to be displayed to the left of text or in place of text */
  icon: IconFont
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
      onMouseOut,
      onMouseOver,
      onMouseEnter,
      onMouseLeave,
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
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
