// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {
  ComponentSize,
  StandardFunctionProps,
  Orientation,
  InfluxColors,
  Alignment,
} from '../../Types'

// Styles
import './Tabs.scss'

export interface TabsProps extends StandardFunctionProps {
  /** Layout of tabs */
  orientation?: Orientation
  /** Controls whether the container renders with padding or not */
  padding?: ComponentSize
  /** Background color of tab container */
  backgroundColor?: InfluxColors | string
  /** Alignment of tabs within container (perpendicular to orientation) */
  alignment?: Alignment
}

export type TabsRef = HTMLElement

export const TabsRoot = forwardRef<TabsRef, TabsProps>(
  (
    {
      className,
      padding,
      testID = 'tabs',
      orientation = Orientation.Horizontal,
      alignment = Alignment.Left,
      children,
      id,
      backgroundColor,
      style,
    },
    ref
  ) => {
    const tabsClass = classnames('cf-tabs', {
      [`cf-tabs__align-${alignment}`]: alignment,
      [`cf-tabs__${orientation}`]: orientation,
      [`cf-tabs__padding-${padding}`]: padding,
      [`${className}`]: className,
    })

    return (
      <nav
        ref={ref}
        className={tabsClass}
        data-testid={testID}
        id={id}
        style={{
          backgroundColor,
          ...style,
        }}
      >
        {children}
      </nav>
    )
  }
)

TabsRoot.displayName = 'Tabs'
