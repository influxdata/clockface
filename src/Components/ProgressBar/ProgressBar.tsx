// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {
  Gradients,
  InfluxColors,
  StandardFunctionProps,
  ComponentSize,
} from '../../Types'

// Styles
import './ProgressBar.scss'
import {generateBackgroundStyle} from '../../Utils'

export interface ProgressBarProps extends StandardFunctionProps {
  /** Controls the gradient color of the bar */
  barGradient?: Gradients
  /** Controls the text color and bar if no gradient is provided */
  color?: InfluxColors | string
  /** The current amount */
  value?: number
  /** The total amount */
  max?: number
  /** Controls the size of the bar & text */
  size?: ComponentSize
  /** Descriptive text for what is being valueed */
  label?: string
  /** Displays remaining value instead of specified value */
  displayRemaining?: boolean
  /** Prefix text for the values passed to be displayed */
  valuesLabelPrefix?: string
  /** Suffix text for the values passed to be displayed */
  valuesLabelSuffix?: string
}

export type ProgressBarRef = HTMLDivElement

export const ProgressBar = forwardRef<ProgressBarRef, ProgressBarProps>(
  (
    {
      id,
      style = {width: '100%'},
      testID = 'progress-bar',
      value = 0,
      max = 100,
      label,
      className,
      color = InfluxColors.White,
      barGradient,
      displayRemaining,
      valuesLabelPrefix,
      valuesLabelSuffix,
    },
    ref
  ) => {
    const progressBarClass = classnames('cf-progress-bar', {
      [`${className}`]: className,
    })

    const progressBarStyle = {
      ...generateBackgroundStyle(color, barGradient),
      width: `${(value / max) * 100}%`,
      transition: 'all $cf-transition-default 0s',
    }

    return (
      <div
        id={id}
        ref={ref}
        className={progressBarClass}
        data-testid={testID}
        style={style}
      >
        <div className="cf-progress-bar--container">
          <div className="cf-progress-bar--fill" style={progressBarStyle} />
        </div>
        <div className="cf-progress-bar--text">
          <div className="cf-progress-bar--label">{label}</div>
          <div>
            {!!valuesLabelPrefix && (
              <span style={{color: color}}>{valuesLabelPrefix}</span>
            )}
            <span className="cf-progress-bar--value" style={{color: color}}>
              {displayRemaining ? max - value : value}
            </span>
            <span className="cf-progress-bar--max">/{max}</span>
            {!!valuesLabelSuffix && (
              <span className="cf-progress-bar-values--label">
                &nbsp;{valuesLabelSuffix}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
