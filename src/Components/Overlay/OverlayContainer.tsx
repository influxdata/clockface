// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

interface Props {
  /** Pixel width maximum for overlay */
  maxWidth: number
  /** Class name for custom styles */
  className?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class OverlayContainer extends PureComponent<Props> {
  public static defaultProps = {
    maxWidth: 800,
    testID: 'overlay--container',
  }

  public render() {
    const {children, className, testID} = this.props

    return (
      <div
        className={classnames('overlay--container', {
          [`${className}`]: className,
        })}
        data-testid={testID}
        style={this.style}
      >
        {children}
      </div>
    )
  }

  private get style(): CSSProperties {
    const {maxWidth} = this.props

    return {maxWidth: `${maxWidth}px`}
  }
}
