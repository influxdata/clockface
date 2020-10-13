// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './ButtonGroup.scss'

// Types
import {StandardFunctionProps, Orientation} from '../../../Types'

export interface ButtonGroupProps extends StandardFunctionProps {
  /** Stacking axis of buttons */
  orientation?: Orientation
}

export type ButtonGroupRef = HTMLDivElement

export const ButtonGroup = forwardRef<ButtonGroupRef, ButtonGroupProps>(
  (
    {
      id,
      style,
      testID = 'button-group',
      children,
      className,
      orientation = Orientation.Horizontal,
    },
    ref
  ) => {
    const buttonGroupClass = classnames(`cf-button-group`, {
      [`cf-button-group__${orientation}`]: orientation,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={buttonGroupClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'
