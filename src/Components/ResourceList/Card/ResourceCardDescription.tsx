// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../../Types'

// Styles
import './ResourceCardDescription.scss'

interface Props extends StandardProps {
  /** Text to display in description */
  description: string
}

export class ResourceCardDescription extends Component<Props> {
  public static readonly displayName = 'ResourceCardDescription'

  public static defaultProps = {
    testID: 'resource-list--description',
  }

  public render() {
    const {description, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        <div className={this.previewClassName}>
          {description || 'No description'}
        </div>
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('resource-description', {[`${className}`]: className})
  }

  private get previewClassName(): string {
    const {description} = this.props

    return classnames('resource-description--preview', {
      untitled: !description,
    })
  }
}
