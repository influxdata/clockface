// Libraries
import React, {createRef, RefObject, useRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {
  List,
  ListRef,
  ListDividerRef,
  ListItemRef,
  ListEmptyRef,
  ListLinkItemRef,
} from '../'
import {Popover} from '../../Popover'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  Appearance,
} from '../../../Types'

// Notes
import ListReadme from './List.md'
import ListDividerReadme from './ListDivider.md'
import ListItemReadme from './ListItem.md'
import ListEmptyReadme from './ListEmpty.md'
import ListLinkItemReadme from './ListLinkItem.md'

const listFamilyStories = storiesOf(
  'Components|List/Family',
  module
).addDecorator(withKnobs)

const listExamplesStories = storiesOf(
  'Components|List/Examples',
  module
).addDecorator(withKnobs)

const defaultListStyle = {width: '250px'}

interface ExampleDropdownItem {
  type: 'item' | 'divider'
  wrap: boolean
  text: string
}

const exampleItems: ExampleDropdownItem[] = [
  {
    type: 'divider',
    wrap: false,
    text: 'Domestic Fruits',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Banana',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Kiwi',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lemon',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Apple',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Orange',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Grapefruit',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Pear',
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Imported Fruits',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Dragonfruit',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Yuzu',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Mango',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lychee',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Passionfruit',
  },
  {
    type: 'item',
    wrap: false,
    text: 'Guava',
  },
  {
    type: 'divider',
    wrap: false,
    text: '',
  },
  {
    type: 'item',
    wrap: true,
    text: 'This dropdown item text is much longer to test text wrapping',
  },
  {
    type: 'item',
    wrap: false,
    text:
      'Long text that will be truncated if it exceeds the width of the List',
  },
]

listFamilyStories.add(
  'List',
  () => {
    const [selectedItem, setSelectedItem] = useState<string>('Grapefruit')
    const listRef: RefObject<ListRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(listRef.current)
      /* eslint-enable */
    }

    const handleItemClick = (item: string): void => {
      setSelectedItem(item)
    }

    return (
      <div className="story--example">
        <List.List ref={listRef} style={object('style', defaultListStyle)}>
          {exampleItems.map(item => {
            if (item.type === 'item') {
              return (
                <List.Item
                  key={item.text}
                  color={
                    ComponentColor[
                      select('color', mapEnumKeys(ComponentColor), 'Primary')
                    ]
                  }
                  size={
                    ComponentSize[
                      select('size', mapEnumKeys(ComponentSize), 'Small')
                    ]
                  }
                  value={item.text}
                  selected={item.text === selectedItem}
                  onClick={handleItemClick}
                  wrapText={item.wrap}
                >
                  {item.text}
                </List.Item>
              )
            }

            return (
              <List.Divider
                key={item.text}
                text={item.text}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              />
            )
          })}
        </List.List>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListReadme),
    },
  }
)

listFamilyStories.add(
  'ListDivider',
  () => {
    const dropdownDividerRef: RefObject<ListDividerRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownDividerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <List.Divider
          text={text('Divider Text', 'Divider Text')}
          ref={dropdownDividerRef}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListDividerReadme),
    },
  }
)

listFamilyStories.add(
  'ListItem',
  () => {
    const listItemRef: RefObject<ListItemRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(listItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <List.Item
          ref={listItemRef}
          value={text('value', 'value')}
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          onClick={value => {
            alert(`onClick returned: ${value}`)
          }}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          disabled={boolean('disabled', false)}
        >
          {text('children (text)', 'I am a dropdown item!')}
        </List.Item>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListItemReadme),
    },
  }
)

listFamilyStories.add(
  'ListEmpty',
  () => {
    const listEmptyRef: RefObject<ListEmptyRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(listEmptyRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <List.Empty
          wrapText={boolean('wrapText', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          ref={listEmptyRef}
        >
          {text('children (text)', 'No items to display')}
        </List.Empty>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListEmptyReadme),
    },
  }
)

listFamilyStories.add(
  'ListLinkItem',
  () => {
    const dropdownLinkItemRef: RefObject<ListLinkItemRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownLinkItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <List.LinkItem
          ref={dropdownLinkItemRef}
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          disabled={boolean('disabled', false)}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <a
            href={text('link target', 'http://www.influxdata.com')}
            target="_blank"
          >
            {text('link text', 'Example Link')}
          </a>
        </List.LinkItem>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListLinkItemReadme),
    },
  }
)

