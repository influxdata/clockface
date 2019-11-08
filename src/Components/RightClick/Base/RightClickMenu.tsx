// Libraries
import React, {forwardRef, RefObject, useLayoutEffect, useRef} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Utilities
import {convertCSSPropertiesToString} from '../../../Utils/index'
import {calculateRightClickMenuStyles} from '../../../Utils/rightClick'

// Types
import {
  ComponentColor,
  StandardFunctionProps,
  Coordinates,
} from '../../../Types'

export interface RightClickMenuProps extends StandardFunctionProps {
  /** Bounding rectangle of trigger element */
  triggerRef: RefObject<any>
  /** Menu dialog color */
  color: ComponentColor
  /** Dismisses the menu */
  onHide: () => void
  /** Mouse position from right click event */
  mouseOffset: Coordinates
}

export type RightClickMenuRef = HTMLUListElement

export const RightClickMenu = forwardRef<
  RightClickMenuRef,
  RightClickMenuProps
>(
  (
    {
      id,
      style,
      color,
      onHide,
      testID,
      children,
      className,
      triggerRef,
      mouseOffset,
    },
    ref
  ) => {
    const menuRef = useRef<HTMLDivElement>(null)

    const handleUpdateStyles = (): void => {
      if (!triggerRef.current || !menuRef.current) {
        return
      }

      const menuStyles = {
        ...calculateRightClickMenuStyles(mouseOffset, triggerRef, menuRef),
        ...style,
      }

      const menuStyleString = convertCSSPropertiesToString(menuStyles)

      if (menuRef.current) {
        menuRef.current.setAttribute('style', menuStyleString)
      }
    }

    const rightClickMenuClassName = classnames('cf-right-click', {
      [`${className}`]: className,
      [`cf-right-click__${color}`]: color,
    })

    const hidePopoverWhenOutOfView = (
      entries: IntersectionObserverEntry[]
    ): void => {
      if (!!entries.length && entries[0].isIntersecting === false) {
        onHide()
      }
    }

    const observer = new IntersectionObserver(hidePopoverWhenOutOfView)

    useLayoutEffect((): (() => void) => {
      handleUpdateStyles()
      observer.observe(triggerRef.current)
      // The third argument in addEventListener is "false" by default and controls bubbling
      // scroll events do not bubble by default so setting this to "true"
      // allows the listener to pick up scroll events from nested scrollable elements
      window.addEventListener('scroll', handleUpdateStyles, true)
      window.addEventListener('resize', handleUpdateStyles)

      return (): void => {
        observer.disconnect()
        window.removeEventListener('scroll', handleUpdateStyles)
        window.removeEventListener('resize', handleUpdateStyles)
      }
    }, [])

    useLayoutEffect(() => {
      handleUpdateStyles()
    })

    return (
      <ClickOutside onClickOutside={onHide}>
        <div
          id={id}
          ref={menuRef}
          style={style}
          onClick={onHide}
          className={rightClickMenuClassName}
          data-testid={testID}
        >
          <ul ref={ref} className="cf-right-click--menu">
            {children}
          </ul>
        </div>
      </ClickOutside>
    )
  }
)

RightClickMenu.displayName = 'RightClickMenu'
