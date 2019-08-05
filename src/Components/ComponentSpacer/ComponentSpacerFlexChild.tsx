// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Optional fixed width of element */
  basis?: number
  /** Maximumn proportional width to grow until */
  grow: number
  /** Minimum proportional width to shrink until */
  shrink: number
}

export class ComponentSpacerFlexChild extends Component<Props> {
  public static readonly displayName = 'ComponentSpacerFlexChild'

  public static defaultProps = {
    testID: 'component-spacer--flex-child',
    grow: 1,
    shrink: 0,
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={this.style}
      >
        {children}
      </div>
    )
  }

  private get style(): CSSProperties {
    const {basis, grow, shrink} = this.props

    const flexBasis = basis ? `${basis}px` : '0'
    const flexShrink = shrink
    const flexGrow = grow

    return {
      flexGrow,
      flexShrink,
      flexBasis,
    }
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-component-spacer--flex-child', {
      [`${className}`]: className,
    })
  }
}
