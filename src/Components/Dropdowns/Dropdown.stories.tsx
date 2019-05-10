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
} from '../../Types'

const dropdownStories = storiesOf('Components|Dropdowns/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

dropdownStories.add('Dropdown Component', () => {
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
      <Dropdown.Divider
        id="first_divider"
        text={text('First Divider', 'First Divider')}
      />
      {dropdownValues1.map(v => (
        <Dropdown.Item key={v} id={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider
        id="second_divider"
        text={text('Second Divider', 'Second Divider')}
      />
      {dropdownValues2.map(v => (
        <Dropdown.Item key={v} id={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
    </Dropdown>
  )
})

dropdownStories.add('MultiSelectDropdown Component', () => {
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
      <Dropdown.Divider
        id="first_divider"
        text={text('First Divider', 'First Divider')}
      />
      {dropdownValues1.map(v => (
        <Dropdown.Item key={v} id={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider
        id="second_divider"
        text={text('Second Divider', 'Second Divider')}
      />
      {dropdownValues2.map(v => (
        <Dropdown.Item key={v} id={v} value={v}>
          {v}
        </Dropdown.Item>
      ))}
    </MultiSelectDropdown>
  )
})

dropdownStories.add('DropdownButton Component', () => (
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

dropdownStories.add('DropdownDivider Component', () => (
  <DropdownDivider id="divider" text={text('Divider Text', 'Divider Text')} />
))

dropdownStories.add('DropdownItem Component', () => (
  <DropdownItem
    id="item_id"
    value={text('Item Value', 'Value')}
    selected={boolean('selected', false)}
    checkbox={boolean('checkbox', false)}
  >
    {text('Item Value', 'Value')}
  </DropdownItem>
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
        <DropdownDivider text="Domestic Fruits" id="divider" />
        <DropdownItem
          id="item_id"
          value="Banana"
          selected={true}
          checkbox={boolean('checkbox', false)}
        >
          Banana
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Kiwi"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Kiwi
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Apple"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Apple
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Orange"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Orange
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Grapefruit"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Grapefruit
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Pear"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Pear
        </DropdownItem>
        <DropdownDivider text="Imported Fruits" id="divider" />
        <DropdownItem
          id="item_id"
          value="Dragonfruit"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Dragonfruit
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Yuzu"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Yuzu
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Passionfruit"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Passionfruit
        </DropdownItem>
        <DropdownItem
          id="item_id"
          value="Guava"
          selected={false}
          checkbox={boolean('checkbox', false)}
        >
          Guava
        </DropdownItem>
      </DropdownMenu>
    </div>
  </div>
))
