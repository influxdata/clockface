// Libraries
import React, {Component, createRef, MouseEvent, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../ClickOutside/ClickOutside'

// Utilities
import {convertCSSPropertiesToString} from '../../Utils/index'

// Types
import {
  ComponentColor,
  StandardProps,
  PopoverType,
  PopoverPosition,
} from '../../Types'

interface PopoverFlush {
  first: boolean
  last: boolean
}

interface PopoverStyles {
  dialogStyles: CSSProperties
  caretStyles: CSSProperties
}

interface Props extends StandardProps {
  /** Bounding rectangle of trigger element */
  triggerRect: ClientRect | DOMRect
  /** Pixel distance between trigger and popover dialog */
  distanceFromTrigger: number
  /** Where to position the popover relative to the trigger (assuming it fits there) */
  position: PopoverPosition
  /** Determins whether dialog is visible */
  visible: boolean
  /** Popover dialog color */
  color: ComponentColor
  /** Means of applying color to popover */
  type: PopoverType
  /** Popover dialog contents */
  contents: JSX.Element
  /** Handles clicks detected outside the popover dialog element */
  onClickOutside: (e: MouseEvent) => void
  /** Handles mouseleave events */
  onMouseLeave: (e: MouseEvent) => void
  /** Size of caret (triangle) that points at the trigger */
  caretSize: number
  /** Adds reasonable styles to popover dialog contents so you do not have to */
  enableDefaultStyles: boolean
}

export class PopoverDialog extends Component<Props> {
  public static readonly displayName = 'PopoverDialog'

  private dialogRef = createRef<HTMLDivElement>()
  private caretRef = createRef<HTMLDivElement>()

  componentDidUpdate() {
    const {dialogStyles, caretStyles} = this.popoverStyles

    const dialogStyleString = convertCSSPropertiesToString(dialogStyles)
    const caretStyleString = convertCSSPropertiesToString(caretStyles)

    if (this.dialogRef.current){
      this.dialogRef.current.setAttribute('style', dialogStyleString)
    }

    if (this.caretRef.current) {
      this.caretRef.current.setAttribute('style', caretStyleString)
    }
  }

  render() {
    const {
      testID,
      id,
      style,
      visible,
      contents,
      onClickOutside,
      onMouseLeave,
    } = this.props

    if (!visible) {
      return null
    }

    return(
      <ClickOutside onClickOutside={onClickOutside}>
        <div
          onMouseLeave={onMouseLeave}
          className={this.className}
          ref={this.dialogRef}
          data-testid={testID}
          id={id}
        >
          <div
            style={style}
            className={this.contentsClassName}
            data-testid={`${testID}--contents`}
          >
            {contents}
          </div>
          <div className="cf-popover--caret" ref={this.caretRef} />
        </div>
        </ClickOutside>
    )
  }

  private get className(): string {
    const {color, type, className} = this.props

    return classnames('cf-popover', {
      [`${className}`]: className,
      [`cf-popover__${color}`]: color,
      [`cf-popover__${type}`]: type,
    })
  }

  private get contentsClassName(): string {
    const {enableDefaultStyles} = this.props

    return classnames('cf-popover--contents', {
      'cf-popover--contents__default-styles': enableDefaultStyles,
    })
  }

  private calculateDialogPosition = (): PopoverPosition => {
    const {position, distanceFromTrigger, triggerRect} = this.props
    const acceptablePopoverPositions = []

    if (!triggerRect || !this.dialogRef.current) {
      return position
    }

    const popoverRect = this.dialogRef.current.getBoundingClientRect()

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

  private isDialogFlush = (position: PopoverPosition): PopoverFlush => {
    const {triggerRect} = this.props

    if (!triggerRect || !this.dialogRef.current) {
      return {
        first: false,
        last: false,
      }
    }

    const dialogRect = this.dialogRef.current.getBoundingClientRect()
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
          window.innerWidth - triggerRect.left - triggerRect.width <
          overflowX / 2
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

  private get popoverStyles(): PopoverStyles {
    const {distanceFromTrigger, triggerRect, caretSize} = this.props
    const dialogPosition = this.calculateDialogPosition()
    let dialogStyles: CSSProperties = {}
    let caretStyles: CSSProperties = {}

    if (triggerRect && this.dialogRef.current) {
      const dialogRect = this.dialogRef.current.getBoundingClientRect()
      let dialogFlush

      switch (dialogPosition) {
        case PopoverPosition.Above:
          dialogFlush = this.isDialogFlush(PopoverPosition.Above)

          // Center the dialog horizontally above the trigger by default
          dialogStyles = {
            ...dialogStyles,
            bottom: `${window.innerHeight - triggerRect.top}px`,
            left: `${triggerRect.left + triggerRect.width / 2}px`,
            transform: 'translateX(-50%)',
            paddingBottom: `${distanceFromTrigger}px`,
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            bottom: `${distanceFromTrigger - (caretSize * 2)}px`,
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
              left: `${triggerRect.left}px`,
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
              left: `${triggerRect.left + triggerRect.width}px`,
              transform: 'translateX(-100%)',
            }
            caretStyles = {
              borderWidth: `${caretSize}px`,
              bottom: `${distanceFromTrigger - (caretSize * 2)}px`,
              right: `${triggerRect.width / 2}px`,
              transform: 'translateX(50%) rotate(180deg)',
            }
          }
          break
        case PopoverPosition.Below:
          dialogFlush = this.isDialogFlush(PopoverPosition.Below)

          // Center the dialog horizontally below the trigger by default
          dialogStyles = {
            ...dialogStyles,
            top: `${triggerRect.top + triggerRect.height}px`,
            left: `${triggerRect.left + triggerRect.width / 2}px`,
            transform: 'translateX(-50%)',
            paddingTop: `${distanceFromTrigger}px`,
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            top: `${distanceFromTrigger - (caretSize * 2)}px`,
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
              left: `${triggerRect.left}px`,
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
              left: `${triggerRect.left + triggerRect.width}px`,
              transform: 'translateX(-100%)',
            }
            caretStyles = {
              borderWidth: `${caretSize}px`,
              top: `${distanceFromTrigger - (caretSize * 2)}px`,
              right: `${triggerRect.width / 2}px`,
              transform: 'translateX(50%)',
            }
          }
          break
        case PopoverPosition.ToTheLeft:
          dialogFlush = this.isDialogFlush(PopoverPosition.ToTheLeft)

          // Center the dialog vertically to the left of the trigger by default
          dialogStyles = {
            ...dialogStyles,
            left: `${triggerRect.left}px`,
            top: `${triggerRect.top + triggerRect.height / 2}px`,
            transform: 'translate(-100%, -50%)',
            paddingRight: `${distanceFromTrigger}px`,
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            right: `${distanceFromTrigger - (caretSize * 2)}px`,
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
              top: `${triggerRect.top}px`,
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
              top: `${triggerRect.top + triggerRect.height}px`,
              transform: 'translate(-100%, -100%)',
            }
            caretStyles = {
              borderWidth: `${caretSize}px`,
              right: `${distanceFromTrigger - (caretSize * 2)}px`,
              bottom: `${triggerRect.height / 2}px`,
              transform: `translateY(50%) rotate(90deg)`,
            }
          }
          break
        case PopoverPosition.ToTheRight:
          dialogFlush = this.isDialogFlush(PopoverPosition.ToTheRight)

          // Center the dialog vertically to the right of the trigger by default
          dialogStyles = {
            ...dialogStyles,
            left: `${triggerRect.left + triggerRect.width}px`,
            top: `${triggerRect.top + triggerRect.height / 2}px`,
            transform: 'translateY(-50%)',
            paddingLeft: `${distanceFromTrigger}px`,
          }
          caretStyles = {
            borderWidth: `${caretSize}px`,
            left: `${distanceFromTrigger - (caretSize * 2)}px`,
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
              top: `${triggerRect.top}px`,
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
              top: `${triggerRect.top + triggerRect.height}px`,
              transform: 'translateY(-100%)',
            }
            caretStyles = {
              borderWidth: `${caretSize}px`,
              left: `${distanceFromTrigger - (caretSize * 2)}px`,
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
}
