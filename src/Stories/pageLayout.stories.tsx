import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {AppWrapper} from '../Components/AppWrapper/AppWrapper'
import {NavMenu} from '../Components/NavMenu/NavMenu'
import {Page} from '../Components/Page/Page'
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs'
import {IconFont} from '../Types'
import {mapEnumKeys} from '../../.storybook/utils'

const pageLayout = storiesOf('Page Layout', module).addDecorator(withKnobs)

pageLayout.add('Example Page', () => (
  <div className="mockPage">
    <AppWrapper>
      <NavMenu>
        <NavMenu.Item
          title="Data"
          icon={IconFont.Disks}
          linkElement={<a href="#" />}
          active={false}
        />
        <NavMenu.Item
          title="Thunder"
          icon={IconFont.Zap}
          linkElement={<a href="#" />}
          active={true}
        >
          <NavMenu.SubItem
            title="Lightning"
            linkElement={<a href="#" />}
            active={false}
          />
          <NavMenu.SubItem
            title="Storm Clouds"
            linkElement={<a href="#" />}
            active={false}
          />
          <NavMenu.SubItem
            title="Rain"
            linkElement={<a href="#" />}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          title={text('NavMenuItem text', 'woogoelel')}
          icon={
            IconFont[select('NavMenuItem icon', mapEnumKeys(IconFont), 'Bell')]
          }
          linkElement={<a href="#" />}
          active={boolean('NavMenuItem active', false)}
        />
      </NavMenu>
      <Page titleTag="bloop">
        <Page.Header fullWidth={boolean('fullWidth', true)}>
          <Page.Header.Left>
            <Page.Title title="Page Title" />
          </Page.Header.Left>
          <Page.Header.Right>
            <p>sdfsdf</p>
          </Page.Header.Right>
        </Page.Header>
        <Page.Contents
          fullWidth={boolean('fullWidth', true)}
          scrollable={boolean('scrollable', true)}
        >
          <p>sdfsdfsdf</p>
        </Page.Contents>
      </Page>
    </AppWrapper>
  </div>
))
