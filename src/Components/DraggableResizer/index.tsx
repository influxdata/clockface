// Libraries
import React, {Component} from 'react'

// Components
import {DraggableResizerRoot, DraggableResizerProps} from './DraggableResizer'
import {DraggableResizerPanel} from './DraggableResizerPanel'

export class DraggableResizer extends Component<DraggableResizerProps> {
  public static readonly displayName = 'DraggableResizer'

  public static DraggableResizer = DraggableResizerRoot
  public static Panel = DraggableResizerPanel

  render() {
    return <DraggableResizerRoot {...this.props} />
  }
}

export {DraggableResizerProps} from './DraggableResizer'
export * from './DraggableResizerPanel'
