// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Allows the page contents to fill the width of the screen */
  fullWidth: boolean
  /** Allows contents to scroll on overflow */
  scrollable: boolean
  /** If scrollable is true, this toggles whether the scrollbar is always visible */
  autoHideScrollbar: boolean
}

export class PageContents extends Component<Props> {
  public static readonly displayName = 'PageContents'

  public static defaultProps = {
    fullHeight: false,
    scrollable: false,
    testID: 'page-contents',
    autoHideScrollbar: false,
  }

  public render() {
    const {
      scrollable,
      testID,
      id,
      style,
      children,
      fullWidth,
      autoHideScrollbar,
    } = this.props

    let kids = children

    if (fullWidth) {
      kids = <div className="cf-page-contents__fluid">{kids}</div>
    } else {
      kids = <div className="cf-page-contents__fixed">{kids}</div>
    }

    if (scrollable) {
      kids = (
        <DapperScrollbars
          className={this.className}
          autoHide={autoHideScrollbar}
          testID={testID}
          id={id}
          style={style}
        >
          {kids}
        </DapperScrollbars>
      )
    } else {
      kids = (
        <div
          className={this.className}
          data-testid={testID}
          id={id}
          style={style}
        >
          {kids}
        </div>
      )
    }

    return kids
  }

  private get className(): string {
    const {className, scrollable} = this.props

    return classnames('cf-page-contents', {
      'cf-page-contents__no-scroll': !scrollable,
      [`${className}`]: className,
    })
  }
}
