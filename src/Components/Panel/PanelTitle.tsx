// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps, ComponentSize} from 'src/Types'

interface Props extends StandardClassProps {
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
