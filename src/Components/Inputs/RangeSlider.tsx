import React, {Component, ChangeEvent} from 'react'
import classnames from 'classnames'

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
  color: ComponentColor
  /** Color of slider track */
  trackColor: ComponentColor
  /** Vertical or Horizontal */
  orientation: Orientation
}

export class RangeSlider extends Component<Props> {
  public static defaultProps = {
    testID: 'range-slider',
    color: ComponentColor.Primary,
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
      style,
      testID,
    } = this.props
    return (
      <Input
        style={style}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        autocomplete={autocomplete}
        status={status}
        size={size}
        testID={testID}
        className={this.className}
        type={InputType.Range}
      />
    )
  }

  private get className(): string {
    const {color, status, className} = this.props

    return classnames(`cf-range-slider--${color}`, {
      'cf-range-slider--disabled': status === ComponentStatus.Disabled,
      [`${className}`]: className,
    })
  }
}
