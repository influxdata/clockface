// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select, color, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Tabs, TabsRef, TabRef, TabContentsRef, TabsContainerRef} from '../'
import {Icon} from '../../Icon/Icon'

// Types
import {
  ComponentSize,
  Orientation,
  IconFont,
  InfluxColors,
  Alignment,
} from '../../../Types'

// Notes
import TabsReadme from './Tabs.md'
import TabReadme from './Tab.md'
import TabContentsReadme from './TabContents.md'
import TabsContainerReadme from './TabsContainer.md'

const tabsStories = storiesOf('Components|Navigation/Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

tabsStories.add(
  'Tabs',
  () => {
    const tabsRef = createRef<TabsRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(tabsRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Tabs.Tabs
          ref={tabsRef}
          padding={
            ComponentSize[
              select(
                'padding',
                {None: 'none', ...mapEnumKeys(ComponentSize)},
                'Large'
              )
            ]
          }
          orientation={
            Orientation[
              select('orientation', mapEnumKeys(Orientation), 'Horizontal')
            ]
          }
          alignment={
            Alignment[select('alignment', mapEnumKeys(Alignment), 'Left')]
          }
          backgroundColor={color('backgroundColor', `${InfluxColors.Kevlar}`)}
        >
          <Tabs.Tab
            active={false}
            id="fruits"
            text="Fruits"
            onClick={id => alert(`Tab1 clicked, id: ${id}`)}
            size={
              ComponentSize[
                select('Tab: size', mapEnumKeys(ComponentSize), 'Small')
              ]
            }
          />
          <Tabs.Tab
            active={true}
            id="vegetables"
            text="Vegetables"
            onClick={id => alert(`Tab2 clicked, id: ${id}`)}
            size={
              ComponentSize[
                select('Tab: size', mapEnumKeys(ComponentSize), 'Small')
              ]
            }
          />
          <Tabs.Tab
            active={false}
            id="animals"
            text="Animals"
            onClick={id => alert(`Tab3 clicked, id: ${id}`)}
            size={
              ComponentSize[
                select('Tab: size', mapEnumKeys(ComponentSize), 'Small')
              ]
            }
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
        className={`story--example cf-tabs__${
          Orientation[
            select('orientation', mapEnumKeys(Orientation), 'Horizontal')
          ]
        }`}
      >
        <Tabs.Tab
          ref={tabRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          icon={
            <Icon
              glyph={IconFont[select('icon', mapEnumKeys(IconFont), 'Star')]}
            />
          }
          active={boolean('active', true)}
          id={text('id', 'fruits')}
          text={text('text', 'Fruits')}
          onClick={id => alert(`Tab clicked, id: ${id}`)}
          backgroundColor={color('backgroundColor', `${InfluxColors.Pepper}`)}
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
        <Tabs.TabContents
          ref={tabContentsRef}
          padding={
            ComponentSize[
              select(
                'padding',
                {None: 'none', ...mapEnumKeys(ComponentSize)},
                'Large'
              )
            ]
          }
          backgroundColor={color('backgroundColor', `${InfluxColors.Pepper}`)}
        >
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
            padding={
              ComponentSize[
                select(
                  'Tabs + TabsContent: padding',
                  {None: 'none', ...mapEnumKeys(ComponentSize)},
                  'Large'
                )
              ]
            }
            orientation={
              Orientation[
                select('orientation', mapEnumKeys(Orientation), 'Horizontal')
              ]
            }
            backgroundColor={color(
              'Tabs: backgroundColor',
              `${InfluxColors.Kevlar}`
            )}
          >
            <Tabs.Tab
              active={false}
              id="tab1"
              text={text('Tab1: text', 'Fruits')}
              onClick={id => alert(`Tab1 clicked, id: ${id}`)}
              backgroundColor={color(
                'Tab: backgroundColor',
                `${InfluxColors.Pepper}`
              )}
              size={
                ComponentSize[
                  select('Tab: size', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
            />
            <Tabs.Tab
              active={true}
              id="tab2"
              text={text('Tab2: text', 'Vegetables')}
              onClick={id => alert(`Tab2 clicked, id: ${id}`)}
              backgroundColor={color(
                'Tab: backgroundColor',
                `${InfluxColors.Pepper}`
              )}
              size={
                ComponentSize[
                  select('Tab: size', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
            />
            <Tabs.Tab
              active={false}
              id="tab3"
              text={text('Tab3: text', 'Animals')}
              onClick={id => alert(`Tab3 clicked, id: ${id}`)}
              backgroundColor={color(
                'Tab: backgroundColor',
                `${InfluxColors.Pepper}`
              )}
              size={
                ComponentSize[
                  select('Tab: size', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
            />
          </Tabs>
          <Tabs.TabContents
            backgroundColor={color(
              'Tab: backgroundColor',
              `${InfluxColors.Pepper}`
            )}
            padding={
              ComponentSize[
                select(
                  'padding',
                  {None: 'none', ...mapEnumKeys(ComponentSize)},
                  'Large'
                )
              ]
            }
          >
            TabContents
          </Tabs.TabContents>
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
