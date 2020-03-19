// Libraries
import React, {createRef} from 'react'
import marked from 'marked'
import {startsWith} from 'lodash'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {AppWrapper, AppWrapperRef} from '../AppWrapper'
import {AppHeader} from '../../AppHeader'
import {NavMenu} from '../../NavMenu'
import {FlexBox} from '../../FlexBox'
import {Button} from '../../Button/Composed/Button'
import {PopNav} from '../../PopNav'
import {Page} from '../../Page/index'
import {Icon} from '../../Icon/Base/Icon'
import {TreeNav} from '../../TreeNav'
import {InfluxDBCloudLogo} from '../../Logo'

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
                    Queries
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
                    Monitoring & Alerts
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
                <Page.Title
                  title={text('Page Title', 'Page head, feet, and toes')}
                />
              </Page.Header>
              <Page.ControlBar
                fullWidth={boolean('fullWidth', false)}
                gutters={
                  ComponentSize[
                    select('gutters', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <Page.ControlBarLeft>
                  {boolean('Button in PageControlBarLeft', true) ? (
                    <div className="mockComponent mockButton">Left Button</div>
                  ) : null}
                </Page.ControlBarLeft>
                <Page.ControlBarCenter>
                  {boolean('Button in PageControlBarCenter', true) ? (
                    <div className="mockComponent mockButton">
                      Center Button
                    </div>
                  ) : null}
                </Page.ControlBarCenter>
                <Page.ControlBarRight>
                  {boolean('Button in PageControlBarRight', true) ? (
                    <div className="mockComponent mockButton">Right Button</div>
                  ) : null}
                </Page.ControlBarRight>
              </Page.ControlBar>
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

layoutStories.add(
  'AppWrapper + TreeNav',
  () => {
    const [navState, setNavState] = useState<boolean>(true)
    const [navActiveItem, setNavActiveItem] = useState<string>('boards')
    const appWrapperRef = createRef<AppWrapperRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(appWrapperRef.current)
      /* eslint-enable */
    }

    const handleToggleNavState = (): void => {
      const newState = !navState

      setNavState(newState)
    }

    const handleNavClick = (id: string): void => {
      setNavActiveItem(id)
    }

    const isItemActive = (id: string): boolean => {
      if (id === navActiveItem || startsWith(navActiveItem, id)) {
        return true
      }

      return false
    }

    const navItems = [
      {id: 'home', label: 'Getting Started'},
      {id: 'user', label: 'JohnDoe (OrgName)'},
      {id: 'data', label: 'Data'},
      {id: 'data-buckets', label: 'Buckets'},
      {id: 'data-sources', label: 'Data Sources'},
      {id: 'explore', label: 'Data Explorer'},
      {id: 'boards', label: 'Dashboards'},
      {id: 'org', label: 'Organization'},
      {id: 'tasks', label: 'Tasks'},
      {id: 'alerts', label: 'Alerts'},
      {id: 'settings', label: 'Settings'},
      {id: 'settings-members', label: 'Members'},
      {id: 'settings-variables', label: 'Variables'},
      {id: 'settings-templates', label: 'Templates'},
      {id: 'settings-labels', label: 'Labels'},
      {id: 'settings-profile', label: 'Profile'},
    ]

    const lookupPageTitle = (): string => {
      const activeItem = navItems.find(item => item.id === navActiveItem)

      if (activeItem) {
        return activeItem.label
      }

      return 'I am a page title!'
    }

    const banner = (
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: '#333',
          borderRadius: '4px',
        }}
      >
        Banner
      </div>
    )

    return (
      <div className="mockPageWrapper">
        <div className="mockPage">
          <AppWrapper
            ref={appWrapperRef}
            presentationMode={boolean('presentationMode', false)}
          >
            <TreeNav
              headerElement={
                <TreeNav.Header
                  id="home"
                  icon={<Icon glyph={IconFont.CuboNav} />}
                  label={
                    <InfluxDBCloudLogo cloud={boolean('Logo: cloud', true)} />
                  }
                  onClick={handleNavClick}
                  active={isItemActive('home')}
                  color={
                    ComponentColor[
                      select('color', mapEnumKeys(ComponentColor), 'Primary')
                    ]
                  }
                />
              }
              bannerElement={banner}
              hideBannerWhenCollapsed={boolean(
                'hideBannerWhenCollapsed',
                false
              )}
              expanded={navState}
              onToggleClick={handleToggleNavState}
              userElement={
                <TreeNav.User
                  id="user"
                  username="john.doe123456@supercool.com"
                  team="USAF 101st Airborne Division"
                >
                  {boolean('show user links', false) ? (
                    <>
                      <TreeNav.UserItem id="logout" label="Logout" />
                      <TreeNav.UserItem id="billing" label="Billing" />
                      <TreeNav.UserItem
                        id="usage"
                        label="Usage"
                        linkElement={className => (
                          <a href="#" className={className} />
                        )}
                      />
                    </>
                  ) : null}
                </TreeNav.User>
              }
            >
              <TreeNav.Item
                id="data"
                label="Data"
                icon={<Icon glyph={IconFont.DisksNav} />}
                active={isItemActive('data')}
                onClick={handleNavClick}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubItem
                    id="data-buckets"
                    label="Buckets"
                    active={isItemActive('data-buckets')}
                    onClick={handleNavClick}
                  />
                  <TreeNav.SubItem
                    id="data-sources"
                    label="Sources"
                    active={isItemActive('data-sources')}
                    onClick={handleNavClick}
                  />
                </TreeNav.SubMenu>
              </TreeNav.Item>
              <TreeNav.Item
                id="explore"
                label="Data Explorer"
                shortLabel="Explore"
                icon={<Icon glyph={IconFont.GraphLine} />}
                active={isItemActive('explore')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="boards"
                label="Dashboards"
                shortLabel="Boards"
                icon={<Icon glyph={IconFont.Dashboards} />}
                active={isItemActive('boards')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="org"
                label="Organization"
                shortLabel="Org"
                icon={<Icon glyph={IconFont.UsersDuo} />}
                active={isItemActive('org')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="tasks"
                label="Tasks"
                icon={<Icon glyph={IconFont.Calendar} />}
                active={isItemActive('tasks')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="alerts"
                label="Alerts"
                icon={<Icon glyph={IconFont.Bell} />}
                active={isItemActive('alerts')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="settings"
                label="Settings"
                icon={<Icon glyph={IconFont.WrenchNav} />}
                active={isItemActive('settings')}
                onClick={handleNavClick}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubItem
                    id="settings-members"
                    label="Members"
                    active={isItemActive('settings-members')}
                    onClick={handleNavClick}
                  />
                  <TreeNav.SubItem
                    id="settings-variables"
                    label="Variables"
                    active={isItemActive('settings-variables')}
                    onClick={handleNavClick}
                  />
                  <TreeNav.SubItem
                    id="settings-templates"
                    label="Templates"
                    active={isItemActive('settings-templates')}
                    onClick={handleNavClick}
                  />
                  <TreeNav.SubItem
                    id="settings-labels"
                    label="Labels"
                    active={isItemActive('settings-labels')}
                    onClick={handleNavClick}
                  />
                  <TreeNav.SubItem
                    id="settings-profile"
                    label="Profile"
                    active={isItemActive('settings-profile')}
                    onClick={handleNavClick}
                  />
                </TreeNav.SubMenu>
              </TreeNav.Item>
            </TreeNav>
            <Page titleTag="bloop">
              <Page.Header
                fullWidth={boolean('fullWidth', false)}
                gutters={
                  ComponentSize[
                    select('gutters', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <Page.Title title={lookupPageTitle()} />
              </Page.Header>
              <Page.ControlBar
                fullWidth={boolean('fullWidth', false)}
                gutters={
                  ComponentSize[
                    select('gutters', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <Page.ControlBarLeft>
                  {boolean('Button in PageControlBarLeft', true) ? (
                    <div className="mockComponent mockButton">Left Button</div>
                  ) : null}
                </Page.ControlBarLeft>
                <Page.ControlBarCenter>
                  {boolean('Button in PageControlBarCenter', true) ? (
                    <div className="mockComponent mockButton">
                      Center Button
                    </div>
                  ) : null}
                </Page.ControlBarCenter>
                <Page.ControlBarRight>
                  {boolean('Button in PageControlBarRight', true) ? (
                    <div className="mockComponent mockButton">Right Button</div>
                  ) : null}
                </Page.ControlBarRight>
              </Page.ControlBar>
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
        <div className="story--test-buttons">
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
