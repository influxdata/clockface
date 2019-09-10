// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps, ComponentSize} from '../../Types'

interface Props extends StandardProps {
  /** Controls padding */
  size: ComponentSize
}

export class PanelBody extends Component<Props> {
  public static readonly displayName = 'PanelBody'

  public static defaultProps = {
    testID: 'panel--body',
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

    return classnames('cf-panel--body', {
      [`cf-panel--body__${size}`]: size,
      [`${className}`]: className,
    })
  }
}
