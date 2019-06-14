// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {StandardProps} from '../../Types'

// Constants
import {DEFAULT_OFFSET} from '../../Constants/pageLayout'

interface Props extends StandardProps {
  /** If a PageHeaderCenter is present PageHeaderRight will automatically get assigned this value */
  offsetPixels: number
}

export class PageHeaderRight extends Component<Props> {
  public static readonly displayName = 'Page.Header.Right'

  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
    testID: 'page-header--right',
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

    return className ? `page-header--right ${className}` : 'page-header--right'
  }

  private get style(): CSSProperties | undefined {
    const {offsetPixels} = this.props

    if (offsetPixels === DEFAULT_OFFSET) {
      return
    }

    return {
      flex: `1 0 calc(50% - ${offsetPixels}px)`,
    }
  }
}
