// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps, ComponentSize} from '../../Types'

interface Props extends StandardProps {
  /** Controls padding */
  size: ComponentSize
}

export class PanelFooter extends Component<Props> {
  public static readonly displayName = 'PanelFooter'

  public static defaultProps = {
    testID: 'panel--footer',
    size: ComponentSize.Small,
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, size} = this.props

    return classnames('cf-panel--footer', {
      [`cf-panel--footer__${size}`]: size,
      [`${className}`]: className,
    })
  }
}
