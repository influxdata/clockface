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
import {Button} from '../Button/Composed/Button'

// Types
import {ComponentSize, ComponentColor, IconFont} from '../../Types'

const emptyStateStories = storiesOf('Components|Empty States/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const emptyStateExampleStories = storiesOf(
  'Components|Empty States/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

emptyStateExampleStories.add('No Dashboards', () => (
  <EmptyState size={ComponentSize.Medium}>
    <EmptyState.Text
      text="Looks like you don't have any Dashboards , why not create one?"
      highlightWords={['Dashboards']}
    />
    <Button
      text="Create Dashboard"
      icon={IconFont.Plus}
      color={ComponentColor.Primary}
    />
  </EmptyState>
))

emptyStateExampleStories.add('No Tag Keys Found', () => (
  <EmptyState size={ComponentSize.Small}>
    <EmptyState.Text text="No Tag Keys found" />
    <EmptyState.SubText text="Try changing the Time Range" />
  </EmptyState>
))

emptyStateStories.add('EmptyState', () => (
  <EmptyState
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
  />
))

emptyStateStories.add('EmptyStateText', () => (
  <EmptyStateText
    text={text('text', 'Title text with first  and second  highlighted text')}
    highlightWords={array('highlightWords (array)', ['first', 'second'])}
  />
))

emptyStateStories.add('EmptyStateSubText', () => (
  <EmptyStateSubText text={text('text', 'Sub Text')} />
))
