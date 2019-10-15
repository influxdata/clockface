// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

// Styles
import './ResourceCard.scss'

export interface ResourceCardProps extends StandardFunctionProps {
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

export type ResourceCardRef = HTMLDivElement

export const ResourceCardRoot = forwardRef<ResourceCardRef, ResourceCardProps>(
  (
    {
      id,
      name,
      style,
      labels,
      testID = 'resource-card',
      toggle,
      children,
      disabled,
      metaData,
      className,
      description,
      contextMenu,
    },
    ref
  ) => {
    const resourceCardClass = classnames('cf-resource-card', {
      'cf-resource-card__disabled': disabled,
      [`${className}`]: className,
    })

    const toggleElement = toggle && (
      <div className="cf-resource-card--toggle">{toggle}</div>
    )
    const contextMenuElement = contextMenu && (
      <div className="cf-resource-card--context-menu">{contextMenu}</div>
    )
    const descriptionElement = description && (
      <div className="cf-resource-card--row">{description}</div>
    )
    const labelsElement = labels && (
      <div className="cf-resource-card--row">{labels}</div>
    )
    const childElement = children && (
      <div className="cf-resource-card--row">{children}</div>
    )

    const metaDataElement = metaData && (
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

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={resourceCardClass}
        data-testid={testID}
      >
        {toggleElement}
        <div className="cf-resource-card--contents">
          <div className="cf-resource-card--row">{name}</div>
          {descriptionElement}
          {metaDataElement}
          {labelsElement}
          {childElement}
        </div>
        {contextMenuElement}
      </div>
    )
  }
)

ResourceCardRoot.displayName = 'ResourceCard'
