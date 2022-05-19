// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxProps} from '../../FlexBox'

// Types
import {
  AlignItems,
  ComponentSize,
  FlexDirection,
  InputToggleType,
  Omit,
} from '../../../Types'

// Styles
import './ResourceCard.scss'
import {Toggle} from '../../Inputs'

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
  /** Tracks when card is selected **/
  cardSelected?: boolean
  cardSelectable?: boolean
  handleCardSelection?: (resourceId: string) => void
}

export type ResourceCardRef = HTMLDivElement

export const ResourceCardRoot = forwardRef<ResourceCardRef, ResourceCardProps>(
  (
    {
      id,
      style,
      testID = 'resource-card',
      margin = ComponentSize.Large,
      children,
      disabled,
      direction = FlexDirection.Column,
      className,
      alignItems = AlignItems.Stretch,
      contextMenu,
      justifyContent,
      highlightOnHover = true,
      contextMenuInteraction = 'alwaysVisible',
      cardSelected = false,
      cardSelectable = false,
      handleCardSelection = () => null,
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
    const selectableCardCheckboxStyle = {marginRight: '24px'}

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
          {cardSelectable && (
            <Toggle
              type={InputToggleType.Checkbox}
              onChange={handleCardSelection}
              size={ComponentSize.Small}
              checked={cardSelected}
              id={`${id}-checkbox`}
              style={selectableCardCheckboxStyle}
              className="batch-select-card-checkbox"
            />
          )}
          {children}
        </FlexBox.FlexBox>
        {contextMenuElement}
      </div>
    )
  }
)

ResourceCardRoot.displayName = 'ResourceCard'
