// Libraries
import * as React from 'react'
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
} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Dropdown} from 'src/Components/Dropdowns/Family/Dropdown'
import {DropdownButton} from 'src/Components/Dropdowns/Family/DropdownButton'
import {DropdownDivider} from 'src/Components/Dropdowns/Family/DropdownDivider'
import {DropdownItem} from 'src/Components/Dropdowns/Family/DropdownItem'
import {DropdownItemEmpty} from 'src/Components/Dropdowns/Family/DropdownItemEmpty'
import {DropdownLinkItem} from 'src/Components/Dropdowns/Family/DropdownLinkItem'
import {DropdownMenu} from 'src/Components/Dropdowns/Family/DropdownMenu'
import {SelectDropdown} from 'src/Components/Dropdowns/Composed/SelectDropdown'
import {MultiSelectDropdown} from 'src/Components/Dropdowns/Composed/MultiSelectDropdown'

// Types
import {
  ComponentColor,
  DropdownMenuTheme,
  ComponentSize,
  ComponentStatus,
  IconFont,
  DropdownItemType,
} from 'src/Types'

// Notes
import DropdownReadme from 'src/Components/Dropdowns/Family/Dropdown.md'
import DropdownButtonReadme from 'src/Components/Dropdowns/Family/DropdownButton.md'
import DropdownDividerReadme from 'src/Components/Dropdowns/Family/DropdownDivider.md'
import DropdownItemReadme from 'src/Components/Dropdowns/Family/DropdownItem.md'
import DropdownItemEmptyReadme from 'src/Components/Dropdowns/Family/DropdownItemEmpty.md'
import DropdownLinkItemReadme from 'src/Components/Dropdowns/Family/DropdownLinkItem.md'
import DropdownMenuReadme from 'src/Components/Dropdowns/Family/DropdownMenu.md'
import SelectDropdownReadme from 'src/Components/Dropdowns/Composed/SelectDropdown.md'
import MultiSelectDropdownReadme from 'src/Components/Dropdowns/Composed/MultiSelectDropdown.md'

const dropdownFamilyStories = storiesOf('Components|Dropdowns/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const dropdownComposedStories = storiesOf(
  'Components|Dropdowns/Composed',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

dropdownFamilyStories.add(
  'Dropdown',
  () => (
    <div className="story--example">
      <Dropdown
        widthPixels={number('widthPixels', 200)}
        button={(active, onClick) => (
          <DropdownButton active={active} onClick={onClick}>
            {text('Button Text', 'I am a Dropdown!')}
          </DropdownButton>
        )}
        menu={onCollapse => (
          <DropdownMenu onCollapse={onCollapse}>
            <div className="mockComponent dropdownContents">
              <span>Menu Contents</span>
            </div>
          </DropdownMenu>
        )}
        dropUp={boolean('dropUp', false)}
      />
    </div>
  ),
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
  () => (
    <div className="story--example">
      <DropdownDivider text={text('Divider Text', 'Divider Text')} />
    </div>
  ),
  {
    readme: {
      content: marked(DropdownDividerReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownItem',
  () => (
    <div className="story--example">
      <DropdownItem
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
      </DropdownItem>
    </div>
  ),
  {
    readme: {
      content: marked(DropdownItemReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownItemEmpty',
  () => (
    <div className="story--example">
      <DropdownItemEmpty wrapText={boolean('wrapText', false)}>
        {text('children (text)', 'No items to display')}
      </DropdownItemEmpty>
    </div>
  ),
  {
    readme: {
      content: marked(DropdownItemEmptyReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownLinkItem',
  () => (
    <div className="story--example">
      <DropdownLinkItem
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
      </DropdownLinkItem>
    </div>
  ),
  {
    readme: {
      content: marked(DropdownLinkItemReadme),
    },
  }
)

dropdownFamilyStories.add(
  'DropdownMenu',
  () => (
    <div className="story--example">
      <div style={{width: '200px'}}>
        <DropdownMenu
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
          <DropdownDivider text="Domestic Fruits" />
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownDivider text="Imported Fruits" />
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
          <DropdownItem
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
          </DropdownItem>
        </DropdownMenu>
      </div>
    </div>
  ),
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
        widthPixels={number('widthPixels', 200)}
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
        widthPixels={number('widthPixels', 200)}
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
