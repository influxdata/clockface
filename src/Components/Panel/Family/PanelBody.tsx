// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxProps, FlexBoxRef} from '../../FlexBox'

// Types
import {
  ComponentSize,
  AlignItems,
  FlexDirection,
  JustifyContent,
} from '../../../Types'

export interface PanelBodyProps
  extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
  /** Controls padding */
  size?: ComponentSize
}

export type PanelBodyRef = FlexBoxRef

export const PanelBody = forwardRef<PanelBodyRef, PanelBodyProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      margin,
      testID = 'panel--body',
      children,
      className,
      direction = FlexDirection.Column,
      alignItems = AlignItems.Stretch,
      justifyContent = JustifyContent.FlexStart,
    },
    ref
  ) => {
    const panelBodyClass = classnames('cf-panel--body', {
      [`cf-panel--body__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <FlexBox.FlexBox
        id={id}
        ref={ref}
        style={style}
        margin={margin}
        className={panelBodyClass}
        direction={direction}
        alignItems={alignItems}
        testID={testID}
        justifyContent={justifyContent}
        stretchToFitWidth={true}
      >
        {children}
      </FlexBox.FlexBox>
    )
  }
)

PanelBody.displayName = 'PanelBody'
