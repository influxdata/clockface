// Libraries
import React, {forwardRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {Gradients, Orientation, StandardFunctionProps} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Utils/colors'

export interface DraggableResizerHandleProps extends StandardFunctionProps {
  /** Expects a number between 0 - 1 */
  position: number
  /** Gets passed a function by being a child of DraggableResizer */
  onStartDrag?: (dragIndex: number) => void
  /** Gets passed a value by being a child of DraggableResizer */
  dragging?: boolean
  /** Gets passed a value by being a child of DraggableResizer */
  dragIndex?: number
  /** Gradient theme for handle */
  gradient: Gradients
  /** Orientation of handle */
  orientation: Orientation
}

export type DraggableResizerHandleRef = HTMLDivElement

export const DraggableResizerHandle = forwardRef<
  DraggableResizerHandleRef,
  DraggableResizerHandleProps
>(
  (
    {
      id,
      style,
      testID,
      gradient,
      className,
      orientation,
      dragging = false,
      dragIndex = 9999,
      onStartDrag = () => {
        // do nothing
      },
    },
    ref
  ) => {
    const handleMouseDown = (): void => {
      onStartDrag(dragIndex)
    }

    const DraggableResizerHandleClass = classnames(
      'cf-draggable-resizer--handle',
      {
        'cf-draggable-resizer--handle-dragging': dragging,
        [`${className}`]: className,
      }
    )

    const gradientStyle = (): CSSProperties | undefined => {
      if (!orientation || !gradient) {
        return
      }

      const colors = getColorsFromGradient(gradient)

      if (orientation == Orientation.Vertical) {
        return {
          background: `linear-gradient(to bottom,  ${colors.start} 0%,${colors.stop} 100%)`,
        }
      }

      if (orientation === Orientation.Horizontal) {
        return {
          background: `linear-gradient(to right,  ${colors.start} 0%,${colors.stop} 100%)`,
        }
      }

      return
    }

    return (
      <div
        ref={ref}
        className={DraggableResizerHandleClass}
        onMouseDown={handleMouseDown}
        title="Drag to resize"
        data-testid={testID}
        style={style}
        id={id}
      >
        <div
          className="cf-draggable-resizer--gradient"
          style={gradientStyle()}
        />
      </div>
    )
  }
)

DraggableResizerHandle.displayName = 'DraggableResizerHandle'
