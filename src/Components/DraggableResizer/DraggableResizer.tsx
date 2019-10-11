// Libraries
import React, {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
  cloneElement,
} from 'react'
import classnames from 'classnames'

// Components
import {DraggableResizerPanel} from './DraggableResizerPanel'
import {DraggableResizerHandle} from './DraggableResizerHandle'

// Types
import {StandardFunctionProps, Orientation, Gradients} from '../../Types'

// Styles
import './DraggableResizer.scss'

// Constants
const NULL_DRAG = -1

export interface DraggableResizerProps extends StandardFunctionProps {
  /** Orientation the draggable panels stack in */
  handleOrientation: Orientation
  /** Expects and array of numbers between 0 - 1 */
  handlePositions: number[]
  /** Returns the updated array of numbers between 0 - 1, used to manage state */
  onChangePositions: (positions: number[]) => void
  /** Gradient theme for handle */
  handleGradient?: Gradients
}

export const DraggableResizerRoot: FunctionComponent<DraggableResizerProps> = ({
  id,
  style,
  children,
  className,
  handlePositions,
  handleOrientation,
  onChangePositions,
  testID = 'draggable-resizer',
  handleGradient = Gradients.PastelGothic,
}) => {
  const [dragIndex, setDragIndex] = useState<number>(NULL_DRAG)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (dragIndex > -1) {
      window.addEventListener('mousemove', handleDrag)
      window.addEventListener('mouseup', handleStopDrag)
    }
  }, [dragIndex])

  const panelsCount = React.Children.count(children)

  const isDragging = dragIndex !== NULL_DRAG

  const DraggableResizerClass = classnames('cf-draggable-resizer', {
    'cf-draggable-resizer--vertical':
      handleOrientation === Orientation.Vertical,
    'cf-draggable-resizer--horizontal':
      handleOrientation === Orientation.Horizontal,
    'cf-draggable-resizer--dragging': isDragging,
    [`${className}`]: className,
  })

  const calculatePanelSize = (panelIndex: number): number => {
    const prevPanelIndex = panelIndex - 1

    if (panelIndex === 0) {
      return handlePositions[panelIndex]
    }

    if (panelIndex === handlePositions.length) {
      return 1 - handlePositions[prevPanelIndex]
    }

    return handlePositions[panelIndex] - handlePositions[prevPanelIndex]
  }

  const handleStartDrag = (d: number): void => {
    setDragIndex(d)
  }

  const handleStopDrag = (): void => {
    setDragIndex(NULL_DRAG)
    window.removeEventListener('mousemove', handleDrag)
    window.removeEventListener('mouseup', handleStopDrag)
  }

  const handleDrag = (e: MouseEvent): void => {
    if (!containerRef.current) {
      return
    }

    const {
      x,
      y,
      width,
      height,
    } = containerRef.current.getBoundingClientRect() as DOMRect

    let containerSize = width
    // The single-axis position of the mouse relative to the `.draggable-resizer` container
    let mouseRelativePos = e.pageX - x

    // Use correct properties in case of horizontality
    if (handleOrientation === Orientation.Horizontal) {
      containerSize = height
      mouseRelativePos = e.pageY - y
    }

    // Clamp `mouseRelativePos` to the container
    if (mouseRelativePos < 0) {
      mouseRelativePos = 0
    } else if (mouseRelativePos > containerSize) {
      mouseRelativePos = containerSize
    }

    const newPos = mouseRelativePos / containerSize
    const newPositions = [...handlePositions]

    // Update the position of the handle being dragged
    newPositions[dragIndex] = newPos

    // If the new position of the handle being dragged is greater than
    // subsequent handles on the right, set them all to the new position to
    // acheive the collapsing / “accordian” effect
    for (let i = dragIndex + 1; i < newPositions.length; i++) {
      if (newPos > newPositions[i]) {
        newPositions[i] = newPos
      }
    }

    // Do something similar for handles on the left
    for (let i = 0; i < dragIndex; i++) {
      if (newPos < newPositions[i]) {
        newPositions[i] = newPos
      }
    }

    onChangePositions(newPositions)
  }

  return (
    <div
      className={DraggableResizerClass}
      ref={containerRef}
      data-testid={testID}
      id={id}
      style={style}
    >
      {React.Children.map(children, (child: JSX.Element, i: number) => {
        if (child.type !== DraggableResizerPanel) {
          return null
        }

        const isLastPanel = i === panelsCount - 1
        const dragging = i === dragIndex

        return (
          <>
            {cloneElement(child, {sizePercent: calculatePanelSize(i)})}
            {!isLastPanel && (
              <DraggableResizerHandle
                position={child.props.position}
                dragIndex={i}
                onStartDrag={handleStartDrag}
                dragging={dragging}
                gradient={handleGradient}
                orientation={handleOrientation}
                testID={`${testID}--handle`}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

DraggableResizerRoot.displayName = 'DraggableResizer'
