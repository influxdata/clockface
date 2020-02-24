// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {Tabs, TabsRef, TabRef, TabContentsRef, TabsContainerRef} from '../'
import {Icon} from '../../Icon/Base/Icon'

// Types
import {ComponentSize, Orientation, IconFont, Alignment} from '../../../Types'

// Notes
import TabsReadme from './Tabs.md'
import TabReadme from './Tab.md'
import TabContentsReadme from './TabContents.md'
import TabsContainerReadme from './TabsContainer.md'

const tabsStories = storiesOf(
  'Components|Navigation/Tabs',
  module
).addDecorator(withKnobs)

tabsStories.add(
  'Tabs',
  () => {
    const [activeTab, setActiveTab] = useState<string>('triangles')
    const tabsRef = createRef<TabsRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabsRef.current)
      /* eslint-enable */
    }

    const handleClick = (id: string): void => {
      setActiveTab(id)
    }

    return (
      <div className="story--example">
        <Tabs.Tabs
          ref={tabsRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Large')]
          }
          orientation={
            Orientation[
              select('orientation', mapEnumKeys(Orientation), 'Horizontal')
            ]
          }
          alignment={
            Alignment[select('alignment', mapEnumKeys(Alignment), 'Left')]
          }
        >
          <Tabs.Tab
            active={activeTab === 'circles'}
            id="circles"
            text="Circles"
            onClick={handleClick}
          />
          <Tabs.Tab
            active={activeTab === 'triangles'}
            id="triangles"
            text="Triangles"
            onClick={handleClick}
          />
          <Tabs.Tab
            active={activeTab === 'squares'}
            id="squares"
            text="Squares"
            onClick={handleClick}
            onDismiss={() => {}}
          />
          <Tabs.Tab
            active={activeTab === 'pentagons'}
            id="pentagons"
            text="Pentagons"
            onClick={handleClick}
          />
        </Tabs.Tabs>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TabsReadme),
    },
  }
)

tabsStories.add(
  'Tab',
  () => {
    const tabRef = createRef<TabRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabRef.current)
      /* eslint-enable */
    }

    return (
      <div
        className={`story--example cf-tabs__md cf-tabs__${
          Orientation[
            select('orientation', mapEnumKeys(Orientation), 'Horizontal')
          ]
        }`}
      >
        <Tabs.Tab
          ref={tabRef}
          icon={
            <Icon
              glyph={IconFont[select('icon', mapEnumKeys(IconFont), 'Star')]}
            />
          }
          active={boolean('active', true)}
          id={text('id', 'fruits')}
          text={text('text', 'Fruits')}
          onClick={id => alert(`Tab clicked, id: ${id}`)}
          onDismiss={id => alert(`Tab dismissed, id: ${id}`)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TabReadme),
    },
  }
)

tabsStories.add(
  'TabContents',
  () => {
    const tabContentsRef = createRef<TabContentsRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabContentsRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Tabs.TabContents ref={tabContentsRef}>
          <p>Contents go here</p>
        </Tabs.TabContents>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TabContentsReadme),
    },
  }
)

tabsStories.add(
  'TabsContainer',
  () => {
    const tabContainerRef = createRef<TabsContainerRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabContainerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Tabs.Container
          ref={tabContainerRef}
          orientation={
            Orientation[
              select('orientation', mapEnumKeys(Orientation), 'Horizontal')
            ]
          }
          stretchToFitWidth={boolean('stretchToFitWidth', false)}
          stretchToFitHeight={boolean('stretchToFitHeight', false)}
        >
          <Tabs
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Large')]
            }
            orientation={
              Orientation[
                select('orientation', mapEnumKeys(Orientation), 'Horizontal')
              ]
            }
          >
            <Tabs.Tab
              active={false}
              id="tab1"
              text={text('Tab1: text', 'Fruits')}
              onClick={id => alert(`Tab1 clicked, id: ${id}`)}
            />
            <Tabs.Tab
              active={true}
              id="tab2"
              text={text('Tab2: text', 'Vegetables')}
              onClick={id => alert(`Tab2 clicked, id: ${id}`)}
            />
            <Tabs.Tab
              active={false}
              id="tab3"
              text={text('Tab3: text', 'Animals')}
              onClick={id => alert(`Tab3 clicked, id: ${id}`)}
            />
          </Tabs>
          <Tabs.TabContents>TabContents</Tabs.TabContents>
        </Tabs.Container>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TabsContainerReadme),
    },
  }
)
