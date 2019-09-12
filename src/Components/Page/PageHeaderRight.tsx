// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from 'src/Types'

// Constants
import {DEFAULT_OFFSET} from 'src/Constants/pageLayout'

interface Props extends StandardClassProps {}

export class PageHeaderRight extends Component<Props> {
  public static readonly displayName = 'PageHeaderRight'

  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
    testID: 'page-header--right',
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
    const {className, children} = this.props

    const noChildren = React.Children.count(children) === 0

    return classnames('cf-page-header--right', {
      'cf-page-header--no-children': noChildren,
      [`${className}`]: className,
    })
  }
}
