// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'

interface Props {
  /** id used as list key */
  id: string
  /** Item value to be used with 'on X' functions */
  value: any
  /** Whether or not the item should have selected styling */
  selected: boolean
  /** Renders a checkbox */
  checkbox: boolean
  /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
  onClick?: (value: any) => void
  /** Test ID for Integration Tests */
  testID: string
}

export class DropdownItem extends Component<Props> {
  public static defaultProps = {
    checkbox: false,
    selected: false,
    testID: 'dropdown-item',
  }

  public render(): JSX.Element {
    const {selected, checkbox, id} = this.props

    return (
      <div
        className={classnames('dropdown--item', {
          checked: selected && checkbox,
          active: selected && !checkbox,
          'multi-select--item': checkbox,
        })}
        data-testid={`dropdown--item ${id}`}
        onClick={this.handleClick}
      >
        {this.checkBox}
        {this.childElements}
        {this.dot}
      </div>
    )
  }

  private handleClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    const {onClick, value} = this.props

    if (onClick) {
      onClick(value)
    }
  }

  private get checkBox(): JSX.Element | undefined {
    const {checkbox} = this.props

    if (checkbox) {
      return <div className="dropdown-item--checkbox" />
    }

    return
  }

  private get dot(): JSX.Element | undefined {
    const {checkbox, selected} = this.props

    if (selected && !checkbox) {
      return <div className="dropdown-item--dot" />
    }

    return
  }

  private get childElements(): JSX.Element {
    const {children} = this.props

    return <div className="dropdown-item--children">{children}</div>
  }
}
