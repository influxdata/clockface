// Libraries
import React, {createRef} from 'react'
import marked from 'marked'
import {startsWith} from 'lodash'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, number, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {AppWrapper, AppWrapperRef} from '../AppWrapper'
import {Page} from '../../Page/index'
import {Icon} from '../../Icon/Base/Icon'
import {TreeNav} from '../../TreeNav'
import {InfluxDataLogo} from '../../Logo'

// Types
import {
  IconFont,
  ComponentSize,
  ComponentColor,
} from '../../../Types'

// Notes
import AppWrapperReadme from './AppWrapper.md'

const layoutStories = storiesOf('Layout/AppWrapper', module).addDecorator(
  withKnobs
)

layoutStories.add(
  'AppWrapper + TreeNav',
  () => {
    const [navState, setNavState] = useState<boolean>(true)
    const [navActiveItem, setNavActiveItem] = useState<string>('data')
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
                  label={<InfluxDataLogo simplified />}
                  onClick={handleNavClick}
                  active={isItemActive('home')}
                  icon={<Icon glyph={IconFont.CuboUniform} />}
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
                  username="Company Name"
                  team="Team Name"
                >
                  {boolean('show user links', true) ? (
                    <>
                      <TreeNav.SubHeading label="Company" />
                      <TreeNav.UserItem id="billing" label="Billing" />
                      <TreeNav.UserItem
                        id="members"
                        label="Members"
                        linkElement={className => (
                          <a href="#" className={className} />
                        )}
                      />
                      <TreeNav.UserItem id="about" label="About" />
                      <TreeNav.SubHeading label="Team" />
                      <TreeNav.UserItem id="members" label="Members" />
                      <TreeNav.UserItem id="about" label="About" />
                      <TreeNav.SubHeading
                        label="somebody@somewhere.com"
                        lowercase
                      />
                      <TreeNav.UserItem id="switch" label="Switch workspace" />
                      <TreeNav.UserItem id="logout" label="Logout" />
                    </>
                  ) : null}
                </TreeNav.User>
              }
            >
              <TreeNav.Item
                id="data"
                label="Ingest"
                icon={<Icon glyph={IconFont.Download_New} />}
                active={isItemActive('data')}
                onClick={handleNavClick}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubHeading label="Ingest" />
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
                id="build"
                label="Build"
                icon={<Icon glyph={IconFont.Braces} />}
                active={isItemActive('build')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="monitor"
                label="Monitor & Alert"
                icon={<Icon glyph={IconFont.GraphLine_New} />}
                active={isItemActive('boards')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="access"
                label="Access"
                icon={<Icon glyph={IconFont.Lock} />}
                active={isItemActive('access')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="settings"
                label="Settings"
                icon={<Icon glyph={IconFont.CogOutline_New} />}
                active={isItemActive('settings')}
                onClick={handleNavClick}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubHeading label="Settings" />
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
