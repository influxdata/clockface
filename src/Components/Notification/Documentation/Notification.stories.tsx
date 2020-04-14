// Libraries
import React, {createRef} from 'react'
import marked from 'marked'
import uuid from 'uuid'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  select,
  boolean,
  color,
  number,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Utils
import {
  generateRandomText,
  getRandomIcon,
  getRandomGradient,
} from '../../../Utils'

// Components
import {Notification, NotificationDialog, NotificationDialogRef} from '../index'

// Types
import {
  IconFont,
  Gradients,
  InfluxColors,
  Alignment,
  VerticalAlignment,
  ComponentSize,
} from '../../../Types'

// Notes
import NotificationReadme from './Notification.md'
import NotificationDialogReadme from './NotificationDialog.md'

const notificationStories = storiesOf(
  'Atomic|Notification',
  module
).addDecorator(withKnobs)

interface TestNotification {
  id: string
  text: string
  icon: IconFont
  gradient: Gradients
  visible: boolean
  horizontalAlign: Alignment
  verticalAlign: VerticalAlignment
}

notificationStories.add(
  'Notification',
  () => {
    const [notifications, updateNotifications] = useState<TestNotification[]>(
      []
    )

    const randomTextLower = number('randomTextLower', 5)
    const randomTextUpper = number('randomTextUpper', 30)

    const defaultNotificationStyle = {maxWidth: '500px'}

    const handleGenerateNotification = (
      verticalAlign: VerticalAlignment,
      horizontalAlign: Alignment
    ) => (): void => {
      const id = uuid.v4()
      const text = generateRandomText(randomTextLower, randomTextUpper)
      const icon = getRandomIcon()
      const gradient = getRandomGradient()
      const visible = true

      const newNotification: TestNotification = {
        id,
        text,
        icon,
        gradient,
        visible,
        horizontalAlign,
        verticalAlign,
      }

      const updatedNotifications = [...notifications, newNotification]

      updateNotifications(updatedNotifications)
    }

    const handleDismiss = (id: string): void => {
      const updatedNotifications = notifications.map(n => {
        if (n.id === id) {
          return {...n, visible: false}
        }

        return n
      })

      updateNotifications(updatedNotifications)
    }

    const handleDismissNotifications = (): void => {
      const updatedNotifications = notifications.map(n => ({
        ...n,
        visible: false,
      }))
      updateNotifications(updatedNotifications)
    }

    return (
      <div className="story--example" style={{flexDirection: 'column'}}>
        <p>Click a button to generate a random notification</p>
        <div className="notification-tester">
          <div>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Top,
                Alignment.Left
              )}
            >
              Top Left
            </button>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Top,
                Alignment.Center
              )}
            >
              Top Center
            </button>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Top,
                Alignment.Right
              )}
            >
              Top Right
            </button>
          </div>
          <div>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Middle,
                Alignment.Left
              )}
            >
              Middle Left
            </button>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Middle,
                Alignment.Center
              )}
            >
              Middle Center
            </button>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Middle,
                Alignment.Right
              )}
            >
              Middle Right
            </button>
          </div>
          <div>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Bottom,
                Alignment.Left
              )}
            >
              Bottom Left
            </button>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Bottom,
                Alignment.Center
              )}
            >
              Bottom Center
            </button>
            <button
              className="story--test-button"
              onClick={handleGenerateNotification(
                VerticalAlignment.Bottom,
                Alignment.Right
              )}
            >
              Bottom Right
            </button>
          </div>
        </div>
        <button
          className="story--test-button"
          onClick={handleDismissNotifications}
          disabled={notifications.length === 0}
        >
          Dismiss All
        </button>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            id={notification.id}
            visible={notification.visible}
            icon={notification.icon}
            gradient={notification.gradient}
            onDismiss={handleDismiss}
            size={ComponentSize.Small}
            horizontalAlignment={notification.horizontalAlign}
            verticalAlignment={notification.verticalAlign}
            style={object('style', defaultNotificationStyle)}
          >
            {notification.text}
          </Notification>
        ))}
      </div>
    )
  },
  {
    readme: {
      content: marked(NotificationReadme),
    },
  }
)

notificationStories.add(
  'NotificationDialog',
  () => {
    const notificationDialogRef = createRef<NotificationDialogRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(notificationDialogRef.current)
      /* eslint-enable */
    }

    const handleClose = (): void => {
      /* eslint-disable */
      alert('calling onDismiss')
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <NotificationDialog
          ref={notificationDialogRef}
          visible={boolean('visible', true)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'Checkmark'
              )
            ]
          }
          gradient={
            Gradients[
              select(
                'gradient',
                {None: 'none', ...mapEnumKeys(Gradients)},
                'GarageBand'
              )
            ]
          }
          backgroundColor={color('backgroundColor', `${InfluxColors.Castle}`)}
          onDismiss={boolean('dismissable', true) ? handleClose : undefined}
        >
          <span>{text('text', 'Congrats! The thing has happened!')}</span>
        </NotificationDialog>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(NotificationDialogReadme),
    },
  }
)
