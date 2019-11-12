// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {FunnelPage, FunnelPageRef} from '../'
import {AppWrapper} from '../../AppWrapper/AppWrapper'

// Types
import {InfluxColors} from '../../../Types'

// Notes
import FunnelPageReadme from './FunnelPage.md'

const alertStories = storiesOf('Layout|FunnelPage/Family', module).addDecorator(
  withKnobs
)

alertStories.add(
  'FunnelPage',
  () => {
    const funnelPageRef = createRef<FunnelPageRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(funnelPageRef.current)
      /* eslint-enable */
    }

    const logo = (
      <img
        src="https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--white-alpha.png"
        width="170"
      />
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
                  select('accentColorA', mapEnumKeys(InfluxColors), 'Magenta')
                ]
              }
              accentColorB={
                InfluxColors[
                  select('accentColorB', mapEnumKeys(InfluxColors), 'Amethyst')
                ]
              }
            >
              <h2>Use H2 for Funnel Page titles</h2>
              <h5>
                Use H5 for <strong>Funnel Page</strong> sub-titles,
                <br />
                but don't feel too constrained
              </h5>
              <p>
                Lorem ipsum dolor amet cold-pressed selvage literally humblebrag
                YOLO, kale chips adaptogen whatever synth deep v letterpress
                iceland post-ironic. 3 wolf moon fixie sriracha synth. Cronut
                thundercats aesthetic gentrify flexitarian gastropub tumeric
                direct trade migas umami hot chicken wolf poke skateboard etsy.
                Post-ironic raw denim air plant kogi cray shabby chic normcore
                yuccie. Skateboard raw denim bitters lumbersexual. Drinking
                vinegar flannel bushwick literally crucifix marfa.
              </p>
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
