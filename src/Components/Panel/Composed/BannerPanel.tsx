// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../../Icon'
import {Panel, PanelBody, PanelProps} from '..'

// Styles
import './BannerPanel.scss'

// Types
import {IconFont, ComponentSize, InfluxColors} from '../../../Types'

export interface BannerPanelProps extends PanelProps {
  /** Controls padding */
  size?: ComponentSize
  /** Icon to be displayed to the left of text */
  icon?: IconFont
  /** Color of text, leave blank to have the text color computed for optimal contrast from the background */
  textColor?: InfluxColors | string
}

export type BannerPanelRef = HTMLDivElement

export const BannerPanel = forwardRef<BannerPanelRef, BannerPanelProps>(
  (
    {
      id,
      style,
      testID = 'banner-panel',
      children,
      textColor,
      className,
      icon,
      gradient,
      size = ComponentSize.ExtraSmall,
    },
    ref
  ) => {
    const bannerPanelClassName = classnames('cf-banner-panel', {
      'cf-banner-panel--has-icon': icon,
      [`${className}`]: className,
    })

    return (
      <div ref={ref} className={bannerPanelClassName}>
        <Panel
          data-testid={testID}
          gradient={gradient}
          style={style}
          border={true}
          id={id}
        >
          <PanelBody size={size} className="cf-banner-panel--body">
            {!!icon && (
              <Icon
                style={{color: textColor}}
                glyph={icon}
                className="cf-banner-panel--icon"
              />
            )}
            <div
              style={{color: textColor}}
              className="cf-banner-panel--contents"
            >
              {children}
            </div>
          </PanelBody>
        </Panel>
      </div>
    )
  }
)

BannerPanel.displayName = 'BannerPanel'
