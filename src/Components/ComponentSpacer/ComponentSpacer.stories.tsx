import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {ComponentSpacer} from './ComponentSpacer'
import {withKnobs, radios, boolean} from '@storybook/addon-knobs'
import {Alignment, Stack} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const componentSpacerStories = storiesOf(
  'ComponentSpacer Component',
  module
).addDecorator(withKnobs)

componentSpacerStories.add('Component Spacer', () => (
  <ComponentSpacer
    align={Alignment[radios('align', mapEnumKeys(Alignment))]}
    stackChildren={Stack[radios('stackChildren', mapEnumKeys(Stack))]}
    stretchToFitWidth={boolean('stretchToFitWidth', false)}
    stretchToFitHeight={boolean('stretchToFitHeight', false)}
  >
    <div className="mockComponent" />
    <div className="mockComponent" />
    <div className="mockComponent" />
  </ComponentSpacer>
))
