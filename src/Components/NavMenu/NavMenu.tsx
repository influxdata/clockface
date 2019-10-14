// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './NavMenu.scss'

export type NavMenuProps = StandardFunctionProps

export type NavMenuRef = HTMLElement

export const NavMenuRoot = forwardRef<NavMenuRef, NavMenuProps>(
  ({id, style, children, className, testID = 'nav-menu'}, ref) => {
    const [menuVisible, setMenuVisible] = useState(false)

    const navMenuRootClass = classnames('cf-nav', {
      'cf-nav__expanded': menuVisible,
      [`${className}`]: className,
    })

    const toggleClassName = classnames('cf-nav--toggle', {
      'cf-nav--toggle__expanded': menuVisible,
    })

    const handleToggleMenu = (): void => {
      setMenuVisible(!menuVisible)
    }

    return (
      <>
        <div className={toggleClassName} onClick={handleToggleMenu}>
          <div className="cf-nav--hamburger">
            <div className="cf-nav--hamburger-top" />
            <div className="cf-nav--hamburger-middle" />
            <div className="cf-nav--hamburger-bottom" />
          </div>
        </div>
        <nav
          id={id}
          ref={ref}
          style={style}
          data-testid={testID}
          className={navMenuRootClass}
        >
          <div className="cf-nav--menu">{children}</div>
        </nav>
        <div className="cf-nav--mask" />
      </>
    )
  }
)

NavMenuRoot.displayName = 'NavMenu'
