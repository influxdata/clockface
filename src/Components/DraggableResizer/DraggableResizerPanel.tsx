// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Panel will not shrink past this size (experimental, not guaranteed to work) */
  minSizePixels: number
  /** Does not have a value initially, gets passed a value by being a child of DraggableResizer */
  sizePercent?: number
  /** Test ID for Integration Tests */
}

type Props = ComponentProps & StandardProps

export class DraggableResizerPanel extends Component<Props> {
  public static defaultProps = {
    minSizePixels: 0,
    testID: 'draggable-resizer--panel',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} style={this.style} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('draggable-resizer--panel', {[`${className}`]: className})
  }

  private get style(): CSSProperties | undefined {
    const {sizePercent, minSizePixels} = this.props

    if (sizePercent) {
      return {flex: `${sizePercent} 0 ${minSizePixels}px`}
    }

    return
  }
}
