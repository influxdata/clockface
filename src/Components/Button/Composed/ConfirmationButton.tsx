// Libraries
import React, {FunctionComponent, useRef, RefObject, CSSProperties} from 'react'

// Components
import {Button, ButtonProps} from './Button'
import {Popover} from '../../Popover'

// Styles
import './ConfirmationButton.scss'

// Types
import {
  Omit,
  ComponentSize,
  ButtonShape,
  ComponentStatus,
  ComponentColor,
  PopoverType,
} from '../../../Types'

interface ConfirmationButtonProps
  extends Omit<ButtonProps, 'onClick' | 'active' | 'type'> {
  /** Text to appear in confirmation popover */
  confirmationLabel: string
  /** Text to appear in confirmation button */
  confirmationButtonText: string
  /** Color of confirmation button */
  confirmationButtonColor?: ComponentColor
  /** Popover dialog color */
  popoverColor?: ComponentColor
  /** Means of applying color to popover */
  popoverType?: PopoverType
  /** Allows customization of Popover */
  popoverClassName?: string
  /** Allows customization of Popover */
  popoverStyle?: CSSProperties
  /** Function to call when confirmation is clicked, passes 'value' prop in */
  onConfirm: (returnValue?: any) => void
  /** Optional value to have passed back via onConfirm */
  returnValue?: any
}

export const ConfirmationButton: FunctionComponent<ConfirmationButtonProps> = ({
  id,
  icon,
  text,
  style,
  tabIndex,
  className,
  titleText,
  onConfirm,
  returnValue,
  popoverStyle,
  popoverClassName,
  confirmationLabel,
  confirmationButtonText,
  size = ComponentSize.Small,
  placeIconAfterText = false,
  shape = ButtonShape.Default,
  testID = 'confirmation-button',
  color = ComponentColor.Default,
  popoverType = PopoverType.Solid,
  status = ComponentStatus.Default,
  popoverColor = ComponentColor.Default,
  confirmationButtonColor = ComponentColor.Danger,
}) => {
  const triggerRef: RefObject<HTMLButtonElement> = useRef(null)

  const isDisabled =
    status === ComponentStatus.Disabled || status === ComponentStatus.Loading

  return (
    <>
      <Popover
        className={popoverClassName}
        style={popoverStyle}
        color={popoverColor}
        type={popoverType}
        enableDefaultStyles={false}
        contents={onHide => (
          <ConfirmationContents
            testID={testID}
            onHide={onHide}
            onConfirm={onConfirm}
            returnValue={returnValue}
            confirmationLabel={confirmationLabel}
            confirmationButtonText={confirmationButtonText}
            confirmationButtonColor={confirmationButtonColor}
          />
        )}
        testID={`${testID}--popover`}
        disabled={isDisabled}
        triggerRef={triggerRef}
      />
      <Button
        className={className}
        placeIconAfterText={placeIconAfterText}
        titleText={titleText || text}
        tabIndex={tabIndex}
        testID={`${testID}--button`}
        ref={triggerRef}
        status={status}
        color={color}
        style={style}
        shape={shape}
        text={text}
        size={size}
        icon={icon}
        id={id}
      />
    </>
  )
}

ConfirmationButton.displayName = 'ConfirmationButton'

const ConfirmationContents: FunctionComponent<{
  onHide: (() => void) | undefined
  returnValue?: any
  onConfirm: (returnValue?: any) => void
  confirmationLabel: string
  testID: string
  confirmationButtonText: string
  confirmationButtonColor: ComponentColor
  size?: ComponentSize
}> = ({
  onHide,
  onConfirm,
  returnValue,
  confirmationLabel,
  testID,
  confirmationButtonText,
  confirmationButtonColor,
  size,
}) => {
  const handleClick = (): void => {
    onConfirm(returnValue)
    !!onHide && onHide()
  }

  return (
    <div className="cf-confirmation-button--container">
      {confirmationLabel && (
        <span
          className="cf-confirmation-button--label"
          data-testid={`${testID}--confirmation-label`}
        >
          {confirmationLabel}
        </span>
      )}
      <Button
        data-testid={`${testID}--confirm-button`}
        onClick={handleClick}
        text={confirmationButtonText}
        color={confirmationButtonColor}
        size={size}
      />
    </div>
  )
}

ConfirmationContents.displayName = 'ConfirmationButtonContents'
