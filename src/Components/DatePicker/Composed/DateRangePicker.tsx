// Libraries
import React, {forwardRef, useState} from 'react'

// Components
import {DatePicker} from '../Base/DatePicker'
import {Button} from '../../Button/Composed/Button'
import {FlexBox, FlexBoxRef} from '../../FlexBox/index'

// Types
import {
  TimeRange,
  ComponentColor,
  ComponentSize,
  StandardFunctionProps,
  FlexDirection,
} from '../../../Types'

export interface DateRangePickerProps extends StandardFunctionProps {
  /** Object of {upper: string, lower: string | null, seconds: number, format: string, label: string, duration: string} */
  timeRange: TimeRange
  /** Function called when time range is set */
  onSetTimeRange: (timeRange: TimeRange) => void
}

export type DateRangePickerRef = FlexBoxRef

export const DateRangePicker = forwardRef<
  DateRangePickerRef,
  DateRangePickerProps
>(({style, timeRange, onSetTimeRange, testID = 'date-range-picker'}, ref) => {
  const [lower, setLower] = useState<string>(timeRange['lower'])
  const [upper, setUpper] = useState<string | null | undefined>(
    timeRange['upper']
  )

  const handleSetTimeRange = (): void => {
    onSetTimeRange({...timeRange, lower, upper})
  }

  const handleSelectLower = (lower: string): void => {
    setLower(lower)
  }

  const handleSelectUpper = (upper: string): void => {
    setUpper(upper)
  }

  return (
    <FlexBox.FlexBox ref={ref} direction={FlexDirection.Column} style={style}>
      <FlexBox direction={FlexDirection.Row} testID={testID}>
        <DatePicker
          dateTime={lower}
          onSelectDate={handleSelectLower}
          label="Start"
        />
        <DatePicker
          dateTime={upper}
          onSelectDate={handleSelectUpper}
          label="Stop"
        />
      </FlexBox>
      <Button
        className="range-picker--submit"
        color={ComponentColor.Primary}
        size={ComponentSize.Small}
        onClick={handleSetTimeRange}
        text="Apply Time Range"
      />
    </FlexBox.FlexBox>
  )
})

DateRangePicker.displayName = 'DateRangePicker'
