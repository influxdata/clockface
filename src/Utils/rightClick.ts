// Libraries
import {RefObject, CSSProperties} from 'react'

// Types
import {Coordinates} from '../Types'

export const calculateRightClickMenuStyles = (
  mouseOffset: Coordinates,
  triggerRef: RefObject<any>,
  menuRef: RefObject<HTMLDivElement>
): CSSProperties => {
  let menuStyles: CSSProperties = {}

  if (triggerRef.current && menuRef.current) {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const menuRect: ClientRect = menuRef.current.getBoundingClientRect()
    const triggerRect: ClientRect = triggerRef.current.getBoundingClientRect()

    const mouseX = triggerRect.left + mouseOffset.x
    const mouseY = triggerRect.top + mouseOffset.y

    const menuFitsToRight = menuRect.width < viewportWidth - mouseX
    const menuFitsBelow = menuRect.height < viewportHeight - mouseY

    // Determine horizontal position of menu relative to trigger
    if (menuFitsToRight) {
      const left = `${mouseX}px`
      menuStyles = {...menuStyles, left}
    } else {
      const left = `${mouseX - menuRect.width}px`
      menuStyles = {...menuStyles, left}
    }

    // Determine vertical position of menu relative to trigger
    if (menuFitsBelow) {
      const top = `${mouseY}px`
      menuStyles = {...menuStyles, top}
    } else {
      const top = `${mouseY - menuRect.height}px`
      menuStyles = {...menuStyles, top}
    }
  }

  return menuStyles
}
