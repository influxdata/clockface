// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps, ComponentSize} from '../../Types'

interface Props extends StandardProps {
  /** Controls padding */
  size: ComponentSize
}

export class PanelTitle extends Component<Props> {
  public static readonly displayName = 'PanelTitle'

  public static defaultProps = {
    testID: 'panel--title',
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

    return classnames('cf-panel--title', {
      [`cf-panel--title__${size}`]: size,
      [`${className}`]: className,
    })
  }
}
