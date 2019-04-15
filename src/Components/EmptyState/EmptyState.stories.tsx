// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, array} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {EmptyState} from './EmptyState'
import {EmptyStateText} from './EmptyStateText'
import {EmptyStateSubText} from './EmptyStateSubText'

// Types
import {ComponentSize} from '../../Types'

const emptyStateStories = storiesOf('Components|Empty States', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

emptyStateStories.add('EmptyState Component Family', () => (
  <EmptyState
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
  >
    <EmptyState.Text
      text={text('text', 'Title text with first and second highlighted text')}
      highlightWords={array('highlightWords (array)', ['first', 'second'])}
    />
    <EmptyState.SubText text={text('EmptyStateSubText text', 'Sub Text')} />
    <div className="mockComponent input">child component</div>
  </EmptyState>
))

emptyStateStories.add('EmptyState Component', () => (
  <EmptyState
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
  />
))

emptyStateStories.add('EmptyStateText Component', () => (
  <EmptyStateText
    text={text('text', 'Title text with first and second highlighted text')}
    highlightWords={array('highlightWords (array)', ['first', 'second'])}
  />
))

emptyStateStories.add('EmptyStateSubText Component', () => (
  <EmptyStateSubText text={text('text', 'Sub Text')} />
))
