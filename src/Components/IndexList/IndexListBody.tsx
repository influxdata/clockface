// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Rendered when no children are passed in */
  emptyState: JSX.Element
  /** Used to ensure the empty state takes up the full width of the table */
  columnCount: number
}

type Props = ComponentProps & StandardProps

export class IndexListBody extends Component<Props> {
  public static defaultProps = {
    testID: 'index-list--body',
  }

  public render() {
    const {children, columnCount, emptyState, testID} = this.props

    if (React.Children.count(children)) {
      return (
        <tbody className={this.className} data-testid={testID}>
          {children}
        </tbody>
      )
    }

    return (
      <tbody className="index-list--empty" data-testid={`${testID} empty`}>
        <tr className="index-list--empty-row">
          <td colSpan={columnCount}>
            <div className="index-list--empty-cell" data-testid="empty-state">
              {emptyState}
            </div>
          </td>
        </tr>
      </tbody>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `index-list--body ${className}` : 'index-list--body'
  }
}
