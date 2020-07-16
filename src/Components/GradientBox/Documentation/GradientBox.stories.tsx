// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {GradientBox} from '../GradientBox'

// Types
import {Gradients, InfluxColors} from '../../../Types'

// Notes
import GradientBoxReadme from './GradientBox.md'

const gradientBoxStories = storiesOf('Atomic|GradientBox', module).addDecorator(
  withKnobs
)

gradientBoxStories.add(
  'GradientBox',
  () => {
    return (
      <div className="story--example">
        <GradientBox
          borderGradient={
            Gradients[
              select(
                'borderGradient',
                {None: 'none', ...mapEnumKeys(Gradients)},
                'MiyazakiSky'
              )
            ]
          }
          borderColor={color('borderColor', `${InfluxColors.Twilight}`)}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '2px',
              padding: '8px',
              backgroundColor: `${color(
                'background color',
                `${InfluxColors.Raven}`
              )}`,
            }}
          >
            some content
          </div>
        </GradientBox>
      </div>
    )
  },
  {
    readme: {
      content: marked(GradientBoxReadme),
    },
  }
)
