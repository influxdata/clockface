// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  SpinnerContainer,
  SpinnerContainerRef,
  SparkleSpinner,
  SparkleSpinnerRef,
  TechnoSpinner,
  TechnoSpinnerRef,
  WaitingText,
  WaitingTextRef,
} from '../'

// Types
import {ComponentSize, RemoteDataState} from '../../../Types'

// Notes
import SpinnerContainerReadme from './SpinnerContainer.md'
import TechnoSpinnerReadme from './TechnoSpinner.md'
import SparkleSpinnerReadme from './SparkleSpinner.md'
import WaitingTextReadme from './WaitingText.md'

const spinnerContainerStories = storiesOf(
  'Components|Spinners/Container',
  module
).addDecorator(withKnobs)

const spinnerVisualStories = storiesOf(
  'Components|Spinners/Visual Spinners',
  module
).addDecorator(withKnobs)

const spinnerTextStories = storiesOf(
  'Components|Spinners/Text Spinners',
  module
).addDecorator(withKnobs)

spinnerContainerStories.add(
  'SpinnerContainer',
  () => {
    const technoSpinnerRef: React.RefObject<TechnoSpinnerRef> = React.createRef()
    const spinnerContainerRef: React.RefObject<SpinnerContainerRef> = React.createRef()

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('TechnoSpinner', technoSpinnerRef.current)
      console.log('SpinnerContainer', spinnerContainerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SpinnerContainer
          ref={spinnerContainerRef}
          loading={
            RemoteDataState[
              select('loading', mapEnumKeys(RemoteDataState), 'Loading')
            ]
          }
          spinnerComponent={
            <TechnoSpinner
              ref={technoSpinnerRef}
              diameterPixels={100}
              strokeWidth={ComponentSize.Small}
            />
          }
        >
          <h3>
            {text('Child text', 'Loading done, display content or error.')}
          </h3>
        </SpinnerContainer>
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SpinnerContainerReadme),
    },
  }
)

spinnerVisualStories.add(
  'TechnoSpinner',
  () => {
    const technoSpinnerRef: React.RefObject<TechnoSpinnerRef> = React.createRef()

    const handleLogRef = (): void => {
      /* eslint-disable */
      console.log(technoSpinnerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <TechnoSpinner
          ref={technoSpinnerRef}
          diameterPixels={number('diameterPixels', 100)}
          strokeWidth={
            ComponentSize[
              select('strokeWidth', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        />
        <div className="story--test-buttons">
          <button onClick={handleLogRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TechnoSpinnerReadme),
    },
  }
)

spinnerVisualStories.add(
  'SparkleSpinner',
  () => {
    const sparkleSpinnerRef: React.RefObject<SparkleSpinnerRef> = React.createRef()

    const handleLogRef = (): void => {
      /* eslint-disable */
      console.log(sparkleSpinnerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SparkleSpinner
          ref={sparkleSpinnerRef}
          sizePixels={number('sizePixels', 200)}
          loading={
            RemoteDataState[
              select('loading', mapEnumKeys(RemoteDataState), 'Loading')
            ]
          }
        />
        <div className="story--test-buttons">
          <button onClick={handleLogRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SparkleSpinnerReadme),
    },
  }
)

spinnerTextStories.add(
  'WaitingText',
  () => {
    const waitingTextRef: React.RefObject<WaitingTextRef> = React.createRef()

    const handleLogRef = (): void => {
      /* eslint-disable */
      console.log(waitingTextRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <WaitingText text={text('text', 'Loading')} ref={waitingTextRef} />
        <div className="story--test-buttons">
          <button onClick={handleLogRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(WaitingTextReadme),
    },
  }
)
