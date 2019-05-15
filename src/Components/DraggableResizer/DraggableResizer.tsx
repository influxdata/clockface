// Libraries
import React, {Component, RefObject} from 'react'
import classnames from 'classnames'

// Components
import {DraggableResizerPanel} from './DraggableResizerPanel'
import {DraggableResizerHandle} from './DraggableResizerHandle'
import {Orientation, Gradients} from '../../Types'

// Styles
import './DraggableResizer.scss'

// Constants
const NULL_DRAG = -1

interface Props {
  /** Orientation the draggable panels stack in */
  handleOrientation: Orientation
  /** Expects and array of numbers between 0 - 1 */
  handlePositions: number[]
  /** Returns the updated array of numbers between 0 - 1, used to manage state */
  onChangePositions: (positions: number[]) => void
  /** Gradient theme for handle */
  handleGradient: Gradients
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

interface State {
  initialized: boolean
  dragIndex: number
}

export class DraggableResizer extends Component<Props, State> {
  public static Panel = DraggableResizerPanel

  public static defaultProps = {
    handleGradient: Gradients.PastelGothic,
    testID: 'draggable-resizer',
  }

  private containerRef: RefObject<HTMLDivElement>

  constructor(props: Props) {
    super(props)

    this.containerRef = React.createRef()

    this.state = {
      initialized: false,
      dragIndex: NULL_DRAG,
    }
  }

  public componentDidMount() {
    // This allows for one extra render which
    // ensures the panels don't render without positioning information
    this.setState({initialized: true})
  }

  public render() {
    const {testID} = this.props

    return (
      <div
        className={this.className}
        ref={this.containerRef}
        data-testid={testID}
      >
        {this.children}
      </div>
    )
  }

  private get className(): string {
    const {handleOrientation, className} = this.props
    const {dragIndex} = this.state

    const isDragging = dragIndex !== NULL_DRAG

    return classnames('draggable-resizer', {
      'draggable-resizer--vertical': handleOrientation === Orientation.Vertical,
      'draggable-resizer--horizontal':
        handleOrientation === Orientation.Horizontal,
      'draggable-resizer--dragging': isDragging,
      [`${className}`]: className,
    })
  }

  private get children(): JSX.Element[] | undefined {
    const {children, handleGradient, handleOrientation, testID} = this.props
    const {dragIndex, initialized} = this.state

    if (!initialized || !React.Children.count(children)) {
      return
    }

    const panelsCount = React.Children.count(children)

    return React.Children.map(children, (child: JSX.Element, i: number) => {
      if (child.type !== DraggableResizerPanel) {
        return <></>
      }

      const isLastPanel = i === panelsCount - 1
      const dragging = i === dragIndex

      return (
        <>
          <DraggableResizerPanel
            {...child.props}
            sizePercent={this.calculatePanelSize(i)}
          />
          {!isLastPanel && (
            <DraggableResizerHandle
              {...child.props}
              dragIndex={i}
              onStartDrag={this.handleStartDrag}
              dragging={dragging}
              gradient={handleGradient}
              orientation={handleOrientation}
              testID={`${testID}--handle`}
            />
          )}
        </>
      )
    })
  }

  private handleStartDrag = (dragIndex: number): void => {
    this.setState({dragIndex})

    window.addEventListener('mousemove', this.handleDrag)
    window.addEventListener('mouseup', this.handleStopDrag)
  }

  private handleStopDrag = (): void => {
    this.setState({dragIndex: NULL_DRAG})

    window.removeEventListener('mousemove', this.handleDrag)
    window.removeEventListener('mouseup', this.handleStopDrag)
  }

  private handleDrag = (e: MouseEvent): void => {
    const {handlePositions, onChangePositions, handleOrientation} = this.props
    const {dragIndex} = this.state

    if (!this.containerRef.current) {
      return
    }

    const {
      x,
      y,
      width,
      height,
    } = this.containerRef.current.getBoundingClientRect() as DOMRect

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

  private calculatePanelSize = (panelIndex: number): number => {
    const {handlePositions} = this.props
    const prevPanelIndex = panelIndex - 1

    if (panelIndex === 0) {
      return handlePositions[panelIndex]
    }

    if (panelIndex === handlePositions.length) {
      return 1 - handlePositions[prevPanelIndex]
    }

    return handlePositions[panelIndex] - handlePositions[prevPanelIndex]
  }
}
