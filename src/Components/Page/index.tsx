// Libraries
import React, {Component} from 'react'

// Components
import {PageRoot, PageProps} from './Page'
import {PageHeader} from './PageHeader'
import {PageTitle} from './PageTitle'
import {PageControlBar} from './PageControlBar'
import {PageControlBarLeft} from './PageControlBarLeft'
import {PageControlBarCenter} from './PageControlBarCenter'
import {PageControlBarRight} from './PageControlBarRight'
import {PageContents} from './PageContents'

export class Page extends Component<PageProps> {
  public static readonly displayName = 'Page'

  public static Page = PageRoot
  public static Header = PageHeader
  public static Title = PageTitle
  public static ControlBar = PageControlBar
  public static ControlBarLeft = PageControlBarLeft
  public static ControlBarCenter = PageControlBarCenter
  public static ControlBarRight = PageControlBarRight
  public static Contents = PageContents

  render() {
    return <PageRoot {...this.props} />
  }
}

export {PageProps, PageRef} from './Page'
export * from './PageHeader'
export * from './PageTitle'
export * from './PageControlBar'
export * from './PageControlBarLeft'
export * from './PageControlBarCenter'
export * from './PageControlBarRight'
export * from './PageContents'
