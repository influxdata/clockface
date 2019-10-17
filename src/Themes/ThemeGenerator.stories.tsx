// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, object} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {ThemeGenerator, Theme} from './ThemeGenerator'

// Notes
import ThemeGeneratorReadme from './ThemeGenerator.md'

const themeStories = storiesOf('Theme|Utilities', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

themeStories.add(
  'Generator',
  () => {
    const theme: Theme = {
      type: 'dark',
      goldenHour: true,
      blackTint: '#7A65F2',
      whiteTint: '#22ADF6',
      primary: '#22ADF6',
      secondary: '#7A65F2',
      success: '#4ED8A0',
      warning: '#FFB94A',
      danger: '#F95F53',
    }

    return <ThemeGenerator theme={object('theme', theme)} />
  },
  {
    readme: {
      content: marked(ThemeGeneratorReadme),
    },
  }
)
