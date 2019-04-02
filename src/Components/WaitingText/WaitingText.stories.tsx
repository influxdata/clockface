import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {WaitingText} from './WaitingText'
import {withKnobs, text} from '@storybook/addon-knobs'

const waitingTextStories = storiesOf('WaitingText', module).addDecorator(
  withKnobs
)

waitingTextStories.add('WaitingText Component', () => (
  <WaitingText text={text('text', 'Waiting text')} />
))
