// Libraries
import React, {forwardRef, createRef, CSSProperties} from 'react'

// Components
import {Popover, PopoverProps, PopoverDefaultProps} from '../Base/Popover'

// Types
import {Omit} from '../../../Types'

interface Props extends Omit<PopoverProps, 'triggerRef'> {
  /** Useful for correcting any layout disruptions */
  triggerStyle?: CSSProperties
}

export type ReflessPopoverRef = HTMLSpanElement

export const ReflessPopover = forwardRef<ReflessPopoverRef, Props>(
  (props, ref) => {
    const triggerRef = createRef<HTMLDivElement>()

    const {
      distanceFromTrigger,
      enableDefaultStyles,
      triggerStyle,
      caretSize,
      showEvent,
      hideEvent,
      children,
      position,
      disabled,
      contents,
      visible,
      testID,
      style,
      color,
      type,
      id,
    } = props

    return (
      <span ref={ref}>
        <div
          className="cf-refless-popover--trigger"
          ref={triggerRef}
          style={triggerStyle}
        >
          {children}
        </div>
        <Popover
          distanceFromTrigger={distanceFromTrigger}
          enableDefaultStyles={enableDefaultStyles}
          triggerRef={triggerRef}
          caretSize={caretSize}
          showEvent={showEvent}
          hideEvent={hideEvent}
          disabled={disabled}
          position={position}
          contents={contents}
          visible={visible}
          testID={testID}
          style={style}
          color={color}
          type={type}
          id={id}
        />
      </span>
    )
  }
)

ReflessPopover.displayName = 'ReflessPopover'

ReflessPopover.defaultProps = {
  ...PopoverDefaultProps,
  testID: 'refless-popover',
}
