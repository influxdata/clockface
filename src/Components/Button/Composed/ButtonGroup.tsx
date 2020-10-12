// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './ButtonGroup.scss'

// Types
import {StandardFunctionProps, FlexDirection} from '../../../Types'

export interface ButtonGroupProps extends StandardFunctionProps {
  /** Direction to stack buttons */
  direction?: FlexDirection
}

export type ButtonGroupRef = HTMLDivElement

export const ButtonGroup = forwardRef<ButtonGroupRef, ButtonGroupProps>(
  (
    {
      id,
      style,
      testID = 'button-group',
      children,
      direction = FlexDirection.Row,
      className,
    },
    ref
  ) => {
    const buttonGroupClass = classnames(`cf-button-group`, {
      [`cf-button-group__${direction}`]: direction,
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
