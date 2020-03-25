// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'

// Types
import {
  ComponentSize,
  StandardFunctionProps,
  Alignment,
  IconFont,
} from '../../Types'

// Constants
import {GRID_BREAKPOINT_SM} from '../../Constants'

// Components
import {Icon} from '../Icon'
import {ClickOutside} from '../ClickOutside/ClickOutside'

export interface ResponsiveTabsProps extends StandardFunctionProps {
  /** Size of tabs */
  size?: ComponentSize
  /** Alignment of tabs within container (small displays) */
  mobileAlignment?: Alignment
  /** Alignment of tabs within container (large displays) */
  alignment?: Alignment
  /** Label that only appears on small displays to indicate which tab is active when the component is collapsed  */
  activeTabLabel: string
}

export type ResponsiveTabsRef = HTMLElement

export const ResponsiveTabsRoot = forwardRef<
  ResponsiveTabsRef,
  ResponsiveTabsProps
>(
  (
    {
      id,
      size = ComponentSize.Medium,
      style,
      testID = 'responsive-tabs',
      children,
      alignment = Alignment.Left,
      className,
      activeTabLabel,
      mobileAlignment = Alignment.Center,
    },
    ref
  ) => {
    const [state, setState] = useState<'visible' | 'hidden'>('hidden')

    const tabsClass = classnames('cf-responsive-tabs', {
      [`cf-responsive-tabs__${state}`]: state,
      [`cf-responsive-tabs__mobile-align-${mobileAlignment}`]: mobileAlignment,
      [`cf-responsive-tabs__align-${alignment}`]: alignment,
      [`cf-responsive-tabs__${size}`]: size,
      [`${className}`]: className,
    })

    const handleToggleMenu = (): void => {
      const windowWidth = window.innerWidth

      if (state === 'visible' && windowWidth <= GRID_BREAKPOINT_SM) {
        setState('hidden')
      } else if (windowWidth <= GRID_BREAKPOINT_SM) {
        setState('visible')
      }
    }

    const handleHideMenu = (): void => {
      if (state === 'visible') {
        setState('hidden')
      }
    }

    return (
      <ClickOutside onClickOutside={handleHideMenu}>
        <nav
          id={id}
          ref={ref}
          style={style}
          onClick={handleToggleMenu}
          className={tabsClass}
          data-testid={testID}
        >
          <div className="cf-responsive-tabs--active">
            {activeTabLabel}
            <Icon
              glyph={IconFont.CaretDown}
              className="cf-responsive-tabs--icon"
            />
          </div>
          <div className="cf-responsive-tabs--menu">{children}</div>
        </nav>
      </ClickOutside>
    )
  }
)

ResponsiveTabsRoot.displayName = 'ResponsiveTabs'
