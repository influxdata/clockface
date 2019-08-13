// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class IndexListHeader extends Component<Props> {
  public static readonly displayName = 'IndexListHeader'

  public static defaultProps = {
    testID: 'index-list--header',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <thead
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <tr>{children}</tr>
      </thead>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `index-list--header ${className}` : 'index-list--header'
  }
}
