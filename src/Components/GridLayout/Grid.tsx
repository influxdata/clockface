// Libraries
import React, {Component} from 'react'

// Components
import {GridRow} from './GridRow'
import {GridColumn} from './GridColumn'

// Styles
import './Grid.scss'

interface Props {
  /** Test ID for Integration Tests */
  testID?: string
}

export class Grid extends Component<Props> {
  public static defaultProps: Props = {
    testID: 'grid',
  }

  public static Row = GridRow
  public static Column = GridColumn

  public render() {
    const {children, testID} = this.props
    return (
      <div className="grid--container" data-testid={testID}>
        {children}
      </div>
    )
  }
}
