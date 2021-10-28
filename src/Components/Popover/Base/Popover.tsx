// Libraries
import React, {
  useState,
  useEffect,
  RefObject,
  MouseEvent,
  forwardRef,
} from 'react'

// Components
import {PopoverDialog} from './PopoverDialog'

// Utils
import {usePortal} from '../../../Utils/portals'

// Styles
import './Popover.scss'

// Types
import {
  Appearance,
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
  appearance?: Appearance
  /** For external control of the popover state, overrides escape key behavior  */
  visible?: boolean
  /** Disables the popover's show interaction */
  disabled?: boolean
  /** Reference to trigger element */
  triggerRef: RefObject<any>
  /** Adds reasonable styles to popover dialog contents so you do not have to */
  enableDefaultStyles?: boolean
  /** Ensures the popover appears above all other portal elements */
  forceToTop?: boolean
}

export type PopoverRef = PopoverDialogRef

interface CustomMouseEvent extends MouseEvent {
  relatedTarget: Element
}

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
      forceToTop = false,
      caretSize = 8,
      visible,
      disabled = false,
      testID = 'popover',
      distanceFromTrigger = 8,
      enableDefaultStyles = true,
      color = ComponentColor.Primary,
      position = PopoverPosition.Below,
      showEvent = PopoverInteraction.Click,
      hideEvent = PopoverInteraction.Click,
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState<boolean>(!!visible)
    const {
      addElementToPortal,
      addEventListenerToPortal,
      removeEventListenerFromPortal,
    } = usePortal()

    useEffect((): (() => void) => {
      addEventListenerToPortal('keydown', handleEscapeKey)
      handleAddEventListenersToTrigger()

      return (): void => {
        removeEventListenerFromPortal('keydown', handleEscapeKey)
        handleRemoveEventListenersFromTrigger()
      }
    }, [])

    // Show or hide dialog in reponse to changes in "visible" prop
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
      // added explicit checks to resolve #15565
      // https://github.com/influxdata/influxdb/issues/15565
      if (
        e &&
        e.relatedTarget &&
        e.relatedTarget.className.includes('cf-popover')
      ) {
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

    const handleEscapeKey = (e: KeyboardEvent): void => {
      // Only hide dialog on escape key press if the
      // popover is not being controlled externally
      if (e.key === 'Escape' && visible === undefined) {
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

    const handleAddEventListenersToTrigger = (): void => {
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

    const handleRemoveEventListenersFromTrigger = (): void => {
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

    if (!expanded) {
      return null
    }

    const popover = (
      <PopoverDialog
        enableDefaultStyles={enableDefaultStyles}
        distanceFromTrigger={distanceFromTrigger}
        onClickOutside={handleClickOutside}
        onMouseLeave={handleDialogMouseLeave}
        triggerRef={triggerRef}
        caretSize={caretSize}
        className={className}
        position={position}
        contents={contents(handleHideDialog)}
        visible={visible}
        testID={testID}
        onHide={handleHideDialog}
        color={color}
        style={style}
        ref={ref}
        id={id}
      />
    )

    return addElementToPortal(popover, forceToTop)
  }
)

PopoverRoot.displayName = 'Popover'
