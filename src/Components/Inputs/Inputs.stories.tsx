// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, radios, number, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Input, InputType} from './Input'
import {TextArea} from './TextArea'

// Types
import {
  ComponentStatus,
  ComponentSize,
  IconFont,
  AutoComplete,
} from '../../Types'

const inputsStories = storiesOf('Components|Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

inputsStories.add('Input Component (Text)', () => (
  <Input
    placeholder={text('placeholder', 'Placeholder Text')}
    value={text('value', 'Value Text')}
    onChange={() => {}}
    name={text('name', 'Name')}
    titleText={text('titleText', 'Title Text')}
    disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
    maxLength={number('maxLength', 24)}
    icon={IconFont[radios('icon', mapEnumKeys(IconFont, 10))]}
    widthPixels={number('widthPixels', 200)}
    status={ComponentStatus[radios('status', mapEnumKeys(ComponentStatus))]}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    autocomplete={
      AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
    }
    type={InputType.Text}
  />
))

inputsStories.add('Input Component (Number)', () => (
  <Input
    min={number('min', 0)}
    max={number('max', 50)}
    value={number('value', 25)}
    onChange={() => {}}
    name={text('name', 'Name')}
    titleText={text('titleText', 'Title Text')}
    disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
    maxLength={number('maxLength', 24)}
    icon={IconFont[radios('icon', mapEnumKeys(IconFont, 10))]}
    widthPixels={number('widthPixels', 100)}
    status={ComponentStatus[radios('status', mapEnumKeys(ComponentStatus))]}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    type={InputType.Number}
  />
))

inputsStories.add('Input Component (Password)', () => (
  <Input
    placeholder={text('placeholder', 'Placeholder Text')}
    value={text('value', 'Value Text')}
    onChange={() => {}}
    name={text('name', 'Name')}
    titleText={text('titleText', 'Title Text')}
    disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
    maxLength={number('maxLength', 24)}
    icon={IconFont[radios('icon', mapEnumKeys(IconFont, 10))]}
    widthPixels={number('widthPixels', 200)}
    status={ComponentStatus[radios('status', mapEnumKeys(ComponentStatus))]}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    autocomplete={
      AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
    }
    type={InputType.Password}
  />
))

inputsStories.add('Input Component (Email)', () => (
  <Input
    placeholder={text('placeholder', 'Placeholder Text')}
    value={text('value', 'value@text.com')}
    onChange={() => {}}
    name={text('name', 'Name')}
    titleText={text('titleText', 'Title Text')}
    disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
    maxLength={number('maxLength', 24)}
    icon={IconFont[radios('icon', mapEnumKeys(IconFont, 10))]}
    widthPixels={number('widthPixels', 200)}
    status={ComponentStatus[radios('status', mapEnumKeys(ComponentStatus))]}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    autocomplete={
      AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
    }
    type={InputType.Email}
  />
))

inputsStories.add('TextArea Component', () => (
  <TextArea
    value={text('value', 'Value Text')}
    maxLength={number('maxLength', 50)}
    minLength={number('minLength', 5)}
    placeholder={text('placeholder', 'Placeholder Text')}
    onChange={() => {}}
    autocomplete={
      AutoComplete[radios('autocomplete', mapEnumKeys(AutoComplete))]
    }
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    widthPixels={number('widthPixels', 400)}
    cols={number('cols', 20)}
    rows={number('rows', 20)}
    status={ComponentStatus[radios('status', mapEnumKeys(ComponentStatus))]}
  />
))
