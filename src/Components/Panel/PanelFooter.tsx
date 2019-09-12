// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps, ComponentSize} from '../../Types'

interface Props extends StandardClassProps {
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
