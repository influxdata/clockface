// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {ButtonBase, ButtonBaseRef, ButtonBaseProps} from '../Base/ButtonBase'
import {IconAndText} from './IconAndText'

// Styles
import './CTAButton.scss'

// Types
import {
  Omit,
  IconFont,
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  ButtonType,
} from '../../../Types'

export interface CTAButtonProps extends Omit<ButtonBaseProps, 'size'> {
  /** Text to be displayed on button */
  text?: string
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Reverse ordering of text and icon */
  placeIconAfterText?: boolean
}

export type CTAButtonRef = ButtonBaseRef

export const CTAButton = forwardRef<CTAButtonRef, CTAButtonProps>(
  (
    {
      id,
      text,
      icon,
      style,
      onClick,
      tabIndex,
      titleText,
      className,
      onMouseOut,
      onMouseOver,
      onMouseEnter,
      onMouseLeave,
      active = false,
      testID = 'cta-button',
      type = ButtonType.Button,
      shape = ButtonShape.Default,
      color = ComponentColor.Default,
      status = ComponentStatus.Default,
      placeIconAfterText,
    },
    ref
  ) => {
    const CTAButtonClass = classnames(`cf-cta-button`, {
      [`${className}`]: className,
    })

    return (
      <ButtonBase
        className={CTAButtonClass}
        titleText={titleText}
        tabIndex={tabIndex}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        status={status}
        testID={testID}
        active={active}
        color={color}
        style={style}
        shape={shape}
        size={ComponentSize.Large}
        type={type}
        ref={ref}
        id={id}
      >
        <IconAndText
          placeIconAfterText={placeIconAfterText}
          text={text}
          icon={icon}
        />
        {status === ComponentStatus.Loading && (
          <div
            className={`cf-button-spinner cf-button-spinner--${ComponentSize.Large}`}
          />
        )}
      </ButtonBase>
    )
  }
)

CTAButton.displayName = 'CTAButton'
