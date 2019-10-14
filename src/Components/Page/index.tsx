// Libraries
import React, {Component} from 'react'

// Components
import {PageRoot, PageProps} from './Page'
import {PageTitle} from './PageTitle'
import {PageHeader} from './PageHeader'
import {PageHeaderLeft} from './PageHeaderLeft'
import {PageHeaderCenter} from './PageHeaderCenter'
import {PageHeaderRight} from './PageHeaderRight'
import {PageSubTitle} from './PageSubTitle'
import {PageContents} from './PageContents'

export class Page extends Component<PageProps> {
  public static readonly displayName = 'Page'

  public static Page = PageRoot
  public static Title = PageTitle
  public static Header = PageHeader
  public static HeaderLeft = PageHeaderLeft
  public static HeaderCenter = PageHeaderCenter
  public static HeaderRight = PageHeaderRight
  public static SubTitle = PageSubTitle
  public static Contents = PageContents

  render() {
    return <PageRoot {...this.props} />
  }
}

export {PageProps, PageRef} from './Page'
export * from './PageTitle'
export * from './PageHeader'
export * from './PageHeaderLeft'
export * from './PageHeaderCenter'
export * from './PageHeaderRight'
export * from './PageSubTitle'
export * from './PageContents'
