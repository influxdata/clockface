// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select, color, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'

// Components
import {Tabs} from 'src/Components/Tabs/Tabs'
import {Tab} from 'src/Components/Tabs/Tab'
import {TabContents} from 'src/Components/Tabs/TabContents'
import {TabsContainer} from 'src/Components/Tabs/TabsContainer'
import {Icon} from 'src/Components/Icon/Icon'

// Types
import {
  ComponentSize,
  Orientation,
  IconFont,
  InfluxColors,
  Alignment,
} from 'src/Types'

// Notes
import TabsReadme from 'src/Components/Tabs/Tabs.md'
import TabReadme from 'src/Components/Tabs/Tab.md'
import TabContentsReadme from 'src/Components/Tabs/TabContents.md'
import TabsContainerReadme from 'src/Components/Tabs/TabsContainer.md'

const tabsStories = storiesOf('Components|Navigation/Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

tabsStories.add(
  'Tabs',
  () => (
    <div className="story--example">
      <Tabs
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
        <Tab
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
        <Tab
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
        <Tab
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
      </Tabs>
    </div>
  ),
  {
    readme: {
      content: marked(TabsReadme),
    },
  }
)

tabsStories.add(
  'Tab',
  () => (
    <div
      className={`story--example cf-tabs__${
        Orientation[
          select('orientation', mapEnumKeys(Orientation), 'Horizontal')
        ]
      }`}
    >
      <Tab
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
    </div>
  ),
  {
    readme: {
      content: marked(TabReadme),
    },
  }
)

tabsStories.add(
  'TabContents',
  () => (
    <div>
      <TabContents
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
      </TabContents>
    </div>
  ),
  {
    readme: {
      content: marked(TabContentsReadme),
    },
  }
)

tabsStories.add(
  'TabsContainer',
  () => (
    <div className="story--example">
      <TabsContainer
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
          <Tab
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
          <Tab
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
          <Tab
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
        <TabContents
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
        </TabContents>
      </TabsContainer>
    </div>
  ),
  {
    readme: {
      content: marked(TabsContainerReadme),
    },
  }
)
