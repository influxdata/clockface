// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SpinnerContainer} from './SpinnerContainer'
import {SparkleSpinner} from './SparkleSpinner'
import {TechnoSpinner} from './TechnoSpinner'

// Types
import {ComponentSize, RemoteDataState} from '../../Types'

// Notes
const SpinnerContainerReadme = marked(require('./SpinnerContainer.md'))
const TechnoSpinnerReadme = marked(require('./TechnoSpinner.md'))
const SparkleSpinnerReadme = marked(require('./SparkleSpinner.md'))

const spinnerStories = storiesOf('Components|Spinners/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

spinnerStories.add(
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
      content: SpinnerContainerReadme,
    },
  }
)

spinnerStories.add(
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
      content: TechnoSpinnerReadme,
    },
  }
)

spinnerStories.add(
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
      content: SparkleSpinnerReadme,
    },
  }
)
