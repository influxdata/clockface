// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Text to be displayed as label */
  text: string
  /** Used to match the state of the associated SlideToggle */
  active: boolean
  /** Button size */
  size: ComponentSize
}

export class SlideToggleLabel extends Component<Props> {
  public static readonly displayName = 'SlideToggle.Label'

  public static defaultProps = {
    active: true,
    size: ComponentSize.Small,
    testID: 'slide-toggle--label',
  }

  public render() {
    const {text, testID} = this.props
    return (
      <div className={this.className} data-testid={testID}>
        {text}
      </div>
    )
  }

  private get className(): string {
    const {className, size, active} = this.props

    return classnames('slide-toggle--label', {
      [`${className}`]: className,
      [`slide-toggle--label-${size}`]: size,
      'slide-toggle--label__active': active,
    })
  }
}
