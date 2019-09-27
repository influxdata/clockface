// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardFunctionProps} from '../../Types'

export interface SlideToggleLabelProps extends StandardFunctionProps {
  /** Text to be displayed as label */
  text: string
  /** Used to match the state of the associated SlideToggle */
  active?: boolean
  /** Button size */
  size?: ComponentSize
  /** Controls text wrapping */
  wrapText?: boolean
}

export type SlideToggleLabelRef = HTMLDivElement

export const SlideToggleLabel = forwardRef<
  SlideToggleLabelRef,
  SlideToggleLabelProps
>(
  (
    {
      id,
      text,
      size = ComponentSize.Small,
      style,
      active = true,
      testID = 'slide-toggle--label',
      wrapText = false,
      className,
    },
    ref
  ) => {
    const slideToggleLabelClass = classnames('cf-slide-toggle--label', {
      [`${className}`]: className,
      'cf-slide-toggle--label__wrap': wrapText,
      [`cf-slide-toggle--label-${size}`]: size,
      'cf-slide-toggle--label__active': active,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={slideToggleLabelClass}
        data-testid={testID}
      >
        {text}
      </div>
    )
  }
)

SlideToggleLabel.displayName = 'SlideToggleLabel'
