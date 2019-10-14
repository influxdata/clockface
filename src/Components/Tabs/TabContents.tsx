// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors, ComponentSize} from '../../Types'

export interface TabContentsProps extends StandardFunctionProps {
  /** Padding of contents */
  padding: ComponentSize
  /** Background color, should match color of Tab */
  backgroundColor?: InfluxColors | string
}

export type TabContentsRef = HTMLDivElement

export const TabContents = forwardRef<TabContentsRef, TabContentsProps>(
  (
    {
      id,
      style,
      padding,
      children,
      className,
      testID = 'tabs--tab-contents',
      backgroundColor = InfluxColors.Pepper,
    },
    ref
  ) => {
    const tabContentsClass = classnames('cf-tabs--tab-contents', {
      [`cf-tabs--tab-contents__${padding}`]: padding,
      [`${className}`]: className,
    })

    return (
      <div
        ref={ref}
        className={tabContentsClass}
        data-testid={testID}
        id={id}
        style={{backgroundColor, ...style}}
      >
        {children}
      </div>
    )
  }
)

TabContents.displayName = 'TabContents'
