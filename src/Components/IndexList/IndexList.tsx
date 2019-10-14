// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './IndexList.scss'

export interface IndexListProps extends StandardFunctionProps {}

export type IndexListRef = HTMLTableElement

export const IndexListRoot = forwardRef<IndexListRef, IndexListProps>(
  ({children, className, id, style, testID = 'index-list'}, ref) => {
    const indexListClass = classnames('cf-index-list', {
      [`${className}`]: className,
    })

    return (
      <table
        ref={ref}
        className={indexListClass}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </table>
    )
  }
)

IndexListRoot.displayName = 'IndexList'
