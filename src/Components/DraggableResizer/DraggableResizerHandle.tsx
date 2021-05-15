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
  handleBarStyle?: CSSProperties
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
      handleBarStyle,
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

    const DraggableResizerHandlePillOneClass = classnames(
      'cf-draggable-resizer--handle-pill1',
      {
        [`cf-draggable-resizer--handle-pill1--${orientation}`]: orientation,
      }
    )

    const DraggableResizerHandlePillTwoClass = classnames(
      'cf-draggable-resizer--handle-pill2',
      {
        [`cf-draggable-resizer--handle-pill2--${orientation}`]: orientation,
      }
    )

    const DraggableResizerGradientPillOneClass = classnames(
      'cf-draggable-resizer--gradient1',
      {
        [`cf-draggable-resizer--gradient1--${orientation}`]: orientation,
      }
    )

    const DraggableResizerGradientPillTwoClass = classnames(
      'cf-draggable-resizer--gradient2',
      {
        [`cf-draggable-resizer--gradient2--${orientation}`]: orientation,
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
          backgroundColor: '#FFFFFF',
        }
      }

      if (orientation === Orientation.Horizontal) {
        return {
          background: `linear-gradient(to right,  ${colors.start} 0%,${colors.stop} 100%)`,
          backgroundColor: '#FFFFFF',
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
          className={DraggableResizerHandlePillOneClass}
          style={handleBarStyle}
        ></div>
        <div
          className={DraggableResizerGradientPillOneClass}
          style={gradientStyle()}
        />
        <div
          className={DraggableResizerHandlePillTwoClass}
          style={handleBarStyle}
        ></div>
        <div
          className={DraggableResizerGradientPillTwoClass}
          style={gradientStyle()}
        />
      </div>
    )
  }
)

DraggableResizerHandle.displayName = 'DraggableResizerHandle'
