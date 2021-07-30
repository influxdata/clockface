// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, color, number, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {ProgressBar} from '../ProgressBar'

// Types
import {Gradients, InfluxColors} from '../../../Types'

// Notes
import ProgressBarReadme from './ProgressBar.md'
import ThresholdBarReadme from './ThresholdBar.md'
import {ThresholdBar} from '../Composed/ThresholdBar'

const ProgressBarStories = storiesOf(
  'Components/ProgressBar/Family',
  module
).addDecorator(withKnobs)

const ProgressBarComposedStories = storiesOf(
  'Components/ProgressBar/Composed',
  module
).addDecorator(withKnobs)

ProgressBarStories.add(
  'ProgressBar',
  () => {
    return (
      <div className="story--example">
        <ProgressBar
          style={{width: '300px'}}
          barGradient={
            Gradients[
              select(
                'gradient',
                {None: 'none', ...mapEnumKeys(Gradients)},
                'MiyazakiSky'
              )
            ]
          }
          value={number('value', 50)}
          max={number('max', 100)}
          color={color('color', `${InfluxColors.Pool}`)}
          label={text('label', 'Fennec Cuteness')}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ProgressBarReadme),
    },
  }
)

ProgressBarComposedStories.add(
  'ThresholdBar',
  () => {
    return (
      <div className="story--example">
        <ThresholdBar
          style={{width: '300px'}}
          value={number('value', 50)}
          max={number('max', 100)}
          label={text('label', 'Stingrays')}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ThresholdBarReadme),
    },
  }
)
