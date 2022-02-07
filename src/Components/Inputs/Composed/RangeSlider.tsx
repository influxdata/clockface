import React, {
  ChangeEvent,
  forwardRef,
  FunctionComponent,
  CSSProperties,
  useRef,
  useEffect,
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
  RangeSliderType,
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
  /** Upper input field value for multi range slider */
  upperValue?: number
  /** Lower input field value for multi range slider */
  lowerValue?: number
  /** Function to be called on field value change */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on a multi slider upper field value change */
  onUpperChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on a multi slider lower field value change */
  onLowerChange?: (e: ChangeEvent<HTMLInputElement>) => void
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
  /** Determines the type of range slider */
  sliderType?: RangeSliderType
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
      lowerValue = 0,
      upperValue = 50,
      color = ComponentColor.Primary,
      value,
      testID = 'range-slider',
      status = ComponentStatus.Default,
      onChange,
      onUpperChange,
      onLowerChange,
      className,
      hideLabels = false,
      labelPrefix,
      labelSuffix,
      autocomplete,
      orientation = ComponentOrientation.Horizontal,
      sliderType = RangeSliderType.Single,
    },
    ref,
  ) => {
    const lowerValueRef = useRef<HTMLInputElement>(null)
    const upperValueRef = useRef<HTMLInputElement>(null)

    const getPercent = (value: number) => {
      return Math.round(((value - min) / (max - min)) *100)
    }

    useEffect(() => {
      if (lowerValueRef.current) {
        const lowerPercent = getPercent(parseInt(lowerValueRef.current.value))
        const upperPercent = getPercent(upperValue)

        if (rangeRef.current) {
          rangeRef.current.style.width = `${upperPercent - lowerPercent}%`
        }
      }
    }, [lowerValue, getPercent])

    useEffect(() => {
      if (upperValueRef.current) {
        const lowerPercent = getPercent(lowerValue)
        const upperPercent = getPercent(parseInt(upperValueRef.current.value))

        if (rangeRef.current) {
          rangeRef.current.style.left = `${lowerPercent}%`
          rangeRef.current.style.width = `${upperPercent - lowerPercent}%`
        }
      }
    }, [upperValue, getPercent])

    const rangeRef = useRef<HTMLInputElement>(null)

    const rangeSliderClass = classnames('cf-range-slider', {
      [`cf-range-slider__${color}`]: color,
      [`cf-range-slider__${size}`]: size,
      'cf-range-slider__disabled': status === ComponentStatus.Disabled,
      [`${className}`]: className,
    })

    const rangeSliderInputClass = classnames('cf-range-slider--input', {
      'cf-range-slider__fill': fill,
    })

    const valmaxClassName = classnames(
      'cf-range-slider--label cf-range-slider--max',
      {
        [`cf-range-slider--valmax-label__with-value`]:
          orientation === ComponentOrientation.Horizontal,
        [`cf-range-slider--valmax-label`]:
          orientation === ComponentOrientation.Horizontal,
      }
    )

    const inputStyle = generateRangeSliderTrackFillStyle(
      fill,
      min,
      max,
      value,
      color,
      status
    )

    const verticalLabelStyle = {
      transform: 'rotate(270deg)',
    }

    const cleanedValue = valueWithBounds(value, min, max)

    const cleanedUpperValue = valueWithBounds(upperValue, min, max)

    const cleanedLowerValue = valueWithBounds(lowerValue, min, max)

    const rangeSliderClassName =
      orientation === ComponentOrientation.Vertical
        ? `${rangeSliderClass} cf-range-slider__vertical`
        : rangeSliderClass

    const rangeSliderContainerName = orientation === ComponentOrientation.Vertical 
        ? ``
        : 'cf-range-slider--container'

    return (
      <div className={rangeSliderContainerName} >
        {sliderType === RangeSliderType.Multi  &&
          <Input
            type={InputType.Number}
            value={cleanedLowerValue}
            testID={testID}
            status={status}
            step={step}
            size={size}
            onChange={onLowerChange}
            className={rangeSliderInputClass}
          />}
        <div className={rangeSliderClassName} style={style}>
        <RangeSliderLabel
            value={min}
            prefix={labelPrefix}
            suffix={labelSuffix}
            style={
              orientation === ComponentOrientation.Vertical
                ? verticalLabelStyle
                : {}
            }
            hidden={hideLabels}
            testID={`${testID}--min`}
            className="cf-range-slider--min"
          />
          { sliderType === RangeSliderType.Multi ?
            <div className={rangeSliderContainerName}>
              <Input
                id={id}
                ref={lowerValueRef}
                min={Math.min(min, max)}
                max={Math.max(min, max)}
                step={step}
                size={size}
                type={InputType.Range}
                value={cleanedLowerValue}
                testID={testID}
                status={status}
                list={'rangeList'}
                onChange={onLowerChange}
                className={rangeSliderInputClass}
                autocomplete={autocomplete}
              />
              <Input
                id={id}
                ref={upperValueRef}
                min={Math.min(min, max)}
                max={Math.max(min, max)}
                step={step}
                size={size}
                type={InputType.Range}
                value={cleanedUpperValue}
                testID={testID}
                status={status}
                list={'rangeList'}
                onChange={onUpperChange}
                className={rangeSliderInputClass}
                autocomplete={autocomplete}
              />
            </div>
            :
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
              list={'rangeList'}
              onChange={onChange}
              className={rangeSliderInputClass}
              inputStyle={inputStyle}
              autocomplete={autocomplete}
            />
          }
          <div className="cf-range-slider--focus" />
          { sliderType === RangeSliderType.Multi &&
            <div ref={rangeRef} className="cf-range-multi-slider--range" />
          }
        </div>
        <div className={valmaxClassName}>
          <Input
            type={InputType.Number}
            value={sliderType === RangeSliderType.Single ? cleanedValue : cleanedUpperValue}
            testID={testID}
            status={status}
            step={step}
            size={size}
            onChange={sliderType === RangeSliderType.Single ? onChange : onUpperChange}
            className={rangeSliderInputClass}
          />
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
