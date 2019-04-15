// Libaries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {WaitingText} from './WaitingText'

const waitingTextStories = storiesOf('Components|Spinners', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

waitingTextStories.add('WaitingText Component', () => (
  <WaitingText text={text('text', 'Waiting text')} />
))
