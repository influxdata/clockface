// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {}

export class OverlayBody extends PureComponent<Props> {
  public static readonly displayName = 'OverlayBody'

  public static defaultProps = {
    testID: 'overlay--body',
  }

  public render() {
    const {children, className, testID, id, style} = this.props

    const classname = classnames('cf-overlay--body', {
      [`${className}`]: className,
    })

    return (
      <div className={classname} data-testid={testID} id={id} style={style}>
        {children}
      </div>
    )
  }
}
