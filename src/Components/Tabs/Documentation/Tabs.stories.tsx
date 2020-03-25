// Libraries
import React, {createRef} from 'react'
import marked from 'marked'
import {get} from 'lodash'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean, number} from '@storybook/addon-knobs'
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
import TabsExampleReadme from './TabsExample.md'

const tabsStories = storiesOf(
  'Components|Navigation/Tabs/Family',
  module
).addDecorator(withKnobs)

const tabsExampleStories = storiesOf(
  'Components|Navigation/Tabs/Examples',
  module
).addDecorator(withKnobs)

tabsStories.add(
  'Tabs',
  () => {
    const [activeTab, setActiveTab] = useState<string>('pomelo')
    const tabsRef = createRef<TabsRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabsRef.current)
      /* eslint-enable */
    }

    const handleTabClick = (id: string): void => {
      setActiveTab(id)
    }

    const exampleTabs = [
      {
        id: 'yuzu',
        label: 'Yuzu',
      },
      {
        id: 'mandarin',
        label: 'Mandarin',
      },
      {
        id: 'citron',
        label: 'Citron',
      },
      {
        id: 'pomelo',
        label: 'Pomelo',
      },
      {
        id: 'kabosu',
        label: 'Kabosu',
      },
      {
        id: 'sudachi',
        label: 'Sudachi',
      },
    ]

    const dropdownLabel = get(
      exampleTabs.find(tab => tab.id === activeTab),
      'label',
      'No active tab'
    )

    return (
      <div className="story--example">
        <Tabs.Tabs
          ref={tabsRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Medium')]
          }
          alignment={
            Alignment[select('alignment', mapEnumKeys(Alignment), 'Left')]
          }
          dropdownAlignment={
            Alignment[
              select('dropdownAlignment', mapEnumKeys(Alignment), 'Center')
            ]
          }
          dropdownLabel={dropdownLabel}
          orientation={
            Orientation[
              select('orientation', mapEnumKeys(Orientation), 'Horizontal')
            ]
          }
          dropdownBreakpoint={number('dropdownBreakpoint', 750)}
        >
          {exampleTabs.map(tab => (
            <Tabs.Tab
              key={tab.id}
              active={activeTab === tab.id}
              id={tab.id}
              text={tab.label}
              onClick={handleTabClick}
            />
          ))}
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

tabsExampleStories.add(
  'Tabs with Links',
  () => {
    const [activeTab, setActiveTab] = useState<string>('triangles')
    const tabsRef = createRef<TabsRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabsRef.current)
      /* eslint-enable */
    }

    const handleTabClick = (id: string): void => {
      setActiveTab(id)
    }

    const handleTabDismiss = (id: string): void => {
      /* eslint-disable */
      console.log('dismissed tab: ', id)
      /* eslint-enable */
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
          dropdownAlignment={
            Alignment[
              select('dropdownAlignment', mapEnumKeys(Alignment), 'Center')
            ]
          }
          dropdownBreakpoint={number('dropdownBreakpoint', 700)}
        >
          <Tabs.Tab
            active={activeTab === 'circles'}
            id="circles"
            text="Circles"
            onClick={handleTabClick}
          />
          <Tabs.Tab
            active={activeTab === 'triangles'}
            id="triangles"
            text="Triangles"
            onClick={handleTabClick}
          />
          <Tabs.Tab
            active={activeTab === 'squares'}
            id="squares"
            text="Squares"
            onClick={handleTabClick}
            onDismiss={handleTabDismiss}
          />
          <Tabs.Tab
            active={activeTab === 'pentagons'}
            id="pentagons"
            text="Pentagons"
            onClick={handleTabClick}
          />
          <Tabs.Tab
            active={activeTab === 'hexagons'}
            id="hexagons"
            text="Hexagons (Link)"
            linkElement={className => <a href="#" className={className} />}
          />
          <Tabs.Tab
            active={activeTab === 'septagons'}
            id="septagons"
            text="Septagons (Link)"
            linkElement={className => <a href="#" className={className} />}
            onDismiss={handleTabDismiss}
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
      content: marked(TabsExampleReadme),
    },
  }
)
