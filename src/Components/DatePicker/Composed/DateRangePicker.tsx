// Libraries
import React, {PureComponent} from 'react'

// Components
import {DatePicker} from '../Base/DatePicker'
import {Button} from '../../Button/Composed/Button'
import {FlexBox} from '../../FlexBox/FlexBox'

// Types
import {
  TimeRange,
  ComponentColor,
  ComponentSize,
  StandardProps,
  FlexDirection,
} from '../../../Types/index'

interface Props extends StandardProps {
  /** Object of {upper: string, lower: string | null, seconds: number, format: string, label: string, duration: string} */
  timeRange: TimeRange
  /** Function called when time range is set */
  onSetTimeRange: (timeRange: TimeRange) => void
}

interface State {
  lower: string
  upper?: string | null
}

export class DateRangePicker extends PureComponent<Props, State> {
  public static defaultProps = {
    testID: 'date-range-picker',
  }

  constructor(props: Props) {
    super(props)
    const {
      timeRange: {lower, upper},
    } = props

    this.state = {lower, upper}
  }

  public render() {
    const {testID, style} = this.props
    const {upper, lower} = this.state

    return (
      <FlexBox direction={FlexDirection.Column} style={style}>
        <FlexBox direction={FlexDirection.Row} data-testid={testID}>
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
        </FlexBox>
        <Button
          className="range-picker--submit"
          color={ComponentColor.Primary}
          size={ComponentSize.Small}
          onClick={this.handleSetTimeRange}
          text="Apply Time Range"
        />
      </FlexBox>
    )
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
