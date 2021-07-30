// Libraries
import React, {forwardRef, useMemo} from 'react'
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

  const labels = useMemo(() => {
    if (!children || !Array.isArray(children)) {
      return ''
    }

    return children
      .map(child => {
        if (!React.isValidElement(child)) {
          return ''
        }

        return child.props.label
      })
      .filter(Boolean)
      .join(', ')
  }, [children])

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={navMenuHeaderClass}
      data-testid={testID}
      data-sub-nav-labels={labels}
    >
      {children}
    </div>
  )
})

TreeNavSubMenu.displayName = 'TreeNavSubMenu'
