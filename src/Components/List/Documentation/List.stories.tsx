// Libraries
import React, {createRef, RefObject, useRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
  color,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {
  List,
  ListRef,
  ListDividerRef,
  ListItemRef,
  ListEmptyStateRef,
} from '../'
import {Popover} from '../../Popover'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  Appearance,
  InfluxColors,
  Gradients,
} from '../../../Types'

// Notes
import ListReadme from './List.md'
import ListDividerReadme from './ListDivider.md'
import ListItemReadme from './ListItem.md'
import ListEmptyStateReadme from './ListEmptyState.md'
import ListLinkElementReadme from './ListLinkElement.md'
import ListPopoverReadme from './ListPopover.md'

const listFamilyStories = storiesOf(
  'Components|List/Family',
  module
).addDecorator(withKnobs)

const listExamplesStories = storiesOf(
  'Components|List/Examples',
  module
).addDecorator(withKnobs)

const defaultListStyle = {width: '250px', height: '600px'}

interface ExampleDropdownItem {
  type: 'item' | 'divider'
  wrap: boolean
  text: string
  disabled: boolean
  backgroundColor?: InfluxColors
  gradient?: Gradients
  noClick?: boolean
  icon?: IconFont
  noIndicator?: boolean
}

const exampleItems: ExampleDropdownItem[] = [
  {
    type: 'divider',
    wrap: false,
    text: 'Domestic Fruits',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Banana',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Kiwi',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lemon',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lime',
    disabled: true,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Apple',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Orange',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Grapefruit',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Pear',
    disabled: false,
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Imported Fruits',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Dragonfruit',
    disabled: false,
    backgroundColor: InfluxColors.Amethyst,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Yuzu',
    disabled: true,
    backgroundColor: InfluxColors.Thunder,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Mango',
    disabled: false,
    backgroundColor: InfluxColors.Tiger,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Lychee',
    disabled: false,
    backgroundColor: InfluxColors.Potassium,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Honeydew Melon',
    disabled: false,
    backgroundColor: InfluxColors.Honeydew,
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Gradients',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'PolarExpress',
    disabled: false,
    gradient: Gradients.PolarExpress,
  },
  {
    type: 'item',
    wrap: false,
    text: 'PastryCafe',
    disabled: false,
    gradient: Gradients.PastryCafe,
  },
  {
    type: 'divider',
    wrap: false,
    text: '',
    disabled: false,
  },
  {
    type: 'item',
    wrap: true,
    text: 'This dropdown item text is much longer to test text wrapping',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text:
      'Long text that will be truncated if it exceeds the width of the List',
    disabled: false,
  },
  {
    type: 'divider',
    wrap: false,
    text: 'Edge Casees',
    disabled: false,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without click handler',
    disabled: false,
    noClick: true,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item with Icon',
    disabled: false,
    icon: IconFont.Chat,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item with Icon + BackgroundColor',
    disabled: false,
    icon: IconFont.Chat,
    backgroundColor: InfluxColors.Pool,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item with Icon + Gradient',
    disabled: false,
    icon: IconFont.Chat,
    gradient: Gradients.SavannaHeat,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without indicator',
    disabled: false,
    noIndicator: true,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without indicator + BackgroundColor',
    disabled: false,
    noIndicator: true,
    backgroundColor: InfluxColors.Star,
  },
  {
    type: 'item',
    wrap: false,
    text: 'Item without indicator + Gradient',
    disabled: false,
    noIndicator: true,
    gradient: Gradients.NineteenEightyFour,
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
        <List.List
          ref={listRef}
          style={object('style', defaultListStyle)}
          gradient={
            Gradients[
              select(
                'gradient',
                {None: 'none', ...mapEnumKeys(Gradients)},
                'None'
              )
            ]
          }
          backgroundColor={
            InfluxColors[
              select(
                'backgroundColor',
                {None: '', ...mapEnumKeys(InfluxColors)},
                'None'
              )
            ]
          }
        >
          {exampleItems.map(item => {
            if (item.type === 'item') {
              return (
                <List.Item
                  key={item.text}
                  backgroundColor={item.backgroundColor}
                  gradient={item.gradient}
                  size={
                    ComponentSize[
                      select('size', mapEnumKeys(ComponentSize), 'Small')
                    ]
                  }
                  value={item.text}
                  selected={item.text === selectedItem}
                  onClick={item.noClick ? undefined : handleItemClick}
                  wrapText={item.wrap}
                  disabled={item.disabled}
                >
                  {item.icon && <List.Icon glyph={item.icon} />}
                  {!item.noIndicator && !item.icon && (
                    <List.Indicator
                      type={select(
                        'indicator type',
                        ['checkbox', 'dot'],
                        'checkbox'
                      )}
                    />
                  )}
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
          backgroundColor={color('color', InfluxColors.Pool)}
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
  'ListEmptyState',
  () => {
    const listEmptyStateRef: RefObject<ListEmptyStateRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(listEmptyStateRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <List.EmptyState
          wrapText={boolean('wrapText', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          ref={listEmptyStateRef}
        >
          {text('children (text)', 'No items to display')}
        </List.EmptyState>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListEmptyStateReadme),
    },
  }
)

listExamplesStories.add(
  'Using LinkElement Prop',
  () => {
    const linkElementRef: RefObject<HTMLAnchorElement> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(linkElementRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <List.Item
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          disabled={boolean('disabled', false)}
          backgroundColor={color('color', InfluxColors.Pool)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          linkElement={
            <a
              href={text('link target', 'http://www.influxdata.com')}
              target="_blank"
              ref={linkElementRef}
            />
          }
        >
          <List.Indicator
            type={select('type', ['checkbox', 'dot'], 'checkbox')}
          />
          {text('text', 'Example Link')}
        </List.Item>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ListLinkElementReadme),
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
          backgroundColor={color('color', InfluxColors.Pool)}
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
          backgroundColor={color('color', InfluxColors.Pool)}
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
          enableDefaultStyles={false}
          appearance={Appearance.Outline}
          color={ComponentColor.Primary}
          triggerRef={triggerRef}
          contents={onHide => (
            <List style={{width: '200px'}} backgroundColor={InfluxColors.White}>
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
                backgroundColor={InfluxColors.Pool}
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
                backgroundColor={InfluxColors.Rainforest}
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
                backgroundColor={InfluxColors.Pineapple}
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
                backgroundColor={InfluxColors.Star}
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
      content: marked(ListPopoverReadme),
    },
  }
)
