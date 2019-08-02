// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {Button} from './Button'
import {Popover} from '../../Popover/Popover'

// Styles
import './ConfirmationButton.scss'

// Types
import {Props as ButtonProps} from './Button'
import {
  Omit,
  ComponentSize,
  ButtonShape,
  ComponentStatus,
  ComponentColor,
  PopoverType,
} from '../../../Types'

interface Props extends Omit<ButtonProps, 'onClick' | 'active' | 'type'> {
  /** Text to appear in confirmation popover */
  confirmationLabel: string
  /** Text to appear in confirmation button */
  confirmationButtonText: string
  /** Color of confirmation button */
  confirmationButtonColor: ComponentColor
  /** Popover dialog color */
  popoverColor: ComponentColor
  /** Means of applying color to popover */
  popoverType: PopoverType
  /** Function to call when confirmation is clicked, passes 'value' prop in */
  onConfirm: (returnValue?: any) => void
  /** Optional value to have passed back via onConfirm */
  returnValue?: any
}

export class ConfirmationButton extends Component<Props> {
  public static readonly displayName = 'ConfirmationButton'

  public static defaultProps = {
    confirmationButtonColor: ComponentColor.Danger,
    testID: 'confirmation-button',
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    shape: ButtonShape.Default,
    status: ComponentStatus.Default,
    placeIconAfterText: false,
    popoverColor: ComponentColor.Default,
    popoverType: PopoverType.Solid,
  }

  public render() {
    const {
      confirmationButtonText,
      confirmationButtonColor,
      placeIconAfterText,
      confirmationLabel,
      popoverColor,
      popoverType,
      titleText,
      refObject,
      tabIndex,
      testID,
      status,
      color,
      shape,
      text,
      icon,
      size,
      id,
    } = this.props

    return (
      <Popover
        color={popoverColor}
        type={popoverType}
        className={this.className}
        contents={() => (
          <div className="cf-confirmation-button--container">
            {confirmationLabel && (
              <span className="cf-confirmation-button--label">
                {confirmationLabel}
              </span>
            )}
            <Button
              onClick={this.handleConfirmClick}
              text={confirmationButtonText}
              color={confirmationButtonColor}
              size={size}
            />
          </div>
        )}
        testID={`${testID}--popover`}
      >
        <Button
          placeIconAfterText={placeIconAfterText}
          titleText={titleText || text}
          refObject={refObject}
          tabIndex={tabIndex}
          testID={`${testID}--button`}
          status={status}
          color={color}
          shape={shape}
          text={text}
          size={size}
          icon={icon}
          id={id}
        />
      </Popover>
    )
  }

  private get className(): string {
    const {className, shape} = this.props

    return classnames('cf-confirmation-button', {
      'cf-confirmation-button__stretch': shape === ButtonShape.StretchToFit,
      [`${className}`]: className,
    })
  }

  private handleConfirmClick = (): void => {
    const {returnValue, onConfirm} = this.props

    onConfirm(returnValue)
  }
}
