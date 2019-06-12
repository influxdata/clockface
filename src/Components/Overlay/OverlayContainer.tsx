// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Pixel width maximum for overlay */
  maxWidth: number
}

type Props = ComponentProps & StandardProps

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
