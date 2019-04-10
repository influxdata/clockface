import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {SpinnerContainer} from './SpinnerContainer'
import {SparkleSpinner} from './SparkleSpinner'
import {TechnoSpinner} from './TechnoSpinner'
import {withKnobs, radios, number} from '@storybook/addon-knobs'
import {ComponentSize, RemoteDataState} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const spinnerStories = storiesOf('Components|Spinners', module).addDecorator(
  withKnobs
)

spinnerStories.add('Spinner Container', () => (
  <SpinnerContainer
    loading={RemoteDataState[radios('loading', mapEnumKeys(RemoteDataState))]}
    spinnerComponent={
      <TechnoSpinner diameterPixels={100} strokeWidth={ComponentSize.Medium} />
    }
  >
    <h3>Loading done, display content or error.</h3>
  </SpinnerContainer>
))

spinnerStories.add('TechnoSpinner Component', () => (
  <TechnoSpinner
    diameterPixels={number('diameterPixels', 100)}
    strokeWidth={
      ComponentSize[radios('strokeWidth', mapEnumKeys(ComponentSize))]
    }
  />
))

spinnerStories.add('SparkleSpinner Component', () => (
  <div className="story--container">
    <SparkleSpinner
      loading={RemoteDataState[radios('loading', mapEnumKeys(RemoteDataState))]}
    />
  </div>
))
