// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SpinnerContainer} from './SpinnerContainer'
import {SparkleSpinner} from './SparkleSpinner'
import {TechnoSpinner} from './TechnoSpinner'
import {WaitingText} from './WaitingText'

// Types
import {ComponentSize, RemoteDataState} from '../../Types'

// Notes
import SpinnerContainerReadme from './SpinnerContainer.md'
import TechnoSpinnerReadme from './TechnoSpinner.md'
import SparkleSpinnerReadme from './SparkleSpinner.md'
import WaitingTextReadme from './WaitingText.md'

const spinnerContainerStories = storiesOf(
  'Components|Spinners/Container',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const spinnerVisualStories = storiesOf(
  'Components|Spinners/Visual Spinners',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const spinnerTextStories = storiesOf(
  'Components|Spinners/Text Spinners',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const spinnerTestingStories = storiesOf('Components|Spinners/Testing', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

spinnerContainerStories.add(
  'SpinnerContainer',
  () => (
    <div className="story--example">
      <SpinnerContainer
        loading={
          RemoteDataState[
            select('loading', mapEnumKeys(RemoteDataState), 'Loading')
          ]
        }
        spinnerComponent={
          <TechnoSpinner
            diameterPixels={100}
            strokeWidth={ComponentSize.Small}
          />
        }
      >
        <h3>{text('Child text', 'Loading done, display content or error.')}</h3>
      </SpinnerContainer>
    </div>
  ),
  {
    readme: {
      content: marked(SpinnerContainerReadme),
    },
  }
)

spinnerVisualStories.add(
  'TechnoSpinner',
  () => (
    <div className="story--example">
      <TechnoSpinner
        diameterPixels={number('diameterPixels', 100)}
        strokeWidth={
          ComponentSize[
            select('strokeWidth', mapEnumKeys(ComponentSize), 'Small')
          ]
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(TechnoSpinnerReadme),
    },
  }
)

spinnerVisualStories.add(
  'SparkleSpinner',
  () => (
    <div className="story--example">
      <SparkleSpinner
        sizePixels={number('sizePixels', 200)}
        loading={
          RemoteDataState[
            select('loading', mapEnumKeys(RemoteDataState), 'Loading')
          ]
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(SparkleSpinnerReadme),
    },
  }
)

spinnerTextStories.add(
  'WaitingText',
  () => (
    <div className="story--example">
      <WaitingText text={text('text', 'Loading')} />
    </div>
  ),
  {
    readme: {
      content: marked(WaitingTextReadme),
    },
  }
)

spinnerTestingStories.add('Ref Forwarding', () => {
  const waitingTextRef: React.RefObject<HTMLDivElement> = React.createRef()
  const technoSpinnerRef: React.RefObject<HTMLDivElement> = React.createRef()
  const sparkleSpinnerRef: React.RefObject<HTMLDivElement> = React.createRef()
  const spinnerContainerRef: React.RefObject<HTMLDivElement> = React.createRef()

  const handleLogRef = (ref: React.RefObject<any>) => (): void => {
    /* eslint-disable */
    console.log(ref.current)
    /* eslint-enable */
  }

  return (
    <div className="story--example__column">
      <h5>
        Open your browser console then click a square to log the ref of its
        component
      </h5>
      <div className="story--testing-table">
        <div
          className="story--testing-cell"
          onClick={handleLogRef(waitingTextRef)}
        >
          <WaitingText text="Loading" ref={waitingTextRef} />
        </div>
        <div
          className="story--testing-cell"
          onClick={handleLogRef(technoSpinnerRef)}
        >
          <TechnoSpinner
            diameterPixels={80}
            strokeWidth={ComponentSize.Small}
            ref={technoSpinnerRef}
          />
        </div>
        <div
          className="story--testing-cell"
          onClick={handleLogRef(sparkleSpinnerRef)}
        >
          <SparkleSpinner
            sizePixels={120}
            loading={RemoteDataState.Loading}
            ref={sparkleSpinnerRef}
          />
        </div>
        <div
          className="story--testing-cell"
          onClick={handleLogRef(spinnerContainerRef)}
        >
          <SpinnerContainer
            ref={spinnerContainerRef}
            loading={RemoteDataState.Loading}
            spinnerComponent={<p>Container</p>}
          />
        </div>
      </div>
    </div>
  )
})
