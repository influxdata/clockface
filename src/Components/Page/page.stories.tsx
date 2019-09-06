// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number, select} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {AppWrapper} from '../AppWrapper/AppWrapper'
import {NavMenu} from '../NavMenu/NavMenu'
import {Page} from './Page'
import {Radio} from '../Radio/Radio'
import {SquareButton} from '../Button/Composed/SquareButton'
import {Icon} from '../Icon/Icon'
import {FlexBox} from '../FlexBox/FlexBox'

// Types
import {
  IconFont,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  FlexDirection,
  AlignItems,
} from '../../Types'

// Notes
import FullPageReadme from './FullPage.md'
import PageReadme from './Page.md'
import PageHeaderReadme from './PageHeader.md'
import PageContentsReadme from './PageContents.md'
import PageTitleReadme from './PageTitle.md'
import PageSubTitleReadme from './PageSubTitle.md'

const pageStories = storiesOf('Layout|Page/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const pageExampleStories = storiesOf('Layout|Page/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

pageStories.add(
  'Page',
  () => (
    <div className="story--example">
      <Page />
    </div>
  ),
  {
    readme: {
      content: marked(PageReadme),
    },
  }
)

pageStories.add(
  'PageHeader',
  () => (
    <div className="story--example">
      <Page.Header
        fullWidth={boolean('fullWidth', false)}
        gutters={
          ComponentSize[select('gutters', mapEnumKeys(ComponentSize), 'Small')]
        }
      >
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
  ),
  {
    readme: {
      content: marked(PageHeaderReadme),
    },
  }
)

pageStories.add(
  'PageContents',
  () => (
    <div className="story--example">
      <Page.Contents
        fullWidth={boolean('fullWidth', false)}
        scrollable={boolean('scrollable', false)}
        gutters={
          ComponentSize[select('gutters', mapEnumKeys(ComponentSize), 'Small')]
        }
      >
        <div
          className="mockComponent pageContents"
          style={{height: `${number('mock contents height', 1200)}px`}}
        />
      </Page.Contents>
    </div>
  ),
  {
    readme: {
      content: marked(PageContentsReadme),
    },
  }
)

pageStories.add(
  'PageTitle',
  () => (
    <div className="story--example">
      <Page.Title title={text('title', 'I am a page title!')} />
    </div>
  ),
  {
    readme: {
      content: marked(PageTitleReadme),
    },
  }
)

pageStories.add(
  'PageSubTitle',
  () => (
    <div className="story--example">
      <Page.SubTitle title={text('title', 'I am a page title!')} />
    </div>
  ),
  {
    readme: {
      content: marked(PageSubTitleReadme),
    },
  }
)

pageExampleStories.add(
  'Full Page',
  () => (
    <div className="mockPage appWrapper">
      <Page>
        <Page.Header
          fullWidth={boolean('fullWidth', false)}
          gutters={
            ComponentSize[
              select('gutters', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        >
          <Page.Header.Left>
            <FlexBox
              alignItems={AlignItems.FlexStart}
              direction={FlexDirection.Column}
              margin={ComponentSize.Small}
            >
              <Page.Title title="Markdown Editor" />
              <Page.SubTitle title="A handy tool made by us for you" />
            </FlexBox>
          </Page.Header.Left>
          <Page.Header.Center widthPixels={300}>
            <Radio shape={ButtonShape.StretchToFit}>
              <Radio.Button
                id="mode--write"
                titleText="Write Mode"
                active={true}
                value="write"
                onClick={() => {}}
              >
                Write
              </Radio.Button>
              <Radio.Button
                id="mode--preview"
                titleText="Preview Mode"
                active={false}
                value="preview"
                onClick={() => {}}
              >
                Preview
              </Radio.Button>
            </Radio>
          </Page.Header.Center>
          <Page.Header.Right>
            <SquareButton icon={IconFont.Remove} />
            <SquareButton
              icon={IconFont.Checkmark}
              color={ComponentColor.Success}
            />
          </Page.Header.Right>
        </Page.Header>
        <Page.Contents
          fullWidth={boolean('fullWidth', false)}
          scrollable={boolean('scrollable', false)}
          autoHideScrollbar={boolean('autoHideScrollbar', false)}
          gutters={
            ComponentSize[
              select('gutters', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        >
          <div
            className="mockComponent stretch"
            style={{height: `${text('contents height', '100%')}`}}
          />
        </Page.Contents>
      </Page>
    </div>
  ),
  {
    readme: {
      content: marked(FullPageReadme),
    },
  }
)

const layoutStories = storiesOf('Examples|Application Layout', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

layoutStories.add('AppWrapper + Nav + Page', () => (
  <div className="mockPage">
    <AppWrapper presentationMode={boolean('presentationMode', false)}>
      <NavMenu>
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
          gutters={
            ComponentSize[
              select('gutters', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        >
          <Page.Header.Left>
            <Page.Title title={text('PageTitle title', 'Page Title')} />
          </Page.Header.Left>
          <Page.Header.Right />
        </Page.Header>
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
              Here's some dummy text to help show where page contents are and
              for scrolling
            </h4>
          </div>
        </Page.Contents>
      </Page>
    </AppWrapper>
  </div>
))
