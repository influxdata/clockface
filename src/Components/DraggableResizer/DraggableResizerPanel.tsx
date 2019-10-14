// Libraries
import React, {forwardRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface DraggableResizerPanelProps extends StandardFunctionProps {
  /** Panel will not shrink past this size (experimental, not guaranteed to work) */
  minSizePixels?: number
  /** Does not have a value initially, gets passed a value by being a child of DraggableResizer */
  sizePercent?: number
  /** Test ID for Integration Tests */
}

export type DraggableResizerPanelRef = HTMLDivElement

export const DraggableResizerPanel = forwardRef<
  DraggableResizerPanelRef,
  DraggableResizerPanelProps
>(
  (
    {
      id,
      style,
      children,
      className,
      sizePercent,
      minSizePixels = 0,
      testID = 'draggable-resizer--panel',
    },
    ref
  ) => {
    const draggableResizerPanelClass = classnames(
      'cf-draggable-resizer--panel',
      {
        [`${className}`]: className,
      }
    )

    const draggableResizerPanelStyle = (): CSSProperties | undefined => {
      if (sizePercent) {
        return {flex: `${sizePercent} 0 ${minSizePixels}px`, ...style}
      }

      return style
    }

    return (
      <div
        ref={ref}
        className={draggableResizerPanelClass}
        style={draggableResizerPanelStyle()}
        data-testid={testID}
        id={id}
      >
        {children}
      </div>
    )
  }
)

DraggableResizerPanel.displayName = 'DraggableResizerPanel'
