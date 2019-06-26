// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Panel} from './Panel'

// Types
import {Gradients, ComponentSize, InfluxColors} from '../../Types'

// Notes
const ExampleReadme = marked(require('./README.md'))
const PanelReadme = marked(require('./Panel.md'))
const PanelHeaderReadme = marked(require('./PanelHeader.md'))
const PanelBodyReadme = marked(require('./PanelBody.md'))
const PanelFooterReadme = marked(require('./PanelFooter.md'))

const panelStories = storiesOf('Components|Panels/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const panelExampleStories = storiesOf('Components|Panels/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

panelStories.add(
  'Panel',
  () => (
    <div className="story--example">
      <Panel
        gradient={
          Gradients[
            select(
              'gradient',
              {None: 'none', ...mapEnumKeys(Gradients)},
              'None'
            )
          ]
        }
        backgroundColor={color('backgroundColor', `${InfluxColors.Castle}`)}
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
      />
    </div>
  ),
  {
    readme: {
      content: PanelReadme,
    },
  }
)

panelStories.add(
  'PanelHeader',
  () => (
    <div className="story--example">
      <Panel.Header title={text('title', 'I am a cool Panel')} />
    </div>
  ),
  {
    readme: {
      content: PanelHeaderReadme,
    },
  }
)

panelStories.add(
  'PanelBody',
  () => (
    <div className="story--example">
      <Panel.Body>
        <span>{text('children', 'Example paragraph text')}</span>
      </Panel.Body>
    </div>
  ),
  {
    readme: {
      content: PanelBodyReadme,
    },
  }
)

panelStories.add(
  'PanelFooter',
  () => (
    <div className="story--example">
      <Panel.Footer>
        <span>{text('children', 'Example footer text')}</span>
      </Panel.Footer>
    </div>
  ),
  {
    readme: {
      content: PanelFooterReadme,
    },
  }
)

panelExampleStories.add(
  'Getting Started Panel',
  () => (
    <div className="story--example">
      <Panel size={ComponentSize.Small}>
        <Panel.Header title="Getting started with InfluxDB 2.0" />
        <Panel.Body>
          <p>
            Lorem ipsum dolor amet tofu quinoa poke pitchfork adaptogen
            sustainable kitsch messenger bag offal austin jean shorts lo-fi
            enamel pin chia. Man bun pabst organic blog. Vexillologist yr woke
            actually hammock. You probably haven't heard of them hella
            fingerstache pork belly tacos, food truck messenger bag squid
            readymade kickstarter vexillologist chillwave.
          </p>
        </Panel.Body>
        <Panel.Footer>
          <p>
            Check our <a href="#">Documentation Site</a> for more tutorials
          </p>
        </Panel.Footer>
      </Panel>
    </div>
  ),
  {
    readme: {
      content: ExampleReadme,
    },
  }
)

panelExampleStories.add(
  'Dangerous Action Panel',
  () => (
    <div className="story--example">
      <Panel size={ComponentSize.Small} gradient={Gradients.DocScott}>
        <Panel.Header title="Danger Zone!" />
        <Panel.Body>
          <p>These actions can have unintended wide-reaching consequences</p>
        </Panel.Body>
      </Panel>
    </div>
  ),
  {
    readme: {
      content: ExampleReadme,
    },
  }
)

panelExampleStories.add(
  'Dismissable Panel',
  () => (
    <div className="story--example">
      <Panel
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        gradient={
          Gradients[
            select(
              'gradient',
              {None: 'none', ...mapEnumKeys(Gradients)},
              'GundamPilot'
            )
          ]
        }
        onDismiss={() => alert('onDismiss clicked!')}
      >
        <Panel.Header title="Welcome!" />
        <Panel.Body>
          <h5>We've built a lot of cool new things to make your life easier</h5>
          <h5>
            <a href="#">Click Here</a> to take the tour
          </h5>
        </Panel.Body>
      </Panel>
    </div>
  ),
  {
    readme: {
      content: ExampleReadme,
    },
  }
)
