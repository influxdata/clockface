// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text} from '@storybook/addon-knobs'

// Components
import {DateRangePicker, DateRangePickerRef} from '../Composed/DateRangePicker'
import {DatePicker, DatePickerRef} from '../Base/DatePicker'

// Notes
import DatePickerReadme from './DatePicker.md'
import DateRangePickerReadme from './DateRangePicker.md'

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
  () => {
    const dateRangePickerRef = createRef<DateRangePickerRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(dateRangePickerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <DateRangePicker
          ref={dateRangePickerRef}
          timeRange={{
            lower: '',
          }}
          onSetTimeRange={() => {}}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DateRangePickerReadme),
    },
  }
)

datePickerBaseStories.add(
  'Date Picker',
  () => {
    const datePickerRef = createRef<DatePickerRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(datePickerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <DatePicker
          ref={datePickerRef}
          dateTime={text('Date Time', '')}
          onSelectDate={() => {}}
          label={text('Label', 'Date Picker')}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DatePickerReadme),
    },
  }
)
