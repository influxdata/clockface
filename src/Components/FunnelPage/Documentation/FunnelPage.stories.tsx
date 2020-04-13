// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {FunnelPage, FunnelPageRef, FunnelPageFooterRef} from '../'
import {AppWrapper} from '../../AppWrapper/AppWrapper'
import {Icon, Bullet} from '../../Icon'
import {Button} from '../../Button/Composed/Button'
import {CTAButton} from '../../Button/Composed/CTAButton'
import {Grid} from '../../Grid'
import {Panel} from '../../Panel'
import {FlexBox} from '../../FlexBox'
import {Heading} from '../../Typography'
import {Notification} from '../../Notification'

// Types
import {
  InfluxColors,
  IconFont,
  JustifyContent,
  AlignItems,
  FlexDirection,
  ComponentColor,
  ComponentSize,
  Columns,
  HeadingElement,
  Gradients,
} from '../../../Types'

// Notes
import FunnelPageReadme from './FunnelPage.md'
import FunnelPageFooterReadme from './FunnelPageFooter.md'
import ExampleFunnelPageReadme from './ExampleFunnelPage.md'

const funnelPageStories = storiesOf(
  'Layout|FunnelPage/Family',
  module
).addDecorator(withKnobs)

const funnelPageExampleStories = storiesOf(
  'Layout|FunnelPage/Examples',
  module
).addDecorator(withKnobs)

funnelPageStories.add(
  'FunnelPage',
  () => {
    const funnelPageRef = createRef<FunnelPageRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(funnelPageRef.current)
      /* eslint-enable */
    }

    const logo = boolean('show logo', true) ? (
      <img
        src="https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--white-alpha.png"
        width="170"
      />
    ) : (
      undefined
    )

    return (
      <div className="mockPageWrapper">
        <div className="mockPage">
          <div className="story--test-buttons">
            <button onClick={logRef}>Log Ref</button>
          </div>
          <AppWrapper type="funnel">
            <FunnelPage.FunnelPage
              ref={funnelPageRef}
              logo={logo}
              enableGraphic={boolean('enableGraphic', false)}
              backgroundColor={
                InfluxColors[
                  select(
                    'backgroundColor',
                    mapEnumKeys(InfluxColors),
                    'DeepPurple'
                  )
                ]
              }
              accentColorA={
                InfluxColors[
                  select('accentColorA', mapEnumKeys(InfluxColors), 'Sapphire')
                ]
              }
              accentColorB={
                InfluxColors[
                  select('accentColorB', mapEnumKeys(InfluxColors), 'Amethyst')
                ]
              }
            >
              <Heading
                element={HeadingElement.H1}
                className="cf-funnel-page--title"
              >
                I am a page title
              </Heading>
              <Heading
                element={HeadingElement.P}
                className="cf-funnel-page--subtitle"
              >
                I am a <strong>subtitle</strong>
              </Heading>
              <p>
                Hell of wayfarers bespoke, butcher unicorn adaptogen kitsch
                enamel pin sustainable. Hoodie adaptogen pok pok, tofu small
                batch synth trust fund jianbing marfa activated charcoal
                pour-over mlkshk knausgaard truffaut. Waistcoat salvia neutra
                DIY, bespoke glossier disrupt you probably haven't heard of
                them. Aesthetic pork belly flexitarian kale chips you probably
                haven't heard of them.
              </p>
              <p>
                Tattooed hella enamel pin lo-fi shaman vexillologist. Hoodie
                cornhole lyft taxidermy. Hammock tote bag taxidermy shaman.
                Migas everyday carry quinoa gastropub try-hard kitsch literally
                locavore freegan austin swag. Jianbing swag deep v helvetica
                vexillologist dreamcatcher distillery typewriter, microdosing
                pinterest slow-carb. Taxidermy hashtag whatever, taiyaki
                wayfarers air plant la croix brooklyn. Austin hell of mlkshk,
                normcore hashtag live-edge you probably haven't heard of them
                listicle meggings.
              </p>
              <p>
                Trust fund celiac 3 wolf moon neutra, brunch put a bird on it
                bespoke. Pinterest four loko gluten-free copper mug sriracha.
                Whatever street art cornhole, irony hexagon live-edge actually
                church-key pug vape. Locavore pork belly quinoa unicorn whatever
                fanny pack af vape. Hashtag bushwick narwhal, polaroid unicorn
                viral shabby chic blog vexillologist.
              </p>
              <p>
                Organic keytar roof party put a bird on it, tacos lyft art party
                crucifix man bun single-origin coffee seitan 8-bit disrupt etsy
                farm-to-table. Palo santo mustache pitchfork cold-pressed 8-bit.
                Master cleanse crucifix yuccie cliche cornhole. Chillwave
                butcher enamel pin roof party celiac. Chia street art ethical
                flannel kale chips. Offal gluten-free roof party knausgaard,
                hella trust fund readymade 3 wolf moon meditation swag. Selvage
                irony paleo franzen pork belly shoreditch.
              </p>
            </FunnelPage.FunnelPage>
          </AppWrapper>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FunnelPageReadme),
    },
  }
)

