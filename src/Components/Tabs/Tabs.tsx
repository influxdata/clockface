// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {
  ComponentSize,
  StandardFunctionProps,
  Orientation,
  Alignment,
} from '../../Types'

// Styles
import './Tabs.scss'

export interface TabsProps extends StandardFunctionProps {
  /** Layout of tabs */
  orientation?: Orientation
  /** Size of tabs */
  size?: ComponentSize
  /** Alignment of tabs within container (perpendicular to orientation) */
  alignment?: Alignment
}

export type TabsRef = HTMLElement

export const TabsRoot = forwardRef<TabsRef, TabsProps>(
  (
    {
      id,
      size,
      style,
      testID = 'tabs',
      children,
      alignment = Alignment.Left,
      className,
      orientation = Orientation.Horizontal,
    },
    ref
  ) => {
    const tabsClass = classnames('cf-tabs', {
      [`cf-tabs__align-${alignment}`]: alignment,
      [`cf-tabs__${orientation}`]: orientation,
      [`cf-tabs__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <nav
        id={id}
        ref={ref}
        style={style}
        className={tabsClass}
        data-testid={testID}
      >
        {children}
      </nav>
    )
  }
)

TabsRoot.displayName = 'Tabs'
