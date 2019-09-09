// Libraries
import React, {Component, CSSProperties} from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import Scrollbar from 'react-scrollbars-custom'

// Styles
import './DapperScrollbars.scss'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Toggle display of tracks when no scrolling is necessary */
  removeTracksWhenNotUsed: boolean
  /** Toggle display of vertical track when no scrolling is necessary */
  removeTrackYWhenNotUsed: boolean
  /** Toggle display of horizontal track when no scrolling is necessary */
  removeTrackXWhenNotUsed: boolean
  /** Disable scrolling horizontally */
  noScrollX: boolean
  /** Disable scrolling vertically */
  noScrollY: boolean
  /** Disable scrolling */
  noScroll: boolean
  /** Gradient start color */
  thumbStartColor: string
  /** Gradient end color */
  thumbStopColor: string
  /** Hide scrollbar when not actively scrolling */
  autoHide: boolean
  /** Scroll container will grow to fit the content width and height */
  autoSize: boolean
  /** Scroll container will grow to fit the content width */
  autoSizeWidth: boolean
  /** Scroll container will grow to fit the content height */
  autoSizeHeight: boolean
  /** Vertical scroll position in pixels */
  scrollTop: number
  /** Horizontal scroll position in pixels */
  scrollLeft: number;
}

export class DapperScrollbars extends Component<Props> {
  public static readonly displayName = 'DapperScrollbars'

  public static defaultProps = {
    removeTracksWhenNotUsed: true,
    removeTrackYWhenNotUsed: true,
    removeTrackXWhenNotUsed: true,
    noScrollX: false,
    noScrollY: false,
    noScroll: false,
    thumbStartColor: '#00C9FF',
    thumbStopColor: '#9394FF',
    autoHide: false,
    autoSize: false,
    autoSizeWidth: false,
    autoSizeHeight: false,
    scrollTop: 0,
    scrollLeft: 0,
    testID: 'dapper-scrollbars',
  }

  public render() {
    const {
      removeTracksWhenNotUsed,
      removeTrackYWhenNotUsed,
      removeTrackXWhenNotUsed,
      noScrollX,
      noScrollY,
      className,
      autoHide,
      autoSize,
      autoSizeHeight,
      autoSizeWidth,
      noScroll,
      scrollTop,
      scrollLeft,
      children,
      testID,
      style,
      id,
    } = this.props

    const classname = classnames('cf-dapper-scrollbars', {
      'cf-dapper-scrollbars--autohide': autoHide,
      [`${className}`]: className,
    })

    return (
      <Scrollbar
        data-testid={testID}
        translateContentSizesToHolder={autoSize}
        translateContentSizeYToHolder={autoSizeHeight}
        translateContentSizeXToHolder={autoSizeWidth}
        className={classname}
        style={style}
        noDefaultStyles={false}
        removeTracksWhenNotUsed={removeTracksWhenNotUsed}
        removeTrackYWhenNotUsed={removeTrackYWhenNotUsed}
        removeTrackXWhenNotUsed={removeTrackXWhenNotUsed}
        noScrollX={noScrollX}
        noScrollY={noScrollY}
        noScroll={noScroll}
        wrapperProps={{className: 'cf-dapper-scrollbars--wrapper'}}
        contentProps={{className: 'cf-dapper-scrollbars--content'}}
        trackXProps={{className: 'cf-dapper-scrollbars--track-x'}}
        thumbXProps={{
          style: this.thumbXStyle,
          className: 'cf-dapper-scrollbars--thumb-x',
        }}
        trackYProps={{className: 'cf-dapper-scrollbars--track-y'}}
        thumbYProps={{
          style: this.thumbYStyle,
          className: 'cf-dapper-scrollbars--thumb-y',
        }}
        scrollTop={scrollTop}
        scrollLeft={scrollLeft}
        id={id}
        download={null}
        inlist={null}
      >
        {children}
      </Scrollbar>
    )
  }

  private get thumbXStyle(): CSSProperties {
    const {thumbStartColor, thumbStopColor} = this.props

    return {
      background: `linear-gradient(to right,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
    }
  }

  private get thumbYStyle(): CSSProperties {
    const {thumbStartColor, thumbStopColor} = this.props

    return {
      background: `linear-gradient(to bottom,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
    }
  }
}
