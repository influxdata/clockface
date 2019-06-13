// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class OverlayBody extends PureComponent<Props> {
  public static readonly displayName = 'Overlay.Body'

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
