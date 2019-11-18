// Libraries
import React, {FunctionComponent, RefObject, useRef, CSSProperties} from 'react'

// Components
import {PopoverProps} from '../Base/Popover'
import {Popover} from '../'

// Types
import {Omit} from '../../../Types'

interface ReflessPopoverProps extends Omit<PopoverProps, 'triggerRef'> {
  /** Useful for correcting any layout disruptions */
  triggerStyle?: CSSProperties
}

export const ReflessPopover: FunctionComponent<ReflessPopoverProps> = ({
  id,
  color,
  style,
  visible,
  contents,
  disabled,
  position,
  children,
  hideEvent,
  showEvent,
  caretSize,
  appearance,
  triggerStyle,
  distanceFromTrigger,
  enableDefaultStyles,
  testID = 'refless-popover',
}) => {
  const triggerRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <>
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
        appearance={appearance}
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
        id={id}
      />
    </>
  )
}

ReflessPopover.displayName = 'ReflessPopover'
