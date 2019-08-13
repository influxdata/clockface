// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Title of the Overlay */
  title: string
  /** Passing a function into this prop will cause the Dismiss "X" to render in the header */
  onDismiss?: () => void
}

export class OverlayHeader extends PureComponent<Props> {
  public static readonly displayName = 'OverlayHeader'

  public static defaultProps = {
    testID: 'overlay--header',
  }

  constructor(props: Props) {
    super(props)
  }

  public render() {
    const {
      title,
      onDismiss,
      children,
      testID,
      className,
      id,
      style,
    } = this.props

    const classname = classnames('cf-overlay--header', {
      [`${className}`]: className,
    })

    return (
      <div className={classname} data-testid={testID} id={id} style={style}>
        <div className="cf-overlay--title">{title}</div>
        {onDismiss && (
          <button
            className="cf-overlay--dismiss"
            onClick={onDismiss}
            type="button"
          />
        )}
        {children && children}
      </div>
    )
  }
}
