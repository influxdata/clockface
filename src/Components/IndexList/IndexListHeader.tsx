// Libraries
import React, {Component} from 'react'

export class IndexListHeader extends Component {
  public render() {
    const {children} = this.props

    return (
      <thead className="index-list--header">
        <tr>{children}</tr>
      </thead>
    )
  }
}