listExamplesStories.add(
  'Icons & Indicators',
  () => {
    const listItemRef: RefObject<ListItemRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(listItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example" style={{flexDirection: 'column'}}>
        <List.Item
          ref={listItemRef}
          value={text('value', 'value')}
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          onClick={value => {
            alert(`onClick returned: ${value}`)
          }}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          disabled={boolean('disabled', false)}
        >
          <List.Indicator
            type={select('type', ['checkbox', 'dot'], 'checkbox')}
          />
          {text('children (text)', 'I am a dropdown item!')}
          <List.Icon
            glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]}
          />
        </List.Item>
        <List.Item
          ref={listItemRef}
          value={text('value', 'value')}
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          onClick={value => {
            alert(`onClick returned: ${value}`)
          }}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          disabled={boolean('disabled', false)}
        >
          <List.Icon
            glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]}
          />
          {text('children (text)', 'I am a dropdown item!')}
          <List.Indicator
            type={select('type', ['checkbox', 'dot'], 'checkbox')}
          />
        </List.Item>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListItemReadme),
    },
  }
)

type onHide = () => void | undefined

listExamplesStories.add(
  'Used with a Popover',
  () => {
    const [turtleHat, setTurtleHat] = useState<string>('Detective Hat')
    const triggerRef = useRef<HTMLDivElement>(null)

    const handleToggleHat = (onHide: onHide) => (hat: string) => {
      onHide && onHide()
      setTurtleHat(hat)
    }

    const noop = (): void => {
      return
    }

    return (
      <div className="story--example">
        <div className="mockComponent mockButton" ref={triggerRef}>
          Pet Turtle
        </div>
        <Popover
          appearance={Appearance.Outline}
          color={ComponentColor.Default}
          triggerRef={triggerRef}
          contents={onHide => (
            <List style={{width: '200px'}}>
              <List.Divider
                text="Actions"
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              />
              <List.Item
                value=""
                selected={false}
                wrapText={false}
                onClick={onHide}
                color={ComponentColor.Primary}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Icon glyph={IconFont.Cube} />
                {'Put Turtle in Water'}
              </List.Item>
              <List.Item
                value=""
                selected={false}
                wrapText={false}
                onClick={onHide}
                color={ComponentColor.Success}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Icon glyph={IconFont.Wood} />
                {'Feed Turtle'}
              </List.Item>
              <List.Item
                value=""
                selected={false}
                wrapText={false}
                onClick={onHide}
                color={ComponentColor.Warning}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Icon glyph={IconFont.Sun} />
                {'Put Turtle Outside'}
              </List.Item>
              <List.Item
                value=""
                selected={false}
                wrapText={false}
                onClick={onHide}
                color={ComponentColor.Secondary}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Icon glyph={IconFont.Wand} />
                {'Teach Turtle a Trick'}
              </List.Item>
              <List.Divider
                text="Hat"
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              />
              <List.Item
                value="Detective Hat"
                selected={turtleHat === 'Detective Hat'}
                wrapText={false}
                onClick={handleToggleHat(onHide || noop)}
                color={ComponentColor.Default}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Indicator
                  type={select('type', ['checkbox', 'dot'], 'checkbox')}
                />
                {'Detective Hat'}
              </List.Item>
              <List.Item
                value="Party Hat"
                selected={turtleHat === 'Party Hat'}
                wrapText={false}
                onClick={handleToggleHat(onHide || noop)}
                color={ComponentColor.Default}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Indicator
                  type={select('type', ['checkbox', 'dot'], 'checkbox')}
                />
                {'Party Hat'}
              </List.Item>
              <List.Item
                value="10 Gallon Hat"
                selected={turtleHat === '10 Gallon Hat'}
                wrapText={false}
                onClick={handleToggleHat(onHide || noop)}
                color={ComponentColor.Default}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Indicator
                  type={select('type', ['checkbox', 'dot'], 'checkbox')}
                />
                {'10 Gallon Hat'}
              </List.Item>
              <List.Item
                value="Half Eaten Grape"
                selected={turtleHat === 'Half Eaten Grape'}
                wrapText={false}
                onClick={handleToggleHat(onHide || noop)}
                color={ComponentColor.Default}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <List.Indicator
                  type={select('type', ['checkbox', 'dot'], 'checkbox')}
                />
                {'Half Eaten Grape'}
              </List.Item>
            </List>
          )}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ListItemReadme),
    },
  }
)
