// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../../Types'

interface Props extends StandardProps {
  /** Used for rendering a filter input above the list, opposite the sort headers */
  filterComponent?: JSX.Element
}

export class ResourceListHeader extends PureComponent<Props> {
  public static readonly displayName = 'ResourceListHeader'

  public static defaultProps = {
    testID: 'resource-list--header',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {this.filter}
        <div className="resource-list--sorting">{children}</div>
      </div>
    )
  }

  private get filter(): JSX.Element {
    const {filterComponent} = this.props

    if (filterComponent) {
      return <div className="resource-list--filter">{filterComponent}</div>
    }

    return <div className="resource-list--filter" />
  }

  private get className(): string {
    const {className} = this.props

    return classnames('resource-list--header', {[`${className}`]: className})
  }
}
