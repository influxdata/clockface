// Libraries
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  MouseEvent,
  forwardRef,
} from 'react'
import {createPortal} from 'react-dom'
import uuid from 'uuid'

// Components
import {RightClickMenu, RightClickMenuRef} from './RightClickMenu'

// Utils
import {createPortalElement, destroyPortalElement} from '../../../Utils/index'

// Styles
import './RightClick.scss'

// Types
import {
  ComponentColor,
  StandardFunctionProps,
  Coordinates,
} from '../../../Types'

export interface RightClickProps extends StandardFunctionProps {
  /** RightClick menu color */
  color?: ComponentColor
  /** Callback function fired when state changes to "show" */
  onShow?: () => void
  /** Callback function fired when state changes to "hide" */
  onHide?: () => void
  /** Prevents the right click menu from firing */
  disabled?: boolean
  /** Reference to trigger element */
  triggerRef: RefObject<any>
}

export type RightClickRef = RightClickMenuRef

const rightClickPortalName = 'right-click'

export const RightClickRoot = forwardRef<RightClickRef, RightClickProps>(
  (
    {
      id,
      style,
      onShow,
      onHide,
      children,
      className,
      triggerRef,
      disabled = false,
      testID = 'right-click',
      color = ComponentColor.Default,
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [portalID, setPortalID] = useState<string>('')
    const mouseOffset = useRef<Coordinates>({x: 0, y: 0})

    useEffect((): (() => void) => {
      const newPortalID = `cf-${rightClickPortalName}-portal-${uuid.v4()}`
      setPortalID(newPortalID)

      createPortalElement(newPortalID, rightClickPortalName)
      handleAddEventListeners()

      return (): void => {
        destroyPortalElement(newPortalID)
        handleRemoveEventListeners()
      }
    }, [])

    const handleTriggerClick = (e: MouseEvent): void => {
      if (disabled || !triggerRef.current) {
        // triggerRef.current can be set to null in a specific context:
        // If you are using RightClick within a FunctionComponent and
        // are using createRef it will not work. You must use useRef
        return
      }

      e.preventDefault()
      e.stopPropagation()

      const {clientX, clientY} = e
      const {top, left} = triggerRef.current.getBoundingClientRect()

      mouseOffset.current = {
        x: Math.ceil(Math.abs(left - clientX)),
        y: Math.ceil(Math.abs(top - clientY)),
      }

      handleShowMenu()
    }

    const handleShowMenu = (): void => {
      onShow && onShow()
      setExpanded(true)
    }

    const handleHideMenu = (): void => {
      onHide && onHide()
      setExpanded(false)
    }

    const handleAddEventListeners = (): void => {
      if (!triggerRef.current) {
        return
      }

      triggerRef.current.addEventListener('contextmenu', handleTriggerClick)
    }

    const handleRemoveEventListeners = (): void => {
      if (!triggerRef.current) {
        return
      }

      triggerRef.current.removeEventListener('contextmenu', handleTriggerClick)
    }

    const portalElement = document.getElementById(portalID)

    if (!portalElement || !expanded) {
      return null
    }

    const rightClickMenu = (
      <RightClickMenu
        mouseOffset={mouseOffset.current}
        triggerRef={triggerRef}
        className={className}
        testID={testID}
        onHide={handleHideMenu}
        color={color}
        style={style}
        ref={ref}
        id={id}
      >
        {children}
      </RightClickMenu>
    )

    return createPortal(rightClickMenu, portalElement)
  }
)

RightClickRoot.displayName = 'RightClick'
