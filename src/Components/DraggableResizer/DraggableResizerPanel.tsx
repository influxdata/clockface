// Libraries
import React, {Component, CSSProperties} from 'react'

interface Props {
  /** Panel will not shrink past this size (experimental, not guaranteed to work) */
  minSizePixels: number
  /** Does not have a value initially, gets passed a value by being a child of DraggableResizer */
  sizePercent?: number
}

export class DraggableResizerPanel extends Component<Props> {
  public static defaultProps = {
    minSizePixels: 0,
  }

  public render() {
    const {children} = this.props

    return (
      <div className="draggable-resizer--panel" style={this.style}>
        {children}
      </div>
    )
  }

  private get style(): CSSProperties | undefined {
    const {sizePercent, minSizePixels} = this.props

    if (sizePercent) {
      return {flex: `${sizePercent} 0 ${minSizePixels}px`}
    }

    return
  }
}
