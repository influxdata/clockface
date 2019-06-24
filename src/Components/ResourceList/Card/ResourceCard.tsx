// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {ResourceCardName} from './ResourceCardName'
import {ResourceCardEditableName} from './ResourceCardEditableName'
import {ResourceCardDescription} from './ResourceCardDescription'

// Types
import {StandardProps} from '../../../Types'

// Styles
import './ResourceCard.scss'

interface Props extends StandardProps {
  /** Renders the name component in its designated place */
  name: JSX.Element
  /** Renders the card with disabled styles */
  disabled?: boolean
  /** Renders the description component in its designated place */
  description?: JSX.Element
  /** Renders the labelling components in their designated place */
  labels?: JSX.Element
  /** Renders horizontal list of meta items in their designated place  */
  metaData?: JSX.Element[]
  /** Renders the context menu component in its designated place */
  contextMenu?: JSX.Element
  /** Renders the toggle component in its designated place */
  toggle?: JSX.Element
}

export class ResourceCard extends PureComponent<Props> {
  public static readonly displayName = 'ResourceCard'

  public static defaultProps = {
    testID: 'resource-card',
  }

  public static Name = ResourceCardName
  public static EditableName = ResourceCardEditableName
  public static Description = ResourceCardDescription

  public render() {
    const {description, labels, children, testID, toggle, name} = this.props

    if (toggle) {
      return (
        <div className={this.className} data-testid={testID}>
          {this.toggle}
          <div className="resource-card--contents">
            {name}
            {description}
            {this.formattedMetaData}
            {labels}
            {children}
          </div>
          {this.contextMenu}
        </div>
      )
    }

    return (
      <div className={this.className} data-testid={testID}>
        {this.toggle}
        {name}
        {description}
        {this.formattedMetaData}
        {labels}
        {children}
        {this.contextMenu}
      </div>
    )
  }

  private get className(): string {
    const {disabled, toggle, className} = this.props

    return classnames('resource-card', {
      'resource-card__disabled': disabled,
      'resource-card__toggleable': toggle,
      [`${className}`]: className,
    })
  }

  private get toggle(): JSX.Element | undefined {
    const {toggle} = this.props

    if (toggle) {
      return <div className="resource-list--toggle">{toggle}</div>
    }

    return
  }

  private get formattedMetaData(): JSX.Element | undefined {
    const {metaData} = this.props

    if (metaData) {
      return (
        <div className="resource-list--meta">
          {React.Children.map(metaData, (metaItem: JSX.Element) => (
            <div
              className="resource-list--meta-item"
              data-testid="resource-list--meta-item"
            >
              {metaItem}
            </div>
          ))}
        </div>
      )
    }

    return
  }

  private get contextMenu(): JSX.Element | undefined {
    const {contextMenu} = this.props

    if (contextMenu) {
      return <div className="resource-list--context-menu">{contextMenu}</div>
    }

    return
  }
}
