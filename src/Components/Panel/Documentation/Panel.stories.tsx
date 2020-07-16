// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, color, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  Panel,
  PanelRef,
  PanelHeaderRef,
  PanelBodyRef,
  PanelFooterRef,
  PanelSymbolHeaderRef,
} from '../'
import {BannerPanel, BannerPanelRef} from '../Composed/BannerPanel'
import {Grid} from '../../Grid'
import {Bullet} from '../../Icon'
import {Heading} from '../../Typography'
import {GradientBox} from '../../GradientBox/GradientBox'

// Types
import {
  Gradients,
  ComponentSize,
  InfluxColors,
  Columns,
  JustifyContent,
  FlexDirection,
  AlignItems,
  IconFont,
  HeadingElement,
  Typeface,
  FontWeight,
} from '../../../Types'

// Notes
import PanelReadme from './Panel.md'
import PanelHeaderReadme from './PanelHeader.md'
import PanelSymbolHeaderReadme from './PanelSymbolHeader.md'
import BannerPanelReadme from './BannerPanel.md'
import PanelBodyReadme from './PanelBody.md'
import PanelFooterReadme from './PanelFooter.md'
import ExampleAReadme from './PanelExampleA.md'
import ExampleBReadme from './PanelExampleB.md'
import ExampleCReadme from './PanelExampleC.md'
import ExampleDReadme from './PanelExampleD.md'
import PanelPlaygroundReadme from './PanelPlayground.md'

const panelStories = storiesOf('Components|Panels/Family', module).addDecorator(
  withKnobs
)

const panelComposedStories = storiesOf(
  'Components|Panels/Composed',
  module
).addDecorator(withKnobs)

const panelExampleStories = storiesOf(
  'Components|Panels/Examples',
  module
).addDecorator(withKnobs)

