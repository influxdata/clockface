// Libraries
import React, {forwardRef, useEffect} from 'react'
import {Transition} from 'react-spring/renderprops'
import * as easings from 'd3-ease'

// Components
import {NotificationDialog} from './NotificationDialog'

// Types
import {Alignment, VerticalAlignment, ComponentSize} from '../../Types'
import {
  NotificationDialogProps,
  NotificationDialogRef,
} from './NotificationDialog'

// Utils
import {usePortal} from '../../Utils/portals'

// Styles
import './Notification.scss'

export interface NotificationProps extends NotificationDialogProps {
  /** Positioning the notification left, center, or right on the window */
  horizontalAlignment?: Alignment
  /** Positioning the notification top, middle, or bottom on the window */
  verticalAlignment?: VerticalAlignment
  /** If a function is passed in a dismiss button will appear on the notification */
  onDismiss?: (id?: string) => void
  /** Function called when duration expires */
  onTimeout?: (id?: string) => void
  /** Duration before notification calls onTimeout function */
  duration?: number
}

export type NotificationRef = NotificationDialogRef

const defaultNotificationStyle = {maxWidth: '500px'}

export const NotificationRoot = forwardRef<NotificationRef, NotificationProps>(
  (
    {
      id,
      icon,
      size = ComponentSize.Medium,
      style = defaultNotificationStyle,
      testID,
      visible = true,
      duration = Infinity,
      children,
      onDismiss,
      className,
      onTimeout,
      verticalAlignment = VerticalAlignment.Top,
      horizontalAlignment = Alignment.Right,
    },
    ref
  ) => {
    const {addNotificationToPortal} = usePortal()

    useEffect(() => {
      if (visible && duration !== Infinity) {
        const dismissTimer = setTimeout(handleTimeout, duration)
        return () => clearTimeout(dismissTimer)
      }

      return
    }, [visible])

    const handleTimeout = () => {
      if (onTimeout) {
        onTimeout(id)
      }
    }

    const transitionConfig = {
      duration: 300,
      easing: easings.easeExpInOut,
    }

    const translateOrigin = () => {
      let cardinality = 'X'
      let sign = ''

      if (horizontalAlignment === 'center') {
        cardinality = 'Y'

        if (verticalAlignment === 'top') {
          sign = '-'
        }
      }

      if (horizontalAlignment === 'left') {
        sign = '-'
      }

      return `translate${cardinality}(${sign}50%)`
    }

    const notificationElement = (
      <Transition
        items={visible}
        from={{opacity: 0, transform: translateOrigin()}}
        enter={{opacity: 1, transform: 'translateX(0)'}}
        leave={{opacity: 0, transform: translateOrigin()}}
        config={transitionConfig}
      >
        {visible =>
          visible &&
          (props => (
            <NotificationDialog
              className={className}
              onDismiss={onDismiss}
              testID={testID}
              style={{...style, ...props}}
              size={size}
              icon={icon}
              ref={ref}
              id={id}
            >
              {children}
            </NotificationDialog>
          ))
        }
      </Transition>
    )

    return addNotificationToPortal(
      notificationElement,
      horizontalAlignment,
      verticalAlignment
    )
  }
)

NotificationRoot.displayName = 'Notification'
