// Libraries
import React, {Component} from 'react'

interface Props {
  /** Test ID for Integration Tests */
  testID: string
}

export class GridRow extends Component<Props> {
  public static defaultProps = {
    testID: 'grid--row',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className="grid--row" data-testid={testID}>
        {children}
      </div>
    )
  }
}
