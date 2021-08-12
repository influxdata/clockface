// Libraries
import React, {FunctionComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Omit} from '../../Types'

export interface TreeNavSubHeadingProps
  extends Omit<StandardFunctionProps, 'id'> {
  /** Label for heading */
  label: string
  /** Should the heading be rendered in lowercase */
  lowercase?: boolean
}

export const TreeNavSubHeading: FunctionComponent<TreeNavSubHeadingProps> = ({
  style,
  label,
  testID = 'tree-nav--sub-heading',
  lowercase = false,
  className,
}) => {
  const treeNavSubHeadingClass = classnames('cf-tree-nav--sub-heading', {
    [`${className}`]: className,
    'cf-tree-nav--sub-heading__lowercase': lowercase,
  })

  const labelElement = (
    <div className="cf-tree-nav--sub-heading-label" data-testid={testID}>
      {label}
    </div>
  )

  return (
    <div className={treeNavSubHeadingClass} style={style}>
      {labelElement}
    </div>
  )
}

TreeNavSubHeading.displayName = 'TreeNavSubHeading'
