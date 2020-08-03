// Libraries
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  MouseEvent,
  forwardRef,
} from 'react'

// Components
import {RightClickMenu, RightClickMenuRef} from './RightClickMenu'

// Utils
import {usePortal} from '../../../Utils/portals'

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
    const {addElementToPortal} = usePortal()
    const mouseOffset = useRef<Coordinates>({x: 0, y: 0})

    useEffect((): (() => void) => {
      handleAddEventListeners()

      return (): void => {
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

    if (!expanded) {
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

    return addElementToPortal(rightClickMenu)
  }
)

RightClickRoot.displayName = 'RightClick'
