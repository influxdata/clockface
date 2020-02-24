// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'

// Types
import {StandardFunctionProps, Omit, IconFont} from '../../Types'

export interface TreeNavItemProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for nav item */
  id: string
  /** Icon or Image to appear in the square */
  icon: JSX.Element
  /** Label to appear to the right of the icon, only visible when expanded */
  label: string
  /** Click behavior */
  onClick?: (id: string) => void
  /** Controls state of item */
  active?: boolean
  /** Optional link element. Will override onClick prop */
  linkElement?: (className: string) => JSX.Element
}

export type TreeNavItemRef = HTMLDivElement

export const TreeNavItem = forwardRef<TreeNavItemRef, TreeNavItemProps>(
  (
    {
      id,
      icon,
      style,
      label,
      active = false,
      testID = 'tree-nav--item',
      onClick,
      children,
      className,
      linkElement,
    },
    ref
  ) => {
    const treeNavItemClass = classnames('cf-tree-nav--item', {
      'cf-tree-nav--item__active': active,
      [`${className}`]: className,
    })

    const handleClick = (): void => {
      if (onClick) {
        onClick(id)
      }
    }

    let caret = <></>

    if (React.Children.count(children) > 0) {
      caret = (
        <Icon glyph={IconFont.CaretRight} className="cf-tree-nav--caret" />
      )
    }

    if (linkElement) {
      const linkItems = (
        <>
          <div className="cf-tree-nav--square">{icon}</div>
          <div className="cf-tree-nav--label">{label}</div>
          {caret}
        </>
      )
      const link = React.cloneElement(
        linkElement('cf-tree-nav--item-block'),
        [],
        linkItems
      )

      return (
        <div className={treeNavItemClass}>
          {link}
          {children}
        </div>
      )
    }

    return (
      <div className={treeNavItemClass}>
        <div
          id={id}
          ref={ref}
          style={style}
          data-testid={testID}
          onClick={handleClick}
          className="cf-tree-nav--item-block"
        >
          <div className="cf-tree-nav--square">{icon}</div>
          <div className="cf-tree-nav--label">{label}</div>
          {caret}
        </div>
        {children}
      </div>
    )
  }
)

TreeNavItem.displayName = 'TreeNavItem'
