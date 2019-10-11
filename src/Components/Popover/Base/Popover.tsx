// Libraries
import React, {
  useState,
  useEffect,
  RefObject,
  MouseEvent,
  forwardRef,
} from 'react'
import {createPortal} from 'react-dom'
import uuid from 'uuid'

// Components
import {PopoverDialog} from './PopoverDialog'

// Utils
import {createPortalElement, destroyPortalElement} from '../../../Utils/index'

// Styles
import './Popover.scss'

// Types
import {
  PopoverType,
  ComponentColor,
  PopoverPosition,
  PopoverInteraction,
  StandardFunctionProps,
} from '../../../Types'
import {PopoverDialogRef} from './PopoverDialog'

export interface PopoverProps extends StandardFunctionProps {
  /** Popover dialog color */
  color?: ComponentColor
  /** Popover dialog contents */
  contents: (onHide?: () => void) => JSX.Element
  /** Type of interaction to show the popover dialog */
  showEvent?: PopoverInteraction
  /** Type of interaction to hide the popover dialog */
  hideEvent?: PopoverInteraction
  /** Callback function fired when state changes to "show" */
  onShow?: () => void
  /** Callback function fired when state changes to "hide" */
  onHide?: () => void
  /** Pixel distance between trigger and popover dialog */
  distanceFromTrigger?: number
  /** Size of caret (triangle) that points at the trigger */
  caretSize?: number
  /** Where to position the popover relative to the trigger (assuming it fits there) */
  position?: PopoverPosition
  /** Means of applying color to popover */
  type: PopoverType
  /** Overrides internal popover expanded state */
  visible?: boolean
  /** Disables the popover's show interaction */
  disabled?: boolean
  /** Reference to trigger element */
  triggerRef: RefObject<any>
  /** Adds reasonable styles to popover dialog contents so you do not have to */
  enableDefaultStyles?: boolean
}

export type PopoverRef = PopoverDialogRef

interface CustomMouseEvent extends MouseEvent {
  relatedTarget: Element
}

const popoverPortalName = 'popover'

export const PopoverRoot = forwardRef<PopoverRef, PopoverProps>(
  (
    {
      id,
      style,
      onShow,
      onHide,
      contents,
      className,
      triggerRef,
      caretSize = 8,
      visible = false,
      disabled = false,
      testID = 'popover',
      distanceFromTrigger = 4,
      type = PopoverType.Outline,
      enableDefaultStyles = true,
      color = ComponentColor.Primary,
      position = PopoverPosition.Below,
      showEvent = PopoverInteraction.Click,
      hideEvent = PopoverInteraction.Click,
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState<boolean>(!!visible)
    const [portalID, setPortalID] = useState<string>('')

    useEffect((): (() => void) => {
      const newPortalID = `cf-${popoverPortalName}-portal-${uuid.v4()}`
      !portalID && setPortalID(newPortalID)

      createPortalElement(newPortalID, popoverPortalName)
      handleAddEventListeners()

      return (): void => {
        destroyPortalElement(newPortalID)
        handleRemoveEventListeners()
      }
    }, [])

    useEffect(() => {
      if (visible) {
        handleShowDialog()
      } else if (!visible) {
        handleHideDialog()
      }
    }, [visible])

    const handleTriggerClick = (e: MouseEvent): void => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      if (showEvent === PopoverInteraction.Click) {
        handleShowDialog()
      }
    }

    const handleTriggerMouseOver = (): void => {
      if (showEvent === PopoverInteraction.Hover) {
        handleShowDialog()
      }
    }

    const handleTriggerMouseLeave = (e: CustomMouseEvent): void => {
      if (e.relatedTarget.className.includes('cf-popover')) {
        return
      }

      if (hideEvent === PopoverInteraction.Hover) {
        handleHideDialog()
      }
    }

    const handleDialogMouseLeave = (e: MouseEvent): void => {
      if (e.target === triggerRef.current) {
        return
      }

      if (hideEvent === PopoverInteraction.Hover) {
        handleHideDialog()
      }
    }

    const handleClickOutside = (e: MouseEvent): void => {
      if (e.target === triggerRef.current) {
        return
      }

      if (hideEvent === PopoverInteraction.Click) {
        handleHideDialog()
      }
    }

    const handleShowDialog = (): void => {
      onShow && onShow()
      setExpanded(true)
    }

    const handleHideDialog = (): void => {
      onHide && onHide()
      setExpanded(false)
    }

    const handleAddEventListeners = (): void => {
      if (!triggerRef.current) {
        return
      }

      if (showEvent === PopoverInteraction.Click) {
        triggerRef.current.addEventListener('click', handleTriggerClick)
      } else if (showEvent === PopoverInteraction.Hover) {
        triggerRef.current.addEventListener('mouseover', handleTriggerMouseOver)
      }

      if (hideEvent === PopoverInteraction.Hover) {
        triggerRef.current.addEventListener(
          'mouseleave',
          handleTriggerMouseLeave
        )
      }
    }

    const handleRemoveEventListeners = (): void => {
      if (!triggerRef.current) {
        return
      }

      triggerRef.current.removeEventListener('click', handleTriggerClick)
      triggerRef.current.removeEventListener(
        'mouseover',
        handleTriggerMouseOver
      )
      triggerRef.current.removeEventListener(
        'mouseleave',
        handleTriggerMouseLeave
      )
    }

    const portalElement = document.getElementById(portalID)

    if (!portalElement || !expanded) {
      return null
    }

    const popover = (
      <PopoverDialog
        enableDefaultStyles={enableDefaultStyles}
        distanceFromTrigger={distanceFromTrigger}
        onClickOutside={handleClickOutside}
        onMouseLeave={handleDialogMouseLeave}
        triggerRef={triggerRef}
        className={className}
        caretSize={caretSize}
        position={position}
        contents={contents(handleHideDialog)}
        testID={testID}
        color={color}
        style={style}
        type={type}
        ref={ref}
        id={id}
      />
    )

    return createPortal(popover, portalElement)
  }
)

PopoverRoot.displayName = 'Popover'
