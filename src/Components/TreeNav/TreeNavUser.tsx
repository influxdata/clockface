// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'
import {ClickOutside} from '../ClickOutside/ClickOutside'

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

    let caret = <></>
    let childWrapper = <></>

    if (hasChildren) {
      caret = (
        <Icon glyph={IconFont.CaretDown} className="cf-tree-nav--user-caret" />
      )
    }

    if (hasChildren && expandedState) {
      childWrapper = (
        <div className="cf-tree-nav--user-menu">
          <div className="cf-tree-nav--username" title={username}>
            {username}
          </div>
          <div className="cf-tree-nav--team" title={team}>
            {team}
          </div>
          {children}
        </div>
      )
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
        <div
          id={id}
          ref={ref}
          style={style}
          onClick={handleToggleMenu}
          className={navMenuUserClass}
          data-testid={testID}
        >
          <div className="cf-tree-nav--user-block">
            <div className="cf-tree-nav--avatar">
              <Icon glyph={IconFont.User} />
            </div>
            <div className="cf-tree-nav--avatar-label">
              <div className="cf-tree-nav--username" title={username}>
                {username}
              </div>
              <div className="cf-tree-nav--team" title={team}>
                {team}
              </div>
              {caret}
            </div>
          </div>
          {childWrapper}
        </div>
      </ClickOutside>
    )
  }
)

TreeNavUser.displayName = 'TreeNavUser'
