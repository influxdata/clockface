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

interface ComponentProps {}

type Props = ComponentProps & StandardProps

export class Grid extends Component<Props> {
  public static defaultProps = {
    testID: 'grid',
  }

  public static Row = GridRow
  public static Column = GridColumn

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

    return classnames('grid--container', {[`${className}`]: className})
  }
}
