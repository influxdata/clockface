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

// Components
import {
  Dropdown,
  DropdownRef,
  DropdownButtonRef,
  DropdownDividerRef,
  DropdownItemRef,
  DropdownItemEmptyRef,
  DropdownLinkItemRef,
  DropdownMenuRef,
  DropdownMenuContentsRef,
} from '../'
import {SelectDropdown, SelectDropdownRef} from '../Composed/SelectDropdown'
import {
  MultiSelectDropdown,
  MultiSelectDropdownRef,
} from '../Composed/MultiSelectDropdown'

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

const dropdownFamilyStories = storiesOf(
  'Components|Dropdowns/Family',
  module
).addDecorator(withKnobs)

const dropdownComposedStories = storiesOf(
  'Components|Dropdowns/Composed',
  module
).addDecorator(withKnobs)

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
  () => {
    const dropdownButtonRef: RefObject<DropdownButtonRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dropdownButtonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <div style={{width: '200px'}}>
          <Dropdown.Button
            ref={dropdownButtonRef}
            onClick={() => {
              // do nothing
            }}
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
          </Dropdown.Button>
        </div>
      </div>
    )
  },
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
          disabled={boolean('disabled', false)}
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
          disabled={boolean('disabled', false)}
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

interface ExampleDropdownItem {
  type: 'item' | 'divider'
  text: string
}

dropdownFamilyStories.add(
  'DropdownMenu',
  () => {
    const dropdownMenuRef: RefObject<DropdownMenuRef> = createRef()
    const dropdownMenuContentsRef: RefObject<DropdownMenuContentsRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log('DropdownMenu', dropdownMenuRef.current)
      console.log('DropdownMenuContents', dropdownMenuContentsRef.current)
      /* eslint-enable */
    }

    const exampleItems: ExampleDropdownItem[] = [
      {
        type: 'divider',
        text: 'Domestic Fruits',
      },
      {
        type: 'item',
        text: 'Banana',
      },
      {
        type: 'item',
        text: 'Kiwi',
      },
      {
        type: 'item',
        text: 'Lemon',
      },
      {
        type: 'item',
        text: 'Apple',
      },
      {
        type: 'item',
        text: 'Orange',
      },
      {
        type: 'item',
        text: 'Grapefruit',
      },
      {
        type: 'item',
        text: 'Pear',
      },
      {
        type: 'divider',
        text: 'Imported Fruits',
      },
      {
        type: 'item',
        text: 'Dragonfruit',
      },
      {
        type: 'item',
        text: 'Yuzu',
      },
      {
        type: 'item',
        text: 'Mango',
      },
      {
        type: 'item',
        text: 'Lychee',
      },
      {
        type: 'item',
        text: 'Passionfruit',
      },
      {
        type: 'item',
        text: 'Guava',
      },
      {
        type: 'divider',
        text: 'Testing Only',
      },
      {
        type: 'item',
        text: 'This dropdown item text is much longer to test text wrapping',
      },
    ]

    const selectedItems = array('Selected Items', ['Yuzu', 'Banana'])
    const disabledItems = array('Disabled Items', ['Passionfruit'])

    const menuStyle = {width: '250px'}

    return (
      <div className="story--example">
        <Dropdown.Menu
          ref={dropdownMenuRef}
          style={object('style', menuStyle)}
          contentsRef={dropdownMenuContentsRef}
          theme={
            DropdownMenuTheme[
              select('theme', mapEnumKeys(DropdownMenuTheme), 'Onyx')
            ]
          }
          maxHeight={number('maxHeight', 250)}
          noScrollX={boolean('noScrollX', true)}
          noScrollY={boolean('noScrollY', false)}
          scrollToSelected={boolean('scrollToSelected', true)}
        >
          {exampleItems.map(item => {
            if (item.type === 'divider') {
              return <Dropdown.Divider key={item.text} text={item.text} />
            }

            return (
              <Dropdown.Item
                key={item.text}
                wrapText={boolean('item wrapText', false)}
                value={item.text}
                selected={selectedItems.includes(item.text)}
                disabled={disabledItems.includes(item.text)}
                type={
                  DropdownItemType[
                    select('item type', mapEnumKeys(DropdownItemType), 'None')
                  ]
                }
              >
                {item.text}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
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

dropdownComposedStories.add(
  'SelectDropdown',
  () => {
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

    const selectDropdownRef: RefObject<SelectDropdownRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(selectDropdownRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SelectDropdown
          ref={selectDropdownRef}
          style={object('style', defaultDropdownStyle)}
          menuMaxHeight={number('menuMaxHeight', 250)}
          dropUp={boolean('dropUp', false)}
          menuTheme={
            DropdownMenuTheme[
              select('menuTheme', mapEnumKeys(DropdownMenuTheme), 'Onyx')
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
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SelectDropdownReadme),
    },
  }
)

dropdownComposedStories.add(
  'MultiSelectdropdown',
  () => {
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

    const multiSelectDropdownRef: RefObject<MultiSelectDropdownRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(multiSelectDropdownRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <MultiSelectDropdown
          ref={multiSelectDropdownRef}
          style={object('style', defaultDropdownStyle)}
          menuMaxHeight={number('menuMaxHeight', 250)}
          dropUp={boolean('dropUp', false)}
          menuTheme={
            DropdownMenuTheme[
              select('menuTheme', mapEnumKeys(DropdownMenuTheme), 'Onyx')
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
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(MultiSelectDropdownReadme),
    },
  }
)
