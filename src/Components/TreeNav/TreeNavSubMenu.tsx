// Libraries
import React, {forwardRef, useRef} from 'react'
import classnames from 'classnames'

// Types
import {PopoverPosition, StandardFunctionProps} from '../../Types'
import {Popover} from '../Popover'

export type TreeNavSubMenuProps = StandardFunctionProps

export type TreeNavSubMenuRef = HTMLDivElement

export const TreeNavSubMenu = forwardRef<
  TreeNavSubMenuRef,
  TreeNavSubMenuProps
>(({id, style, testID = 'tree-nav--sub-menu', className, children}, ref) => {
  const navMenuHeaderClass = classnames('cf-tree-nav--sub-menu', {
    [`${className}`]: className,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button
        type="button"
        className="cf-tree-nav--sub-menu-trigger"
        ref={triggerRef}
        aria-label="Show sub menu"
      />
      {triggerRef && (
        <Popover
          enableDefaultStyles={true}
          contents={onHide => <div onClick={onHide}>{children}</div>}
          triggerRef={triggerRef}
          position={PopoverPosition.ToTheRightTop}
          className="cf-popover__nav"
          distanceFromTrigger={4}
        />
      )}
      <div
        id={id}
        ref={ref}
        style={style}
        className={navMenuHeaderClass}
        data-testid={testID}
      >
        {children}
      </div>
    </>
  )
})

TreeNavSubMenu.displayName = 'TreeNavSubMenu'
