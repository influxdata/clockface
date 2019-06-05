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
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Input, InputType} from './Input'
import {TextArea} from './TextArea'
import {SlideToggle} from '../SlideToggle/SlideToggle'

// Types
import {
  ComponentStatus,
  ComponentSize,
  IconFont,
  AutoComplete,
  FlexDirection,
  AlignItems,
} from '../../Types'
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

// Notes
const InputReadme = marked(require('./Input.md'))

const inputsStories = storiesOf('Components|Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

inputsStories.add(
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
          AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
        }
        type={InputType.Text}
      />
    </div>
  ),
  {
    readme: {
      content: InputReadme,
    },
  }
)

inputsStories.add(
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
      content: InputReadme,
    },
  }
)

inputsStories.add(
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
          AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
        }
        type={InputType.Password}
      />
    </div>
  ),
  {
    readme: {
      content: InputReadme,
    },
  }
)

inputsStories.add(
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
          AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
        }
        type={InputType.Email}
      />
    </div>
  ),
  {
    readme: {
      content: InputReadme,
    },
  }
)

inputsStories.add(
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
      content: InputReadme,
    },
  }
)

inputsStories.add('TextArea', () => (
  <div className="story--example">
    <TextArea
      value={text('value', 'Value Text')}
      maxLength={number('maxLength', 50)}
      minLength={number('minLength', 5)}
      placeholder={text('placeholder', 'Placeholder Text')}
      onChange={() => {}}
      autocomplete={
        AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
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
