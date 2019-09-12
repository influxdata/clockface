// Libraries
import React, {PureComponent, createRef, CSSProperties} from 'react'

// Components
import {
  Popover,
  PopoverProps,
  PopoverDefaultProps,
} from 'src/Components/Popover/Base/Popover'

// Types
import {Omit} from 'src/Types'

interface Props extends Omit<PopoverProps, 'triggerRef'> {
  /** Useful for correcting any layout disruptions */
  triggerStyle?: CSSProperties
}

export class ReflessPopover extends PureComponent<Props> {
  public static readonly displayName = 'ReflessPopover'

  public static defaultProps = {
    ...PopoverDefaultProps,
    testID: 'refless-popover',
  }

  private triggerRef = createRef<HTMLDivElement>()

  public render() {
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
    } = this.props

    return (
      <>
        <div
          className="cf-refless-popover--trigger"
          ref={this.triggerRef}
          style={triggerStyle}
        >
          {children}
        </div>
        <Popover
          distanceFromTrigger={distanceFromTrigger}
          enableDefaultStyles={enableDefaultStyles}
          triggerRef={this.triggerRef}
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
      </>
    )
  }
}
