// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {ResourceCardName} from 'src/Components/ResourceList/Card/ResourceCardName'
import {ResourceCardEditableName} from 'src/Components/ResourceList/Card/ResourceCardEditableName'
import {ResourceCardDescription} from 'src/Components/ResourceList/Card/ResourceCardDescription'
import {ResourceCardEditableDescription} from 'src/Components/ResourceList/Card/ResourceCardEditableDescription'

// Types
import {StandardClassProps} from 'src/Types'

// Styles
import 'src/Components/ResourceList/Card/ResourceCard.scss'

interface Props extends StandardClassProps {
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
  public static EditableDescription = ResourceCardEditableDescription

  public render() {
    const {description, labels, children, testID, name, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {this.toggle}
        <div className="cf-resource-card--contents">
          <div className="cf-resource-card--row">{name}</div>
          {description ? (
            <div className="cf-resource-card--row">{description}</div>
          ) : null}
          {this.formattedMetaData}
          {labels ? (
            <div className="cf-resource-card--row">{labels}</div>
          ) : null}
          {children ? (
            <div className="cf-resource-card--row">{children}</div>
          ) : null}
        </div>
        {this.contextMenu}
      </div>
    )
  }

  private get className(): string {
    const {disabled, className} = this.props

    return classnames('cf-resource-card', {
      'cf-resource-card__disabled': disabled,
      [`${className}`]: className,
    })
  }

  private get toggle(): JSX.Element | undefined {
    const {toggle} = this.props

    if (toggle) {
      return <div className="cf-resource-card--toggle">{toggle}</div>
    }

    return
  }

  private get formattedMetaData(): JSX.Element | undefined {
    const {metaData} = this.props

    if (metaData) {
      return (
        <div className="cf-resource-card--row cf-resource-card--meta">
          {React.Children.map(metaData, (metaItem: JSX.Element) => (
            <div
              className="cf-resource-card--meta-item"
              data-testid="cf-resource-card--meta-item"
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
      return <div className="cf-resource-card--context-menu">{contextMenu}</div>
    }

    return
  }
}
