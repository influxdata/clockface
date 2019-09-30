// Libraries
import React, {MouseEvent, forwardRef, FunctionComponent} from 'react'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'
import {Icon} from '../../Icon/Icon'

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
  StandardFunctionProps,
} from '../../../Types'

export interface ButtonProps extends StandardFunctionProps {
  /** Text to be displayed on button */
  text?: string
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Button color */
  color?: ComponentColor
  /** Button size */
  size?: ComponentSize
  /** Square or rectangle */
  shape?: ButtonShape
  /** Button status state default, loading, or disabled */
  status?: ComponentStatus
  /** Toggles button highlighted active state */
  active?: boolean
  /** Button type of 'button' or 'submit' */
  type?: ButtonType
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
        className={className}
        titleText={titleText || text}
        tabIndex={!!tabIndex ? tabIndex : 0}
      >
        <IconAndText
          placeIconAfterText={placeIconAfterText}
          text={text}
          icon={icon}
          shape={shape}
        />
        {status === ComponentStatus.Loading && (
          <div className={`cf-button-spinner cf-button-spinner--${size}`} />
        )}
      </ButtonBase>
    )
  }
)

Button.displayName = 'Button'

const IconAndText: FunctionComponent<{
  text?: string
  icon: IconFont | string
  shape: ButtonShape
  placeIconAfterText: boolean
}> = ({text, icon, shape, placeIconAfterText}) => {
  const showText = shape === ButtonShape.Square || !!text
  const iconEl = <Icon glyph={icon} className="cf-button-icon" />
  const textEl = <span className="cf-button--label">{text}</span>

  if (placeIconAfterText) {
    return (
      <>
        {showText && textEl}
        {!!icon && iconEl}
      </>
    )
  }

  return (
    <>
      {!!icon && iconEl}
      {showText && textEl}
    </>
  )
}
