// Libraries
import React, {
  createRef,
  MouseEvent,
  RefObject,
  useLayoutEffect,
  FunctionComponent,
} from 'react'
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

export interface Props extends StandardProps {
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
}

export const PopoverDialog: FunctionComponent<Props> = props => {
  const dialogRef = createRef<HTMLDivElement>()
  const caretRef = createRef<HTMLDivElement>()

  const {
    testID,
    id,
    style,
    contents,
    onClickOutside,
    onMouseLeave,
    className,
    color,
    type,
    enableDefaultStyles,
  } = props

  const handleUpdateStyles = (): void => {
    const {position, triggerRef, caretSize, distanceFromTrigger} = props
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

  useLayoutEffect((): (() => void) => {
    window.addEventListener('scroll', handleUpdateStyles)
    window.addEventListener('resize', handleUpdateStyles)

    return (): void => {
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
        onMouseLeave={onMouseLeave}
        className={popoverDialogClassName}
        ref={dialogRef}
        data-testid={testID}
        id={id}
      >
        <div
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

PopoverDialog.displayName = 'PopoverDialog'
