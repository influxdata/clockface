// Libraries
import React, {forwardRef, useRef} from 'react'
import classnames from 'classnames'

// Types
import {
  PopoverInteraction,
  PopoverPosition,
  StandardFunctionProps,
} from '../../Types'
import {Popover} from '../Popover'

export interface OptionalProp {
  position?: PopoverPosition
}

export type TreeNavSubMenuProps = StandardFunctionProps & OptionalProp

export type TreeNavSubMenuRef = HTMLDivElement

export const TreeNavSubMenu = forwardRef<
  TreeNavSubMenuRef,
  TreeNavSubMenuProps
>(
  (
    {
      id,
      style,
      testID = 'tree-nav--sub-menu',
      className,
      children,
      position = PopoverPosition.ToTheRightTop,
    },
    ref
  ) => {
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
            hideEvent={PopoverInteraction.Hover}
            showEvent={PopoverInteraction.Hover}
            triggerRef={triggerRef}
            position={position}
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
  }
)

TreeNavSubMenu.displayName = 'TreeNavSubMenu'
