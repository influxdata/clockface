import React, {
  ChangeEvent,
  forwardRef,
  FunctionComponent,
  CSSProperties,
  useRef,
  useEffect,
  useState,
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
      sliderType = RangeSliderType.Single,
    },
    ref,
  ) => {

    // Multi Slider variables and methods
    const [lowerValue, setLowerValue] = useState(min)
    const [upperValue, setUpperValue] = useState(value)

    const lowerValueRef = useRef<HTMLInputElement>(null)
    const upperValueRef = useRef<HTMLInputElement>(null)
    const rangeRef = useRef<HTMLInputElement>(null)

    const getRangePercent = (value: number) => {
      return Math.round(((value - min) / (max - min)) *100)
    }

    useEffect(() => {
      if (lowerValueRef.current) {
        const lowerPercent = getRangePercent(parseInt(lowerValueRef.current.value))
        const upperPercent = getRangePercent(upperValue)

        if (rangeRef.current) {
          rangeRef.current.style.width = `${upperPercent - lowerPercent}%`
        }
      }
    })

    useEffect(() => {
      if (upperValueRef.current) {
        const lowerPercent = getRangePercent(lowerValue)
        const upperPercent = getRangePercent(parseInt(upperValueRef.current.value))

        if (rangeRef.current) {
          rangeRef.current.style.left = `${lowerPercent}%`
          rangeRef.current.style.width = `${upperPercent - lowerPercent}%`
        }
      }
    })

    const onUpperInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setUpperValue(Math.max(parseInt(e.target.value), lowerValue + 1))
    }

    const onLowerInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setLowerValue(Math.min(parseInt(e.target.value), upperValue - 1))
    }

    // Shared Methods and Variables for Single and Multi Sliders

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

    const cleanedValue = valueWithBounds(value, min, max)

    const cleanedUpperValue = valueWithBounds(upperValue, min, max)

    const cleanedLowerValue = valueWithBounds(lowerValue, min, max)

    const isSingleSlider = sliderType === RangeSliderType.Single

    // SCSS ClassName Logic

    const rangeSliderClass = classnames('cf-range-slider', {
      [`cf-range-slider__${color}`]: color,
      [`cf-range-slider__${size}`]: size,
      'cf-range-slider__disabled': status === ComponentStatus.Disabled,
      [`${className}`]: className,
    })

    const rangeSliderSingleInputClass = classnames('cf-single-range-slider--input', {
      'cf-range-slider__fill': fill,
    })

    const singleInputStyle = generateRangeSliderTrackFillStyle(
      fill,
      min,
      max,
      value,
      color,
      status
    )

    // const verticalLabelStyle = {
    //   transform: 'rotate(270deg)',
    // }

    const rangeSliderClassName = sliderType === RangeSliderType.Single ?
      orientation === ComponentOrientation.Vertical
        ? `${rangeSliderClass} cf-range-slider__vertical`
        : rangeSliderClass
        : 'cf-multi-range-slider--container'

    const rangeSliderContainerName = orientation === ComponentOrientation.Vertical 
        ? ``
        : 'cf-range-slider--container'

    return (
      <div className={rangeSliderContainerName} >
        <RangeSliderLabel
            value={sliderType === RangeSliderType.Single ? min : lowerValue}
            prefix={labelPrefix}
            suffix={labelSuffix}
            onChange={onLowerInputChange}
            hidden={hideLabels}
            testID={`${testID}--min`}
            className="cf-multi-range-slider--min"
            isSingleSlider={isSingleSlider}
            size={size}
            step={step}
        />
        <div className={rangeSliderClassName} style={style}>
          { sliderType === RangeSliderType.Multi ?
            <>
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
                onChange={onLowerInputChange}
                className={'cf-multi-range-slider cf-multi-range-slider--zindex-3'}
                useBaseStyle={false}
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
                onChange={onUpperInputChange}
                className={'cf-multi-range-slider cf-multi-range-slider--zindex-4'}
                useBaseStyle={false}
              />
              <div className="cf-multi-range-slider--track-container">
                <div className="cf-multi-range-slider--bar"/>
                <div ref={rangeRef} className="cf-multi-range-slider--range" />
              </div>
            </>
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
              onChange={onChange}
              className={rangeSliderSingleInputClass}
              inputStyle={singleInputStyle}
              autocomplete={autocomplete}
            />
          }
          <div className="cf-range-slider--focus" />
        </div>
        <RangeSliderLabel
          value={sliderType === RangeSliderType.Single ? cleanedValue : cleanedUpperValue}
          testID={testID}
          step={step}
          size={size}
          onChange={sliderType === RangeSliderType.Single ? onChange : onUpperInputChange}
          isSingleSlider={false}
        />
      </div>
    )
  }
)

RangeSlider.displayName = 'RangeSlider'

interface RangeSliderLabelProps {
  value: number
  size?: ComponentSize 
  step?: number
  isSingleSlider: boolean
  prefix?: string
  suffix?: string
  hidden?: boolean
  style?: CSSProperties
  testID: string
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const RangeSliderLabel: FunctionComponent<RangeSliderLabelProps> = ({
  value,
  prefix,
  suffix,
  hidden,
  style,
  size,
  step,
  testID,
  isSingleSlider,
  className = '',
  onChange,
}) => {
  if (hidden) {
    return null
  }
  const labelClass = classnames('cf-range-slider--label', {
    [`${className}`]: className,
  })
  return (
    <>
    {isSingleSlider ?
      <span className={labelClass} style={style} data-testid={testID}>
        {prefix}
        {value}
        {suffix}
      </span>
      :
      <Input
        type={InputType.Number}
        value={value}
        testID={testID}
        step={step}
        size={size}
        onChange={onChange}
        className={className}
      />
      }
    </>
  )
}

RangeSliderLabel.displayName = 'RangeSliderLabel'
