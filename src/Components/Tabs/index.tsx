// Libraries
import React, {Component} from 'react'

// Components
import {TabsRoot, TabsProps} from './Tabs'
import {Tab} from './Tab'
import {TabContents} from './TabContents'
import {TabsContainer} from './TabsContainer'

export class Tabs extends Component<TabsProps> {
  public static readonly displayName = 'Tabs'

  public static Tabs = TabsRoot
  public static Tab = Tab
  public static TabContents = TabContents
  public static Container = TabsContainer

  render() {
    return <TabsRoot {...this.props} />
  }
}

export {TabsProps, TabsRef} from './Tabs'
export * from './Tab'
export * from './TabContents'
export * from './TabsContainer'
