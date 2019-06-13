// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {StandardProps} from '../../Types'

// Constants
import {DEFAULT_PAGE_HEADER_CENTER_WIDTH} from '../../Constants/pageLayout'

interface Props extends StandardProps {
  /** Must have a fixed width in pixels */
  widthPixels: number
}

export class PageHeaderCenter extends Component<Props> {
  public static readonly displayName = 'Page.Header.Center'

  public static defaultProps = {
    widthPixels: DEFAULT_PAGE_HEADER_CENTER_WIDTH,
    testID: 'page-header--center',
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

    return className
      ? `page-header--center ${className}`
      : 'page-header--center'
  }

  private get style(): CSSProperties {
    const {widthPixels} = this.props

    return {
      flex: `1 0 ${widthPixels}px`,
    }
  }
}
