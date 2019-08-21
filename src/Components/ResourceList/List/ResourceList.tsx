// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {ResourceListHeader} from './ResourceListHeader'
import {ResourceListSorter} from './ResourceListSorter'
import {ResourceListBody} from './ResourceListBody'

// Types
import {StandardProps} from '../../../Types'

// Styles
import './ResourceList.scss'

interface Props extends StandardProps {}

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
