// Libraries
import React, {PureComponent, createRef, CSSProperties} from 'react'

// Components
import {DatePicker} from '../Base/DatePicker'
import {ClickOutside} from '../../ClickOutside/ClickOutside'
import {Button} from '../../Button/Composed/Button'

// Types
import {
  TimeRange,
  ComponentColor,
  ComponentSize,
  StandardProps,
} from '../../../Types/index'

// Styles
import '../DateRangePicker.scss'

interface Props extends StandardProps {
  timeRange: TimeRange
  onSetTimeRange: (timeRange: TimeRange) => void
  position?: {top: number; right: number}
  onClose: () => void
}

interface State {
  lower: string
  upper?: string | null
  bottomPosition?: number | null
  topPosition?: number
}

const PICKER_HEIGHT = 416
const HORIZONTAL_PADDING = 2
const VERTICAL_PADDING = 15

export class DateRangePicker extends PureComponent<Props, State> {
  private rangePickerRef = createRef<HTMLDivElement>()

  public static defaultProps = {
    testID: 'date-range-picker',
  }

  constructor(props: Props) {
    super(props)
    const {
      timeRange: {lower, upper},
    } = props

    this.state = {lower, upper, bottomPosition: null}
  }

  public componentDidMount() {
    if (this.rangePickerRef.current) {
      const {
        bottom,
        top,
        height,
      } = this.rangePickerRef.current.getBoundingClientRect()

      if (bottom > window.innerHeight) {
        this.setState({bottomPosition: height / 2})
      } else if (top < 0) {
        this.setState({topPosition: height / 2})
      }
    }
  }

  public render() {
    const {onClose, testID, className} = this.props
    const {upper, lower} = this.state

    return (
      <ClickOutside onClickOutside={onClose}>
        <div
          className={`range-picker react-datepicker-ignore-onclickoutside ${className}`}
          ref={this.rangePickerRef}
          style={this.stylePosition}
          data-test-id={testID}
        >
          <button className="range-picker--dismiss" onClick={onClose} />
          <div className="range-picker--date-pickers">
            <DatePicker
              dateTime={lower}
              onSelectDate={this.handleSelectLower}
              label="Start"
            />
            <DatePicker
              dateTime={upper}
              onSelectDate={this.handleSelectUpper}
              label="Stop"
            />
          </div>
          <Button
            className="range-picker--submit"
            color={ComponentColor.Primary}
            size={ComponentSize.Small}
            onClick={this.handleSetTimeRange}
            text="Apply Time Range"
          />
        </div>
      </ClickOutside>
    )
  }

  private get stylePosition(): CSSProperties | undefined {
    const {position} = this.props
    const {bottomPosition, topPosition} = this.state

    if (!position) {
      return
    }

    const {top, right} = position

    if (topPosition) {
      return {
        top: '14px',
        right: `${right + HORIZONTAL_PADDING}px`,
      }
    }

    const bottomPx =
      (bottomPosition || window.innerHeight - top - VERTICAL_PADDING) -
      PICKER_HEIGHT / 2
    return {
      bottom: `${bottomPx}px`,
      right: `${right + HORIZONTAL_PADDING}px`,
    }
  }

  private handleSetTimeRange = (): void => {
    const {onSetTimeRange, timeRange} = this.props
    const {upper, lower} = this.state

    onSetTimeRange({...timeRange, lower, upper})
  }

  private handleSelectLower = (lower: string): void => {
    this.setState({lower})
  }

  private handleSelectUpper = (upper: string): void => {
    this.setState({upper})
  }
}
