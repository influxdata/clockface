import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {AppWrapper} from '../Components/AppWrapper/AppWrapper'
import {NavMenu} from '../Components/NavMenu/NavMenu'
import {Page} from '../Components/Page/Page'
import {Button} from '../Components/Button/Button'
import {Icon} from '../Components/Icon/Icon'
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs'
import {IconFont, ComponentColor} from '../Types'
import {mapEnumKeys} from '../../.storybook/utils'

const pageLayout = storiesOf('Page Layout', module).addDecorator(withKnobs)

pageLayout.add('Example Page', () => (
  <div className="mockPage">
    <AppWrapper>
      <NavMenu presentationMode={boolean('presentationMode', false)}>
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
              {text('NavMenuItem text', 'Bananas')}
            </a>
          )}
          iconLink={className => (
            <a className={className} href="#">
              <Icon
                glyph={
                  IconFont[
                    select('NavMenuItem icon', mapEnumKeys(IconFont), 'Bell')
                  ]
                }
              />
            </a>
          )}
          active={boolean('NavMenuItem active', false)}
        />
      </NavMenu>
      <Page titleTag="bloop">
        <Page.Header
          fullWidth={boolean('fullWidth', true)}
          presentationMode={boolean('presentationMode', false)}
        >
          <Page.Header.Left>
            <Page.Title title={text('PageTitle title', 'Page Title')} />
          </Page.Header.Left>
          <Page.Header.Right>
            <Button text="Header Button" color={ComponentColor.Primary} />
          </Page.Header.Right>
        </Page.Header>
        <Page.Contents
          fullWidth={boolean('fullWidth', true)}
          scrollable={boolean('scrollable', true)}
          presentationMode={boolean('presentationMode', false)}
        >
          <div className="mockComponent pageContents">
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
