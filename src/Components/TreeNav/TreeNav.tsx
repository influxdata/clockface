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
}

export type TreeNavRef = HTMLElement

export const TreeNavRoot = forwardRef<TreeNavRef, TreeNavProps>(
  (
    {
      id,
      style,
      testID = 'tree-nav',
      bannerElement,
      children,
      expanded = true,
      className,
      onToggleClick,
      headerElement,
    },
    ref
  ) => {
    const navMenuRootClass = classnames('cf-tree-nav', {
      'cf-tree-nav__expanded': expanded,
      [`${className}`]: className,
    })

    let banner = <></>
    let toggleElement = <></>

    if (bannerElement) {
      banner = <div className="cf-tree-nav--banner">{bannerElement}</div>
    }

    const wrappedChildren = (): JSX.Element => {
      if (expanded) {
        return (
          <DapperScrollbars className="cf-tree-nav--children" noScrollX={true}>
            {children}
            {banner}
          </DapperScrollbars>
        )
      }

      return <div className="cf-tree-nav--children">{children}</div>
    }

    if (onToggleClick) {
      const toggleIcon = expanded ? IconFont.Minimize : IconFont.Maximize
      toggleElement = (
        <div className="cf-tree-nav--toggle" onClick={onToggleClick}>
          <Icon glyph={toggleIcon} />
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
        {wrappedChildren()}
        {toggleElement}
      </nav>
    )
  }
)

TreeNavRoot.displayName = 'TreeNav'
