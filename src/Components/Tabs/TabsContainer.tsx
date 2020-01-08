// Libraries
import React, {forwardRef} from 'react'

// Components
import {FlexBox, FlexBoxRef} from '../FlexBox'

// Types
import {
  StandardFunctionProps,
  Orientation,
  FlexDirection,
  AlignItems,
} from '../../Types'

export interface TabsContainerProps extends StandardFunctionProps {
  /** Should match the orientation prop of Tabs component */
  orientation: Orientation
  /** Stretches TabsContainer to fit parent width */
  stretchToFitWidth?: boolean
  /** Stretches TabsContainer to fit parent height */
  stretchToFitHeight?: boolean
}

export type TabsContainerRef = FlexBoxRef

export const TabsContainer = forwardRef<TabsContainerRef, TabsContainerProps>(
  (
    {
      id,
      style,
      children,
      className,
      orientation,
      stretchToFitWidth,
      stretchToFitHeight,
      testID = 'tabs--container',
    },
    ref
  ) => {
    const direction =
      orientation === Orientation.Vertical
        ? FlexDirection.Row
        : FlexDirection.Column

    return (
      <FlexBox.FlexBox
        className={className}
        testID={testID}
        id={id}
        ref={ref}
        style={style}
        direction={direction}
        alignItems={AlignItems.Stretch}
        stretchToFitWidth={stretchToFitWidth}
        stretchToFitHeight={stretchToFitHeight}
      >
        {children}
      </FlexBox.FlexBox>
    )
  }
)

TabsContainer.displayName = 'TabsContainer'
