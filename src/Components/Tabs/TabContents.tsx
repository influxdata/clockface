// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface TabContentsProps extends StandardFunctionProps {}

export type TabContentsRef = HTMLDivElement

export const TabContents = forwardRef<TabContentsRef, TabContentsProps>(
  ({id, style, children, className, testID = 'tabs--tab-contents'}, ref) => {
    const tabContentsClass = classnames('cf-tabs--tab-contents', {
      [`${className}`]: className,
    })

    return (
      <div
        ref={ref}
        className={tabContentsClass}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }
)

TabContents.displayName = 'TabContents'
