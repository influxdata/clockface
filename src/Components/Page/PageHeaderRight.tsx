// Libraries
import React, {Component, CSSProperties} from 'react'

// Constants
import {DEFAULT_OFFSET} from '../../Constants/pageLayout'

interface Props {
  children?: JSX.Element[] | JSX.Element | string | number
  offsetPixels: number
}

export class PageHeaderRight extends Component<Props> {
  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
  }

  public render() {
    const {children} = this.props

    return (
      <div className="page-header--right" style={this.styles}>
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
