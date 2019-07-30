// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  radios,
  number,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Input} from './Input'
import {AutoInput} from './AutoInput'
import {TextArea} from './TextArea'
import {SlideToggle} from '../SlideToggle/SlideToggle'

// Types
import {
  ComponentStatus,
  ComponentSize,
  ComponentColor,
  IconFont,
  AutoComplete,
  FlexDirection,
  AlignItems,
  InputType,
} from '../../Types'
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

// Notes
import InputReadme from './Input.md'
import AutoInputReadme from './AutoInput.md'

const inputsBaseStories = storiesOf('Components|Inputs/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const inputsComposedStories = storiesOf('Components|Inputs/Composed', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

inputsBaseStories.add(
  'Input (Text)',
  () => (
    <div className="story--example">
      <Input
        placeholder={text('placeholder', 'Placeholder Text')}
        value={text('value', 'Value Text')}
        onChange={() => {}}
        name={text('name', 'Name')}
        titleText={text('titleText', 'Title Text')}
        disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
        maxLength={number('maxLength', 24)}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        widthPixels={number('widthPixels', 200)}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        autocomplete={
          AutoComplete[
            radios<AutoComplete>('autocomplete', mapEnumKeys(AutoComplete))
          ]
        }
        type={InputType.Text}
      />
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Number)',
  () => (
    <div className="story--example">
      <Input
        min={number('min', 0)}
        max={number('max', 50)}
        value={number('value', 25)}
        onChange={() => {}}
        name={text('name', 'Name')}
        titleText={text('titleText', 'Title Text')}
        disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
        maxLength={number('maxLength', 24)}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        widthPixels={number('widthPixels', 100)}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        type={InputType.Number}
      />
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Password)',
  () => (
    <div className="story--example">
      <Input
        placeholder={text('placeholder', 'Placeholder Text')}
        value={text('value', 'Value Text')}
        onChange={() => {}}
        name={text('name', 'Name')}
        titleText={text('titleText', 'Title Text')}
        disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
        maxLength={number('maxLength', 24)}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        widthPixels={number('widthPixels', 200)}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        autocomplete={
          AutoComplete[
            radios<AutoComplete>('autocomplete', mapEnumKeys(AutoComplete))
          ]
        }
        type={InputType.Password}
      />
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Email)',
  () => (
    <div className="story--example">
      <Input
        placeholder={text('placeholder', 'Placeholder Text')}
        value={text('value', 'value@text.com')}
        onChange={() => {}}
        name={text('name', 'Name')}
        titleText={text('titleText', 'Title Text')}
        disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
        maxLength={number('maxLength', 24)}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        widthPixels={number('widthPixels', 200)}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        autocomplete={
          AutoComplete[
            radios<AutoComplete>('autocomplete', mapEnumKeys(AutoComplete))
          ]
        }
        type={InputType.Email}
      />
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Checkbox)',
  () => (
    <div className="story--example">
      <ComponentSpacer
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        margin={ComponentSize.Medium}
      >
        <Input
          name={text('name', 'Name')}
          onChange={() => {}}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          type={InputType.Checkbox}
          checked={boolean('checked', true)}
        />
        <SlideToggle.Label
          text="I Agree to Terms and Conditions"
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          active={boolean('checked', true)}
        />
      </ComponentSpacer>
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add('TextArea', () => (
  <div className="story--example">
    <TextArea
      value={text('value', 'Value Text')}
      maxLength={number('maxLength', 50)}
      minLength={number('minLength', 5)}
      placeholder={text('placeholder', 'Placeholder Text')}
      onChange={() => {}}
      autocomplete={
        AutoComplete[
          radios<AutoComplete>('autocomplete', mapEnumKeys(AutoComplete))
        ]
      }
      size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
      widthPixels={number('widthPixels', 400)}
      cols={number('cols', 20)}
      rows={number('rows', 20)}
      status={
        ComponentStatus[
          select('status', mapEnumKeys(ComponentStatus), 'Default')
        ]
      }
    />
  </div>
))

inputsComposedStories.add(
  'AutoInput',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent Width (px)', 300)}px`}}>
        <AutoInput
          value={text('value', 'Kabocha Pumpkin')}
          inputPlaceholder={text('inputPlaceholder', 'Enter a custom value...')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          inputType={
            InputType[select('inputType', mapEnumKeys(InputType), 'Text')]
          }
          radioColor={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          inputMaxLength={number('inputMaxLength', 100)}
          inputMin={number('inputMin', 0)}
          inputMax={number('inputMax', 100)}
          onChange={value => alert(value)}
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(AutoInputReadme),
    },
  }
)
