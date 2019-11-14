// Libraries
import React, {Component} from 'react'

// Components
import {PopNavRoot, PopNavProps} from './PopNav'
import {PopNavItem} from './PopNavItem'

export class PopNav extends Component<PopNavProps> {
  public static readonly displayName = 'PopNav'

  public static PopNav = PopNavRoot
  public static Item = PopNavItem

  render() {
    return <PopNavRoot {...this.props} />
  }
}

export {PopNavProps, PopNavRef} from './PopNav'
export * from './PopNavItem'
