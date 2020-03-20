// Libraries
import React, {FunctionComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Omit, RenderLinkElement} from '../../Types'

export interface TreeNavUserItemProps
  extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for user item */
  id: string
  /** Controls highlighting of the user item */
  active?: boolean
  /** Label for item */
  label: string
  /** Click behavior */
  onClick?: (id: string) => void
  /** Optional link element. Will override onClick prop */
  linkElement?: RenderLinkElement
}

export const TreeNavUserItem: FunctionComponent<TreeNavUserItemProps> = ({
  id,
  style,
  label,
  active,
  testID = 'tree-nav--user-item',
  onClick,
  className,
  linkElement,
}) => {
  const treeNavUserItemClass = classnames('cf-tree-nav--user-item', {
    'cf-tree-nav--user-item__active': active,
    [`${className}`]: className,
  })

  const handleClick = (): void => {
    if (onClick) {
      onClick(id)
    }
  }

  if (linkElement) {
    return React.cloneElement(
      linkElement(treeNavUserItemClass),
      {'data-testid': testID},
      label
    )
  }

  return (
    <div
      id={id}
      style={style}
      data-testid={testID}
      onClick={handleClick}
      className={treeNavUserItemClass}
    >
      {label}
    </div>
  )
}

TreeNavUserItem.displayName = 'TreeNavUserItem'
