// Libraries
import React, {Component, CSSProperties} from 'react'

// Constants
import {DEFAULT_OFFSET} from '../../Constants/pageLayout'

interface Props {
  /** If a PageHeaderCenter is present PageHeaderLeft will automatically get assigned this value */
  offsetPixels: number
}

export class PageHeaderLeft extends Component<Props> {
  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
  }

  public render() {
    const {children} = this.props

    return (
      <div className="page-header--left" style={this.styles}>
        {children}
      </div>
    )
  }

  private get styles(): CSSProperties | undefined {
    const {offsetPixels} = this.props

    if (offsetPixels === DEFAULT_OFFSET) {
      return
    }

    return {
      flex: `1 0 calc(50% - ${offsetPixels}px)`,
    }
  }
}
