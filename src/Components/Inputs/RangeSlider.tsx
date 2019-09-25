import React, {ChangeEvent, forwardRef, FunctionComponent} from 'react'
import classnames from 'classnames'

// Components
import {Input} from './Input'

// Styles
import './RangeSlider.scss'

// Utils
import {generateRangeSliderTrackFillStyle} from '../../Utils'

// Types
import {
  InputType,
  StandardFunctionProps,
  ComponentColor,
  Orientation,
  ComponentSize,
  AutoComplete,
  ComponentStatus,
} from '../../Types'

export interface RangeSliderProps extends StandardFunctionProps {
  /** Minimum value */
  min: number
  /** Maximum value */
  max: number
  /** Stepping interval granularity for range type */
  step?: number
  /** Input field value to be updated with 'on X' functions */
  value: number
  /** Function to be called on field value change */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  /** Allows or disallows browser autocomplete functionality */
  autocomplete?: AutoComplete
  /** Input status state */
  status?: ComponentStatus
  /** Size of handle and track  */
  size?: ComponentSize
  /** Color of slider handle */
  color?: ComponentColor
  /** Color of slider track */
  orientation?: Orientation
  /** Fill the track before the handle to indicate percentage */
  fill?: boolean
  /** Displays the min and max values below the slider */
  hideLabels?: boolean
}

export type RangeSliderRef = HTMLInputElement

export const RangeSlider = forwardRef<RangeSliderRef, RangeSliderProps>(
  (
    {
      id,
      min = 0,
      max = 100,
      fill = false,
      size = ComponentSize.Small,
      step,
      style,
      color = ComponentColor.Primary,
      value,
      testID = 'range-slider',
      status = ComponentStatus.Default,
      onChange,
      className,
      hideLabels = false,
      orientation = Orientation.Horizontal,
      autocomplete,
    },
    ref
  ) => {
    const rangeSliderClass = classnames('cf-range-slider--container', {
      [`cf-range-slider__${orientation}`]: orientation,
      [`cf-range-slider--${color}`]: color,
      'cf-range-slider--fill': fill,
    })

    const rangeSliderContainerClass = classnames('cf-range-slider--wrapper', {
      [`${className}`]: className,
    })

    const inputStyle = generateRangeSliderTrackFillStyle(
      fill,
      min,
      max,
      value,
      color,
      status
    )

    const cleanedValue = valueWithBounds(value, min, max)

    return (
      <div className={rangeSliderContainerClass} style={style}>
        <Input
          id={id}
          ref={ref}
          min={Math.min(min, max)}
          max={Math.max(min, max)}
          step={step}
          size={size}
          type={InputType.Range}
          value={cleanedValue}
          testID={testID}
          status={status}
          onChange={onChange}
          className={rangeSliderClass}
          inputStyle={inputStyle}
          autocomplete={autocomplete}
        />
        {!hideLabels && <RangeSliderLabels min={min} max={max} />}
      </div>
    )
  }
)

RangeSlider.displayName = 'RangeSlider'

const valueWithBounds = (value: number, min: number, max: number): number => {
  const minVal = Math.min(min, max)
  const maxVal = Math.max(min, max)

  if (value < minVal) {
    return minVal
  }

  if (value > maxVal) {
    return maxVal
  }

  return value
}

interface RangeSliderlabelsProps {
  min: number
  max: number
}

const RangeSliderLabels: FunctionComponent<RangeSliderlabelsProps> = ({
  min,
  max,
}) => {
  const minVal = Math.min(min, max)
  const maxVal = Math.max(min, max)

  return (
    <div className="cf-range-slider--labels">
      <span className="cf-range-slider--bound">{minVal}</span>
      <span className="cf-range-slider--bound">{maxVal}</span>
    </div>
  )
}
