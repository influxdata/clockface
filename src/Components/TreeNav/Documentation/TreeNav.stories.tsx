// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {mapEnumKeys} from '../../../Utils/storybook'
import {withKnobs, text, select} from '@storybook/addon-knobs'
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

const navMenuStories = storiesOf(
  'Components|Navigation/TreeNav',
  module
).addDecorator(withKnobs)

navMenuStories.add(
  'TreeNav',
  () => {
    const [activeItem, setActiveItem] = useState<string>('item-1')
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
              userElement={
                <TreeNav.User
                  username="Captain Milkshake"
                  team="Dairy Desperados"
                >
                  <TreeNav.UserItem
                    id="logout"
                    label="Logout"
                    onClick={id => alert(id)}
                  />
                  <TreeNav.UserItem
                    id="billing"
                    label="Billing"
                    linkElement={className => (
                      <a href="#" className={className} />
                    )}
                  />
                  <TreeNav.UserItem
                    id="usage"
                    label="Usage"
                    linkElement={className => (
                      <a href="#" className={className} />
                    )}
                  />
                </TreeNav.User>
              }
            >
              <TreeNav.Item
                id="item-1"
                label={text('Item 1', 'First Item')}
                icon={
                  <Icon
                    glyph={
                      IconFont[
                        select('1 - icon', mapEnumKeys(IconFont), 'Disks')
                      ]
                    }
                  />
                }
                onClick={handleItemClick}
                active={activeItem === 'item-1'}
              />
              <TreeNav.Item
                id="item-2"
                label={text('Item 2', 'Second Item')}
                icon={
                  <Icon
                    glyph={
                      IconFont[select('2 - icon', mapEnumKeys(IconFont), 'Zap')]
                    }
                  />
                }
                onClick={handleItemClick}
                active={activeItem === 'item-2'}
              />
              <TreeNav.Item
                id="item-3"
                label={text('Item 3', 'Third Item')}
                icon={
                  <Icon
                    glyph={
                      IconFont[
                        select('3 - icon', mapEnumKeys(IconFont), 'Group')
                      ]
                    }
                  />
                }
                onClick={handleItemClick}
                active={activeItem === 'item-3'}
              />
              <TreeNav.Item
                id="item-4"
                label="Link Item"
                icon={<Icon glyph={IconFont.Import} />}
                active={activeItem === 'item-4'}
                linkElement={className => (
                  <a href="#" className={className}>
                    Bloop
                  </a>
                )}
              />
              <TreeNav.Item
                id="item-5"
                label="Link Item + Menu"
                icon={<Icon glyph={IconFont.Import} />}
                active={true}
                linkElement={className => (
                  <a href="#" className={className}>
                    Bloop
                  </a>
                )}
              >
                <TreeNav.SubMenu>
                  <TreeNav.SubItem
                    id="item-5-sub-1"
                    label="Banana"
                    linkElement={className => (
                      <a href="#" className={className}>
                        Bloop
                      </a>
                    )}
                  />
                  <TreeNav.SubItem
                    id="item-5-sub-2"
                    label="Dragonfruit"
                    linkElement={className => (
                      <a href="#" className={className}>
                        Bloop
                      </a>
                    )}
                    active={true}
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
          <div className="story--test-buttons">
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
