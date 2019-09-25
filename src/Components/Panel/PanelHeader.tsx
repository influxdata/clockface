// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox} from '../FlexBox/FlexBox'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  StandardFunctionProps,
  ComponentSize,
} from '../../Types'

export interface PanelHeaderProps extends StandardFunctionProps {
  /** Vertical or horizontal flex alignment */
  flexDirection?: FlexDirection
  /** Inserted margin between children */
  childMargin?: ComponentSize
  /** Can be FlexStart, FlexEnd, Center, SpaceBetween, or SpaceAround */
  justifyContent?: JustifyContent
  /** Can be FlexStart, FlexEnd, Center, or Stretch */
  alignItems?: AlignItems
  /** Controls padding */
  size?: ComponentSize
}

export type PanelHeaderRef = HTMLDivElement

export const PanelHeader = forwardRef<PanelHeaderRef, PanelHeaderProps>(
  (
    {
      id,
      style,
      size = ComponentSize.Small,
      testID = 'panel--header',
      children,
      className,
      alignItems = AlignItems.Center,
      childMargin,
      flexDirection = FlexDirection.Row,
      justifyContent = JustifyContent.SpaceBetween,
    },
    ref
  ) => {
    const panelHeaderClass = classnames('cf-panel--header', {
      [`cf-panel--header__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={panelHeaderClass}
      >
        <FlexBox
          direction={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
          stretchToFitWidth={true}
          margin={childMargin}
        >
          {children}
        </FlexBox>
      </div>
    )
  }
)

PanelHeader.displayName = 'PanelHeader'
