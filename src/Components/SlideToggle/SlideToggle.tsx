// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './SlideToggle.scss'

// Types
import {ComponentColor, ComponentSize, StandardFunctionProps} from '../../Types'

export interface SlideToggleProps extends StandardFunctionProps {
  /** Function to be called on slide toggle state change */
  onChange: () => void
  /** Toggles slide toggle active state */
  active: boolean
  /** Button size */
  size?: ComponentSize
  /** Slide toggle color */
  color?: ComponentColor
  /** Toggles disabled state */
  disabled?: boolean
  /** Text to be displayed on hover tooltip */
  tooltipText?: string
}

export type SlideToggleRef = HTMLDivElement

export const SlideToggleRoot = forwardRef<SlideToggleRef, SlideToggleProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      color = ComponentColor.Primary,
      testID = 'slide-toggle',
      active,
      onChange,
      disabled = false,
      className,
      tooltipText = '',
    },
    ref
  ) => {
    const slideToggleClass = classnames('cf-slide-toggle', {
      active,
      disabled,
      [`${className}`]: className,
      [`cf-slide-toggle-${size}`]: size,
      [`cf-slide-toggle-${color}`]: color,
    })

    const handleClick = (): void => {
      if (disabled) {
        return
      }

      onChange()
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        title={tooltipText}
        onClick={handleClick}
        className={slideToggleClass}
        data-testid={testID}
      >
        <div className="cf-slide-toggle--knob" />
      </div>
    )
  }
)

SlideToggleRoot.displayName = 'SlideToggle'
