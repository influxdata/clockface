// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {
  /** Used for rendering a filter input above the list, opposite the sort headers */
  filterComponent?: JSX.Element
}

export class ResourceListHeader extends PureComponent<Props> {
  public static readonly displayName = 'ResourceListHeader'

  public static defaultProps = {
    testID: 'resource-list--header',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {this.filter}
        <div className="cf-resource-list--sorting">{children}</div>
      </div>
    )
  }

  private get filter(): JSX.Element | undefined {
    const {filterComponent} = this.props

    if (filterComponent) {
      return <div className="cf-resource-list--filter">{filterComponent}</div>
    }

    return
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-resource-list--header', {[`${className}`]: className})
  }
}
