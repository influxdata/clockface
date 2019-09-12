// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {DropdownItemType, StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {
  /** Whether or not the item should have selected styling */
  selected: boolean
  /** Controls which style of dropdown item is rendered */
  type: DropdownItemType
  /** Controls whether the text contents of this item wrap or not */
  wrapText: boolean
}

export class DropdownLinkItem extends Component<Props> {
  public static readonly displayName = 'DropdownLinkItem'

  public static defaultProps = {
    checkbox: false,
    selected: false,
    type: DropdownItemType.None,
    wrapText: false,
    testID: 'dropdown-item',
  }

  public render(): JSX.Element {
    const {testID, children, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {this.selectionIndicator}
        {children}
      </div>
    )
  }

  private get className(): string {
    const {selected, wrapText, className, type} = this.props

    return classnames('cf-dropdown-item cf-dropdown-link-item', {
      [`cf-dropdown-item__${type}`]:
        type === DropdownItemType.Checkbox || type === DropdownItemType.Dot,
      active: selected,
      [`${className}`]: className,
      'cf-dropdown-item__wrap': wrapText,
      'cf-dropdown-item__no-wrap': !wrapText,
    })
  }

  private get selectionIndicator(): JSX.Element | undefined {
    const {type} = this.props

    switch (type) {
      case DropdownItemType.Checkbox:
        return <div className="cf-dropdown-item--checkbox" />
      case DropdownItemType.Dot:
        return <div className="cf-dropdown-item--dot" />
      case DropdownItemType.None:
      default:
        return
    }
  }
}
