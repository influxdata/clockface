// Libraries
import React, {useRef} from 'react'
import marked from 'marked'
import {startsWith} from 'lodash'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {useState} from '@storybook/addons'

// Components
import {Popover} from '../Components/Popover'
import {Overlay} from '../Components/Overlay'
import {Notification} from '../Components/Notification'
import {RightClick} from '../Components/RightClick'
import {Icon} from '../Components/Icon'
import {Page} from '../Components/Page'
import {TreeNav} from '../Components/TreeNav'
import {InfluxDBCloudLogo} from '../Components/Logo'
import {AppWrapper} from '../Components/AppWrapper/AppWrapper'

// Types
import {ComponentColor, IconFont, ComponentSize, Appearance} from '../Types'

// Notes
import PortalsReadme from './Portals.md'

const alertStories = storiesOf('Sandbox/Portal Elements', module).addDecorator(
  withKnobs
)

alertStories.add(
  'Interplay of all portals',
  () => {
    const [navState, setNavState] = useState<boolean>(true)
    const [navActiveItem, setNavActiveItem] = useState<string>('boards')
    const triggerRefA = useRef<HTMLDivElement>(null)
    const triggerRefB = useRef<HTMLDivElement>(null)
    const triggerRefC = useRef<HTMLDivElement>(null)
    const [firstOverlayState, setFirstOverlayState] = useState<boolean>(false)
    const [secondOverlayState, setSecondOverlayState] = useState<boolean>(false)

    const handleDismissFirstOverlay = (): void => {
      setFirstOverlayState(false)
    }

    const handleShowFirstOverlay = (): void => {
      setFirstOverlayState(true)
    }

    const handleDismissSecondOverlay = (): void => {
      setSecondOverlayState(false)
    }

    const handleShowSecondOverlay = (): void => {
      setSecondOverlayState(true)
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
          <AppWrapper presentationMode={boolean('presentationMode', false)}>
            <TreeNav
              headerElement={
                <TreeNav.Header
                  id="home"
                  icon={<Icon glyph={IconFont.CuboUniform} />}
                  label={
                    <InfluxDBCloudLogo cloud={boolean('Logo: cloud', true)} />
                  }
                  onClick={handleNavClick}
                  active={isItemActive('home')}
                  color={ComponentColor.Primary}
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
                icon={<Icon glyph={IconFont.Layers} />}
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
                icon={<Icon glyph={IconFont.GraphLine_New} />}
                active={isItemActive('explore')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="boards"
                label="Dashboards"
                shortLabel="Boards"
                icon={<Icon glyph={IconFont.DashH} />}
                active={isItemActive('boards')}
                onClick={handleNavClick}
              />
              <TreeNav.Item
                id="org"
                label="Organization"
                shortLabel="Org"
                icon={<Icon glyph={IconFont.User} />}
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
                icon={<Icon glyph={IconFont.CogOutline_New} />}
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
                gutters={ComponentSize.Small}
              >
                <div className="mockComponent mockButton" ref={triggerRefA}>
                  Click Me
                </div>
                <Popover
                  triggerRef={triggerRefA}
                  appearance={Appearance.Outline}
                  color={ComponentColor.Primary}
                  contents={() => (
                    <div
                      className="mockComponent mockButton"
                      onClick={handleShowFirstOverlay}
                    >
                      Show Overlay
                    </div>
                  )}
                />
                <Notification
                  icon={IconFont.CrownSolid_New}
                  size={ComponentSize.Small}
                >
                  I am notifying you!
                </Notification>
                <Overlay
                  visible={firstOverlayState}
                  onEscape={handleDismissFirstOverlay}
                >
                  <Overlay.Container maxWidth={500}>
                    <Overlay.Header
                      title="Overlay Example"
                      onDismiss={handleDismissFirstOverlay}
                    />
                    <Overlay.Body>
                      <p>I should be below the Notification</p>
                      <div
                        className="mockComponent mockButton"
                        ref={triggerRefB}
                      >
                        Another Popover
                      </div>
                      <div
                        className="mockComponent mockButton"
                        ref={triggerRefC}
                      >
                        Right Click Me
                      </div>
                      <Popover
                        triggerRef={triggerRefB}
                        appearance={Appearance.Solid}
                        color={ComponentColor.Success}
                        contents={() => <>I'm a nested popover!</>}
                      />
                      <RightClick triggerRef={triggerRefC}>
                        <RightClick.MenuItem onClick={handleShowSecondOverlay}>
                          Show another overlay
                        </RightClick.MenuItem>
                      </RightClick>
                    </Overlay.Body>
                  </Overlay.Container>
                </Overlay>
                <Overlay
                  visible={secondOverlayState}
                  onEscape={handleDismissSecondOverlay}
                >
                  <Overlay.Container maxWidth={300}>
                    <Overlay.Header
                      title="Another Overlay"
                      onDismiss={handleDismissSecondOverlay}
                    />
                    <Overlay.Body>
                      <p>
                        I should be on top of the previous Overlay but still
                        underneath the Notification
                      </p>
                    </Overlay.Body>
                  </Overlay.Container>
                </Overlay>
              </Page.Contents>
            </Page>
          </AppWrapper>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PortalsReadme),
    },
  }
)
