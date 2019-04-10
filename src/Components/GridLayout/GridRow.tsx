// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface Props {
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class GridRow extends Component<Props> {
  public static defaultProps = {
    testID: 'grid--row',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('grid--row', {[`${className}`]: className})
  }
}
