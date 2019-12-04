// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  select,
  boolean,
  color,
  number,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Notification} from '../Notification'
import {NotificationDialog, NotificationDialogRef} from '../NotificationDialog'

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

const notificationStories = storiesOf(
  'Atomic|Notification',
  module
).addDecorator(withKnobs)

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
          onDismiss={handleClose}
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
      content: marked(NotificationReadme),
    },
  }
)

notificationStories.add(
  'Example',
  () => {
    const handleClose = (): void => {
      /* eslint-disable */
      alert('calling onDismiss')
      /* eslint-enable */
    }

    const handleTimeout = (): void => {
      /* eslint-disable */
      alert('calling onTimeout')
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <p>
          Look in the <strong>Knobs</strong> panel to toggle notification
          visibility.
        </p>
        <Notification
          visible={boolean('Top Right #1 visible', false)}
          icon={IconFont.Checkmark}
          gradient={Gradients.MiyazakiSky}
          onDismiss={handleClose}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Oh hi there, this is notification #1.
        </Notification>
        <Notification
          visible={boolean('Top Right #2 visible', false)}
          icon={IconFont.BellRinging}
          gradient={Gradients.GarageBand}
          onDismiss={handleClose}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Greetings, all the way from notification #2!
        </Notification>
        <Notification
          visible={boolean('Top Right #3 visible', false)}
          icon={IconFont.Star}
          gradient={Gradients.MangoGrove}
          onDismiss={handleClose}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Avast ye matey! this is notification #3!
        </Notification>
        <Notification
          visible={boolean('Bottom Left visible', false)}
          icon={IconFont.EyeOpen}
          gradient={Gradients.OminousFog}
          horizontalAlignment={Alignment.Left}
          verticalAlignment={VerticalAlignment.Bottom}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Sneaky ninja notification.
        </Notification>
        <Notification
          visible={boolean('Bottom Center visible', false)}
          icon={IconFont.Eye}
          gradient={Gradients.MilkyWay}
          style={{width: '330px'}}
          horizontalAlignment={Alignment.Center}
          verticalAlignment={VerticalAlignment.Bottom}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Another sneaky ninja notification.
        </Notification>
        <Notification
          visible={boolean('Top Center visible', false)}
          icon={IconFont.AlertTriangle}
          gradient={Gradients.ScotchBonnet}
          duration={number('Top Center duration', 3000)}
          onTimeout={handleTimeout}
          style={{width: '500px'}}
          verticalAlignment={VerticalAlignment.Top}
          horizontalAlignment={Alignment.Center}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Warning notification #4 will call onTimeout in{' '}
          {number('Top Center duration', 3000) / 1000} seconds...
        </Notification>
      </div>
    )
  },
  {
    readme: {
      content: marked(NotificationReadme),
    },
  }
)
