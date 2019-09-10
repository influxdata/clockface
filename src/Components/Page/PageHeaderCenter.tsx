// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

// Constants
import {DEFAULT_PAGE_HEADER_CENTER_WIDTH} from '../../Constants/pageLayout'

interface Props extends StandardProps {}

export class PageHeaderCenter extends Component<Props> {
  public static readonly displayName = 'PageHeaderCenter'

  public static defaultProps = {
    widthPixels: DEFAULT_PAGE_HEADER_CENTER_WIDTH,
    testID: 'page-header--center',
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

    return classnames('cf-page-header--center', {
      'cf-page-header--no-children': noChildren,
      [`${className}`]: className,
    })
  }
}
