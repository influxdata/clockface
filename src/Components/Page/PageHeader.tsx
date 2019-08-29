// Libraries
import React, {Component, ReactNode} from 'react'
import classnames from 'classnames'
import uuid from 'uuid'

// Components
import {PageHeaderLeft} from './PageHeaderLeft'
import {PageHeaderCenter} from './PageHeaderCenter'
import {PageHeaderRight} from './PageHeaderRight'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Allows the page header to fill the width of the screen */
  fullWidth: boolean
  /** Prevents NavMenu from rendering (used in presentation mode) */
  hide: boolean
}

export class PageHeader extends Component<Props> {
  public static readonly displayName = 'PageHeader'

  public static defaultProps = {
    hide: false,
    testID: 'page-header',
  }

  public static Left = PageHeaderLeft
  public static Center = PageHeaderCenter
  public static Right = PageHeaderRight

  public render() {
    const {hide, testID, id, style} = this.props

    if (hide) {
      return null
    }

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <div className={this.containerClassName}>
          {this.childrenWithCorrectWidths}
        </div>
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-page-header', {
      [`${className}`]: className,
    })
  }

  private get containerClassName(): string {
    const {fullWidth} = this.props

    return fullWidth ? 'cf-page-header--fluid' : 'cf-page-header--fixed'
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
