// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {DropdownItemType, StandardProps} from '../../../Types'

interface Props extends StandardProps {
  /** Controls whether the text contents of this item wrap or not */
  wrapText: boolean
}

export class DropdownItemEmpty extends Component<Props> {
  public static readonly displayName = 'DropdownItemEmpty'

  public static defaultProps = {
    checkbox: false,
    selected: false,
    type: DropdownItemType.None,
    wrapText: false,
    testID: 'dropdown-item-empty',
  }

  public render(): JSX.Element {
    const {testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {this.childElements}
      </div>
    )
  }

  private get className(): string {
    const {wrapText, className} = this.props

    return classnames('cf-dropdown-item-empty', {
      [`${className}`]: className,
      'cf-dropdown-item__wrap': wrapText,
      'cf-dropdown-item__no-wrap': !wrapText,
    })
  }

  private get childElements(): JSX.Element {
    const {children} = this.props

    return <div className="cf-dropdown-item--children">{children}</div>
  }
}
