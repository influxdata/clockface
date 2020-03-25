// Libraries
import React, {Component} from 'react'

// Components
import {TabsRoot, TabsProps} from './Tabs'
import {ResponsiveTabsRoot, ResponsiveTabsProps} from './ResponsiveTabs'
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

export class ResponsiveTabs extends Component<ResponsiveTabsProps> {
  public static readonly displayName = 'Tabs'

  public static Tabs = ResponsiveTabsRoot
  public static Tab = Tab
  public static TabContents = TabContents
  public static Container = TabsContainer

  render() {
    return <ResponsiveTabsRoot {...this.props} />
  }
}

export {TabsProps, TabsRef} from './Tabs'
export {ResponsiveTabsProps, ResponsiveTabsRef} from './ResponsiveTabs'
export * from './Tab'
export * from './TabContents'
export * from './TabsContainer'
