// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {DropdownItemType} from '../../Types'

interface Props {
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
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class DropdownItem extends Component<Props> {
  public static defaultProps = {
    checkbox: false,
    selected: false,
    type: DropdownItemType.None,
    wrapText: false,
    testID: 'dropdown-item',
  }

  public render(): JSX.Element {
    const {testID} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        onClick={this.handleClick}
      >
        {this.selectionIndicator}
        {this.childElements}
      </div>
    )
  }

  private get className(): string {
    const {selected, wrapText, className, type} = this.props

    return classnames('dropdown-item', {
      [`dropdown-item__${type}`]:
        type === DropdownItemType.Checkbox || type === DropdownItemType.Dot,
      active: selected,
      [`${className}`]: className,
      'dropdown-item__wrap': wrapText,
      'dropdown-item__no-wrap': !wrapText,
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

    if (type === DropdownItemType.Checkbox) {
      return <div className="dropdown-item--checkbox" />
    }

    if (type === DropdownItemType.Dot) {
      return <div className="dropdown-item--dot" />
    }

    return
  }

  private get childElements(): JSX.Element {
    const {children} = this.props

    return <div className="dropdown-item--children">{children}</div>
  }
}
