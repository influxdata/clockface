// Libraries
import React, {PureComponent, ChangeEvent} from 'react'
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

// Components
import {Input} from '../../Inputs/Input'
import {Form} from '../../Form/Form'

// Styles
import '../DatePicker.scss'

// Types
import {
  ComponentSize,
  ComponentStatus,
  StandardClassProps,
} from '../../../Types'

interface Props extends StandardClassProps {
  /** Label for input field */
  label: string
  /** Date value */
  dateTime?: string | null
  /** Function called once a date is selected */
  onSelectDate: (date: string) => void
}

interface State {
  inputValue: string
  inputFormat: string
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

export class DatePicker extends PureComponent<Props, State> {
  private inCurrentMonth: boolean = false

  public static defaultProps = {
    testID: 'date-picker',
  }

  state = {
    inputValue: '',
    inputFormat: '',
  }

  public render() {
    const {dateTime, label, testID, style} = this.props

    const date = new Date(dateTime || Date.now())

    return (
      <div className="date-picker" data-testid={testID} style={style}>
        <Form.Element label={label} errorMessage={this.inputErrorMessage}>
          <Input
            size={ComponentSize.Medium}
            className="react-datepicker-ignore-onclickoutside"
            titleText={label}
            value={this.inputValue}
            onChange={this.handleChangeInput}
            status={this.inputStatus}
          />
        </Form.Element>
        <ReactDatePicker
          inline
          selected={date}
          onChange={this.handleSelectDate}
          startOpen={true}
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect={true}
          timeFormat="HH:mm"
          shouldCloseOnSelect={false}
          disabledKeyboardNavigation={true}
          calendarClassName="date-picker--calendar"
          dayClassName={this.dayClassName}
          timeIntervals={60}
          fixedHeight={true}
        />
      </div>
    )
  }

  private get inputValue(): string {
    const {dateTime} = this.props
    const {inputValue, inputFormat} = this.state

    if (this.isInputValueInvalid) {
      return inputValue
    }

    if (inputFormat) {
      return moment(dateTime || '').format(inputFormat)
    }

    return moment(dateTime || '').format('YYYY-MM-DD HH:mm:ss.SSS')
  }

  private get isInputValueInvalid(): boolean {
    const {inputValue} = this.state
    if (inputValue === null) {
      return false
    }

    return !isValidRTC3339(inputValue)
  }

  private get inputErrorMessage(): string | undefined {
    if (this.isInputValueInvalid) {
      return 'Format must be YYYY-MM-DD [HH:mm:ss.SSS]'
    }

    return '\u00a0\u00a0'
  }

  private get inputStatus(): ComponentStatus {
    if (this.isInputValueInvalid) {
      return ComponentStatus.Error
    }
    return ComponentStatus.Default
  }

  private dayClassName = (date: Date) => {
    const day = date.getDate()

    if (day === 1) {
      this.inCurrentMonth = !this.inCurrentMonth
    }

    if (this.inCurrentMonth) {
      return 'date-picker--day-in-month'
    }

    return 'date-picker--day'
  }

  private handleSelectDate = (date: Date): void => {
    const {onSelectDate} = this.props
    onSelectDate(date.toISOString())
  }

  private handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const {onSelectDate} = this.props
    const value = e.target.value

    if (isValidRTC3339(value)) {
      onSelectDate(moment(value).toISOString())
      this.setState({inputValue: value, inputFormat: getFormat(value) || ''})
      return
    }

    this.setState({inputValue: value, inputFormat: ''})
  }
}
