// Libraries
import React, {FunctionComponent, useRef, useState, useEffect} from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import Scrollbar from 'react-scrollbars-custom'

// Styles
import './DapperScrollbars.scss'

// Types
import {StandardFunctionProps} from '../../Types'

interface DapperScrollbarsProps extends StandardFunctionProps {
  /** Toggle display of tracks when no scrolling is necessary */
  removeTracksWhenNotUsed?: boolean
  /** Toggle display of vertical track when no scrolling is necessary */
  removeTrackYWhenNotUsed?: boolean
  /** Toggle display of horizontal track when no scrolling is necessary */
  removeTrackXWhenNotUsed?: boolean
  /** Disable scrolling horizontally */
  noScrollX?: boolean
  /** Disable scrolling vertically */
  noScrollY?: boolean
  /** Disable scrolling */
  noScroll?: boolean
  /** Gradient start color */
  thumbStartColor?: string
  /** Gradient end color */
  thumbStopColor?: string
  /** Hide scrollbar when not actively scrolling */
  autoHide?: boolean
  /** Scroll container will grow to fit the content width and height */
  autoSize?: boolean
  /** Scroll container will grow to fit the content width */
  autoSizeWidth?: boolean
  /** Scroll container will grow to fit the content height */
  autoSizeHeight?: boolean
  /** Vertical scroll position in pixels */
  scrollTop?: number
  /** Horizontal scroll position in pixels */
  scrollLeft?: number
}

export const DapperScrollbars: FunctionComponent<DapperScrollbarsProps> = ({
  id,
  style,
  children,
  className,
  scrollTop = 0,
  scrollLeft = 0,
  autoHide = false,
  autoSize = false,
  noScroll = false,
  noScrollX = false,
  noScrollY = false,
  autoSizeWidth = false,
  autoSizeHeight = false,
  thumbStopColor = '#9394FF',
  thumbStartColor = '#00C9FF',
  testID = 'dapper-scrollbars',
  removeTracksWhenNotUsed = true,
  removeTrackYWhenNotUsed = true,
  removeTrackXWhenNotUsed = true,
}) => {
  const scrollEl = useRef<any>(null)
  const [scrollTopPos, setScrollTopPos] = useState<number>(Number(scrollTop))
  const [scrollLeftPos, setScrollLeftPos] = useState<number>(Number(scrollLeft))

  useEffect(() => {
    setScrollTopPos(Number(scrollTop))
    setScrollLeftPos(Number(scrollLeft))
  }, [scrollTop, scrollLeft])

  const dapperScrollbarsClass = classnames('cf-dapper-scrollbars', {
    'cf-dapper-scrollbars--autohide': autoHide,
    [`${className}`]: className,
  })

  const thumbXStyle = {
    background: `linear-gradient(to right,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
  }

  const thumbYStyle = {
    background: `linear-gradient(to bottom,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
  }

  const handleOnScroll = () => {
    setScrollTopPos(scrollEl.current.scrollTop)
    setScrollLeftPos(scrollEl.current.scrollLeft)
  }

  return (
    <Scrollbar
      ref={scrollEl}
      onScroll={handleOnScroll}
      data-testid={testID}
      translateContentSizesToHolder={autoSize}
      translateContentSizeYToHolder={autoSizeHeight}
      translateContentSizeXToHolder={autoSizeWidth}
      className={dapperScrollbarsClass}
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
        style: thumbXStyle,
        className: 'cf-dapper-scrollbars--thumb-x',
      }}
      trackYProps={{className: 'cf-dapper-scrollbars--track-y'}}
      thumbYProps={{
        style: thumbYStyle,
        className: 'cf-dapper-scrollbars--thumb-y',
      }}
      scrollTop={scrollTopPos}
      scrollLeft={scrollLeftPos}
      id={id}
      download={null}
      inlist={null}
    >
      {children}
    </Scrollbar>
  )
}

DapperScrollbars.displayName = 'DapperScrollbars'
