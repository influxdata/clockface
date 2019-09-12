// Libraries
import React, {PureComponent, ReactNode} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from '../../../Types'

interface Props extends StandardClassProps {
  /** Element to show when no children are passed in, useful for implementing filtering */
  emptyState: JSX.Element
}

export class ResourceListBody extends PureComponent<Props> {
  public static readonly displayName = 'ResourceListBody'

  public static defaultProps = {
    testID: 'resource-list--body',
  }

  public render() {
    const {testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
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

    return classnames('cf-resource-list--body', {[`${className}`]: className})
  }
}
