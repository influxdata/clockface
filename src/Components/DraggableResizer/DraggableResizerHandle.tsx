// Libraries
import React, {forwardRef, CSSProperties, useState, useEffect} from 'react'
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
  /** Enables a 0.0 direction (Left/Up) Collapse button */
  isCollapsibleToLower?: boolean
  /** Collapsed state observed from parent */
  collapsedLower?: boolean
  /** Enables a 1.0 direction (Right/Down) Collapse Button */
  isCollapsibleToUpper?: boolean
  /** Collapsed state observed from parent */
  collapsedUpper?: boolean
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
      isCollapsibleToLower = false,
      collapsedLower = false,
      isCollapsibleToUpper = false,
      collapsedUpper = false,
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
    const [collapsibleLower, setCollapsibleLower] = useState<boolean>(
      collapsedLower
    )
    const [collapsibleUpper, setCollapsibleUpper] = useState<boolean>(
      collapsedUpper
    )

    useEffect(() => {
      if (isCollapsibleToLower && collapsedLower) {
        onCollapseButtonClick(0, dragIndex)
      }
      if (isCollapsibleToUpper && collapsedUpper) {
        onCollapseButtonClick(1, dragIndex)
      }
    }, [ref, collapsedLower, collapsedUpper])

    const handleMouseDown = (): void => {
      onStartDrag(dragIndex)
      setCollapsibleUpper(false)
      setCollapsibleUpper(false)
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

    const onCollapsibleLowerClick = () => {
      setCollapsibleLower(!collapsibleLower)
      onCollapseButtonClick(0, dragIndex)
    }

    const onCollapsibleUpperClick = () => {
      setCollapsibleUpper(!collapsibleUpper)
      onCollapseButtonClick(1, dragIndex)
    }

    return (
      <div className={collapsibleHandleContainerClassNames}>
        <div className={collapsibleButtonContainerClassNames}>
          {isCollapsibleToLower && (
            <SquareButton
              icon={
                collapsibleLower
                  ? IconFont.CollapseRight
                  : IconFont.CollapseLeft
              }
              onClick={onCollapsibleLowerClick}
              className={collapsibleButtonClassNames}
            />
          )}
          {isCollapsibleToUpper && (
            <SquareButton
              icon={
                collapsibleUpper
                  ? IconFont.CollapseLeft
                  : IconFont.CollapseRight
              }
              onClick={onCollapsibleUpperClick}
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
