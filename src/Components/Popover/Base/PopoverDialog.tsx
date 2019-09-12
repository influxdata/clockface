// Libraries
import React, {Component, createRef, MouseEvent, RefObject} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Utilities
import {convertCSSPropertiesToString} from '../../../Utils/index'
import {calculatePopoverStyles} from '../../../Utils/popovers'

// Types
import {
  ComponentColor,
  StandardProps,
  PopoverType,
  PopoverPosition,
} from '../../../Types'

interface Props extends StandardProps {
  /** Bounding rectangle of trigger element */
  triggerRef: RefObject<any>
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

  componentDidMount() {
    this.handleUpdateStyles()
    window.addEventListener('scroll', this.handleUpdateStyles)
    window.addEventListener('resize', this.handleUpdateStyles)
  }

  componentDidUpdate() {
    this.handleUpdateStyles()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleUpdateStyles)
    window.removeEventListener('resize', this.handleUpdateStyles)
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

    return (
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

  private handleUpdateStyles = (): void => {
    const {position, triggerRef, caretSize, distanceFromTrigger} = this.props
    const {dialogStyles, caretStyles} = calculatePopoverStyles(
      position,
      triggerRef,
      this.dialogRef,
      caretSize,
      distanceFromTrigger
    )

    const dialogStyleString = convertCSSPropertiesToString(dialogStyles)
    const caretStyleString = convertCSSPropertiesToString(caretStyles)

    if (this.dialogRef.current) {
      this.dialogRef.current.setAttribute('style', dialogStyleString)
    }

    if (this.caretRef.current) {
      this.caretRef.current.setAttribute('style', caretStyleString)
    }
  }
}
