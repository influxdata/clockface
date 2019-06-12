// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {Gradients, Orientation, StandardProps} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

interface ComponentProps {
  /** Unique identifier used to update the size of this handle */
  id: string
  /** Expects a number between 0 - 1 */
  position: number
  /** Gets passed a function by being a child of DraggableResizer */
  onStartDrag: (dragIndex: number) => void
  /** Gets passed a value by being a child of DraggableResizer */
  dragging: boolean
  /** Gets passed a value by being a child of DraggableResizer */
  dragIndex: number
  /** Gradient theme for handle */
  gradient: Gradients
  /** Orientation of handle */
  orientation: Orientation
}

type Props = ComponentProps & StandardProps

export class DraggableResizerHandle extends PureComponent<Props> {
  public static defaultProps = {
    dragIndex: 9999,
    dragging: false,
    onStartDrag: () => {},
  }

  public render() {
    const {testID} = this.props

    return (
      <div
        className={this.className}
        onMouseDown={this.handleMouseDown}
        title="Drag to resize"
        data-testid={testID}
      >
        <div
          className="draggable-resizer--gradient"
          style={this.gradientStyle}
        />
      </div>
    )
  }

  private handleMouseDown = (): void => {
    const {dragIndex, onStartDrag} = this.props

    onStartDrag(dragIndex)
  }

  private get className(): string {
    const {dragging, className} = this.props

    return classnames('draggable-resizer--handle', {
      'draggable-resizer--handle-dragging': dragging,
      [`${className}`]: className,
    })
  }

  private get gradientStyle(): CSSProperties | undefined {
    const {orientation, gradient} = this.props

    if (!orientation || !gradient) {
      return
    }

    const colors = getColorsFromGradient(gradient)

    if (orientation == Orientation.Vertical) {
      return {
        background: `linear-gradient(to bottom,  ${colors.start} 0%,${
          colors.stop
        } 100%)`,
      }
    }

    if (orientation === Orientation.Horizontal) {
      return {
        background: `linear-gradient(to right,  ${colors.start} 0%,${
          colors.stop
        } 100%)`,
      }
    }

    return
  }
}
