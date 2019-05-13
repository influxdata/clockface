// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, number, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Dropdown} from './Family/Dropdown'
import {DropdownButton} from './Family/DropdownButton'
import {DropdownDivider} from './Family/DropdownDivider'
import {DropdownItem} from './Family/DropdownItem'
import {DropdownMenu} from './Family/DropdownMenu'

// Types
import {
  ComponentColor,
  DropdownMenuTheme,
  ComponentSize,
  ComponentStatus,
  IconFont,
  DropdownItemType,
} from '../../Types'

const dropdownStories = storiesOf('Components|Dropdowns/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

dropdownStories.add('Dropdown', () => (
  <div className="story--example">
    <Dropdown
      widthPixels={number('widthPixels', 200)}
      button={(active, onClick) => (
        <DropdownButton active={active} onClick={onClick}>
          {text('Button Text', 'I am a Dropdown!')}
        </DropdownButton>
      )}
      menu={
        <DropdownMenu>
          <div className="mockComponent dropdownContents">
            <span>Menu Contents</span>
          </div>
        </DropdownMenu>
      }
    />
  </div>
))

dropdownStories.add('DropdownButton', () => (
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
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'BarChart')
          ]
        }
        title={text('title', 'Hover Title Text')}
      >
        {text('children (text)', 'I am a button!')}
      </DropdownButton>
    </div>
  </div>
))

dropdownStories.add('DropdownDivider', () => (
  <div className="story--example">
    <DropdownDivider text={text('Divider Text', 'Divider Text')} />
  </div>
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
