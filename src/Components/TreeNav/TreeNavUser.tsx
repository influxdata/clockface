// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'

// Components
import {ClickOutside} from '../ClickOutside/ClickOutside'

// Types
import {StandardFunctionProps} from '../../Types'

export interface TreeNavUserProps extends StandardFunctionProps {
  /** Username, only visible when expanded */
  username: string
  /** User's currently active team */
  team?: string
}

export type TreeNavUserRef = HTMLButtonElement

export const TreeNavUser = forwardRef<TreeNavUserRef, TreeNavUserProps>(
  (
    {id, username, style, testID = 'tree-nav--user', team, children, className},
    ref
  ) => {
    const [expandedState, setExpandedState] = useState<boolean>(false)
    const hasChildren = React.Children.count(children) > 0

    const navMenuUserClass = classnames('cf-tree-nav--user', {
      'cf-tree-nav--user__expandable': hasChildren,
      'cf-tree-nav--user__expanded': expandedState,
      [`${className}`]: className,
    })

    let childWrapper = <></>

    if (hasChildren && expandedState) {
      childWrapper = <div className="cf-tree-nav--user-menu">{children}</div>
    }

    const handleToggleMenu = (): void => {
      if (hasChildren) {
        setExpandedState(!expandedState)
      }
    }

    const handleCollapseMenu = (): void => {
      if (hasChildren) {
        setExpandedState(false)
      }
    }

    return (
      <ClickOutside onClickOutside={handleCollapseMenu}>
        <button
          type="button"
          id={id}
          ref={ref}
          style={style}
          onClick={handleToggleMenu}
          className={navMenuUserClass}
          data-testid={testID}
        >
          <div className="cf-tree-nav--user-block">
            <div className="cf-tree-nav--avatar">{team}</div>
            <div className="cf-tree-nav--avatar-label">
              <div className="cf-tree-nav--username" title={username}>
                {username}
              </div>
              <div className="cf-tree-nav--team" title={team}>
                {team}
              </div>
            </div>
          </div>
          {childWrapper}
        </button>
      </ClickOutside>
    )
  }
)

TreeNavUser.displayName = 'TreeNavUser'
