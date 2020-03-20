// Libraries
import React, {FunctionComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Omit, RenderLinkElement} from '../../Types'

export interface TreeNavSubItemProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for nav sub item */
  id: string
  /** Controls highlighting of the menu item */
  active?: boolean
  /** Label for item */
  label: string
  /** Click behavior */
  onClick?: (id: string) => void
  /** Optional link element. Will override onClick prop */
  linkElement?: RenderLinkElement
}

export const TreeNavSubItem: FunctionComponent<TreeNavSubItemProps> = ({
  id,
  style,
  label,
  active,
  testID = 'tree-nav--sub-item',
  onClick,
  className,
  linkElement,
}) => {
  const treeNavSubItemClass = classnames('cf-tree-nav--sub-item', {
    'cf-tree-nav--sub-item__active': active,
    [`${className}`]: className,
  })

  const handleClick = (): void => {
    if (onClick) {
      onClick(id)
    }
  }

  let labelElement = (
    <div className="cf-tree-nav--sub-item-label" onClick={handleClick}>
      {label}
    </div>
  )

  if (linkElement) {
    labelElement = React.cloneElement(
      linkElement('cf-tree-nav--sub-item-label'),
      {'data-testid': testID},
      label
    )
  }

  return (
    <div
      id={id}
      className={treeNavSubItemClass}
      style={style}
      data-testid={testID}
    >
      {labelElement}
    </div>
  )
}

TreeNavSubItem.displayName = 'TreeNavSubItem'
