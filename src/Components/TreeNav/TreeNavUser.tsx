// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'

// Types
import {StandardFunctionProps, IconFont} from '../../Types'

export interface TreeNavUserProps extends StandardFunctionProps {
  /** Username, only visible when expanded */
  username: string
  /** User's currently active team */
  team?: string
}

export type TreeNavUserRef = HTMLDivElement

export const TreeNavUser = forwardRef<TreeNavUserRef, TreeNavUserProps>(
  ({id, username, style, testID = 'tree-nav--user', team, className}, ref) => {
    const navMenuUserClass = classnames('cf-tree-nav--user', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={navMenuUserClass}
        data-testid={testID}
      >
        <div className="cf-tree-nav--user-block">
          <div className="cf-tree-nav--avatar">
            <Icon glyph={IconFont.User} />
          </div>
          <div className="cf-tree-nav--avatar-label">
            <div className="cf-tree-nav--username">{username}</div>
            <div className="cf-tree-nav--team">{team}</div>
            <Icon
              glyph={IconFont.CaretDown}
              className="cf-tree-nav--user-caret"
            />
          </div>
        </div>
      </div>
    )
  }
)

TreeNavUser.displayName = 'TreeNavUser'
