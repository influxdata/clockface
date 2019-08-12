import React, {Component, ChangeEvent} from 'react'

// Components
import {Input} from './Input'

// Styles
import './RangeSlider.scss'

// Types
import {
  InputType,
  StandardProps,
  ComponentColor,
  InfluxColors,
  Orientation,
  ComponentSize,
  AutoComplete,
  ComponentStatus,
} from '../../Types'

interface Props extends StandardProps {
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Stepping interval granularity for range type */
  step?: number
  /** Input field value to be updated with 'on X' functions */
  value?: string
  /** Function to be called on field value change */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /** Allows or disallows browser autocomplete functionality */
  autocomplete?: AutoComplete
  /** Input status state */
  status?: ComponentStatus
  /** Size of handle and track  */
  size?: ComponentSize
  /** Color of slider handle */
  handleColor: ComponentColor
  /** Color of slider track */
  trackColor: InfluxColors
  /** Vertical or Horizontal */
  orientation: Orientation
}

export class RangeSlider extends Component<Props> {
  public static defaultProps = {
    testID: 'range-slider',
    handleColor: ComponentColor.Primary,
    trackColor: InfluxColors.Pepper,
    orientation: Orientation.Horizontal,
  }

  render() {
    const {
      min,
      max,
      step,
      value,
      onChange,
      autocomplete,
      status,
      size,
      testID,
    } = this.props
    return (
      <Input
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        autocomplete={autocomplete}
        status={status}
        size={size}
        testID={testID}
        type={InputType.Range}
      />
    )
  }
}
