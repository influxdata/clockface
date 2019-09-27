// Libraries
import React, {Component} from 'react'

// Components
import {GridRoot, GridProps} from './Grid'
import {GridColumn} from './GridColumn'
import {GridRow} from './GridRow'

export class Grid extends Component<GridProps> {
  public static readonly displayName = 'Grid'

  public static Grid = GridRoot
  public static Column = GridColumn
  public static Row = GridRow

  render() {
    return <GridRoot {...this.props} />
  }
}

export {GridProps, GridRef} from './Grid'
export * from './GridColumn'
export * from './GridRow'
