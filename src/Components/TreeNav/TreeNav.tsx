// Libraries
import React, {forwardRef} from 'react'
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
}

export type TreeNavRef = HTMLElement

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
    },
    ref
  ) => {
    const navMenuRootClass = classnames('cf-tree-nav', {
      'cf-tree-nav__collapsed': !expanded,
      [`${className}`]: className,
    })

    let banner = <></>
    let toggleElement = <></>

    if (bannerElement && expanded) {
      banner = <div className="cf-tree-nav--banner">{bannerElement}</div>
    }

    if (onToggleClick) {
      const toggleIcon = expanded ? IconFont.Minimize : IconFont.Maximize
      toggleElement = (
        <div className="cf-tree-nav--toggle" onClick={onToggleClick}>
          <Icon glyph={toggleIcon} />
          <div className="cf-tree-nav--hamburger" />
        </div>
      )
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
      </nav>
    )
  }
)

TreeNavRoot.displayName = 'TreeNav'
