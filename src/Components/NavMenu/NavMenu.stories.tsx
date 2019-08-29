// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {mapEnumKeys} from '../../Utils/storybook'
import {withKnobs, boolean, text, select, radios} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {NavMenu} from '../../Components/NavMenu/NavMenu'
import {Icon} from '../../Components/Icon/Icon'

// Types
import {IconFont} from '../../Types'

const navMenuStories = storiesOf('Components|Navigation/NavMenu', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

enum NavItems {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
}

navMenuStories.add('NavMenu', () => (
  <NavMenu>
    <NavMenu.Item
      titleLink={className => (
        <a className={className} href="#">
          {text('1 - title', 'First Item')}
        </a>
      )}
      iconLink={className => (
        <a className={className} href="#">
          <Icon
            glyph={IconFont[select('1 - icon', mapEnumKeys(IconFont), 'Disks')]}
          />
        </a>
      )}
      active={
        NavItems[radios<NavItems>('active item', mapEnumKeys(NavItems))] ==
        NavItems.First
      }
    />
    <NavMenu.Item
      titleLink={className => (
        <a className={className} href="#">
          {text('2 - title', 'Second Item')}
        </a>
      )}
      iconLink={className => (
        <a className={className} href="#">
          <Icon
            glyph={IconFont[select('2 - icon', mapEnumKeys(IconFont), 'Zap')]}
          />
        </a>
      )}
      active={
        NavItems[radios<NavItems>('active item', mapEnumKeys(NavItems))] ==
        NavItems.Second
      }
    >
      <NavMenu.SubItem
        titleLink={className => (
          <a className={className} href="#">
            First Sub-Item
          </a>
        )}
        active={false}
      />
      <NavMenu.SubItem
        titleLink={className => (
          <a className={className} href="#">
            Second Sub-Item
          </a>
        )}
        active={false}
      />
      <NavMenu.SubItem
        titleLink={className => (
          <a className={className} href="#">
            Third Sub-Item
          </a>
        )}
        active={false}
      />
    </NavMenu.Item>
    <NavMenu.Item
      titleLink={className => (
        <a className={className} href="#">
          {text('3 - title', 'Third Item')}
        </a>
      )}
      iconLink={className => (
        <a className={className} href="#">
          <Icon
            glyph={IconFont[select('3 - icon', mapEnumKeys(IconFont), 'Group')]}
          />
        </a>
      )}
      active={
        NavItems[radios<NavItems>('active item', mapEnumKeys(NavItems))] ==
        NavItems.Third
      }
    />
  </NavMenu>
))

navMenuStories.add('NavMenuItem', () => (
  <NavMenu.Item
    titleLink={className => (
      <a className={className} href="#">
        {text('title', 'Item Title')}
      </a>
    )}
    iconLink={className => (
      <a className={className} href="#">
        <Icon glyph={IconFont[select('icon', mapEnumKeys(IconFont), 'Star')]} />
      </a>
    )}
    active={boolean('active', false)}
  >
    <NavMenu.SubItem
      titleLink={className => (
        <a className={className} href="#">
          First Sub-Item
        </a>
      )}
      active={false}
    />
    <NavMenu.SubItem
      titleLink={className => (
        <a className={className} href="#">
          Second Sub-Item
        </a>
      )}
      active={false}
    />
    <NavMenu.SubItem
      titleLink={className => (
        <a className={className} href="#">
          Third Sub-Item
        </a>
      )}
      active={false}
    />
  </NavMenu.Item>
))

navMenuStories.add('NavMenuSubItem', () => (
  <NavMenu.SubItem
    titleLink={className => (
      <a className={className} href="#">
        {text('title', 'Sub Item Title')}
      </a>
    )}
    active={boolean('active', false)}
  />
))
