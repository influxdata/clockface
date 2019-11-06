// Libraries
import React, {
  useRef,
  RefObject,
  MouseEvent,
  useLayoutEffect,
  forwardRef,
} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Utilities
import {convertCSSPropertiesToString} from '../../../Utils/index'
import {calculatePopoverStyles} from '../../../Utils/popovers'

// Types
import {
  PopoverType,
  ComponentColor,
  PopoverPosition,
  StandardFunctionProps,
} from '../../../Types'

export interface PopoverDialogProps extends StandardFunctionProps {
  /** Bounding rectangle of trigger element */
  triggerRef: RefObject<any>
  /** Pixel distance between trigger and popover dialog */
  distanceFromTrigger: number
  /** Where to position the popover relative to the trigger (assuming it fits there) */
  position: PopoverPosition
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
  /** Allows the popover to dismiss itself when the trigger is no longer in view */
  onHide: () => void
  /** This keeps the Popover visible no matter what */
  visible?: boolean
}

export type PopoverDialogRef = HTMLDivElement

export const PopoverDialog = forwardRef<PopoverDialogRef, PopoverDialogProps>(
  (
    {
      id,
      type,
      style,
      color,
      onHide,
      testID,
      visible,
      contents,
      position,
      className,
      caretSize,
      triggerRef,
      onMouseLeave,
      onClickOutside,
      distanceFromTrigger,
      enableDefaultStyles,
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null)
    const caretRef = useRef<HTMLDivElement>(null)

    const handleUpdateStyles = (): void => {
      if (!triggerRef.current || !dialogRef.current) {
        return
      }

      const {dialogStyles, caretStyles} = calculatePopoverStyles(
        position,
        triggerRef,
        dialogRef,
        caretSize,
        distanceFromTrigger
      )

      const dialogStyleString = convertCSSPropertiesToString(dialogStyles)
      const caretStyleString = convertCSSPropertiesToString(caretStyles)

      if (dialogRef.current) {
        dialogRef.current.setAttribute('style', dialogStyleString)
      }

      if (caretRef.current) {
        caretRef.current.setAttribute('style', caretStyleString)
      }
    }

    const popoverDialogClassName = classnames('cf-popover', {
      [`${className}`]: className,
      [`cf-popover__${color}`]: color,
      [`cf-popover__${type}`]: type,
    })

    const contentsClassName = classnames('cf-popover--contents', {
      'cf-popover--contents__default-styles': enableDefaultStyles,
    })

    const hidePopoverWhenOutOfView = (
      entries: IntersectionObserverEntry[]
    ): void => {
      if (visible) {
        return
      }

      if (!!entries.length && entries[0].isIntersecting === false) {
        onHide()
      }
    }

    const observer = new IntersectionObserver(hidePopoverWhenOutOfView)

    useLayoutEffect((): (() => void) => {
      handleUpdateStyles()
      observer.observe(triggerRef.current)
      // The third argument in addEventListener is "false" by default and controls bubbling
      // scroll events do not bubble by default so setting this to "true"
      // allows the listener to pick up scroll events from nested scrollable elements
      window.addEventListener('scroll', handleUpdateStyles, true)
      window.addEventListener('resize', handleUpdateStyles)

      return (): void => {
        observer.disconnect()
        window.removeEventListener('scroll', handleUpdateStyles)
        window.removeEventListener('resize', handleUpdateStyles)
      }
    }, [])

    useLayoutEffect(() => {
      handleUpdateStyles()
    })

    return (
      <ClickOutside onClickOutside={onClickOutside}>
        <div
          id={id}
          ref={dialogRef}
          className={popoverDialogClassName}
          data-testid={`${testID}--dialog`}
          onMouseLeave={onMouseLeave}
        >
          <div
            ref={ref}
            style={style}
            className={contentsClassName}
            data-testid={`${testID}--contents`}
          >
            {contents}
          </div>
          <div className="cf-popover--caret" ref={caretRef} />
        </div>
      </ClickOutside>
    )
  }
)

PopoverDialog.displayName = 'PopoverDialog'
