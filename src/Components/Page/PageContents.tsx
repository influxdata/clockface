// Libraries
import React, {Component, ReactNode} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

interface Props {
  /** Allows the page contents to fill the width of the screen */
  fullWidth: boolean
  /** Allows contents to fill the full height of the screen (used in presentation mode) */
  fullHeight?: boolean
  /** Allows contents to scroll on overflow */
  scrollable: boolean
}

export class PageContents extends Component<Props> {
  public render() {
    const {scrollable} = this.props

    if (scrollable) {
      return (
        <DapperScrollbars
          className={this.className}
          autoHide={false}
          autoSize={false}
        >
          <div className="page-contents--padding">{this.children}</div>
        </DapperScrollbars>
      )
    }

    return (
      <div className={this.className}>
        <div className="page-contents--padding">{this.children}</div>
      </div>
    )
  }

  private get className(): string {
    const {fullWidth, fullHeight} = this.props

    return classnames('page-contents', {
      'full-width': fullWidth,
      'full-height': fullHeight,
    })
  }

  private get children(): JSX.Element | JSX.Element[] | ReactNode {
    const {fullWidth, children} = this.props

    if (fullWidth) {
      return children
    }

    return <div className="page-contents--container">{children}</div>
  }
}
