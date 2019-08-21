// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Panel} from './Panel'
import {Grid} from '../GridLayout/Grid'

// Types
import {Gradients, ComponentSize, InfluxColors, Columns} from '../../Types'

// Notes
import PanelReadme from './Panel.md'
import PanelHeaderReadme from './PanelHeader.md'
import PanelBodyReadme from './PanelBody.md'
import PanelFooterReadme from './PanelFooter.md'
import ExampleAReadme from './PanelExampleA.md'
import ExampleBReadme from './PanelExampleB.md'
import ExampleCReadme from './PanelExampleC.md'

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
      content: marked(PanelReadme),
    },
  }
)

panelStories.add(
  'PanelHeader',
  () => (
    <div className="story--example">
      <Panel.Header>
        <Panel.Title>{text('title', 'I am a cool Panel')}</Panel.Title>
      </Panel.Header>
    </div>
  ),
  {
    readme: {
      content: marked(PanelHeaderReadme),
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
      content: marked(PanelBodyReadme),
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
      content: marked(PanelFooterReadme),
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
        <Panel.Header>
          <Panel.Title>Welcome!</Panel.Title>
        </Panel.Header>
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
      content: marked(ExampleAReadme),
    },
  }
)

panelExampleStories.add(
  'Getting Started Panel',
  () => (
    <div className="story--example">
      <Panel size={ComponentSize.Small}>
        <Panel.Header>
          <Panel.Title>Getting started with InfluxDB 2.0</Panel.Title>
        </Panel.Header>
        <Panel.Body>
          <Grid>
            <Grid.Row>
              <Grid.Column widthSM={Columns.Four}>
                <Panel
                  size={ComponentSize.Small}
                  backgroundColor={InfluxColors.Onyx}
                >
                  <Panel.Body>
                    <p>Configure a Data Collector</p>
                  </Panel.Body>
                </Panel>
              </Grid.Column>
              <Grid.Column widthSM={Columns.Four}>
                <Panel
                  size={ComponentSize.Small}
                  backgroundColor={InfluxColors.Onyx}
                >
                  <Panel.Body>
                    <p>Build a Monitoring Dashboard</p>
                  </Panel.Body>
                </Panel>
              </Grid.Column>
              <Grid.Column widthSM={Columns.Four}>
                <Panel
                  size={ComponentSize.Small}
                  backgroundColor={InfluxColors.Onyx}
                >
                  <Panel.Body>
                    <p>Explore Data with Flux</p>
                  </Panel.Body>
                </Panel>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
      content: marked(ExampleBReadme),
    },
  }
)

panelExampleStories.add(
  'Danger Zone Panel',
  () => (
    <div className="story--example">
      <Panel size={ComponentSize.Small} gradient={Gradients.DocScott}>
        <Panel.Header>
          <Panel.Title>Danger Zone!</Panel.Title>
        </Panel.Header>
        <Panel.Body>
          <p>These actions can have unintended wide-reaching consequences</p>
        </Panel.Body>
      </Panel>
    </div>
  ),
  {
    readme: {
      content: marked(ExampleCReadme),
    },
  }
)
