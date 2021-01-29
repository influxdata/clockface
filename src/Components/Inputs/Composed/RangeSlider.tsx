import React, {
  ChangeEvent,
  forwardRef,
  FunctionComponent,
  CSSProperties,
} from 'react'
import classnames from 'classnames'

// Components
import {Input} from '../Input'

// Styles
import './RangeSlider.scss'

// Utils
import {generateRangeSliderTrackFillStyle} from '../../../Utils'

// Types
import {
  InputType,
  StandardFunctionProps,
  ComponentColor,
  ComponentSize,
  AutoComplete,
  ComponentStatus,
  ComponentOrientation,
} from '../../../Types'

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
  /** Fill the track before the handle to indicate percentage */
  fill?: boolean
  /** Displays the min and max values below the slider */
  hideLabels?: boolean
  /** Adds a prefix to labels */
  labelPrefix?: string
  /** Adds a suffix to labels */
  labelSuffix?: string
  /** Determines orientation of range slider */
  orientation?: ComponentOrientation
  /** Determines whether to display value  */
  displayValue?: boolean
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
      labelPrefix,
      labelSuffix,
      autocomplete,
      orientation = ComponentOrientation.Horizontal,
      displayValue = false,
    },
    ref
  ) => {
    const rangeSliderClass = classnames('cf-range-slider', {
      [`cf-range-slider__${color}`]: color,
      [`cf-range-slider__${size}`]: size,
      'cf-range-slider__disabled': status === ComponentStatus.Disabled,
      [`${className}`]: className,
    })

    const rangeSliderInputClass = classnames('cf-range-slider--input', {
      'cf-range-slider__fill': fill,
    })

    const inputStyle = generateRangeSliderTrackFillStyle(
      fill,
      min,
      max,
      value,
      color,
      status
    )

    let labelCharLength = String(max).length

    if (labelPrefix) {
      labelCharLength += labelPrefix.length
    }
    if (labelSuffix) {
      labelCharLength += labelSuffix.length
    }

    const labelStyle = {
      flex: `0 0 ${labelCharLength * 11}px`,
    }

    const verticalLabelStyle = {
      transform: 'rotate(270deg)',
    }

    const cleanedValue = valueWithBounds(value, min, max)

    const rangeSliderClassName =
      orientation === ComponentOrientation.Vertical
        ? `${rangeSliderClass} cf-range-slider__vertical`
        : rangeSliderClass

    return (
      <div className={rangeSliderClassName} style={style}>
        <RangeSliderLabel
          value={min}
          prefix={labelPrefix}
          suffix={labelSuffix}
          style={
            orientation === ComponentOrientation.Vertical
              ? verticalLabelStyle
              : labelStyle
          }
          hidden={hideLabels}
          testID={`${testID}--min`}
          className="cf-range-slider--min"
        />
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
          className={rangeSliderInputClass}
          inputStyle={inputStyle}
          autocomplete={autocomplete}
        />
        <div className="cf-range-slider--focus" />
        <div
          className="cf-range-slider--label cf-range-slider--max"
          style={
            orientation === ComponentOrientation.Horizontal ? labelStyle : {}
          }
        >
          {displayValue && (
            <RangeSliderLabel
              value={cleanedValue}
              prefix={labelPrefix}
              suffix={labelSuffix}
              hidden={hideLabels}
              testID={`${testID}--val`}
            />
          )}
          <div>
            {displayValue && <span>/</span>}
            <RangeSliderLabel
              value={max}
              prefix={labelPrefix}
              suffix={labelSuffix}
              hidden={hideLabels}
              testID={`${testID}--max`}
            />
          </div>
        </div>
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

interface RangeSliderLabelProps {
  value: number
  prefix?: string
  suffix?: string
  hidden?: boolean
  style?: CSSProperties
  testID: string
  className?: string
}

const RangeSliderLabel: FunctionComponent<RangeSliderLabelProps> = ({
  value,
  prefix,
  suffix,
  hidden,
  style,
  testID,
  className = '',
}) => {
  if (hidden) {
    return null
  }
  const labelClass = classnames('cf-range-slider--label', {
    [`${className}`]: className,
  })
  return (
    <span className={labelClass} style={style} data-testid={testID}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

RangeSliderLabel.displayName = 'RangeSliderLabel'
