// Libraries
import React, {Component} from 'react'

// Types
import {StandardClassProps} from '../../Types'

// Constants
import {DEFAULT_OFFSET} from '../../Constants/pageLayout'

interface Props extends StandardClassProps {}

export class PageHeaderLeft extends Component<Props> {
  public static readonly displayName = 'PageHeaderLeft'

  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
    testID: 'page-header--left',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        style={style}
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
      ? `cf-page-header--left ${className}`
      : 'cf-page-header--left'
  }
}
