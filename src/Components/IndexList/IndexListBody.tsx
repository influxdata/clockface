// Libraries
import React, {Component} from 'react'

interface Props {
  emptyState: JSX.Element
  columnCount: number
}

export class IndexListBody extends Component<Props> {
  public render() {
    const {children, columnCount, emptyState} = this.props

    if (React.Children.count(children)) {
      return <tbody className="index-list--body">{children}</tbody>
    }

    return (
      <tbody className="index-list--empty">
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
}
