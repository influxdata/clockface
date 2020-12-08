// Libraries
import React from 'react'
import marked from 'marked'
import {startsWith} from 'lodash'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select} from '@storybook/addon-knobs'
import {useState} from '@storybook/addons'
import {mapEnumKeys} from '../Utils/storybook'

// Components
import {ThemeProvider} from '../Components/ThemeProvider'
import {Overlay} from '../Components/Overlay'
import {Notification} from '../Components/Notification'
import {Icon} from '../Components/Icon'
import {Page} from '../Components/Page'
import {TreeNav} from '../Components/TreeNav'
import {InfluxDBCloudLogo} from '../Components/Logo'
import {AppWrapper} from '../Components/AppWrapper/AppWrapper'

// Types
import {
  ComponentColor,
  IconFont,
  ComponentSize,
  Gradients,
  Theme,
} from '../Types'

// Notes
import LightThemeReadme from './LightTheme.md'

const lightThemeStories = storiesOf('Sandbox|Light Theme', module).addDecorator(
  withKnobs
)

lightThemeStories.add(
  'Supported Components',
  () => {
    const [navState, setNavState] = useState<boolean>(true)
    const [navActiveItem, setNavActiveItem] = useState<string>('boards')
    const [overlayState, setOverlayState] = useState<boolean>(false)

    const handleDismissOverlay = (): void => {
      setOverlayState(false)
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

    return (
      <ThemeProvider theme={Theme[select('theme', mapEnumKeys(Theme), 'Dark')]}>
        <div className="mockPageWrapper">
          <div className="mockPage">
            <AppWrapper presentationMode={boolean('presentationMode', false)}>
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
                    color={ComponentColor.Primary}
                  />
                }
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
                  gutters={ComponentSize.Small}
                >
                  <Page.Title title={lookupPageTitle()} />
                </Page.Header>
                <Page.ControlBar
                  fullWidth={boolean('fullWidth', false)}
                  gutters={ComponentSize.Small}
                >
                  <Page.ControlBarLeft>
                    {boolean('Button in PageControlBarLeft', true) ? (
                      <div className="mockComponent mockButton">
                        Left Button
                      </div>
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
                      <div className="mockComponent mockButton">
                        Right Button
                      </div>
                    ) : null}
                  </Page.ControlBarRight>
                </Page.ControlBar>
                <Page.Contents
                  fullWidth={boolean('fullWidth', false)}
                  scrollable={boolean('scrollable', true)}
                  gutters={ComponentSize.Small}
                >
                  <Notification
                    icon={IconFont.CrownSolid}
                    size={ComponentSize.Small}
                    gradient={Gradients.PolarExpress}
                  >
                    I am notifying you!
                  </Notification>
                  <Overlay visible={overlayState}>
                    <Overlay.Container maxWidth={500}>
                      <Overlay.Header
                        title="Overlay Example"
                        onDismiss={handleDismissOverlay}
                      />
                      <Overlay.Body>
                        <p>I am text!</p>
                      </Overlay.Body>
                    </Overlay.Container>
                  </Overlay>
                </Page.Contents>
              </Page>
            </AppWrapper>
          </div>
        </div>
      </ThemeProvider>
    )
  },
  {
    readme: {
      content: marked(LightThemeReadme),
    },
  }
)
