// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text} from '@storybook/addon-knobs'

// Components
import {DateRangePicker} from './Composed/DateRangePicker'
import {DatePicker} from './Base/DatePicker'

// Notes
import DatePickerReadme from './Base/DatePicker.md'
import DateRangePickerReadme from './Composed/DateRangePicker.md'

const datePickerBaseStories = storiesOf('Components|DatePicker/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const datePickerComposedStories = storiesOf(
  'Components|DatePicker/Composed',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

datePickerComposedStories.add(
  'Date Range Picker',
  () => (
    <div className="story--example">
      <DateRangePicker
        timeRange={{
          Lower: '',
        }}
        onSetTimeRange={() => {}}
      />
    </div>
  ),
  {
    readme: {
      content: marked(DateRangePickerReadme),
    },
  }
)

datePickerBaseStories.add(
  'Date Picker',
  () => (
    <div className="story--example">
      <DatePicker
        dateTime={text('Date Time', '')}
        onSelectDate={() => {}}
        label={text('Label', 'Date Picker')}
      />
    </div>
  ),
  {
    readme: {
      content: marked(DatePickerReadme),
    },
  }
)
