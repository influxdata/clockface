// Libraries
import React, {createRef, RefObject} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  number,
  select,
  boolean,
  array,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {
  Dropdown,
  DropdownRef,
  DropdownButton,
  DropdownDividerRef,
  DropdownItemRef,
  DropdownItemEmptyRef,
  DropdownLinkItemRef,
  DropdownMenuRef,
  DropdownMenuContentsRef,
  SelectDropdown,
  MultiSelectDropdown,
} from '../'

// Types
import {
  ComponentColor,
  DropdownMenuTheme,
  ComponentSize,
  ComponentStatus,
  IconFont,
  DropdownItemType,
} from '../../../Types'

// Notes
import DropdownReadme from './Dropdown.md'
import DropdownButtonReadme from './DropdownButton.md'
import DropdownDividerReadme from './DropdownDivider.md'
import DropdownItemReadme from './DropdownItem.md'
import DropdownItemEmptyReadme from './DropdownItemEmpty.md'
import DropdownLinkItemReadme from './DropdownLinkItem.md'
import DropdownMenuReadme from './DropdownMenu.md'
import SelectDropdownReadme from './SelectDropdown.md'
import MultiSelectDropdownReadme from './MultiSelectDropdown.md'

const dropdownFamilyStories = storiesOf('Components|Dropdowns/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const dropdownComposedStories = storiesOf(
  'Components|Dropdowns/Composed',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const defaultDropdownStyle = {width: '250px'}

dropdownFamilyStories.add(
  'Dropdown',
  () => {
    const dropdownRef: RefObject<DropdownRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Dropdown.Dropdown
          ref={dropdownRef}
          style={object('style', defaultDropdownStyle)}
          button={(active, onClick) => (
            <Dropdown.Button active={active} onClick={onClick}>
              {text('Button Text', 'I am a Dropdown!')}
            </Dropdown.Button>
          )}
          menu={onCollapse => (
            <Dropdown.Menu onCollapse={onCollapse}>
              <div className="mockComponent dropdownContents">
                <span>Menu Contents</span>
              </div>
            </Dropdown.Menu>
          )}
          dropUp={boolean('dropUp', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DropdownReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownButton',
  () => (
    <div className="story--example">
      <div style={{width: '200px'}}>
        <DropdownButton
          onClick={() => {}}
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          active={boolean('active', false)}
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'BarChart'
              )
            ]
          }
          title={text('title', 'Hover Title Text')}
        >
          {text('children (text)', 'I am a button!')}
        </DropdownButton>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(DropdownButtonReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownDivider',
  () => {
    const dropdownDividerRef: RefObject<DropdownDividerRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownDividerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Dropdown.Divider
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
      content: marked(DropdownDividerReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownItem',
  () => {
    const dropdownItemRef: RefObject<DropdownItemRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Dropdown.Item
          ref={dropdownItemRef}
          value={text('value', 'value')}
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          onClick={value => {
            alert(`onClick returned: ${value}`)
          }}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          {text('children (text)', 'I am a dropdown item!')}
        </Dropdown.Item>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DropdownItemReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownItemEmpty',
  () => {
    const dropdownItemEmptyRef: RefObject<DropdownItemEmptyRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownItemEmptyRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Dropdown.ItemEmpty
          wrapText={boolean('wrapText', false)}
          ref={dropdownItemEmptyRef}
        >
          {text('children (text)', 'No items to display')}
        </Dropdown.ItemEmpty>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DropdownItemEmptyReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownLinkItem',
  () => {
    const dropdownLinkItemRef: RefObject<DropdownLinkItemRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownLinkItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Dropdown.LinkItem
          ref={dropdownLinkItemRef}
          selected={boolean('selected', false)}
          wrapText={boolean('wrapText', false)}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          <a
            href={text('link target', 'http://www.influxdata.com')}
            target="_blank"
          >
            {text('link text', 'Example Link')}
          </a>
        </Dropdown.LinkItem>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DropdownLinkItemReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownMenu',
  () => {
    const dropdownMenuRef: RefObject<DropdownMenuRef> = createRef()
    const dropdownMenuContentsRef: RefObject<
      DropdownMenuContentsRef
    > = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log('DropdownMenu', dropdownMenuRef.current)
      console.log('DropdownMenuContents', dropdownMenuContentsRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div style={{width: '200px'}}>
          <Dropdown.Menu
            ref={dropdownMenuRef}
            contentsRef={dropdownMenuContentsRef}
            theme={
              DropdownMenuTheme[
                select('theme', mapEnumKeys(DropdownMenuTheme), 'Sapphire')
              ]
            }
            maxHeight={number('maxHeight', 250)}
            noScrollX={boolean('noScrollX', true)}
            noScrollY={boolean('noScrollY', false)}
            scrollToSelected={boolean('scrollToSelected', true)}
          >
            <Dropdown.Divider text="Domestic Fruits" />
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Banana"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Banana
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Kiwi"
              selected={true}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Kiwi
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Lemon"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Lemon
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="custom"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              This dropdown item text is much longer to test text wrapping
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Apple"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Apple
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Orange"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Orange
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Grapefruit"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Grapefruit
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Pear"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Pear
            </Dropdown.Item>
            <Dropdown.Divider text="Imported Fruits" />
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Dragonfruit"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Dragonfruit
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Yuzu"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Yuzu
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Mango"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Mango
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Lychee"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Lychee
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Passionfruit"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Passionfruit
            </Dropdown.Item>
            <Dropdown.Item
              wrapText={boolean('item wrapText', false)}
              value="Guava"
              selected={false}
              type={
                DropdownItemType[
                  select('item type', mapEnumKeys(DropdownItemType), 'None')
                ]
              }
            >
              Guava
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DropdownMenuReadme),
    },
  }
)

const selectDropdownOptions = [
  '---Vegetables',
  'Celery',
  'Carrot',
  'Potato',
  'Corn',
  'Bok Choy',
  '---Fruits',
  'Apple',
  'Peach',
  'Tomato',
  'Grape',
  'Orange',
  'Lemon',
  'Watermelon',
  'Kiwi',
  'Banana',
  'Strawberry',
]

const selectDropdownSelectedOption = 'Celery'

dropdownComposedStories.add(
  'SelectDropdown',
  () => (
    <div className="story--example">
      <SelectDropdown
        style={object('style', defaultDropdownStyle)}
        menuMaxHeight={number('menuMaxHeight', 250)}
        dropUp={boolean('dropUp', false)}
        menuTheme={
          DropdownMenuTheme[
            select('menuTheme', mapEnumKeys(DropdownMenuTheme), 'Sapphire')
          ]
        }
        onSelect={option => {
          alert(option)
        }}
        buttonStatus={
          ComponentStatus[
            select('buttonStatus', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        buttonColor={
          ComponentColor[
            select('buttonColor', mapEnumKeys(ComponentColor), 'Primary')
          ]
        }
        buttonSize={
          ComponentSize[
            select('buttonSize', mapEnumKeys(ComponentSize), 'Small')
          ]
        }
        buttonIcon={
          IconFont[
            select(
              'buttonIcon',
              {None: 'none', ...mapEnumKeys(IconFont)},
              'BarChart'
            )
          ]
        }
        selectedOption={text('selectedOption', selectDropdownSelectedOption)}
        options={array('options', selectDropdownOptions)}
      />
    </div>
  ),
  {
    readme: {
      content: marked(SelectDropdownReadme),
    },
  }
)

const defaultMultiSelectOptions = [
  'Celery',
  'Carrot',
  'Potato',
  '---',
  'Onion',
  'Tomato',
  'Spinach',
]
const defaultMultiSelectSelectedOptions = ['Celery', 'Onion']

dropdownComposedStories.add(
  'MultiSelectdropdown',
  () => (
    <div className="story--example">
      <MultiSelectDropdown
        style={object('style', defaultDropdownStyle)}
        menuMaxHeight={number('menuMaxHeight', 250)}
        dropUp={boolean('dropUp', false)}
        menuTheme={
          DropdownMenuTheme[
            select('menuTheme', mapEnumKeys(DropdownMenuTheme), 'Sapphire')
          ]
        }
        onSelect={option => {
          alert(option)
        }}
        buttonStatus={
          ComponentStatus[
            select('buttonStatus', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        buttonColor={
          ComponentColor[
            select('buttonColor', mapEnumKeys(ComponentColor), 'Primary')
          ]
        }
        buttonSize={
          ComponentSize[
            select('buttonSize', mapEnumKeys(ComponentSize), 'Small')
          ]
        }
        buttonIcon={
          IconFont[
            select(
              'buttonIcon',
              {None: 'none', ...mapEnumKeys(IconFont)},
              'BarChart'
            )
          ]
        }
        emptyText={text('emptyText', 'None selected')}
        selectedOptions={array(
          'selectedOptions',
          defaultMultiSelectSelectedOptions
        )}
        options={array('options', defaultMultiSelectOptions)}
      />
    </div>
  ),
  {
    readme: {
      content: marked(MultiSelectDropdownReadme),
    },
  }
)
