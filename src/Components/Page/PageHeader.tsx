// Libraries
import React, {Component, ReactNode} from 'react'
import classnames from 'classnames'
import uuid from 'uuid'

// Components
import {PageHeaderLeft} from './PageHeaderLeft'
import {PageHeaderCenter} from './PageHeaderCenter'
import {PageHeaderRight} from './PageHeaderRight'

interface Props {
  /** Allows the page header to fill the width of the screen */
  fullWidth: boolean
  /** Prevents NavMenu from rendering (used in presentation mode) */
  hide: boolean
  /** Test ID for Integration Tests */
  testID: string
}

export class PageHeader extends Component<Props> {
  public static defaultProps = {
    hide: false,
    testID: 'page-header',
  }

  public static Left = PageHeaderLeft
  public static Center = PageHeaderCenter
  public static Right = PageHeaderRight

  public render() {
    const {hide, testID} = this.props

    if (hide) {
      return null
    }

    return (
      <div className={this.className} data-testid={testID}>
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
              key={uuid.v4()}
              offsetPixels={centerWidthPixels / 2}
            />
          )
        }

        if (child.type === PageHeaderRight) {
          return (
            <PageHeaderRight
              {...child.props}
              key={uuid.v4()}
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
