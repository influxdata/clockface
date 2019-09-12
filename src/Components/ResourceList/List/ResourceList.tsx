// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {ResourceListHeader} from 'src/Components/ResourceList/List/ResourceListHeader'
import {ResourceListSorter} from 'src/Components/ResourceList/List/ResourceListSorter'
import {ResourceListBody} from 'src/Components/ResourceList/List/ResourceListBody'

// Types
import {StandardClassProps} from 'src/Types'

// Styles
import 'src/Components/ResourceList/List/ResourceList.scss'

interface Props extends StandardClassProps {}

export class ResourceList extends PureComponent<Props> {
  public static readonly displayName = 'ResourceList'

  public static defaultProps = {
    testID: 'resource-list',
  }

  public static Header = ResourceListHeader
  public static Sorter = ResourceListSorter
  public static Body = ResourceListBody

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-resource-list', {[`${className}`]: className})
  }
}
