// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, array} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {EmptyState} from './EmptyState'
import {EmptyStateText} from './EmptyStateText'
import {EmptyStateSubText} from './EmptyStateSubText'
import {Button} from '../Button/Composed/Button'

// Types
import {ComponentSize, ComponentColor, IconFont} from '../../Types'

// Notes
import EmptyStateReadme from './EmptyState.md'
import EmptyStateTextReadme from './EmptyStateText.md'
import EmptyStateSubTextReadme from './EmptyStateSubText.md'
import EmptyStateExampleAReadme from './EmptyStateExampleA.md'
import EmptyStateExampleBReadme from './EmptyStateExampleB.md'

const emptyStateStories = storiesOf('Components|Empty States/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const emptyStateExampleStories = storiesOf(
  'Components|Empty States/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

emptyStateExampleStories.add(
  'No Dashboards',
  () => (
    <div className="story--example">
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
    </div>
  ),
  {
    readme: {
      content: marked(EmptyStateExampleAReadme),
    },
  }
)

emptyStateExampleStories.add(
  'No Tag Keys Found',
  () => (
    <div className="story--example">
      <EmptyState size={ComponentSize.Small}>
        <EmptyState.Text text="No Tag Keys found" />
        <EmptyState.SubText text="Try changing the Time Range" />
      </EmptyState>
    </div>
  ),
  {
    readme: {
      content: marked(EmptyStateExampleBReadme),
    },
  }
)

emptyStateStories.add(
  'EmptyState',
  () => (
    <div className="story--example">
      <EmptyState
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(EmptyStateReadme),
    },
  }
)

emptyStateStories.add(
  'EmptyStateText',
  () => (
    <div className="story--example">
      <EmptyStateText
        text={text(
          'text',
          'Title text with first  and second  highlighted text'
        )}
        highlightWords={array('highlightWords (array)', ['first', 'second'])}
      />
    </div>
  ),
  {
    readme: {
      content: marked(EmptyStateTextReadme),
    },
  }
)

emptyStateStories.add(
  'EmptyStateSubText',
  () => (
    <div className="story--example">
      <EmptyStateSubText text={text('text', 'Sub Text')} />
    </div>
  ),
  {
    readme: {
      content: marked(EmptyStateSubTextReadme),
    },
  }
)
