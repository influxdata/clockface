// Libraries
import React, {
  RefObject,
  MouseEvent,
  useState,
  forwardRef,
  useEffect,
} from 'react'
import {createPortal} from 'react-dom'
import uuid from 'uuid'

// Components
import {PopoverDialog} from './PopoverDialog'

// Styles
import './Popover.scss'

// Types
import {
  ComponentColor,
  StandardProps,
  PopoverInteraction,
  PopoverPosition,
  PopoverType,
} from '../../../Types'

export interface PopoverProps extends StandardProps {
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

export interface PopoverDefProps {
  color: ComponentColor
  testID: string
  distanceFromTrigger: number
  caretSize: number
  position: PopoverPosition
  type: PopoverType
  enableDefaultStyles: boolean
  showEvent: PopoverInteraction
  hideEvent: PopoverInteraction
  disabled: boolean
  visible: boolean
}

export const PopoverDefaultProps: PopoverDefProps = {
  color: ComponentColor.Primary,
  testID: 'popover',
  distanceFromTrigger: 4,
  caretSize: 8,
  position: PopoverPosition.Below,
  type: PopoverType.Outline,
  enableDefaultStyles: true,
  showEvent: PopoverInteraction.Click,
  hideEvent: PopoverInteraction.Click,
  disabled: false,
  visible: false,
}

export type PopoverRef = HTMLSpanElement

interface CustomMouseEvent extends MouseEvent {
  relatedTarget: Element
}

let uniquePortalID: string = ''

export const Popover = forwardRef<PopoverRef, PopoverProps>((props, ref) => {
  const [expanded, setExpanded] = useState<boolean>(!!props.visible)

  const {
    distanceFromTrigger,
    enableDefaultStyles,
    triggerRef,
    className,
    caretSize,
    contents,
    showEvent,
    hideEvent,
    disabled,
    position,
    visible,
    testID,
    style,
    color,
    type,
    id,
  } = {...PopoverDefaultProps, ...props}

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
    if (e.target === props.triggerRef.current) {
      return
    }

    if (hideEvent === PopoverInteraction.Hover) {
      handleHideDialog()
    }
  }

  const handleClickOutside = (e: MouseEvent): void => {
    if (e.target === props.triggerRef.current) {
      return
    }

    if (hideEvent === PopoverInteraction.Click) {
      handleHideDialog()
    }
  }

  const handleShowDialog = (): void => {
    props.onShow && props.onShow()
    setExpanded(true)
  }

  const handleHideDialog = (): void => {
    props.onHide && props.onHide()
    setExpanded(false)
  }

  const handleCreatePortalElement = (): void => {
    const portalExists = document.getElementById(uniquePortalID)
    if (portalExists) {
      return
    }

    const portalElement = document.createElement('div')
    portalElement.setAttribute('class', 'cf-popover-portal')
    portalElement.setAttribute('id', uniquePortalID)

    document.body.appendChild(portalElement)
  }

  const handleDestroyPortalElement = (): void => {
    const portalElement = document.getElementById(uniquePortalID)

    if (portalElement) {
      portalElement.remove()
    }
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
      triggerRef.current.addEventListener('mouseleave', handleTriggerMouseLeave)
    }
  }

  const handleRemoveEventListeners = (): void => {
    if (!triggerRef.current) {
      return
    }

    triggerRef.current.removeEventListener('click', handleTriggerClick)
    triggerRef.current.removeEventListener('mouseover', handleTriggerMouseOver)
    triggerRef.current.removeEventListener(
      'mouseleave',
      handleTriggerMouseLeave
    )
  }

  useEffect((): (() => void) => {
    uniquePortalID = `cf-popover-portal-${uuid.v4()}`
    handleCreatePortalElement()
    handleAddEventListeners()

    return (): void => {
      handleRemoveEventListeners()
      handleDestroyPortalElement()
    }
  }, [])

  useEffect(() => {
    if (visible) {
      handleShowDialog()
    } else if (!visible) {
      handleHideDialog()
    }
  }, [visible])

  const portalElement = document.getElementById(uniquePortalID)

  if (!portalElement || !expanded) {
    return null
  }

  const popover = (
    <span ref={ref}>
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
        id={id}
      />
    </span>
  )

  return createPortal(popover, portalElement)
})

Popover.displayName = 'Popover'