panelStories.add(
  'Panel',
  () => {
    const panelRef: RefObject<PanelRef> = createRef()

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
    const panelHeaderRef: RefObject<PanelHeaderRef> = createRef()

    const logPanelRefs = (): void => {
      /* eslint-disable */
      console.log('PanelHeader', panelHeaderRef.current)
      /* eslint-enable */
    }

    const headerTypes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

    return (
      <div className="story--example">
        <Panel.Header
          ref={panelHeaderRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          direction={
            FlexDirection[
              select('direction', mapEnumKeys(FlexDirection), 'Row')
            ]
          }
          alignItems={
            AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Center')]
          }
          justifyContent={
            JustifyContent[
              select(
                'justifyContent ',
                mapEnumKeys(JustifyContent),
                'SpaceBetween'
              )
            ]
          }
          margin={
            ComponentSize[
              select(
                'margin',
                {None: '', ...mapEnumKeys(ComponentSize)},
                'None'
              )
            ]
          }
        >
          {select('title element', headerTypes, headerTypes[3]) ===
            headerTypes[0] && <h1>{text('title', 'I am a cool Panel')}</h1>}
          {select('title element', headerTypes, headerTypes[3]) ===
            headerTypes[1] && <h2>{text('title', 'I am a cool Panel')}</h2>}
          {select('title element', headerTypes, headerTypes[3]) ===
            headerTypes[2] && <h3>{text('title', 'I am a cool Panel')}</h3>}
          {select('title element', headerTypes, headerTypes[3]) ===
            headerTypes[3] && <h4>{text('title', 'I am a cool Panel')}</h4>}
          {select('title element', headerTypes, headerTypes[3]) ===
            headerTypes[4] && <h5>{text('title', 'I am a cool Panel')}</h5>}
          {select('title element', headerTypes, headerTypes[3]) ===
            headerTypes[5] && <h6>{text('title', 'I am a cool Panel')}</h6>}
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
    const panelBodyRef: RefObject<PanelBodyRef> = createRef()

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
          direction={
            FlexDirection[
              select('direction', mapEnumKeys(FlexDirection), 'Column')
            ]
          }
          alignItems={
            AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Stretch')]
          }
          justifyContent={
            JustifyContent[
              select(
                'justifyContent ',
                mapEnumKeys(JustifyContent),
                'FlexStart'
              )
            ]
          }
          margin={
            ComponentSize[
              select(
                'margin',
                {None: '', ...mapEnumKeys(ComponentSize)},
                'None'
              )
            ]
          }
        >
          <p>
            {text(
              'children',
              'Lorem ipsum dolor amet aesthetic quinoa small batch crucifix snackwave pabst typewriter kinfolk craft beer wolf unicorn activated charcoal chambray tattooed. Pok pok everyday carry tattooed etsy, small batch photo booth paleo cray prism fanny pack cred. Beard vinyl affogato leggings. Cold-pressed selfies pinterest crucifix freegan cronut glossier vegan drinking vinegar food truck quinoa lumbersexual.'
            )}
          </p>
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
    const panelFooterRef: RefObject<PanelFooterRef> = createRef()

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
          direction={
            FlexDirection[
              select('direction', mapEnumKeys(FlexDirection), 'Row')
            ]
          }
          alignItems={
            AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Center')]
          }
          justifyContent={
            JustifyContent[
              select('justifyContent ', mapEnumKeys(JustifyContent), 'Center')
            ]
          }
          margin={
            ComponentSize[
              select(
                'margin',
                {None: '', ...mapEnumKeys(ComponentSize)},
                'None'
              )
            ]
          }
        >
          <div className="mockComponent mockButton">Button</div>
          <div className="mockComponent mockButton">Button</div>
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

panelComposedStories.add(
  'PanelSymbolHeader',
  () => {
    const panelSymbolHeaderRef: RefObject<PanelSymbolHeaderRef> = createRef()

    const logPanelSymbolHeaderRef = (): void => {
      /* eslint-disable */
      console.log(panelSymbolHeaderRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Panel.SymbolHeader
          ref={panelSymbolHeaderRef}
          symbol={<Bullet text={1} />}
          title={<h4>Panel Title</h4>}
        />
        <div className="story--test-buttons">
          <button onClick={logPanelSymbolHeaderRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PanelSymbolHeaderReadme),
    },
  }
)

panelComposedStories.add(
  'BannerPanel',
  () => {
    const bannerPanelRef: RefObject<BannerPanelRef> = createRef()

    const logBannerPanelRef = (): void => {
      /* eslint-disable */
      console.log(bannerPanelRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <BannerPanel
          ref={bannerPanelRef}
          size={
            ComponentSize[
              select('size', mapEnumKeys(ComponentSize), 'ExtraSmall')
            ]
          }
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'GraphLine'
              )
            ]
          }
          gradient={
            Gradients[
              select(
                'gradient',
                {None: 'none', ...mapEnumKeys(Gradients)},
                'BeijingEclipse'
              )
            ]
          }
          textColor={color('textColor', `${InfluxColors.Twilight}`)}
        >
          <div
            style={{
              width: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              Is some text with <a href="#">a link to nowhere</a>
            </div>
            <div className="mockComponent mockButton">This is not a button</div>
          </div>
        </BannerPanel>
        <div className="story--test-buttons">
          <button onClick={logBannerPanelRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(BannerPanelReadme),
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
        border={boolean('border', false)}
      >
        <Panel.Header
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <h3>Welcome!</h3>
        </Panel.Header>
        <Panel.Body
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <p>We've built a lot of cool new things to make your life easier</p>
          <p>
            <a href="#">Click Here</a> to take the tour
          </p>
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
          <h5>Getting started with InfluxDB 2.0</h5>
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
          <h3>Danger Zone!</h3>
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

panelExampleStories.add(
  'Numbered Panel',
  () => (
    <div className="story--example">
      <Panel style={{width: '100%'}}>
        <Panel.SymbolHeader
          symbol={
            <Bullet
              text={1}
              size={
                ComponentSize[
                  select('symbol size', mapEnumKeys(ComponentSize), 'Medium')
                ]
              }
            />
          }
          title={<h5>Panel Title</h5>}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Panel Header Content
        </Panel.SymbolHeader>
        <Panel.Body
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          Panel Body Content
        </Panel.Body>
        <Panel.Footer
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          justifyContent={JustifyContent.FlexStart}
        >
          <p>Panel Footer Content</p>
        </Panel.Footer>
      </Panel>
    </div>
  ),
  {
    readme: {
      content: marked(ExampleDReadme),
    },
  }
)

panelExampleStories.add(
  'Panel Playground',
  () => (
    <div className="story--example">
      <GradientBox
        borderGradient={
          Gradients[
            select(
              'border gradient',
              {None: 'none', ...mapEnumKeys(Gradients)},
              'MiyazakiSky'
            )
          ]
        }
        borderColor={color('border color', `${InfluxColors.Raven}`)}
      >
        <Panel
          gradient={
            Gradients[
              select(
                'background gradient',
                {None: 'none', ...mapEnumKeys(Gradients)},
                'None'
              )
            ]
          }
          style={{width: '500px'}}
          backgroundColor={color('background color', `${InfluxColors.Raven}`)}
        >
          <Panel.Header
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            <Heading
              element={
                HeadingElement[
                  select('header element', mapEnumKeys(HeadingElement), 'H3')
                ]
              }
              appearance={
                HeadingElement[
                  select(
                    'header appearance',
                    {Inherit: '', ...mapEnumKeys(HeadingElement)},
                    'Inherit'
                  )
                ]
              }
              type={Typeface[select('type', mapEnumKeys(Typeface), 'Rubik')]}
              weight={
                FontWeight[select('weight', mapEnumKeys(FontWeight), 'Medium')]
              }
              underline={boolean('underline', false)}
              selectable={boolean('selectable', false)}
            >
              {text('header text', 'Heads up')}
            </Heading>
          </Panel.Header>
          <Panel.Body
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            <p>{text('body text', 'Body rock')}</p>
          </Panel.Body>
          {boolean('footer', true) && (
            <Panel.Footer>
              <div className="mockComponent mockButton">Not a button</div>
            </Panel.Footer>
          )}
        </Panel>
      </GradientBox>
    </div>
  ),
  {
    readme: {
      content: marked(PanelPlaygroundReadme),
    },
  }
)
