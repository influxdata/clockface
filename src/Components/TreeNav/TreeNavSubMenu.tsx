// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export type TreeNavSubMenuProps = StandardFunctionProps

export type TreeNavSubMenuRef = HTMLDivElement

export const TreeNavSubMenu = forwardRef<
  TreeNavSubMenuRef,
  TreeNavSubMenuProps
>(({id, style, testID = 'tree-nav--sub-menu', className, children}, ref) => {
  const navMenuHeaderClass = classnames('cf-tree-nav--sub-menu', {
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={navMenuHeaderClass}
      data-testid={testID}
    >
      {children}
    </div>
  )
})

TreeNavSubMenu.displayName = 'TreeNavSubMenu'
