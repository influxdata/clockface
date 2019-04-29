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

const pageStories = storiesOf('Components|Page/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

pageStories.add('Page', () => (
  <div className="mockPage">
    <Page />
  </div>
))

pageStories.add('PageHeader', () => (
  <div className="mockPage">
    <Page.Header fullWidth={boolean('fullWidth', false)}>
      <Page.Header.Left>
        <div className="mockComponent" style={{width: '100%'}}>
          Left
        </div>
      </Page.Header.Left>
      <Page.Header.Center widthPixels={number('widthPixels (center)', 200)}>
        <div className="mockComponent" style={{width: '100%'}}>
          Center
        </div>
      </Page.Header.Center>
      <Page.Header.Right>
        <div className="mockComponent" style={{width: '100%'}}>
          Right
        </div>
      </Page.Header.Right>
    </Page.Header>
  </div>
))

pageStories.add('PageContents', () => (
  <div className="mockPage">
    <Page.Contents
      fullWidth={boolean('fullWidth', false)}
      scrollable={boolean('scrollable', false)}
    >
      <div
        className="mockComponent pageContents"
        style={{height: `${number('mock contents height', 1200)}px`}}
      />
    </Page.Contents>
  </div>
))

pageStories.add('PageTitle', () => (
  <Page.Title title={text('title', 'I am a page title!')} />
))

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
