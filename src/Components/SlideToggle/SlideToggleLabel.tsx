// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Text to be displayed as label */
  text: string
  /** Used to match the state of the associated SlideToggle */
  active: boolean
  /** Button size */
  size: ComponentSize
  /** Controls text wrapping */
  wrapText: boolean
}

export class SlideToggleLabel extends Component<Props> {
  public static readonly displayName = 'SlideToggleLabel'

  public static defaultProps = {
    active: true,
    size: ComponentSize.Small,
    testID: 'slide-toggle--label',
    wrapText: false,
  }

  public render() {
    const {text, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {text}
      </div>
    )
  }

  private get className(): string {
    const {className, size, active, wrapText} = this.props

    return classnames('cf-slide-toggle--label', {
      [`${className}`]: className,
      'cf-slide-toggle--label__wrap': wrapText,
      [`cf-slide-toggle--label-${size}`]: size,
      'cf-slide-toggle--label__active': active,
    })
  }
}
