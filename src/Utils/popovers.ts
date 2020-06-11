import {RefObject, CSSProperties} from 'react'
import {PopoverPosition} from '../Types'

interface PopoverFlush {
  first: boolean
  last: boolean
}

export interface PopoverStyles {
  dialogStyles: CSSProperties
  caretStyles: CSSProperties
}

const calculateDialogPosition = (
  position: PopoverPosition,
  triggerRef: RefObject<any>,
  dialogRef: RefObject<HTMLDivElement>,
  distanceFromTrigger: number
): PopoverPosition => {
  const acceptablePopoverPositions = []

  if (!triggerRef.current || !dialogRef.current) {
    return position
  }

  const triggerRect = triggerRef.current.getBoundingClientRect()
  const popoverRect = dialogRef.current.getBoundingClientRect()

  const popoverFitsAbove =
    triggerRect.top > popoverRect.height + distanceFromTrigger
  const popoverFitsBelow =
    window.innerHeight - triggerRect.top - triggerRect.height >
    popoverRect.height + distanceFromTrigger
  const popoverFitsToTheLeft =
    triggerRect.left > popoverRect.width + distanceFromTrigger
  const popoverFitsToTheRight =
    window.innerWidth - triggerRect.left - triggerRect.width >
    popoverRect.width + distanceFromTrigger

  // Check all sides of the trigger element and compile a list of acceptable popover positions
  if (popoverFitsAbove) {
    acceptablePopoverPositions.push(PopoverPosition.Above)
  }
  if (popoverFitsBelow) {
    acceptablePopoverPositions.push(PopoverPosition.Below)
  }
  if (popoverFitsToTheLeft) {
    acceptablePopoverPositions.push(PopoverPosition.ToTheLeft)
  }
  if (popoverFitsToTheRight) {
    acceptablePopoverPositions.push(PopoverPosition.ToTheRight)
  }

  // Check to see if the specified position is within the acceptable positions
  if (acceptablePopoverPositions.includes(position)) {
    return position
  }

  // Otherwise choose the next available position in from the acceptable list
  return acceptablePopoverPositions[0] || null
}

const isDialogFlush = (
  position: PopoverPosition,
  triggerRef: RefObject<any>,
  dialogRef: RefObject<any>
): PopoverFlush => {
  if (!triggerRef.current || !dialogRef.current) {
    return {
      first: false,
      last: false,
    }
  }

  const triggerRect = triggerRef.current.getBoundingClientRect()
  const dialogRect = dialogRef.current.getBoundingClientRect()
  // When the trigger is in a corner of the screen,
  // determine whether to offest it
  let first = false
  let last = false

  switch (position) {
    case PopoverPosition.Above:
    case PopoverPosition.Below:
      // When the dialog is above or below the trigger
      // First: left edge
      // Last: right edge
      const overflowX = dialogRect.width - triggerRect.width
      first = triggerRect.left < overflowX / 2
      last =
        window.innerWidth - triggerRect.left - triggerRect.width < overflowX / 2
      break
    case PopoverPosition.ToTheLeft:
    case PopoverPosition.ToTheRight:
      // When the dialog is left or right of the trigger
      // First: top edge
      // Last: bottom edge
      const overflowY = dialogRect.height - triggerRect.height
      first = triggerRect.top < overflowY / 2
      last =
        window.innerHeight - triggerRect.top - triggerRect.height <
        overflowY / 2
      break
    default:
      break
  }

  return {
    first,
    last,
  }
}

