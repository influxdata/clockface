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
              JohnDoe (OrgName)
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.CuboNav} />
            </a>
          )}
          active={false}
        >
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Switch Organizations
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Create Organization
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Logout
              </a>
            )}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Data Explorer
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.GraphLine} />
            </a>
          )}
          active={false}
        />
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Dashboards
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Dashboards} />
            </a>
          )}
          active={false}
        />
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Tasks
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Calendar} />
            </a>
          )}
          active={true}
        />
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Monitoring & Alerting
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Bell} />
            </a>
          )}
          active={false}
        >
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                History
              </a>
            )}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Load Data
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.DisksNav} />
            </a>
          )}
          active={false}
        >
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Buckets
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Telegraf
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Scrapers
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Tokens
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Client Libraries
              </a>
            )}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Settings
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.WrenchNav} />
            </a>
          )}
          active={false}
        >
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Members
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Variables
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Templates
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Labels
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Profile
              </a>
            )}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Cloud
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.Cloud} />
            </a>
          )}
          active={false}
        >
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Billing
              </a>
            )}
            active={false}
          />
          <NavMenu.SubItem
            titleLink={className => (
              <a className={className} href="#">
                Usage
              </a>
            )}
            active={false}
          />
        </NavMenu.Item>
        <NavMenu.Item
          titleLink={className => (
            <a className={className} href="#">
              Feedback
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon glyph={IconFont.NavChat} />
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
          <Page.Header.Center>
            {boolean('Button in PageHeaderCenter', true) ? (
              <div className="mockComponent mockButton">Center Button</div>
            ) : null}
          </Page.Header.Center>
          <Page.Header.Right>
            {boolean('Button in PageHeaderRight', true) ? (
              <div className="mockComponent mockButton">Right Button</div>
            ) : null}
          </Page.Header.Right>
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
