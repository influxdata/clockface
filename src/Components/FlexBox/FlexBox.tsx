// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardFunctionProps,
} from '../../Types'

// Styles
import './FlexBox.scss'

export interface FlexBoxProps extends StandardFunctionProps {
  /** Vertical or horizontal flex alignment */
  direction?: FlexDirection
  /** Inserted margin between children */
  margin?: ComponentSize
  /** Can be FlexStart, FlexEnd, Center, SpaceBetween, or SpaceAround */
  justifyContent?: JustifyContent
  /** Can be FlexStart, FlexEnd, Center, or Stretch */
  alignItems?: AlignItems
  /** stretches component spacer to fit parent width */
  stretchToFitWidth?: boolean
  /** stretches component spacer to fit parent height */
  stretchToFitHeight?: boolean
}

export type FlexBoxRef = HTMLDivElement

export const FlexBoxRoot = forwardRef<FlexBoxRef, FlexBoxProps>(
  (
    {
      id,
      style,
      testID = 'flex-box',
      margin,
      children,
      direction = FlexDirection.Row,
      className,
      alignItems = AlignItems.Center,
      justifyContent = JustifyContent.FlexStart,
      stretchToFitWidth = false,
      stretchToFitHeight = false,
    },
    ref
  ) => {
    const flexBoxClass = classnames('cf-flex-box', {
      [`cf-flex-box__margin-${margin}`]: margin,
      [`cf-flex-box__${direction}`]: direction,
      [`cf-flex-box__justify-${justifyContent}`]: justifyContent,
      [`cf-flex-box__align-${alignItems}`]: alignItems,
      'cf-flex-box__stretch-w': stretchToFitWidth,
      'cf-flex-box__stretch-h': stretchToFitHeight,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={flexBoxClass}
      >
        {children}
      </div>
    )
  }
)

FlexBoxRoot.displayName = 'FlexBox'
