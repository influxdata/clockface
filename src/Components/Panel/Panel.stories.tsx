import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Panel} from './Panel'
import {withKnobs, text, select, color} from '@storybook/addon-knobs'
import {Gradients, ComponentSize, InfluxColors} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const panelStories = storiesOf('Components|Panels', module).addDecorator(
  withKnobs
)

panelStories.add('Panel Family', () => (
  <Panel
    gradient={
      Gradients[
        select('gradient', {None: 'none', ...mapEnumKeys(Gradients)}, 'None')
      ]
    }
    backgroundColor={color('backgroundColor', `${InfluxColors.Castle}`)}
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
  >
    <Panel.Header title={text('title', 'Steel Panel')} />
    <Panel.Body>
      <p>
        Lorem ipsum dolor amet tofu quinoa poke pitchfork adaptogen sustainable
        kitsch messenger bag offal austin jean shorts lo-fi enamel pin chia. Man
        bun pabst organic blog. Vexillologist yr woke actually hammock. You
        probably haven't heard of them hella fingerstache pork belly tacos, food
        truck messenger bag squid readymade kickstarter vexillologist chillwave.
      </p>
    </Panel.Body>
    <Panel.Footer>
      <p>I am a footer!</p>
    </Panel.Footer>
  </Panel>
))
