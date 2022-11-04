// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Base/Icon'

// Types
import {
  IconFont,
  ComponentSize,
  StandardFunctionProps,
  ComponentColor,
  InfluxColors,
} from '../../Types'

// Utils
import {calculateTextColorFromBackground} from '../../Utils'

// Styles
import './Notification.scss'
import {SquareButton} from '../Button/Composed/SquareButton'

export interface NotificationDialogProps extends StandardFunctionProps {
  /** Icon to display before notification content */
  icon?: IconFont
  /** Controls if the notification is showing or hidden */
  visible?: boolean
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
      color = ComponentColor.Primary,
      testID = 'notification',
      children,
      onDismiss,
      className,
    },
    ref
  ) => {
    const backgroundColorMap = {
      [ComponentColor.Primary]: InfluxColors.DarkTurquoise,
      [ComponentColor.Success]: InfluxColors.DarkGreen,
      [ComponentColor.Danger]: InfluxColors.DarkRed,
    }

    const highlightColorMap = {
      [ComponentColor.Primary]: InfluxColors.Turquoise,
      [ComponentColor.Success]: InfluxColors.Green,
      [ComponentColor.Danger]: InfluxColors.Red,
    }
    const backgroundColor = backgroundColorMap[color]
    const borderColor = highlightColorMap[color]
    const iconColor = highlightColorMap[color]

    const textColor = calculateTextColorFromBackground(backgroundColor)

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

    const notificationDialogStyle = {
      backgroundColor,
      border: `solid 1px ${borderColor}`,
      ...style,
    }

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
        {!!icon && (
          <Icon
            glyph={icon}
            className="cf-notification--icon"
            style={{color: iconColor}}
          />
        )}
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
            icon={IconFont.Remove_New}
            onClick={handleDismiss}
            className="cf-notification--dismiss"
            testID={`${testID}--dismiss`}
            size={size}
          />
        )}
      </div>
    )
  }
)

NotificationDialog.displayName = 'NotificationDialog'
