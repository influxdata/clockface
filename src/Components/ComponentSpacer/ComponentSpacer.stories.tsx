import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {ComponentSpacer} from './ComponentSpacer'
import {withKnobs, select, boolean} from '@storybook/addon-knobs'
import {Alignment, Stack} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const componentSpacerStories = storiesOf(
  'Component Spacer',
  module
).addDecorator(withKnobs)

componentSpacerStories.add('ComponentSpacer Component', () => (
  <ComponentSpacer
    align={Alignment[select('align', mapEnumKeys(Alignment), 'Left')]}
    stackChildren={
      Stack[select('stackChildren', mapEnumKeys(Stack), 'Columns')]
    }
    stretchToFitWidth={boolean('stretchToFitWidth', false)}
    stretchToFitHeight={boolean('stretchToFitHeight', false)}
  >
    <div className="mockComponent box" />
    <div className="mockComponent box" />
    <div className="mockComponent box" />
  </ComponentSpacer>
))
