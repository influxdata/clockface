// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  Page,
  PageRef,
  PageHeaderRef,
  PageHeaderCenterRef,
  PageHeaderLeftRef,
  PageHeaderRightRef,
  PageContentsRef,
} from '../index'
import {SelectGroup} from '../../SelectGroup/index'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {FlexBox} from '../../FlexBox'

// Types
import {
  IconFont,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  FlexDirection,
  AlignItems,
} from '../../../Types'

// Notes
import FullPageReadme from './FullPage.md'
import PageReadme from './Page.md'
import PageHeaderReadme from './PageHeader.md'
import PageContentsReadme from './PageContents.md'
import PageTitleReadme from './PageTitle.md'
import PageSubTitleReadme from './PageSubTitle.md'
import {PageTitleRef} from '../PageTitle'
import {PageSubTitleRef} from '../PageSubTitle'

const pageStories = storiesOf('Layout|Page/Family', module).addDecorator(
  withKnobs
)

const pageExampleStories = storiesOf(
  'Layout|Page/Examples',
  module
).addDecorator(withKnobs)

pageStories.add(
  'Page',
  () => {
    const pageRef = createRef<PageRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(pageRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Page.Page ref={pageRef} />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PageReadme),
    },
  }
)

pageStories.add(
  'PageHeader',
  () => {
    const pageHeaderRef = createRef<PageHeaderRef>()
    const pageHeaderLeftRef = createRef<PageHeaderLeftRef>()
    const pageHeaderCenterRef = createRef<PageHeaderCenterRef>()
    const pageHeaderRightRef = createRef<PageHeaderRightRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(pageHeaderRef.current)
      console.log(pageHeaderLeftRef.current)
      console.log(pageHeaderCenterRef.current)
      console.log(pageHeaderRightRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Page.Header
          ref={pageHeaderRef}
          fullWidth={boolean('fullWidth', false)}
          gutters={
            ComponentSize[
              select('gutters', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        >
          <Page.HeaderLeft ref={pageHeaderLeftRef}>
            <div className="mockComponent" style={{width: '100%'}}>
              Left
            </div>
          </Page.HeaderLeft>
          <Page.HeaderCenter ref={pageHeaderCenterRef}>
            <div className="mockComponent" style={{width: '100%'}}>
              Center
            </div>
          </Page.HeaderCenter>
          <Page.HeaderRight ref={pageHeaderRightRef}>
            <div className="mockComponent" style={{width: '100%'}}>
              Right
            </div>
          </Page.HeaderRight>
        </Page.Header>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PageHeaderReadme),
    },
  }
)

pageStories.add(
  'PageContents',
  () => {
    const pageContentsRef = createRef<PageContentsRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(pageContentsRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Page.Contents
          ref={pageContentsRef}
          fullWidth={boolean('fullWidth', false)}
          scrollable={boolean('scrollable', false)}
          gutters={
            ComponentSize[
              select('gutters', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        >
          <div
            className="mockComponent pageContents"
            style={{height: `${number('mock contents height', 1200)}px`}}
          />
        </Page.Contents>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PageContentsReadme),
    },
  }
)

pageStories.add(
  'PageTitle',
  () => {
    const pageTitleRef = createRef<PageTitleRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(pageTitleRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Page.Title
          ref={pageTitleRef}
          title={text('title', 'I am a page title!')}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PageTitleReadme),
    },
  }
)

pageStories.add(
  'PageSubTitle',
  () => {
    const pageSubTitleRef = createRef<PageSubTitleRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(pageSubTitleRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Page.SubTitle
          ref={pageSubTitleRef}
          title={text('title', 'I am a page title!')}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
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
          <Page.HeaderLeft>
            <FlexBox
              alignItems={AlignItems.FlexStart}
              direction={FlexDirection.Column}
              margin={ComponentSize.Small}
            >
              <Page.Title title="Markdown Editor" />
              <Page.SubTitle title="A handy tool made by us for you" />
            </FlexBox>
          </Page.HeaderLeft>
          <Page.HeaderCenter>
            <SelectGroup shape={ButtonShape.StretchToFit}>
              <SelectGroup.Button
                id="mode--write"
                titleText="Write Mode"
                active={true}
                value="write"
                onClick={() => {}}
              >
                Write
              </SelectGroup.Button>
              <SelectGroup.Button
                id="mode--preview"
                titleText="Preview Mode"
                active={false}
                value="preview"
                onClick={() => {}}
              >
                Preview
              </SelectGroup.Button>
            </SelectGroup>
          </Page.HeaderCenter>
          <Page.HeaderRight>
            <SquareButton icon={IconFont.Remove} />
            <SquareButton
              icon={IconFont.Checkmark}
              color={ComponentColor.Success}
            />
          </Page.HeaderRight>
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
