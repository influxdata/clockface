// Libraries
import React, {Component, ReactNode} from 'react'
import classnames from 'classnames'

// Components
import {PageHeaderLeft} from './PageHeaderLeft'
import {PageHeaderCenter} from './PageHeaderCenter'
import {PageHeaderRight} from './PageHeaderRight'

interface Props {
  /** Allows the page header to fill the width of the screen */
  fullWidth: boolean
  /** PageHeader is hidden when in presentation mode */
  presentationMode: boolean
}

export class PageHeader extends Component<Props> {
  public static defaultProps = {
    presentationMode: false,
  }

  public static Left = PageHeaderLeft
  public static Center = PageHeaderCenter
  public static Right = PageHeaderRight

  public render() {
    const {presentationMode} = this.props

    if (presentationMode) {
      return null
    }

    return (
      <div className={this.className} data-testid="page-header">
        <div className="page-header--container">
          {this.childrenWithCorrectWidths}
        </div>
      </div>
    )
  }

  private get className(): string {
    const {fullWidth} = this.props

    return classnames('page-header', {
      'full-width': fullWidth,
    })
  }

  private get childrenWithCorrectWidths(): ReactNode[] | ReactNode | undefined {
    const {children} = this.props

    let centerWidthPixels = 0

    React.Children.forEach(children, (child: JSX.Element) => {
      if (child.type === PageHeaderCenter) {
        centerWidthPixels = child.props.widthPixels
      }
    })

    let childArray = children

    if (centerWidthPixels) {
      childArray = React.Children.map(children, (child: JSX.Element) => {
        if (child.type === PageHeaderLeft) {
          return (
            <PageHeaderLeft
              {...child.props}
              offsetPixels={centerWidthPixels / 2}
            />
          )
        }

        if (child.type === PageHeaderRight) {
          return (
            <PageHeaderRight
              {...child.props}
              offsetPixels={centerWidthPixels / 2}
            />
          )
        }

        return child
      })
    }

    return childArray
  }
}
