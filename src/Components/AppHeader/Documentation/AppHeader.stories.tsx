// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {AppHeader, AppHeaderRef, AppHeaderLogoRef} from '../index'
import {PopNav} from '../../PopNav/index'

// Types
import {
  ComponentSize,
  ComponentColor,
  FlexDirection,
  Alignment,
} from '../../../Types'

// Notes
import AppHeaderReadme from './AppHeader.md'
import AppHeaderLogoReadme from './AppHeaderLogo.md'
import {Button} from '../../Button/Composed/Button'
import {FlexBox} from '../../FlexBox'

const appHeaderFamilyStories = storiesOf(
  'Layout|AppHeader/Family',
  module
).addDecorator(withKnobs)

const appHeaderExampleStories = storiesOf(
  'Layout|AppHeader/Example',
  module
).addDecorator(withKnobs)

appHeaderFamilyStories.add(
  'AppHeader',
  () => {
    const appHeaderRef = createRef<AppHeaderRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(appHeaderRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <AppHeader.AppHeader
          ref={appHeaderRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AppHeaderReadme),
    },
  }
)

appHeaderFamilyStories.add(
  'AppHeaderLogo',
  () => {
    const appHeaderLogoRef = createRef<AppHeaderLogoRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(appHeaderLogoRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <AppHeader.Logo
          ref={appHeaderLogoRef}
          src={text(
            'src',
            'https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--white-alpha.png'
          )}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AppHeaderLogoReadme),
    },
  }
)

appHeaderExampleStories.add(
  'AppHeader',
  () => {
    return (
      <div className="mockPageWrapper">
        <div className="mockPage">
          <AppHeader
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
          >
            <AppHeader.Logo
              src={text(
                'src',
                'https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--white-alpha.png'
              )}
              size={
                ComponentSize[
                  select('size', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
            />
            <FlexBox
              direction={FlexDirection.Row}
              margin={ComponentSize.Medium}
            >
              <Button
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
                text="Shiny Button"
                color={ComponentColor.Success}
              />
              <PopNav
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
                buttonColor={
                  ComponentColor[
                    select(
                      'PopNav button color',
                      {None: 'none', ...mapEnumKeys(ComponentColor)},
                      'none'
                    )
                  ]
                }
                align={
                  Alignment[
                    select('alignment', mapEnumKeys(Alignment), 'Right')
                  ]
                }
              >
                <div
                  style={{
                    margin: '0 16px',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                    }}
                  >
                    Signed in as
                  </div>
                  <div
                    style={{
                      color: '#BEF0FF',
                    }}
                  >
                    somewhatlongusername@yourdomain.com
                  </div>
                </div>
                <PopNav.Item
                  titleLink={className => (
                    <a className={className} href="#">
                      First Item
                    </a>
                  )}
                  active={false}
                />
                <PopNav.Item
                  titleLink={className => (
                    <a className={className} href="#">
                      Second Item
                    </a>
                  )}
                  active={false}
                />
                <PopNav.Item
                  titleLink={className => (
                    <a className={className} href="#">
                      Third Item
                    </a>
                  )}
                  active={false}
                />
              </PopNav>
            </FlexBox>
          </AppHeader>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AppHeaderReadme),
    },
  }
)
