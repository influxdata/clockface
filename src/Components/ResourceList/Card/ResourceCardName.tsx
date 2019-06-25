// Libraries
import React, {Component, MouseEvent} from 'react'

// Types
import {StandardProps} from '../../../Types'

// Styles
import './ResourceCardName.scss'

interface Props extends StandardProps {
  /** Text to display as name */
  name: string
  /** Fires when the name is clicked */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export class ResourceCardName extends Component<Props> {
  public static readonly displayName = 'ResourceCardName'

  public static defaultProps = {
    testID: 'resource-name',
  }

  public render() {
    const {name, testID, id} = this.props

    return (
      <div className="resource-name" data-testid={testID} id={id}>
        <span className="resource-name--link" onClick={this.handleClick}>
          <span>{name}</span>
        </span>
      </div>
    )
  }

  private handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {onClick} = this.props
    if (onClick) {
      onClick(e)
    }
  }
}
