// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

interface Props {
  /** Title of the Overlay */
  title: string
  /** Passing a function into this prop will cause the Dismiss "X" to render in the header */
  onDismiss?: () => void
  /** Class name for custom styles */
  className?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class OverlayHeader extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'overlay--header',
  }

  constructor(props: Props) {
    super(props)
  }

  public render() {
    const {title, onDismiss, children, testID, className} = this.props

    const classname = classnames('overlay--header', {
      [`${className}`]: className,
    })

    return (
      <div className={classname} data-testid={testID}>
        <div className="overlay--title">{title}</div>
        {onDismiss && (
          <button
            className="overlay--dismiss"
            onClick={onDismiss}
            type="button"
          />
        )}
        {children && children}
      </div>
    )
  }
}
