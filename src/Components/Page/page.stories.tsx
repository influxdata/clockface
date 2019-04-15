// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {AppWrapper} from '../AppWrapper/AppWrapper'
import {NavMenu} from '../NavMenu/NavMenu'
import {Page} from './Page'
import {Icon} from '../Icon/Icon'

// Types
import {IconFont} from '../../Types'

const layoutStories = storiesOf('Examples|Application Layout', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

layoutStories.add('AppWrapper + Nav + Page', () => (
  <div className="mockPage">
    <AppWrapper>
      <NavMenu hide={boolean('presentationMode', false)}>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Data
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Disks} />
            </a>
          )}
          active={false}
        />
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Thunder
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Zap} />
            </a>
          )}
          active={true}
        >
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Lightning
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Storm Clouds
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Rain
              </a>
            )}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Bananas
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Bell} />
            </a>
          )}
          active={false}
        />
      </NavMenu>
      <Page titleTag="bloop">
        <Page.Header
          fullWidth={boolean('fullWidth', false)}
          hide={boolean('presentationMode', false)}
        >
          <Page.Header.Left>
            <Page.Title title={text('PageTitle title', 'Page Title')} />
          </Page.Header.Left>
          <Page.Header.Right />
        </Page.Header>
        <Page.Contents
          fullWidth={boolean('fullWidth', false)}
          fullHeight={boolean('presentationMode', false)}
          scrollable={boolean('scrollable', true)}
        >
          <div
            className="mockComponent pageContents"
            style={{height: `${number('mock contents height', 1200)}px`}}
          >
            <h4>
              Here's some dummy text to help show where page contents are and
              for scrolling
            </h4>
          </div>
        </Page.Contents>
      </Page>
    </AppWrapper>
  </div>
))
