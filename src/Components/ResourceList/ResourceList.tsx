// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {ResourceListHeader} from './ResourceListHeader'
import {ResourceListSorter} from './ResourceListSorter'
import {ResourceListBody} from './ResourceListBody'
import {ResourceCard} from './ResourceCard'
import {ResourceEditableName} from './ResourceEditableName'
import {ResourceDescription} from './ResourceDescription'
import {ResourceName} from './ResourceName'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  children: JSX.Element[] | JSX.Element
}

export class ResourceList extends PureComponent<Props> {
  public static readonly displayName = 'ResourceList'

  public static defaultProps = {
    testID: 'resource-list',
  }

  public static Header = ResourceListHeader
  public static Sorter = ResourceListSorter
  public static Body = ResourceListBody
  public static Card = ResourceCard
  public static Name = ResourceName
  public static EditableName = ResourceEditableName
  public static Description = ResourceDescription

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('resource-list', {[`${className}`]: className})
  }
}
