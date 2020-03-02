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
      className,
      size,
      testID = 'tabs',
      orientation = Orientation.Horizontal,
      alignment = Alignment.Left,
      children,
      id,
      style,
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
        ref={ref}
        className={tabsClass}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </nav>
    )
  }
)

TabsRoot.displayName = 'Tabs'
