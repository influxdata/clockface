// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {GridRow} from './GridRow'
import {GridColumn} from './GridColumn'

// Types
import {StandardProps} from '../../Types'

// Styles
import './Grid.scss'

interface Props extends StandardProps {}

export class Grid extends Component<Props> {
  public static readonly displayName = 'Grid'

  public static defaultProps = {
    testID: 'grid',
  }

  public static Row = GridRow
  public static Column = GridColumn

  public render() {
    const {children, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-grid--container', {[`${className}`]: className})
  }
}
