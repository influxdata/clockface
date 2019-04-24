// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

interface Props {
  /** Class name for custom styles */
  className?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class OverlayBody extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'overlay--body',
  }

  public render() {
    const {children, className, testID} = this.props

    const classname = classnames('overlay--body', {[`${className}`]: className})

    return (
      <div className={classname} data-testid={testID}>
        {children}
      </div>
    )
  }
}
