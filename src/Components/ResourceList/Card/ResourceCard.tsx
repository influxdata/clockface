// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxProps} from '../../FlexBox'

// Types
import {Omit, FlexDirection, ComponentSize, AlignItems} from '../../../Types'

// Styles
import './ResourceCard.scss'

export interface ResourceCardProps
  extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
  /** Renders the card with disabled styles */
  disabled?: boolean
  /** Renders the context menu component in its designated place */
  contextMenu?: JSX.Element
  /** Controls the interaction style for the contextMenu */
  contextMenuInteraction?: 'alwaysVisible' | 'showOnHover'
  /** If true the card will highlight on mouse over */
  highlightOnHover?: boolean
}

export type ResourceCardRef = HTMLDivElement

export const ResourceCardRoot = forwardRef<ResourceCardRef, ResourceCardProps>(
  (
    {
      id,
      style,
      testID = 'resource-card',
      margin = ComponentSize.Small,
      children,
      disabled,
      direction = FlexDirection.Column,
      className,
      alignItems = AlignItems.Stretch,
      contextMenu,
      justifyContent,
      highlightOnHover = true,
      contextMenuInteraction = 'showOnHover',
    },
    ref
  ) => {
    const resourceCardClass = classnames('cf-resource-card', {
      'cf-resource-card__highlight': highlightOnHover,
      'cf-resource-card__disabled': disabled,
      'cf-resource-card__context-hover':
        contextMenuInteraction === 'showOnHover',
      [`${className}`]: className,
    })

    const contextMenuElement = contextMenu && (
      <div className="cf-resource-card--context-menu">{contextMenu}</div>
    )

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={resourceCardClass}
        data-testid={testID}
      >
        <FlexBox.FlexBox
          margin={margin}
          direction={direction}
          alignItems={alignItems}
          justifyContent={justifyContent}
          stretchToFitHeight={true}
          stretchToFitWidth={true}
        >
          {children}
        </FlexBox.FlexBox>
        {contextMenuElement}
      </div>
    )
  }
)

ResourceCardRoot.displayName = 'ResourceCard'
