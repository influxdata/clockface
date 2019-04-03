// Libraries
import React, {Component, ReactNode} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

interface Props {
  /** Allows the page contents to fill the width of the screen */
  fullWidth: boolean
  /** Allows contents to scroll on overflow */
  scrollable: boolean
  /** PageContents fill the height of the screen in presentation mode */
  presentationMode?: boolean
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
    const {fullWidth, presentationMode} = this.props

    return classnames('page-contents', {
      'full-width': fullWidth,
      'presentation-mode': presentationMode,
    })
  }

  private get children(): JSX.Element | JSX.Element[] | ReactNode {
    const {fullWidth, children} = this.props

    if (fullWidth) {
      return children
    }

    return (
      <div className="page-contents--center">
        <div className="row">{children}</div>
      </div>
    )
  }
}
