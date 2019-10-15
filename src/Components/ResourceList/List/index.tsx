// Libraries
import React, {Component} from 'react'

// Components
import {ResourceListRoot, ResourceListProps} from './ResourceList'
import {ResourceListHeader} from './ResourceListHeader'
import {ResourceListSorter} from './ResourceListSorter'
import {ResourceListBody} from './ResourceListBody'

export class ResourceList extends Component<ResourceListProps> {
  public static readonly displayName = 'ResourceList'

  public static ResourceList = ResourceListRoot
  public static Header = ResourceListHeader
  public static Sorter = ResourceListSorter
  public static Body = ResourceListBody

  render() {
    return <ResourceListRoot {...this.props} />
  }
}

export {ResourceListProps, ResourceListRef} from './ResourceList'
export * from './ResourceListHeader'
export * from './ResourceListSorter'
export * from './ResourceListBody'