funnelPageStories.add(
  'FunnelPageFooter',
  () => {
    const funnelPageFooterRef = createRef<FunnelPageFooterRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(funnelPageFooterRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <FunnelPage.Footer>
          <FunnelPage.FooterSection>
            <p>I am a footer!</p>
          </FunnelPage.FooterSection>
        </FunnelPage.Footer>
      </div>
    )
  },
  {
    readme: {
      content: marked(FunnelPageFooterReadme),
    },
  }
)

funnelPageExampleStories.add(
  'Sign Up Page',
  () => {
    const logo = (
      <img
        src="https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--white-alpha.png"
        width="170"
      />
    )

    const [notificationState, setNotificationState] = useState<boolean>(false)

    const handleDismissNotification = (): void => {
      setNotificationState(false)
    }

    const handleShowNotification = (): void => {
      setNotificationState(true)
    }

    return (
      <div className="mockPageWrapper">
        <div className="mockPage">
          <AppWrapper type="funnel">
            <FunnelPage
              logo={logo}
              enableGraphic={boolean('enableGraphic', false)}
            >
              <Notification
                size={ComponentSize.Small}
                visible={notificationState}
                icon={IconFont.Zap}
                gradient={Gradients.KawaiiDesu}
                onDismiss={handleDismissNotification}
              >
                Yeehaw I'm a notification
              </Notification>
              <Grid>
                <Grid.Row>
                  <Grid.Column widthSM={Columns.Eight} offsetSM={Columns.Two}>
                    <Heading
                      element={HeadingElement.H1}
                      className="cf-funnel-page--title"
                    >
                      Create your Free InfluxCloud Account
                    </Heading>
                    <Heading
                      element={HeadingElement.P}
                      className="cf-funnel-page--subtitle"
                    >
                      No credit card required
                    </Heading>
                    <Panel>
                      <Panel.SymbolHeader
                        symbol={<Bullet text="1" />}
                        title={
                          <Heading
                            element={HeadingElement.H3}
                            className="cf-funnel-page--panel-title"
                          >
                            Get a coconut
                          </Heading>
                        }
                      />
                      <Panel.Body>
                        <p style={{textAlign: 'left'}}>
                          Lorem ipsum dolor amet cold-pressed selvage literally
                          humblebrag YOLO, kale chips adaptogen whatever synth
                          deep v letterpress iceland post-ironic.
                        </p>
                      </Panel.Body>
                    </Panel>
                    <Panel>
                      <Panel.SymbolHeader
                        symbol={<Bullet text="2" />}
                        title={
                          <h3 className="cf-funnel-page--panel-title">
                            Put a lime in the coconut
                          </h3>
                        }
                      />
                      <Panel.Body>
                        <p style={{textAlign: 'left'}}>
                          Lorem ipsum dolor amet cold-pressed selvage literally
                          humblebrag YOLO, kale chips adaptogen whatever synth
                          deep v letterpress iceland post-ironic.
                        </p>
                      </Panel.Body>
                    </Panel>
                    <Panel>
                      <Panel.SymbolHeader
                        symbol={<Bullet text="3" />}
                        title={
                          <h3 className="cf-funnel-page--panel-title">
                            Mix it all up
                          </h3>
                        }
                      />
                      <Panel.Body>
                        <p style={{textAlign: 'left'}}>
                          Lorem ipsum dolor amet cold-pressed selvage literally
                          humblebrag YOLO, kale chips adaptogen whatever synth
                          deep v letterpress iceland post-ironic.
                        </p>
                      </Panel.Body>
                    </Panel>
                    <p className="cf-funnel-page--subtitle">
                      Next: <strong>Make Some Spaghetti</strong>
                    </p>
                    <CTAButton text="Continue" color={ComponentColor.Primary} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </FunnelPage>
            <FunnelPage.Footer>
              <FunnelPage.FooterSection
                style={{backgroundColor: InfluxColors.Raven}}
              >
                <p style={{margin: '6px 0', fontWeight: 900, fontSize: '14px'}}>
                  <Icon
                    glyph={IconFont.Bell}
                    style={{fontSize: '1.25em', marginRight: '0.5em'}}
                  />{' '}
                  Set budgets and alerts to control costs
                </p>
              </FunnelPage.FooterSection>
              <FunnelPage.FooterSection>
                <Grid>
                  <Grid.Row>
                    <Grid.Column widthSM={Columns.Eight} offsetSM={Columns.Two}>
                      <FlexBox
                        justifyContent={JustifyContent.SpaceBetween}
                        alignItems={AlignItems.Center}
                        direction={FlexDirection.Row}
                        stretchToFitWidth={true}
                        style={{margin: '18px 0'}}
                      >
                        <div>
                          <h2
                            style={{
                              color: InfluxColors.Rainforest,
                              margin: '0',
                            }}
                          >
                            $450/mo
                          </h2>
                          <h5 style={{margin: '0'}}>Estimated Costs</h5>
                        </div>
                        <Button
                          color={ComponentColor.Secondary}
                          text="Upgrade to Usage-Based Plan"
                          size={ComponentSize.Large}
                          onClick={handleShowNotification}
                        />
                      </FlexBox>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </FunnelPage.FooterSection>
            </FunnelPage.Footer>
          </AppWrapper>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ExampleFunnelPageReadme),
    },
  }
)
