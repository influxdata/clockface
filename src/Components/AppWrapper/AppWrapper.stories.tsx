// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number, select} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'
import {mapEnumKeys} from 'src/Utils/storybook'

// Components
import {AppWrapper} from 'src/Components/AppWrapper/AppWrapper'
import {NavMenu} from 'src/Components/NavMenu/NavMenu'
import {Page} from 'src/Components/Page/Page'
import {Icon} from 'src/Components/Icon/Icon'

// Types
import {IconFont, ComponentSize} from 'src/Types'

// Notes
import AppWrapperReadme from 'src/Components/AppWrapper/AppWrapper.md'

const layoutStories = storiesOf('Layout|AppWrapper', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

layoutStories.add(
  'AppWrapper',
  () => (
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
  ),
  {
    readme: {
      content: marked(AppWrapperReadme),
    },
  }
)
