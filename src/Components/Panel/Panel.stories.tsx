// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Panel} from './Panel'

// Types
import {Gradients, ComponentSize, InfluxColors} from '../../Types'

const panelStories = storiesOf('Components|Panels', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

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
