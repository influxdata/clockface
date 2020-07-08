// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface ListEmptyProps extends StandardFunctionProps {
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Size of this component */
  size?: ComponentSize
}

export type ListEmptyRef = HTMLDivElement

export const ListEmpty = forwardRef<ListEmptyRef, ListEmptyProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      testID = 'list-empty',
      wrapText = false,
      children,
      className,
    },
    ref
  ) => {
    const listEmptyClass = classnames('cf-list-empty', {
      [`${className}`]: className,
      [`cf-list-item__${size}`]: size,
    })

    const listEmptyTextClass = classnames('cf-list-empty--text', {
      'cf-list-item--text__wrap': wrapText,
      'cf-list-item--text__no-wrap': !wrapText,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={listEmptyClass}
      >
        <div className={listEmptyTextClass}>{children}</div>
      </div>
    )
  }
)

ListEmpty.displayName = 'ListEmpty'
