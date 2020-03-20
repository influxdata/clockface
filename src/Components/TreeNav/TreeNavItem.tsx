// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Omit, RenderLinkElement} from '../../Types'

export interface TreeNavItemProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for nav item */
  id: string
  /** Icon or Image to appear in the square */
  icon: JSX.Element
  /** Label to appear to the right of the icon, only visible when expanded */
  label: string
  /** Optional label displayed when the TreeNav is collapsed */
  shortLabel?: string
  /** Click behavior */
  onClick?: (id: string) => void
  /** Controls state of item */
  active?: boolean
  /** Optional link element. Will override onClick prop */
  linkElement?: RenderLinkElement
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
      shortLabel,
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

    if (linkElement) {
      const linkItems = (
        <>
          <div className="cf-tree-nav--square">{icon}</div>
          <div className="cf-tree-nav--label">{label}</div>
          <div className="cf-tree-nav--short-label">{shortLabel || label}</div>
        </>
      )
      const link = React.cloneElement(
        linkElement('cf-tree-nav--item-block'),
        {'data-testid': testID},
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
          <div className="cf-tree-nav--short-label">{shortLabel || label}</div>
        </div>
        {children}
      </div>
    )
  }
)

TreeNavItem.displayName = 'TreeNavItem'
