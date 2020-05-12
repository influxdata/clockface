// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, text, number, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {
  Page,
  PageRef,
  PageControlBarRef,
  PageControlBarCenterRef,
  PageControlBarLeftRef,
  PageControlBarRightRef,
  PageContentsRef,
} from '../index'
import {SelectGroup} from '../../SelectGroup/index'
import {Button} from '../../Button/Composed/Button'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {SelectDropdown} from '../../Dropdowns/Composed/SelectDropdown'
import {QuestionMarkTooltip} from '../../Popover/Composed/QuestionMarkTooltip'

// Types
import {
  IconFont,
  ComponentColor,
  ComponentSize,
  ButtonShape,
} from '../../../Types'

// Notes
import FullPageReadme from './FullPage.md'
import PageReadme from './Page.md'
import PageControlBarReadme from './PageControlBar.md'
import PageContentsReadme from './PageContents.md'
import PageTitleReadme from './PageTitle.md'
import {PageTitleRef} from '../PageTitle'

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
  'PageControlBar',
  () => {
    const pageControlBarRef = createRef<PageControlBarRef>()
    const pageControlBarLeftRef = createRef<PageControlBarLeftRef>()
    const pageControlBarCenterRef = createRef<PageControlBarCenterRef>()
    const pageControlBarRightRef = createRef<PageControlBarRightRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(pageControlBarRef.current)
      console.log(pageControlBarLeftRef.current)
      console.log(pageControlBarCenterRef.current)
      console.log(pageControlBarRightRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Page.ControlBar
          ref={pageControlBarRef}
          fullWidth={boolean('fullWidth', false)}
          gutters={
            ComponentSize[
              select('gutters', mapEnumKeys(ComponentSize), 'Small')
            ]
          }
        >
          <Page.ControlBarLeft ref={pageControlBarLeftRef}>
            <div className="mockComponent" style={{width: '100%'}}>
              Left
            </div>
          </Page.ControlBarLeft>
          <Page.ControlBarCenter ref={pageControlBarCenterRef}>
            <div className="mockComponent" style={{width: '100%'}}>
              Center
            </div>
          </Page.ControlBarCenter>
          <Page.ControlBarRight ref={pageControlBarRightRef}>
            <div className="mockComponent" style={{width: '100%'}}>
              Right
            </div>
          </Page.ControlBarRight>
        </Page.ControlBar>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PageControlBarReadme),
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

pageExampleStories.add(
  'Full Page',
  () => {
    const [dropdownActiveItem, setDropdownActiveItem] = useState<string>(
      'Square'
    )
    const dummyDropdownOptions = [
      'Circle',
      'Triangle',
      'Square',
      'Pentagon',
      'Hexagon',
    ]

    const handleDropdownToggle = (item: string): void => {
      setDropdownActiveItem(item)
    }

    return (
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
            <h1>Title</h1>
            <span>Bloob</span>
          </Page.Header>
          <Page.ControlBar
            fullWidth={boolean('fullWidth', false)}
            gutters={
              ComponentSize[
                select('gutters', mapEnumKeys(ComponentSize), 'Small')
              ]
            }
          >
            <Page.ControlBarLeft>
              <SelectDropdown
                options={dummyDropdownOptions}
                selectedOption={dropdownActiveItem}
                onSelect={handleDropdownToggle}
                style={{width: '300px'}}
              />
            </Page.ControlBarLeft>
            <Page.ControlBarCenter>
              <SelectGroup
                shape={ButtonShape.StretchToFit}
                style={{width: '200px'}}
              >
                <SelectGroup.Option
                  id="mode--write"
                  titleText="Write Mode"
                  active={true}
                  value="write"
                  onClick={() => {
                    // do nothing
                  }}
                >
                  Write
                </SelectGroup.Option>
                <SelectGroup.Option
                  id="mode--preview"
                  titleText="Preview Mode"
                  active={false}
                  value="preview"
                  onClick={() => {
                    // do nothing
                  }}
                >
                  Preview
                </SelectGroup.Option>
              </SelectGroup>
            </Page.ControlBarCenter>
            <Page.ControlBarRight>
              <QuestionMarkTooltip tooltipContents="Yeehaw I'm a tooltip" />
              <Button text="Export Data" icon={IconFont.Export} />
              <SquareButton icon={IconFont.Remove} />
              <SquareButton
                icon={IconFont.Checkmark}
                color={ComponentColor.Success}
              />
            </Page.ControlBarRight>
          </Page.ControlBar>
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
    )
  },
  {
    readme: {
      content: marked(FullPageReadme),
    },
  }
)
