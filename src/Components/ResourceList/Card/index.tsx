// Libraries
import React, {Component} from 'react'

// Components
import {ResourceCardRoot, ResourceCardProps} from './ResourceCard'
import {ResourceCardName} from './ResourceCardName'
import {ResourceCardEditableName} from './ResourceCardEditableName'
import {ResourceCardDescription} from './ResourceCardDescription'
import {ResourceCardEditableDescription} from './ResourceCardEditableDescription'

export class ResourceCard extends Component<ResourceCardProps> {
  public static readonly displayName = 'ResourceCard'

  public static ResourceCard = ResourceCardRoot
  public static Name = ResourceCardName
  public static EditableName = ResourceCardEditableName
  public static Description = ResourceCardDescription
  public static EditableDescription = ResourceCardEditableDescription

  render() {
    return <ResourceCardRoot {...this.props} />
  }
}

export {ResourceCardProps, ResourceCardRef} from './ResourceCard'
export * from './ResourceCardName'
export * from './ResourceCardEditableName'
export * from './ResourceCardDescription'
export * from './ResourceCardEditableDescription'
