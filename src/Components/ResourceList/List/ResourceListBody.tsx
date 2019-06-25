// Libraries
import React, {PureComponent, ReactNode} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../../Types'

interface Props extends StandardProps {
  /** Element to show when no children are passed in, useful for implementing filtering */
  emptyState: JSX.Element
}

export class ResourceListBody extends PureComponent<Props> {
  public static readonly displayName = 'ResourceListBody'

  public static defaultProps = {
    testID: 'resource-list--body',
  }

  public render() {
    const {testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {this.children}
      </div>
    )
  }

  private get children(): JSX.Element | ReactNode {
    const {children, emptyState} = this.props

    if (
      React.Children.count(children) === 0 ||
      children === undefined ||
      children === null
    ) {
      return emptyState
    }

    return children
  }

  private get className(): string {
    const {className} = this.props

    return classnames('resource-list--body', {[`${className}`]: className})
  }
}
