// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'

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
    const {name, testID, id, style} = this.props

    return (
      <div className="resource-name" data-testid={testID} id={id} style={style}>
        <span className={this.linkClassName} onClick={this.handleClick}>
          <span>{name}</span>
        </span>
      </div>
    )
  }

  private get linkClassName(): string {
    const {onClick} = this.props

    return classnames('resource-name--text', {
      'resource-name--text__link': onClick,
    })
  }

  private handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {onClick} = this.props
    if (onClick) {
      onClick(e)
    }
  }
}
