// Libraries
import React, {Component, ReactChild, createRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../ClickOutside/ClickOutside'
import {PopoverDismissButton} from './PopoverDismissButton'

// Styles
import './Popover.scss'

// Types
import {
  ComponentColor,
  StandardProps,
  PopoverInteraction,
  PopoverPosition,
  PopoverType,
} from '../../Types'

interface Props extends StandardProps {
  /** Popover dialog color */
  color: ComponentColor
  /** Popover dialog contents */
  contents: (onHide?: () => void) => ReactChild
  /** Type of interaction to show the popover dialog */
  showEvent: PopoverInteraction
  /** Type of interaction to hide the popover dialog */
  hideEvent: PopoverInteraction
  /** Pixel distance between trigger and popover dialog */
  distanceFromTrigger: number
  /** Where to position the popover relative to the trigger (assuming it fits there) */
  position: PopoverPosition
  /** Means of applying color to popover */
  type: PopoverType
  /** Renders the popover dialog visible initially */
  initiallyVisible: boolean
  /** Disables the popover's show interaction */
  disabled: boolean
}

interface State {
  expanded: boolean
  triggerRect: ClientRect | DOMRect | null
}

interface PopoverFlush {
  first: boolean
  last: boolean
}

export class Popover extends Component<Props, State> {
  public static readonly displayName = 'Popover'

  public static defaultProps = {
    color: ComponentColor.Primary,
    testID: 'popover',
    showEvent: PopoverInteraction.Click,
    hideEvent: PopoverInteraction.Click,
    distanceFromTrigger: 4,
    position: PopoverPosition.Below,
    type: PopoverType.Solid,
    initiallyVisible: false,
    disabled: false,
  }

  public static DismissButton = PopoverDismissButton

  private triggerRef = createRef<HTMLDivElement>()
  private dialogRef = createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.state = {
      expanded: this.props.initiallyVisible,
      triggerRect: null,
    }
  }

  public componentDidMount() {
    if (this.props.initiallyVisible) {
      this.handleShowDialog()
    } else {
      this.handleUpdateTriggerRect()
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleUpdateTriggerRect)
    window.removeEventListener('scroll', this.handleUpdateTriggerRect)
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <div
          className={this.className}
          data-testid={testID}
          id={id}
          onClick={this.handleTriggerClick}
          onMouseOver={this.handleTriggerMouseOver}
          onMouseOut={this.handleTriggerMouseOut}
          ref={this.triggerRef}
        >
          {children}
          {this.dialog}
        </div>
      </ClickOutside>
    )
  }

  private get className(): string {
    const {color, className, type} = this.props

    return classnames('cf-popover', {
      [`cf-popover__${color}`]: color,
      [`${className}`]: className,
      [`cf-popover__${type}`]: type,
    })
  }

  private get dialog(): JSX.Element {
    const {triggerRect, expanded} = this.state
    const {contents, distanceFromTrigger} = this.props
    const dialogPosition = this.calculateDialogPosition()
    let dialogStyles: CSSProperties = {
      visibility: expanded ? 'visible' : 'hidden',
    }
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
            left: `${dialogRect.width / 2}px`,
            transform: 'translate(-50%, 100%)',
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
              right: `${triggerRect.width / 2}px`,
              transform: 'translate(50%, 100%)',
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
            left: `${dialogRect.width / 2}px`,
            transform: 'translate(-50%, -100%)',
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
              right: `${triggerRect.width / 2}px`,
              transform: 'translate(50%, -100%)',
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
            top: `${dialogRect.height / 2}px`,
            transform: `translate(100%, -50%)`,
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
              bottom: `${triggerRect.height / 2}px`,
              transform: `translate(100%, 50%)`,
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
            top: `${dialogRect.height / 2}px`,
            transform: `translate(-100%, -50%)`,
          }

          // Reposition dialog if it goes off the viewport
          // If the dialog goes off the viewport on both top and bottom edges
          // Then the bottom edge will take precedent
          if (dialogFlush.first) {
            // Align left edge of dialog to top edge of trigger
            dialogStyles = {
              ...dialogStyles,
              top: `${triggerRect.top}px`,
              transform: 'translate(0, 0)',
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
              bottom: `${triggerRect.height / 2}px`,
              transform: `translate(-100%, 50%)`,
            }
          }
          break
        default:
          break
      }
    }

    return (
      <div
        className="cf-popover--dialog"
        style={dialogStyles}
        ref={this.dialogRef}
      >
        <div className="cf-popover--dialog-contents">
          <div
            className={`cf-popover--caret cf-popover--caret__${dialogPosition}`}
            style={caretStyles}
          />
          {contents(this.handleHideDialog)}
        </div>
      </div>
    )
  }

  private calculateDialogPosition = (): PopoverPosition => {
    const {position, distanceFromTrigger} = this.props
    const {triggerRect} = this.state
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
    const {triggerRect} = this.state

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

  private handleTriggerClick = (): void => {
    const {showEvent, disabled} = this.props

    if (disabled) {
      return
    }

    if (showEvent === PopoverInteraction.Click) {
      this.handleShowDialog()
    }
  }

  private handleTriggerMouseOver = (): void => {
    const {showEvent} = this.props

    if (showEvent === PopoverInteraction.Hover) {
      this.handleShowDialog()
    }
  }

  private handleTriggerMouseOut = (): void => {
    const {hideEvent} = this.props

    if (hideEvent === PopoverInteraction.Hover) {
      this.handleHideDialog()
    }
  }

  private handleClickOutside = (): void => {
    const {hideEvent} = this.props

    if (hideEvent === PopoverInteraction.Click) {
      this.handleHideDialog()
    }
  }

  private handleUpdateTriggerRect = (): void => {
    if (!this.triggerRef.current) {
      return
    }

    this.setState({
      triggerRect: this.triggerRef.current.getBoundingClientRect(),
    })
  }

  private handleShowDialog = (): void => {
    this.handleUpdateTriggerRect()

    window.addEventListener('resize', this.handleUpdateTriggerRect)
    window.addEventListener('scroll', this.handleUpdateTriggerRect)

    this.setState({expanded: true})
  }

  private handleHideDialog = (): void => {
    this.setState({expanded: false})

    window.removeEventListener('resize', this.handleUpdateTriggerRect)
    window.removeEventListener('scroll', this.handleUpdateTriggerRect)
  }
}
