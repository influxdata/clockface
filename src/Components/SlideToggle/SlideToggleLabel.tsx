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
  public static readonly displayName = 'SlideToggleLabel'

  public static defaultProps = {
    active: true,
    size: ComponentSize.Small,
    testID: 'slide-toggle--label',
  }

  public render() {
    const {text, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        {text}
      </div>
    )
  }

  private get className(): string {
    const {className, size, active} = this.props

    return classnames('cf-slide-toggle--label', {
      [`${className}`]: className,
      [`cf-slide-toggle--label-${size}`]: size,
      'cf-slide-toggle--label__active': active,
    })
  }
}
