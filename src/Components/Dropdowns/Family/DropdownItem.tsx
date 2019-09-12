// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {DropdownItemType, StandardClassProps} from '../../../Types'

interface Props extends StandardClassProps {
  /** Value to be returned via the onClick function */
  value: any
  /** Whether or not the item should have selected styling */
  selected: boolean
  /** Controls which style of dropdown item is rendered */
  type: DropdownItemType
  /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
  onClick?: (value?: any) => void
  /** Controls whether the text contents of this item wrap or not */
  wrapText: boolean
}

export class DropdownItem extends Component<Props> {
  public static readonly displayName = 'DropdownItem'

  public static defaultProps = {
    checkbox: false,
    selected: false,
    type: DropdownItemType.None,
    wrapText: false,
    testID: 'dropdown-item',
  }

  public render(): JSX.Element {
    const {testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        onClick={this.handleClick}
        id={id}
        style={style}
      >
        {this.selectionIndicator}
        {this.childElements}
      </div>
    )
  }

  private get className(): string {
    const {selected, wrapText, className, type} = this.props

    return classnames('cf-dropdown-item', {
      [`cf-dropdown-item__${type}`]:
        type === DropdownItemType.Checkbox || type === DropdownItemType.Dot,
      active: selected,
      [`${className}`]: className,
      'cf-dropdown-item__wrap': wrapText,
      'cf-dropdown-item__no-wrap': !wrapText,
    })
  }

  private handleClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    const {onClick, value} = this.props

    if (onClick) {
      onClick(value)
    }
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

  private get childElements(): JSX.Element {
    const {children} = this.props

    return <div className="cf-dropdown-item--children">{children}</div>
  }
}
