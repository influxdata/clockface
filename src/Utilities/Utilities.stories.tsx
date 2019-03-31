import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {ComponentSpacer} from './ComponentSpacer/ComponentSpacer'
import {withKnobs, select, boolean} from '@storybook/addon-knobs'
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
  ComponentSize,
} from '../Types'
import {mapEnumKeys} from '../../.storybook/utils'

const utilitiesStories = storiesOf('Utilities', module).addDecorator(withKnobs)

utilitiesStories.add('ComponentSpacer', () => (
  <ComponentSpacer
    direction={
      FlexDirection[select('direction', mapEnumKeys(FlexDirection), 'Row')]
    }
    alignItems={
      AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Center')]
    }
    justifyContent={
      JustifyContent[
        select('justifyContent ', mapEnumKeys(JustifyContent), 'FlexStart')
      ]
    }
    margin={
      ComponentSize[
        select('margin', {None: '', ...mapEnumKeys(ComponentSize)}, 'None')
      ]
    }
    stretchToFitWidth={boolean('stretchToFitWidth', false)}
    stretchToFitHeight={boolean('stretchToFitHeight', false)}
  >
    <div className="mockComponent box" style={{height: '40px'}} />
    <div className="mockComponent box" style={{height: '60px'}} />
    <div className="mockComponent box" style={{height: '80px'}} />
    <div className="mockComponent box" style={{height: '100px'}} />
    <div className="mockComponent box" style={{height: '120px'}} />
  </ComponentSpacer>
))
