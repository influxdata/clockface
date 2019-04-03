// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {PageHeader} from './PageHeader'
import {PageTitle} from './PageTitle'
import {PageContents} from './PageContents'

// Styles
import './Page.scss'

interface Props {
  /** Class name for custom styles */
  className?: string
  /** Initial value for browser page title */
  loadingTitleTag?: string
  /** Value for browser page title after component updates */
  titleTag?: string
}

export class Page extends Component<Props> {
  public static Header = PageHeader
  public static Title = PageTitle
  public static Contents = PageContents

  public componentDidMount() {
    const {loadingTitleTag} = this.props

    if (loadingTitleTag) {
      document.title = `${loadingTitleTag}`
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.titleTag !== this.props.titleTag && this.props.titleTag) {
      document.title = `${this.props.titleTag}`
    }
  }

  public render() {
    const {children} = this.props

    return <div className={this.className}>{children}</div>
  }

  private get className(): string {
    const {className} = this.props

    return classnames('page', {
      [`${className}`]: className,
    })
  }
}
