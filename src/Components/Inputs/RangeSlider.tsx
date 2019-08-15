import React, {Component, ChangeEvent, CSSProperties} from 'react'
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
  Orientation,
  ComponentSize,
  AutoComplete,
  ComponentStatus,
  InfluxColors,
} from '../../Types'

interface Props extends StandardProps {
  /** Minimum value */
  min: number
  /** Maximum value */
  max: number
  /** Stepping interval granularity for range type */
  step?: number
  /** Input field value to be updated with 'on X' functions */
  value: string
  /** Function to be called on field value change */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /** Allows or disallows browser autocomplete functionality */
  autocomplete?: AutoComplete
  /** Input status state */
  status?: ComponentStatus
  /** Size of handle and track  */
  size: ComponentSize
  /** Color of slider handle */
  color: ComponentColor
  /** Color of slider track */
  orientation: Orientation
  /** Fill the track before the handle to indicate percentage */
  fill: boolean
  /** Displays the min and max values below the slider */
  hideLabels: boolean
}

export class RangeSlider extends Component<Props> {
  public static defaultProps = {
    testID: 'range-slider',
    min: 0,
    max: 100,
    size: ComponentSize.Small,
    color: ComponentColor.Primary,
    orientation: Orientation.Horizontal,
    fill: false,
    hideLabels: false,
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
      className,
    } = this.props
    return (
      <div className={`cf-range-slider--wrapper ${className}`} style={style}>
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
          className={this.className}
          type={InputType.Range}
          inputStyle={this.trackFill}
        />
        {this.rangeSliderLabels}
      </div>
    )
  }

  private get className(): string {
    const {color, status, fill} = this.props

    return classnames(`cf-range-slider--container cf-range-slider--${color}`, {
      'cf-range-slider--disabled': status === ComponentStatus.Disabled,
      'cf-range-slider--fill': fill,
    })
  }

  private get trackFill(): CSSProperties {
    const {fill, value, color} = this.props

    const fillColor = {
      default: InfluxColors.Graphite,
      primary: InfluxColors.Pool,
      secondary: InfluxColors.Star,
      success: InfluxColors.Rainforest,
      warning: InfluxColors.Pineapple,
      danger: InfluxColors.Curacao,
    }

    const pos = value

    if (fill) {
      return {
        background: `linear-gradient(to right, ${fillColor[color]} 0%, ${
          fillColor[color]
        } ${pos}%, ${InfluxColors.Pepper} ${pos}%, ${
          InfluxColors.Pepper
        } 100%)`,
      }
    }

    return {}
  }

  private get rangeSliderLabels(): JSX.Element | null {
    const {min, max, hideLabels} = this.props

    if (hideLabels) {
      return null
    }

    return (
      <div className="cf-range-slider--labels">
        <span className="cf-range-slider--bound">{min}</span>
        <span className="cf-range-slider--bound">{max}</span>
      </div>
    )
  }
}
