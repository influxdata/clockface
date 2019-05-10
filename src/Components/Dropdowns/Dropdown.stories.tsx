// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  array,
  number,
  select,
  boolean,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Dropdown} from './Dropdown'
import {DropdownButton} from './DropdownButton'
import {DropdownDivider} from './DropdownDivider'
import {DropdownItem} from './DropdownItem'
import {DropdownMenu} from './Elements/DropdownMenu'
import {MultiSelectDropdown} from './MultiSelectDropdown'

// Types
import {
  ComponentColor,
  DropdownMenuTheme,
  ComponentSize,
  ComponentStatus,
  IconFont,
  DropdownMode,
  DropdownItemType,
} from '../../Types'

const dropdownStories = storiesOf('Components|Dropdowns/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

dropdownStories.add('Dropdown', () => {
  const dropdownValues1 = array('Dropdown Values 1', [
    'LongMenuItem LongMenuItem LongMenuItem LongMenuItem',
    'zero',
    'one',
    'two',
    'three',
    'four',
  ])

  const dropdownValues2 = array('Dropdown Values 2', [
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ])

  return (
    <Dropdown
      onChange={() => {}}
      selectedID={select(
        'selectedID',
        [...dropdownValues1, ...dropdownValues2],
        'zero'
      )}
      widthPixels={number('widthPixels', 200)}
      menuWidthPixels={number('menuWidthPixels', 200)}
      menuHeader={<div>menuHeader</div>}
      icon={
        IconFont[
          select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'BarChart')
        ]
      }
      buttonColor={
        ComponentColor[
          select('buttonColor', mapEnumKeys(ComponentColor), 'Primary')
        ]
      }
      buttonSize={
        ComponentSize[select('buttonSize', mapEnumKeys(ComponentSize), 'Small')]
      }
      status={
        ComponentStatus[
          select('status', mapEnumKeys(ComponentStatus), 'Default')
        ]
      }
      maxMenuHeight={number('maxMenuHeight', 250)}
      menuColor={
        DropdownMenuTheme[
          select('menuColor', mapEnumKeys(DropdownMenuTheme), 'Amethyst')
        ]
      }
      mode={
        DropdownMode[select('mode', mapEnumKeys(DropdownMode), 'ActionList')]
      }
      titleText={text('titleText', 'Title Text')}
      wrapMenuText={boolean('wrapMenuText', false)}
    >
      <Dropdown.Divider text={text('First Divider', 'First Divider')} />
      {dropdownValues1.map(v => (
        <Dropdown.Item key={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider text={text('Second Divider', 'Second Divider')} />
      {dropdownValues2.map(v => (
        <Dropdown.Item key={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
    </Dropdown>
  )
})

dropdownStories.add('MultiSelectDropdown', () => {
  const dropdownValues1 = array('Dropdown Values 1', [
    'LongMenuItem LongMenuItem LongMenuItem LongMenuItem',
    'zero',
    'one',
    'two',
    'three',
    'four',
  ])

  const dropdownValues2 = array('Dropdown Values 2', [
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ])

  return (
    <MultiSelectDropdown
      onChange={() => {}}
      selectedIDs={array('selectedIds', dropdownValues1)}
      widthPixels={number('widthPixels', 200)}
      icon={
        IconFont[
          select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'BarChart')
        ]
      }
      buttonColor={
        ComponentColor[
          select('buttonColor', mapEnumKeys(ComponentColor), 'Primary')
        ]
      }
      buttonSize={
        ComponentSize[select('buttonSize', mapEnumKeys(ComponentSize), 'Small')]
      }
      menuColor={
        DropdownMenuTheme[
          select('menuColor', mapEnumKeys(DropdownMenuTheme), 'Amethyst')
        ]
      }
      wrapText={boolean('wrapText', false)}
      maxMenuHeight={number('maxMenuHeight', 250)}
      emptyText={text('emptyText', 'Empty Text')}
      separatorText={text('separatorText', ', ')}
      status={
        ComponentStatus[
          select('status', mapEnumKeys(ComponentStatus), 'Default')
        ]
      }
    >
      <Dropdown.Divider text={text('First Divider', 'First Divider')} />
      {dropdownValues1.map(v => (
        <Dropdown.Item key={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider text={text('Second Divider', 'Second Divider')} />
      {dropdownValues2.map(v => (
        <Dropdown.Item key={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
    </MultiSelectDropdown>
  )
})

dropdownStories.add('DropdownButton', () => (
  <DropdownButton
    onClick={() => {}}
    status={
      ComponentStatus[select('status', mapEnumKeys(ComponentStatus), 'Default')]
    }
    color={
      ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Primary')]
    }
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
    active={boolean('active', false)}
    icon={
      IconFont[
        select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'BarChart')
      ]
    }
    title={text('title', 'Hover Title Text')}
  >
    Child
  </DropdownButton>
))

dropdownStories.add('DropdownDivider', () => (
  <DropdownDivider text={text('Divider Text', 'Divider Text')} />
))

dropdownStories.add('DropdownItem', () => (
  <div className="story--example">
    <DropdownItem
      value={text('value', 'value')}
      selected={boolean('selected', false)}
      wrapText={boolean('wrapText', false)}
      onClick={value => {
        alert(`onClick returned: ${value}`)
      }}
      type={
        DropdownItemType[select('type', mapEnumKeys(DropdownItemType), 'None')]
      }
    >
      {text('children (text)', 'I am a dropdown item!')}
    </DropdownItem>
  </div>
))

dropdownStories.add('DropdownMenu', () => (
  <div className="story--example">
    <div style={{width: '200px'}}>
      <DropdownMenu
        theme={
          DropdownMenuTheme[
            select('theme', mapEnumKeys(DropdownMenuTheme), 'Sapphire')
          ]
        }
        maxHeight={number('maxHeight', 250)}
      >
        <DropdownDivider text="Domestic Fruits" />
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Banana"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Banana
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Kiwi"
          selected={boolean('selected', false)}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Kiwi
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="custom"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          {text(
            'item text',
            'This dropdown item text is much longer to test text wrapping'
          )}
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Apple"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Apple
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Orange"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Orange
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Grapefruit"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Grapefruit
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Pear"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Pear
        </DropdownItem>
        <DropdownDivider text="Imported Fruits" />
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Dragonfruit"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Dragonfruit
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Yuzu"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Yuzu
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Passionfruit"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Passionfruit
        </DropdownItem>
        <DropdownItem
          wrapText={boolean('wrapText', false)}
          value="Guava"
          selected={false}
          type={
            DropdownItemType[
              select('type', mapEnumKeys(DropdownItemType), 'None')
            ]
          }
        >
          Guava
        </DropdownItem>
      </DropdownMenu>
    </div>
  </div>
))
