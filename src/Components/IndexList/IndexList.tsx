// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './IndexList.scss'

export interface IndexListProps extends StandardFunctionProps {}

export type IndexListRef = HTMLTableElement

export const IndexListRoot = forwardRef<IndexListRef, IndexListProps>(
  ({children, className, id, style, testID = 'index-list'}, ref) => {
    const IndexListClass = className ? `index-list ${className}` : 'index-list'

    return (
      <table
        ref={ref}
        className={IndexListClass}
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
