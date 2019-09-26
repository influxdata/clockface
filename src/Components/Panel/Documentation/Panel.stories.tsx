// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Panel} from '../'
import {Grid} from '../../Grid/Grid'

// Types
import {Gradients, ComponentSize, InfluxColors, Columns} from '../../../Types'

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
  () => {
    const panelRef: RefObject<HTMLDivElement> = createRef()

    const logPanelRef = (): void => {
      /* eslint-disable */
      console.log(panelRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Panel.Panel
          ref={panelRef}
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
        <div className="story--test-buttons">
          <button onClick={logPanelRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PanelReadme),
    },
  }
)

panelStories.add(
  'PanelHeader',
  () => {
    const panelHeaderRef: RefObject<HTMLDivElement> = createRef()
    const panelTitleRef: RefObject<HTMLDivElement> = createRef()

    const logPanelRefs = (): void => {
      /* eslint-disable */
      console.log('PanelHeader', panelHeaderRef.current)
      console.log('PanelTitle', panelTitleRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Panel.Header
          ref={panelHeaderRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <Panel.Title
            ref={panelTitleRef}
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            {text('title', 'I am a cool Panel')}
          </Panel.Title>
        </Panel.Header>
        <div className="story--test-buttons">
          <button onClick={logPanelRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PanelHeaderReadme),
    },
  }
)

panelStories.add(
  'PanelBody',
  () => {
    const panelBodyRef: RefObject<HTMLDivElement> = createRef()

    const logPanelRef = (): void => {
      /* eslint-disable */
      console.log(panelBodyRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Panel.Body
          ref={panelBodyRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <span>{text('children', 'Example paragraph text')}</span>
        </Panel.Body>
        <div className="story--test-buttons">
          <button onClick={logPanelRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PanelBodyReadme),
    },
  }
)

panelStories.add(
  'PanelFooter',
  () => {
    const panelFooterRef: RefObject<HTMLDivElement> = createRef()

    const logPanelRef = (): void => {
      /* eslint-disable */
      console.log(panelFooterRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Panel.Footer
          ref={panelFooterRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <span>{text('children', 'Example footer text')}</span>
        </Panel.Footer>
        <div className="story--test-buttons">
          <button onClick={logPanelRef}>Log Ref</button>
        </div>
      </div>
    )
  },
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
        <Panel.Header
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <Panel.Title
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            Welcome!
          </Panel.Title>
        </Panel.Header>
        <Panel.Body
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
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
      <Panel>
        <Panel.Header
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <Panel.Title
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            Getting started with InfluxDB 2.0
          </Panel.Title>
        </Panel.Header>
        <Panel.Body
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <Grid>
            <Grid.Row>
              <Grid.Column widthSM={Columns.Four}>
                <Panel backgroundColor={InfluxColors.Onyx}>
                  <Panel.Body>
                    <p>Configure a Data Collector</p>
                  </Panel.Body>
                </Panel>
              </Grid.Column>
              <Grid.Column widthSM={Columns.Four}>
                <Panel backgroundColor={InfluxColors.Onyx}>
                  <Panel.Body>
                    <p>Build a Monitoring Dashboard</p>
                  </Panel.Body>
                </Panel>
              </Grid.Column>
              <Grid.Column widthSM={Columns.Four}>
                <Panel backgroundColor={InfluxColors.Onyx}>
                  <Panel.Body>
                    <p>Explore Data with Flux</p>
                  </Panel.Body>
                </Panel>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Panel.Body>
        <Panel.Footer
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
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
      <Panel gradient={Gradients.DocScott}>
        <Panel.Header
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <Panel.Title
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            Danger Zone!
          </Panel.Title>
        </Panel.Header>
        <Panel.Body
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
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
