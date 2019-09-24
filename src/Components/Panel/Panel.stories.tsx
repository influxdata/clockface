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
import {PanelHeader} from './PanelHeader'
import {PanelTitle} from './PanelTitle'
import {PanelBody} from './PanelBody'
import {PanelFooter} from './PanelFooter'
import {Grid} from '../Grid/Grid'

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
      <PanelHeader
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
      >
        <PanelTitle
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          {text('title', 'I am a cool Panel')}
        </PanelTitle>
      </PanelHeader>
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
      <PanelBody
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
      >
        <span>{text('children', 'Example paragraph text')}</span>
      </PanelBody>
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
      <PanelFooter
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
      >
        <span>{text('children', 'Example footer text')}</span>
      </PanelFooter>
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
        <PanelHeader
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <PanelTitle
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            Welcome!
          </PanelTitle>
        </PanelHeader>
        <PanelBody
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <h5>We've built a lot of cool new things to make your life easier</h5>
          <h5>
            <a href="#">Click Here</a> to take the tour
          </h5>
        </PanelBody>
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
      <Panel>
        <PanelHeader
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <PanelTitle
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            Getting started with InfluxDB 2.0
          </PanelTitle>
        </PanelHeader>
        <PanelBody
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <Grid>
            <Grid.Row>
              <Grid.Column widthSM={Columns.Four}>
                <Panel backgroundColor={InfluxColors.Onyx}>
                  <PanelBody>
                    <p>Configure a Data Collector</p>
                  </PanelBody>
                </Panel>
              </Grid.Column>
              <Grid.Column widthSM={Columns.Four}>
                <Panel backgroundColor={InfluxColors.Onyx}>
                  <PanelBody>
                    <p>Build a Monitoring Dashboard</p>
                  </PanelBody>
                </Panel>
              </Grid.Column>
              <Grid.Column widthSM={Columns.Four}>
                <Panel backgroundColor={InfluxColors.Onyx}>
                  <PanelBody>
                    <p>Explore Data with Flux</p>
                  </PanelBody>
                </Panel>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </PanelBody>
        <PanelFooter
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <p>
            Check our <a href="#">Documentation Site</a> for more tutorials
          </p>
        </PanelFooter>
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
      <Panel gradient={Gradients.DocScott}>
        <PanelHeader
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <PanelTitle
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            Danger Zone!
          </PanelTitle>
        </PanelHeader>
        <PanelBody
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <p>These actions can have unintended wide-reaching consequences</p>
        </PanelBody>
      </Panel>
    </div>
  ),
  {
    readme: {
      content: marked(ExampleCReadme),
    },
  }
)
