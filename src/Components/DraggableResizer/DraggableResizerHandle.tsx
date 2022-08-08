// Libraries
import React, {forwardRef, CSSProperties, useState} from 'react'
import classnames from 'classnames'

// Components
import {SquareButton} from '../Button/Composed/SquareButton'

// Types
import {
  Gradients,
  IconFont,
  Orientation,
  StandardFunctionProps,
} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Utils/colors'

export interface DraggableResizerHandleProps extends StandardFunctionProps {
  /** Enables a 0 direction Collapse button */
  isCollapsible0?: boolean
  /** Enables a 1 direction Collapse Button */
  isCollapsible1?: boolean
  /** Function that updates panel positions after collapsing */
  onCollapseButtonClick: (direction: number, dragIndex: number) => void
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
  handleBackgroundStyle?: CSSProperties
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
      isCollapsible0 = false,
      isCollapsible1 = false,
      onCollapseButtonClick,
      dragging = false,
      dragIndex = 9999,
      onStartDrag = () => {
        // do nothing
      },
      handleBarStyle,
    },
    ref
  ) => {
    const [collapsible0, setCollapsible0] = useState<boolean>(false)
    const [collapsible1, setCollapsible1] = useState<boolean>(false)

    const handleMouseDown = (): void => {
      onStartDrag(dragIndex)
      setCollapsible0(false)
      setCollapsible1(false)
    }

    const DraggableResizerHandleClass = classnames(
      'cf-draggable-resizer--handle',
      {
        [`cf-draggable-resizer-handle--${orientation}`]: orientation,
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

    const collapsibleButtonClassNames = classnames(
      'cf-draggable-resizer-collapse-button',
      {
        'cf-draggable-resizer-collapse-icon--horizontal':
          orientation === Orientation.Horizontal,
      }
    )

    const collapsibleHandleContainerClassNames = classnames(
      'cf-draggable-resizer-handle-container',
      {
        [`cf-draggable-resizer-handle-container--${orientation}`]: orientation,
      }
    )

    const collapsibleButtonContainerClassNames = classnames(
      'cf-draggable-resizer-button-container',
      {
        [`cf-draggable-resizer-button-container--${orientation}`]: orientation,
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

    const onCollapsible0Click = () => {
      setCollapsible0(!collapsible0)
      onCollapseButtonClick(0, dragIndex)
    }

    const onCollapsible1Click = () => {
      setCollapsible1(!collapsible1)
      onCollapseButtonClick(1, dragIndex)
    }

    return (
      <div className={collapsibleHandleContainerClassNames}>
        <div className={collapsibleButtonContainerClassNames}>
          {isCollapsible0 && (
            <SquareButton
              icon={
                collapsible0 ? IconFont.CollapseRight : IconFont.CollapseLeft
              }
              onClick={onCollapsible0Click}
              className={collapsibleButtonClassNames}
            />
          )}
          {isCollapsible1 && (
            <SquareButton
              icon={
                collapsible1 ? IconFont.CollapseLeft : IconFont.CollapseRight
              }
              onClick={onCollapsible1Click}
              className={collapsibleButtonClassNames}
            />
          )}
        </div>
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
      </div>
    )
  }
)

DraggableResizerHandle.displayName = 'DraggableResizerHandle'