export const calculatePopoverStyles = (
  position: PopoverPosition,
  triggerRef: RefObject<any>,
  dialogRef: RefObject<HTMLDivElement>,
  caretSize: number,
  distanceFromTrigger: number
): PopoverStyles => {
  const dialogPosition = calculateDialogPosition(
    position,
    triggerRef,
    dialogRef,
    distanceFromTrigger
  )
  let dialogStyles: CSSProperties = {}
  let caretStyles: CSSProperties = {}

  if (triggerRef.current && dialogRef.current) {
    const triggerRect = triggerRef.current.getBoundingClientRect()
    const dialogRect = dialogRef.current.getBoundingClientRect()
    let dialogFlush

    switch (dialogPosition) {
      case PopoverPosition.Above:
        dialogFlush = isDialogFlush(
          PopoverPosition.Above,
          triggerRef,
          dialogRef
        )

        // Center the dialog horizontally above the trigger by default
        dialogStyles = {
          ...dialogStyles,
          bottom: `${Math.floor(window.innerHeight - triggerRect.top)}px`,
          left: `${Math.floor(triggerRect.left + triggerRect.width / 2)}px`,
          transform: 'translateX(-50%)',
          paddingBottom: `${distanceFromTrigger}px`,
        }
        caretStyles = {
          borderWidth: `${caretSize}px`,
          bottom: `${distanceFromTrigger - caretSize * 2}px`,
          left: `${dialogRect.width / 2}px`,
          transform: 'translateX(-50%) rotate(180deg)',
        }

        // Reposition dialog if it goes off the viewport
        // If the dialog goes off the viewport on both left and right edges
        // Then the right edge will take precedent
        if (dialogFlush.first) {
          // Align left edge of dialog to left edge of trigger
          dialogStyles = {
            ...dialogStyles,
            left: `${Math.floor(triggerRect.left)}px`,
            transform: 'translateX(0)',
          }
          caretStyles = {
            ...caretStyles,
            left: `${triggerRect.width / 2}px`,
          }
        } else if (dialogFlush.last) {
          // Align right edge of dialog to right edge of trigger
          dialogStyles = {
            ...dialogStyles,
            left: `${Math.floor(triggerRect.left + triggerRect.width)}px`,
            transform: 'translateX(-100%)',
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            bottom: `${distanceFromTrigger - caretSize * 2}px`,
            right: `${triggerRect.width / 2}px`,
            transform: 'translateX(50%) rotate(180deg)',
          }
        }
        break
      case PopoverPosition.Below:
        dialogFlush = isDialogFlush(
          PopoverPosition.Below,
          triggerRef,
          dialogRef
        )

        // Center the dialog horizontally below the trigger by default
        dialogStyles = {
          ...dialogStyles,
          top: `${Math.floor(triggerRect.top + triggerRect.height)}px`,
          left: `${Math.floor(triggerRect.left + triggerRect.width / 2)}px`,
          transform: 'translateX(-50%)',
          paddingTop: `${distanceFromTrigger}px`,
        }
        caretStyles = {
          borderWidth: `${caretSize}px`,
          top: `${distanceFromTrigger - caretSize * 2}px`,
          left: `${dialogRect.width / 2}px`,
          transform: 'translateX(-50%)',
        }

        // Reposition dialog if it goes off the viewport
        // If the dialog goes off the viewport on both left and right edges
        // Then the right edge will take precedent
        if (dialogFlush.first) {
          // Align left edge of dialog to left edge of trigger
          dialogStyles = {
            ...dialogStyles,
            left: `${Math.floor(triggerRect.left)}px`,
            transform: 'translateX(0)',
          }
          caretStyles = {
            ...caretStyles,
            left: `${triggerRect.width / 2}px`,
          }
        } else if (dialogFlush.last) {
          // Align right edge of dialog to right edge of trigger
          dialogStyles = {
            ...dialogStyles,
            left: `${Math.floor(triggerRect.left + triggerRect.width)}px`,
            transform: 'translateX(-100%)',
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            top: `${distanceFromTrigger - caretSize * 2}px`,
            right: `${triggerRect.width / 2}px`,
            transform: 'translateX(50%)',
          }
        }
        break
      case PopoverPosition.ToTheLeft:
        dialogFlush = isDialogFlush(
          PopoverPosition.ToTheLeft,
          triggerRef,
          dialogRef
        )

        // Center the dialog vertically to the left of the trigger by default
        dialogStyles = {
          ...dialogStyles,
          left: `${Math.floor(triggerRect.left)}px`,
          top: `${Math.floor(triggerRect.top + triggerRect.height / 2)}px`,
          transform: 'translate(-100%, -50%)',
          paddingRight: `${distanceFromTrigger}px`,
        }
        caretStyles = {
          borderWidth: `${caretSize}px`,
          right: `${distanceFromTrigger - caretSize * 2}px`,
          top: `${dialogRect.height / 2}px`,
          transform: `translateY(-50%) rotate(90deg)`,
        }

        // Reposition dialog if it goes off the viewport
        // If the dialog goes off the viewport on both top and bottom edges
        // Then the bottom edge will take precedent
        if (dialogFlush.first) {
          // Align left edge of dialog to top edge of trigger
          dialogStyles = {
            ...dialogStyles,
            top: `${Math.floor(triggerRect.top)}px`,
            transform: 'translate(-100%, 0)',
          }
          caretStyles = {
            ...caretStyles,
            top: `${triggerRect.height / 2}px`,
          }
        } else if (dialogFlush.last) {
          // Align right edge of dialog to bottom edge of trigger
          dialogStyles = {
            ...dialogStyles,
            top: `${Math.floor(triggerRect.top + triggerRect.height)}px`,
            transform: 'translate(-100%, -100%)',
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            right: `${distanceFromTrigger - caretSize * 2}px`,
            bottom: `${triggerRect.height / 2}px`,
            transform: `translateY(50%) rotate(90deg)`,
          }
        }
        break
      case PopoverPosition.ToTheRight:
        dialogFlush = isDialogFlush(
          PopoverPosition.ToTheRight,
          triggerRef,
          dialogRef
        )

        // Center the dialog vertically to the right of the trigger by default
        dialogStyles = {
          ...dialogStyles,
          left: `${Math.floor(triggerRect.left + triggerRect.width)}px`,
          top: `${Math.floor(triggerRect.top + triggerRect.height / 2)}px`,
          transform: 'translateY(-50%)',
          paddingLeft: `${distanceFromTrigger}px`,
        }
        caretStyles = {
          borderWidth: `${caretSize}px`,
          left: `${distanceFromTrigger - caretSize * 2}px`,
          top: `${dialogRect.height / 2}px`,
          transform: `translateY(-50%) rotate(-90deg)`,
        }

        // Reposition dialog if it goes off the viewport
        // If the dialog goes off the viewport on both top and bottom edges
        // Then the bottom edge will take precedent
        if (dialogFlush.first) {
          // Align left edge of dialog to top edge of trigger
          dialogStyles = {
            ...dialogStyles,
            top: `${Math.floor(triggerRect.top)}px`,
            transform: 'translateY(0)',
          }
          caretStyles = {
            ...caretStyles,
            top: `${triggerRect.height / 2}px`,
          }
        } else if (dialogFlush.last) {
          // Align right edge of dialog to bottom edge of trigger
          dialogStyles = {
            ...dialogStyles,
            top: `${Math.floor(triggerRect.top + triggerRect.height)}px`,
            transform: 'translateY(-100%)',
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            left: `${distanceFromTrigger - caretSize * 2}px`,
            bottom: `${triggerRect.height / 2}px`,
            transform: `translateY(50%) rotate(-90deg)`,
          }
        }
        break
      default:
        break
    }
  }

  return {dialogStyles, caretStyles}
}
