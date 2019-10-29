// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  EmptyState,
  EmptyStateRef,
  EmptyStateTextRef,
  EmptyStateSubTextRef,
} from '../'
import {Button} from '../../Button/Composed/Button'

// Types
import {ComponentSize, ComponentColor, IconFont} from '../../../Types'

// Notes
import EmptyStateReadme from './EmptyState.md'
import EmptyStateTextReadme from './EmptyStateText.md'
import EmptyStateSubTextReadme from './EmptyStateSubText.md'
import EmptyStateExampleAReadme from './EmptyStateExampleA.md'
import EmptyStateExampleBReadme from './EmptyStateExampleB.md'

const emptyStateStories = storiesOf(
  'Components|Empty States/Family',
  module
).addDecorator(withKnobs)

const emptyStateExampleStories = storiesOf(
  'Components|Empty States/Examples',
  module
).addDecorator(withKnobs)

emptyStateExampleStories.add(
  'No Dashboards',
  () => {
    const emptyStateRef = createRef<EmptyStateRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(emptyStateRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <EmptyState.EmptyState size={ComponentSize.Medium} ref={emptyStateRef}>
          <EmptyState.Text>
            Looks like you don't have any <em>Dashboards</em>, why not create
            one?
          </EmptyState.Text>
          <Button
            text="Create Dashboard"
            icon={IconFont.Plus}
            color={ComponentColor.Primary}
          />
        </EmptyState.EmptyState>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(EmptyStateExampleAReadme),
    },
  }
)

emptyStateExampleStories.add(
  'No Tag Keys Found',
  () => {
    const emptyStateRef = createRef<EmptyStateRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(emptyStateRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <EmptyState.EmptyState size={ComponentSize.Small} ref={emptyStateRef}>
          <EmptyState.Text>{text('text', 'No Tag Keys found')}</EmptyState.Text>
          <EmptyState.SubText>
            {text('text', 'Try changing the Time Range')}
          </EmptyState.SubText>
        </EmptyState.EmptyState>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(EmptyStateExampleBReadme),
    },
  }
)

emptyStateStories.add(
  'EmptyState',
  () => {
    const emptyStateRef = createRef<EmptyStateRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(emptyStateRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <EmptyState.EmptyState
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          ref={emptyStateRef}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(EmptyStateReadme),
    },
  }
)

emptyStateStories.add(
  'EmptyStateText',
  () => {
    const emptyStateTextRef = createRef<EmptyStateTextRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(emptyStateTextRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <EmptyState.Text ref={emptyStateTextRef}>
          <>
            {text('unhighlighted', 'Some words and some ')}
            <em>{text('highlighted', 'highlighted words')}</em>.
          </>
        </EmptyState.Text>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(EmptyStateTextReadme),
    },
  }
)

emptyStateStories.add(
  'EmptyStateSubText',
  () => {
    const emptyStateSubTextRef = createRef<EmptyStateSubTextRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(emptyStateSubTextRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <EmptyState.SubText ref={emptyStateSubTextRef}>
          {text('text', 'Sub Text')}
        </EmptyState.SubText>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(EmptyStateSubTextReadme),
    },
  }
)
