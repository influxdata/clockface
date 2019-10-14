// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps, ComponentSize} from '../../Types'

interface Props extends StandardClassProps {
  /** Pixel width maximum for overlay */
  maxWidth: number
  /** Margins on all sides of overlay */
  margin?: ComponentSize
}

export class OverlayContainer extends PureComponent<Props> {
  public static readonly displayName = 'OverlayContainer'

  public static defaultProps = {
    maxWidth: 800,
    testID: 'overlay--container',
    margin: ComponentSize.Medium,
  }

  public render() {
    const {children, className, testID, id, margin} = this.props

    const classname = classnames('cf-overlay--container', {
      [`cf-overlay--container__${margin}`]: margin,
      [`${className}`]: className,
    })

    return (
      <div
        className={classname}
        data-testid={testID}
        style={this.style}
        id={id}
      >
        {children}
      </div>
    )
  }

  private get style(): CSSProperties {
    const {maxWidth, style} = this.props

    return {maxWidth: `${maxWidth}px`, ...style}
  }
}
