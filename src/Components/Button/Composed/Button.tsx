// Libraries
import React, {forwardRef} from 'react'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'
import {IconAndText} from './IconAndText'

// Styles
import '../Button.scss'

// Types
import {
  IconFont,
  ButtonType,
  ButtonShape,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
} from '../../../Types'
import {ButtonBaseProps} from '../Base/ButtonBase'

export interface ButtonProps extends ButtonBaseProps {
  /** Text to be displayed on button */
  text?: string
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Reverse ordering of text and icon */
  placeIconAfterText?: boolean
}

export type ButtonRef = ButtonBaseRef

export const Button = forwardRef<ButtonRef, ButtonProps>(
  (
    {
      id,
      text,
      style,
      onClick,
      tabIndex,
      titleText,
      className,
      onMouseOut,
      onMouseOver,
      onMouseEnter,
      onMouseLeave,
      icon = '',
      active = false,
      testID = 'button',
      type = ButtonType.Button,
      size = ComponentSize.Small,
      placeIconAfterText = false,
      shape = ButtonShape.Default,
      color = ComponentColor.Default,
      status = ComponentStatus.Default,
    },
    ref
  ) => {
    if (!icon && !text) {
      throw new Error('Button requires either "text" or "icon" props')
    }

    return (
      <ButtonBase
        id={id}
        ref={ref}
        size={size}
        type={type}
        color={color}
        shape={shape}
        style={style}
        active={active}
        status={status}
        testID={testID}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={className}
        titleText={titleText || text}
        tabIndex={!!tabIndex ? tabIndex : 0}
      >
        <IconAndText
          placeIconAfterText={placeIconAfterText}
          text={text}
          icon={icon}
        />
        {status === ComponentStatus.Loading && (
          <div className={`cf-button-spinner cf-button-spinner--${size}`} />
        )}
      </ButtonBase>
    )
  }
)

Button.displayName = 'Button'
