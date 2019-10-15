// Libraries
import React, {forwardRef, ChangeEvent, useState} from 'react'
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

// Components
import {Input} from '../../Inputs/Input'
import {Form} from '../../Form/index'

// Styles
import '../DatePicker.scss'

// Types
import {
  ComponentSize,
  ComponentStatus,
  StandardFunctionProps,
} from '../../../Types'

interface DatePickerProps extends StandardFunctionProps {
  /** Label for input field */
  label: string
  /** Date value */
  dateTime?: string | null
  /** Function called once a date is selected */
  onSelectDate: (date: string) => void
}

const isValidRTC3339 = (d: string): boolean => {
  return (
    moment(d, 'YYYY-MM-DD HH:mm', true).isValid() ||
    moment(d, 'YYYY-MM-DD HH:mm:ss', true).isValid() ||
    moment(d, 'YYYY-MM-DD HH:mm:ss.SSS', true).isValid() ||
    moment(d, 'YYYY-MM-DD', true).isValid()
  )
}

const getFormat = (d: string): string | undefined => {
  if (moment(d, 'YYYY-MM-DD', true).isValid()) {
    return 'YYYY-MM-DD'
  }
  if (moment(d, 'YYYY-MM-DD HH:mm', true).isValid()) {
    return 'YYYY-MM-DD HH:mm'
  }
  if (moment(d, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
    return 'YYYY-MM-DD HH:mm:ss'
  }
  if (moment(d, 'YYYY-MM-DD HH:mm:ss.SSS', true).isValid()) {
    return 'YYYY-MM-DD HH:mm:ss.SSS'
  }
  return
}

export type DatePickerRef = HTMLDivElement

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
  ({dateTime, label, style, onSelectDate, testID = 'date-picker'}, ref) => {
    const [inputValue, setInputValue] = useState('')
    const [inputFormat, setInputFormat] = useState('')

    let inCurrentMonth = false

    const date = new Date(dateTime || Date.now())

    const formattedInputValue = (): string => {
      if (isInputValueInvalid()) {
        return inputValue
      }

      if (inputFormat) {
        return moment(dateTime || '').format(inputFormat)
      }

      return moment(dateTime || '').format('YYYY-MM-DD HH:mm:ss.SSS')
    }

    const isInputValueInvalid = (): boolean => {
      if (inputValue === null) {
        return false
      }

      return !isValidRTC3339(inputValue)
    }

    const inputErrorMessage = (): string | undefined => {
      if (isInputValueInvalid()) {
        return 'Format must be YYYY-MM-DD [HH:mm:ss.SSS]'
      }

      return '\u00a0\u00a0'
    }

    const inputStatus = (): ComponentStatus => {
      if (isInputValueInvalid()) {
        return ComponentStatus.Error
      }
      return ComponentStatus.Default
    }

    const dayClassName = (date: Date): string => {
      const day = date.getDate()

      if (day === 1) {
        inCurrentMonth = !inCurrentMonth
      }

      if (inCurrentMonth) {
        return 'cf-date-picker--day-in-month'
      }

      return 'cf-date-picker--day'
    }

    const handleSelectDate = (date: Date): void => {
      onSelectDate(date.toISOString())
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value

      if (isValidRTC3339(value)) {
        onSelectDate(moment(value).toISOString())
        setInputValue(value)
        setInputFormat(getFormat(value) || '')
        return
      }

      setInputValue(value)
      setInputFormat('')
    }

    return (
      <div
        ref={ref}
        className="cf-date-picker"
        data-testid={testID}
        style={style}
      >
        <Form.Element label={label} errorMessage={inputErrorMessage()}>
          <Input
            size={ComponentSize.Medium}
            className="react-datepicker-ignore-onclickoutside"
            titleText={label}
            value={formattedInputValue()}
            onChange={handleChangeInput}
            status={inputStatus()}
          />
        </Form.Element>
        <ReactDatePicker
          inline
          selected={date}
          onChange={handleSelectDate}
          startOpen={true}
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect={true}
          timeFormat="HH:mm"
          shouldCloseOnSelect={false}
          disabledKeyboardNavigation={true}
          calendarClassName="cf-date-picker--calendar"
          dayClassName={dayClassName}
          timeIntervals={60}
          fixedHeight={true}
        />
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
