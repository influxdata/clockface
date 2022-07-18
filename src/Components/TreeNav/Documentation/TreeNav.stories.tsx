// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {useState} from '@storybook/addons'

// Components
import {TreeNav, TreeNavRef} from '../'
import {Icon} from '../../Icon/Base/Icon'
import {AppWrapper} from '../../AppWrapper/AppWrapper'
import {Page} from '../../Page/index'

// Types
import {IconFont} from '../../../Types'

// Notes
import TreeNavReadme from './TreeNav.md'
import {InfluxDBCloudLogo} from '../../Logo'

const navMenuStories = storiesOf(
  'Components/Navigation/TreeNav',
  module
).addDecorator(withKnobs)

navMenuStories.add(
  'TreeNav',
  () => {
    const [activeItem, setActiveItem] = useState<string>('item-1')
    const [activeSubItem, setActiveSubItem] = useState<string>('data-buckets')
    const [expanded, setExpanded] = useState<boolean>(true)
    const navMenuRef = createRef<TreeNavRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(navMenuRef.current)
      /* eslint-enable */
    }

    const handleItemClick = (id: string): void => {
      setActiveItem(id)
    }

    const handleSubItemClick = (id: string): void => {
      setActiveSubItem(id)
    }

    const handleToggleExpanded = (): void => {
      setExpanded(!expanded)
    }

    return (
      <div className="mockPageWrapper">
        <div className="mockPage">
          <AppWrapper>
            <TreeNav.TreeNav
              ref={navMenuRef}
              expanded={expanded}
              onToggleClick={handleToggleExpanded}
              headerElement={
                <TreeNav.Header
                  id="home"
                  label={<InfluxDBCloudLogo cloud={true} />}
                  onClick={
                    /* eslint-disable */
                    () => {}
                    /* eslint-enable */
                  }
                  icon={<Icon glyph={IconFont.CuboSolid} />}
                />
              }
              userElement={
                <TreeNav.User
                  username="Captain Milkshake"
                  team="Dairy Desperados"
                >
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
                  <TreeNav.SubHeading label="Dkim@Influxdata.com" lowercase />
                  <TreeNav.UserItem id="switch" label="Switch workspace" />
                  <TreeNav.UserItem id="logout" label="Logout" />
                </TreeNav.User>
              }
            >
              <TreeNav.Item
                id="item-1"
                label="Ingest"
                icon={<Icon glyph={IconFont.Download_New} />}
                active={activeItem === 'item-1'}
                onClick={handleItemClick}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubHeading label="Ingest" />
                  <TreeNav.SubItem
                    id="data-buckets"
                    label="Buckets"
                    active={activeSubItem === 'data-buckets'}
                    onClick={handleSubItemClick}
                  />
                  <TreeNav.SubItem
                    id="data-sources"
                    label="Sources"
                    active={activeSubItem === 'data-sources'}
                    onClick={handleSubItemClick}
                  />
                  <TreeNav.SubItem
                    id="data-telegraf"
                    label="Telegraf"
                    active={activeSubItem === 'data-telegraf'}
                    onClick={handleSubItemClick}
                  />
                  <TreeNav.SubItem
                    id="data-tokens"
                    label="API Tokens"
                    active={activeSubItem === 'data-tokens'}
                    onClick={handleSubItemClick}
                  />
                </TreeNav.SubMenu>
              </TreeNav.Item>
              <TreeNav.Item
                id="item-2"
                label={text('Item 2', 'Build')}
                icon={<Icon glyph={IconFont.Braces} />}
                onClick={handleItemClick}
                active={activeItem === 'item-2'}
              />
              <TreeNav.Item
                id="item-3"
                label="Monitor & Alert"
                icon={<Icon glyph={IconFont.GraphLine_New} />}
                onClick={handleItemClick}
                active={activeItem === 'item-3'}
              />
              <TreeNav.Item
                id="item-4"
                label="Access"
                icon={<Icon glyph={IconFont.Lock} />}
                onClick={handleItemClick}
                active={activeItem === 'item-4'}
              />
              <TreeNav.Item
                id="item-5"
                label="Settings"
                icon={<Icon glyph={IconFont.CogOutline_New} />}
                onClick={handleItemClick}
                active={activeItem === 'item-5'}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubHeading label="Settings" />
                  <TreeNav.SubItem
                    id="item-5-sub-1"
                    label="Banana"
                    linkElement={className => (
                      <a href="#" className={className} />
                    )}
                  />
                  <TreeNav.SubItem
                    id="item-5-sub-2"
                    label="Dragonfruit"
                    linkElement={className => (
                      <a href="#" className={className} />
                    )}
                  />
                  <TreeNav.SubItem
                    id="item-5-sub-3"
                    label="Apple"
                    linkElement={className => (
                      <a href="#" className={className} />
                    )}
                  />
                  <TreeNav.SubItem
                    id="item-5-sub-4"
                    label="Pineapple"
                    linkElement={className => (
                      <a href="#" className={className} />
                    )}
                  />
                </TreeNav.SubMenu>
              </TreeNav.Item>
            </TreeNav.TreeNav>
            <Page>
              <Page.Header fullWidth={false}>
                <Page.Title title="I am a page" />
              </Page.Header>
              <Page.Contents fullWidth={false}>
                <p>sfsds</p>
              </Page.Contents>
            </Page>
          </AppWrapper>
          <div className="story--test-buttons story--test-buttons--bottom">
            <button onClick={logRef}>Log Ref</button>
          </div>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TreeNavReadme),
    },
  }
)
