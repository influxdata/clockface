// Libraries
import React, {Component, CSSProperties} from 'react'

// Constants
import {DEFAULT_PAGE_HEADER_CENTER_WIDTH} from '../../Constants/pageLayout'

interface Props {
  /** Must have a fixed width in pixels */
  widthPixels: number
}

export class PageHeaderCenter extends Component<Props> {
  public static defaultProps = {
    widthPixels: DEFAULT_PAGE_HEADER_CENTER_WIDTH,
  }

  public render() {
    const {children} = this.props

    return (
      <div className="page-header--center" style={this.styles}>
        {children}
      </div>
    )
  }

  private get styles(): CSSProperties {
    const {widthPixels} = this.props

    return {
      flex: `1 0 ${widthPixels}px`,
    }
  }
}
