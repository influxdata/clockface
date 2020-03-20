// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Types
import {StandardFunctionProps, IconFont} from '../../Types'

// Components
import {Icon} from '../Icon'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Styles
import './TreeNav.scss'

export interface TreeNavProps extends StandardFunctionProps {
  /** Controls the size of the navigation menu */
  expanded: boolean
  /** Callback for handling toggle clicks */
  onToggleClick?: () => void
  /** Element to appear at the top of the nav menu */
  headerElement?: JSX.Element
  /** Banner to appear in expanded menu */
  bannerElement?: JSX.Element
  /** User widget to appear below the header element */
  userElement?: JSX.Element
  /** Controls how the Banner element renders when in collapsed state */
  hideBannerWhenCollapsed?: boolean
}

export type TreeNavRef = HTMLElement
export type TreeNavMobileState = 'expanded' | 'collapsed'

export const TreeNavRoot = forwardRef<TreeNavRef, TreeNavProps>(
  (
    {
      id,
      style,
      testID = 'tree-nav',
      children,
      expanded = true,
      className,
      userElement,
      bannerElement,
      onToggleClick,
      headerElement,
      hideBannerWhenCollapsed = false,
    },
    ref
  ) => {
    const [mobileState, setMobileState] = useState<TreeNavMobileState>(
      'collapsed'
    )

    const navMenuRootClass = classnames('cf-tree-nav', {
      'cf-tree-nav__collapsed': !expanded,
      'cf-tree-nav__mobile-collapsed': mobileState === 'collapsed',
      [`${className}`]: className,
    })

    let banner = <></>
    let toggleElement = <></>

    if (bannerElement) {
      const bannerClass = classnames('cf-tree-nav--banner', {
        'cf-tree-nav--banner__always-visible': !hideBannerWhenCollapsed,
      })

      banner = (
        <>
          <div className="cf-tree-nav--banner-spacer" />
          <div className={bannerClass}>{bannerElement}</div>
        </>
      )
    }

    if (onToggleClick) {
      const toggleIcon = expanded ? IconFont.Minimize : IconFont.Maximize
      toggleElement = (
        <div className="cf-tree-nav--toggle" onClick={onToggleClick}>
          <Icon glyph={toggleIcon} />
        </div>
      )
    }

    const handleMobileToggleClick = (): void => {
      if (mobileState === 'expanded') {
        setMobileState('collapsed')
      } else {
        setMobileState('expanded')
      }
    }

    return (
      <nav
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={navMenuRootClass}
      >
        {headerElement}
        <div className="cf-tree-nav--menu">
          {userElement}
          <DapperScrollbars
            className="cf-tree-nav--scroll-area"
            noScrollX={true}
          >
            {children}
            {banner}
          </DapperScrollbars>
        </div>
        {toggleElement}
        <div
          className="cf-tree-nav--mobile-toggle"
          onClick={handleMobileToggleClick}
        >
          <div className="cf-tree-nav--hamburger" />
        </div>
      </nav>
    )
  }
)

TreeNavRoot.displayName = 'TreeNav'
