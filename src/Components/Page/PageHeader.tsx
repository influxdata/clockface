// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {PageHeaderLeft} from './PageHeaderLeft'
import {PageHeaderCenter} from './PageHeaderCenter'
import {PageHeaderRight} from './PageHeaderRight'

// Types
import {StandardClassProps, ComponentSize} from '../../Types'

interface Props extends StandardClassProps {
  /** Allows the page header to fill the width of the screen */
  fullWidth: boolean
  /** Controls the gutters (left and right margins) */
  gutters: ComponentSize
}

export class PageHeader extends Component<Props> {
  public static readonly displayName = 'PageHeader'

  public static defaultProps = {
    hide: false,
    testID: 'page-header',
    gutters: ComponentSize.Medium,
  }

  public static Left = PageHeaderLeft
  public static Center = PageHeaderCenter
  public static Right = PageHeaderRight

  public render() {
    const {testID, id, style, children} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <div className={this.containerClassName}>{children}</div>
      </div>
    )
  }

  private get className(): string {
    const {className, gutters} = this.props

    return classnames('cf-page-header', {
      [`cf-page__gutter-${gutters}`]: gutters,
      [`${className}`]: className,
    })
  }

  private get containerClassName(): string {
    const {fullWidth} = this.props

    return fullWidth ? 'cf-page-header--fluid' : 'cf-page-header--fixed'
  }
}
