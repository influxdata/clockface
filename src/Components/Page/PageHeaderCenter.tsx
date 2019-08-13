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
  public static readonly displayName = 'PageHeaderCenter'

  public static defaultProps = {
    widthPixels: DEFAULT_PAGE_HEADER_CENTER_WIDTH,
    testID: 'page-header--center',
  }

  public render() {
    const {children, testID, id} = this.props

    return (
      <div
        className={this.className}
        style={this.style}
        data-testid={testID}
        id={id}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className
      ? `cf-page-header--center ${className}`
      : 'cf-page-header--center'
  }

  private get style(): CSSProperties {
    const {widthPixels, style} = this.props

    return {
      ...style,
      flex: `1 0 ${widthPixels}px`,
    }
  }
}
