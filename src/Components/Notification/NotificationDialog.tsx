// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Base/Icon'

// Types
import {
  IconFont,
  Gradients,
  InfluxColors,
  ComponentSize,
  StandardFunctionProps,
  ComponentColor,
} from '../../Types'

// Utils
import {
  generateBackgroundStyle,
  calculateTextColorFromBackground,
} from '../../Utils'

// Styles
import './Notification.scss'
import {SquareButton} from '../Button/Composed/SquareButton'

export interface NotificationDialogProps extends StandardFunctionProps {
  /** Icon to display before notification content */
  icon?: IconFont
  /** Controls if the notification is showing or hidden */
  visible?: boolean
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Notification color */
  backgroundColor?: InfluxColors | string
  /** If a function is passed in a dismiss button will appear on the notification */
  onDismiss?: (id?: string) => void
  /** Controls padding and font size of the notification */
  size: ComponentSize
  /** Notification theme */
  color?: ComponentColor
}

export type NotificationDialogRef = HTMLDivElement

export const NotificationDialog = forwardRef<
  NotificationDialogRef,
  NotificationDialogProps
>(
  (
    {
      id,
      size,
      icon,
      style,
      color = '',
      testID = 'notification',
      children,
      gradient,
      onDismiss,
      className,
      backgroundColor = InfluxColors.Castle,
    },
    ref
  ) => {
    let internalGradient = gradient
    if (color) {
      const notificationThemes = {
        [ComponentColor.Primary]: Gradients.Info,
        [ComponentColor.Success]: Gradients.Success,
        [ComponentColor.Danger]: Gradients.Danger,
      }

      internalGradient = notificationThemes[color] || Gradients.Info
    }

    const textColor = calculateTextColorFromBackground(
      backgroundColor,
      internalGradient
    )

    const notificationDialogClassName = classnames(
      `cf-notification cf-notification__${color || 'default'}`,
      {
        'cf-notification__has-icon': icon,
        [`cf-notification__${size}`]: size,
        [`cf-notification__${textColor}-text`]: textColor,
        'cf-notification__dismissable': onDismiss,
        [`${className}`]: className,
      }
    )

    const notificationDialogStyle = generateBackgroundStyle(
      backgroundColor,
      internalGradient,
      false,
      style
    )

    const handleDismiss = () => {
      if (onDismiss) {
        onDismiss(id)
      }
    }

    return (
      <div
        className={notificationDialogClassName}
        data-testid={testID}
        id={id}
        style={notificationDialogStyle}
        ref={ref}
      >
        {!!icon && <Icon glyph={icon} className="cf-notification--icon" />}
        <div className="cf-notification--contents">
          <div
            className="cf-notification--children"
            data-testid={`${testID}--children`}
          >
            {children}
          </div>
        </div>
        {onDismiss && (
          <SquareButton
            icon={IconFont.Remove}
            onClick={handleDismiss}
            className="cf-notification--dismiss"
            testID={`${testID}--dismiss`}
            size={ComponentSize.ExtraSmall}
          />
        )}
      </div>
    )
  }
)

NotificationDialog.displayName = 'NotificationDialog'
