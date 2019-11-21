// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {AppWrapper, AppWrapperRef} from '../AppWrapper'
import {AppHeader} from '../../AppHeader'
import {NavMenu} from '../../NavMenu'
import {FlexBox} from '../../FlexBox'
import {Button} from '../../Button/Composed/Button'
import {PopNav} from '../../PopNav'
import {Page} from '../../Page/index'
import {Icon} from '../../Icon/Base/Icon'

// Types
import {
  IconFont,
  ComponentSize,
  FlexDirection,
  ComponentColor,
} from '../../../Types'

// Notes
import AppWrapperReadme from './AppWrapper.md'

const layoutStories = storiesOf('Layout|AppWrapper', module).addDecorator(
  withKnobs
)

layoutStories.add(
  'AppWrapper',
  () => {
    const appWrapperRef = createRef<AppWrapperRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(appWrapperRef.current)
      /* eslint-enable */
    }

    return (
      <div className="mockPageWrapper">
        <div className="mockPage">
          <AppHeader
            size={
              ComponentSize[
                select('header size', mapEnumKeys(ComponentSize), 'Small')
              ]
            }
          >
            <AppHeader.Logo
              src={text(
                'src',
                'https://influxdata.github.io/branding/img/downloads/influxdata-logo--full--white-alpha.png'
              )}
              size={
                ComponentSize[
                  select('header size', mapEnumKeys(ComponentSize), 'Small')
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
                    select('header size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
                text="Shiny Button"
                color={ComponentColor.Success}
              />
              <PopNav
                size={
                  ComponentSize[
                    select('header size', mapEnumKeys(ComponentSize), 'Small')
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
          <AppWrapper
            ref={appWrapperRef}
            presentationMode={boolean('presentationMode', false)}
          >
            <NavMenu>
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    JohnDoe (OrgName)
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.CuboNav} />
                  </a>
                )}
                active={false}
              >
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Switch Organizations
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Create Organization
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Logout
                    </a>
                  )}
                  active={false}
                />
              </NavMenu.Item>
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Data Explorer
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.GraphLine} />
                  </a>
                )}
                active={false}
              />
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Dashboards
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.Dashboards} />
                  </a>
                )}
                active={false}
              />
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Tasks
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.Calendar} />
                  </a>
                )}
                active={true}
              />
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Monitoring & Alerting
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.Bell} />
                  </a>
                )}
                active={false}
              >
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      History
                    </a>
                  )}
                  active={false}
                />
              </NavMenu.Item>
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Load Data
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.DisksNav} />
                  </a>
                )}
                active={false}
              >
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Buckets
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Telegraf
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Scrapers
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Tokens
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Client Libraries
                    </a>
                  )}
                  active={false}
                />
              </NavMenu.Item>
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Settings
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.WrenchNav} />
                  </a>
                )}
                active={false}
              >
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Members
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Variables
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Templates
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Labels
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Profile
                    </a>
                  )}
                  active={false}
                />
              </NavMenu.Item>
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Cloud
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.Cloud} />
                  </a>
                )}
                active={false}
              >
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Billing
                    </a>
                  )}
                  active={false}
                />
                <NavMenu.SubItem
                  titleLink={(className: string) => (
                    <a className={className} href="#">
                      Usage
                    </a>
                  )}
                  active={false}
                />
              </NavMenu.Item>
              <NavMenu.Item
                titleLink={(className: string) => (
                  <a className={className} href="#">
                    Feedback
                  </a>
                )}
                iconLink={(className: string) => (
                  <a className={className} href="#">
                    <Icon glyph={IconFont.NavChat} />
                  </a>
                )}
                active={false}
              />
            </NavMenu>
            <Page titleTag="bloop">
              <Page.Header
                fullWidth={boolean('fullWidth', false)}
                gutters={
                  ComponentSize[
                    select('gutters', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <Page.HeaderLeft>
                  <Page.Title title={text('PageTitle title', 'Page Title')} />
                </Page.HeaderLeft>
                <Page.HeaderCenter>
                  {boolean('Button in PageHeaderCenter', true) ? (
                    <div className="mockComponent mockButton">
                      Center Button
                    </div>
                  ) : null}
                </Page.HeaderCenter>
                <Page.HeaderRight>
                  {boolean('Button in PageHeaderRight', true) ? (
                    <div className="mockComponent mockButton">Right Button</div>
                  ) : null}
                </Page.HeaderRight>
              </Page.Header>
              <Page.Contents
                fullWidth={boolean('fullWidth', false)}
                scrollable={boolean('scrollable', true)}
                gutters={
                  ComponentSize[
                    select('gutters', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <div
                  className="mockComponent pageContents"
                  style={{height: `${number('mock contents height', 1200)}px`}}
                >
                  <h4>
                    Here's some dummy text to help show where page contents are
                    and for scrolling
                  </h4>
                </div>
              </Page.Contents>
            </Page>
          </AppWrapper>
        </div>
        <div className="story--test-buttons relative">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AppWrapperReadme),
    },
  }
)
