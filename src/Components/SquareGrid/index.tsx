// Libraries
import React, {Component} from 'react'

// Components
import {SquareGridRoot, SquareGridProps} from './SquareGrid'
import {SquareGridCard} from './SquareGridCard'

export class SquareGrid extends Component<SquareGridProps> {
  public static readonly displayName = 'SquareGrid'

  public static SquareGrid = SquareGridRoot
  public static Card = SquareGridCard

  render() {
    return <SquareGridRoot {...this.props} />
  }
}

export {SquareGridProps, SquareGridRef} from './SquareGrid'
export * from './SquareGridCard'
