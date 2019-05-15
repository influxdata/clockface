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

const panelStories = storiesOf('Components|Panels/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const panelExampleStories = storiesOf('Components|Panels/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

panelStories.add('Panel', () => (
  <Panel
    gradient={
      Gradients[
        select('gradient', {None: 'none', ...mapEnumKeys(Gradients)}, 'None')
      ]
    }
    backgroundColor={color('backgroundColor', `${InfluxColors.Castle}`)}
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
  />
))

panelStories.add('PanelHeader', () => (
  <Panel.Header title={text('title', 'I am a cool Panel')} />
))

panelStories.add('PanelBody', () => (
  <Panel.Body>
    <span>{text('children', 'Example paragraph text')}</span>
  </Panel.Body>
))

panelStories.add('PanelFooter', () => (
  <Panel.Footer>
    <span>{text('children', 'Example footer text')}</span>
  </Panel.Footer>
))

panelExampleStories.add('Getting Started Panel', () => (
  <Panel size={ComponentSize.Small}>
    <Panel.Header title="Getting started with InfluxDB 2.0" />
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
      <p>
        Check our <a href="#">Documentation Site</a> for more tutorials
      </p>
    </Panel.Footer>
  </Panel>
))

panelExampleStories.add('Dangerous Action Panel', () => (
  <Panel size={ComponentSize.Small} gradient={Gradients.DocScott}>
    <Panel.Header title="Danger Zone!" />
    <Panel.Body>
      <p>These actions can have unintended wide-reaching consequences</p>
    </Panel.Body>
  </Panel>
))
