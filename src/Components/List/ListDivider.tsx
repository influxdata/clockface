// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface ListDividerProps extends StandardFunctionProps {
  /** Text to be displayed on divider, a line will be displayed if no text is provided */
  text?: string
  /** Size of this component */
  size?: ComponentSize
}

export type ListDividerRef = HTMLDivElement

export const ListDivider = forwardRef<ListDividerRef, ListDividerProps>(
  (
    {
      id,
      text,
      size = ComponentSize.Small,
      style,
      testID = 'list-divider',
      className,
    },
    ref
  ) => {
    const listDividerClass = classnames('', {
      'cf-list-divider': text,
      'cf-list-divider__thin': !text,
      [`cf-list-item__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={listDividerClass}
        data-testid={testID}
      >
        {text}
      </div>
    )
  }
)

ListDivider.displayName = 'ListDivider'
