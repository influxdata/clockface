// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Base/Icon'

// Types
import {
  StandardFunctionProps,
  ComponentSize,
  ComponentColor,
  IconFont,
} from '../../Types'

// Styles
import './SelectableCard.scss'

export interface SelectableCardProps extends StandardFunctionProps {
  /** Unique identifier for this card, is passed in to the hidden checkbox input */
  id: string
  /** Text label */
  label: string
  /** Useful for toggling selected state */
  onClick: (id?: string) => void
  /** Controls font size of the card's label */
  fontSize?: ComponentSize
  /** Controls the color of the selected border */
  color?: ComponentColor
  /** Renders the card in selected state */
  selected?: boolean
  /** Renders the card in disabled state */
  disabled?: boolean
  /** Name of the form containing this card */
  formName?: string
  /** Customize the icon that appears in selected state */
  icon?: IconFont
}

export type SelectableCardRef = HTMLDivElement

export const SelectableCard = forwardRef<
  SelectableCardRef,
  SelectableCardProps
>(
  (
    {
      id,
      icon,
      style,
      label,
      color = ComponentColor.Success,
      testID = 'selectable-card',
      onClick,
      fontSize = ComponentSize.Small,
      selected = false,
      disabled = false,
      formName,
      children,
      className,
    },
    ref
  ) => {
    const selectableCardClass = classnames('cf-selectable-card', {
      'cf-selectable-card__selected': selected,
      'cf-selectable-card__disabled': disabled,
      [`cf-selectable-card__${fontSize}`]: fontSize,
      [`cf-selectable-card__${color}`]: color,
      [`${className}`]: className,
    })

    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
      e.preventDefault()

      if (!disabled) {
        onClick(id)
      }
    }

    const childrenExist = React.Children.count(children) > 0

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        onClick={handleClick}
        className={selectableCardClass}
        data-testid={testID}
      >
        <label className="cf-selectable-card--label" htmlFor={id}>
          {label}
        </label>
        <div className="cf-selectable-card--body">
          {childrenExist && (
            <div className="cf-selectable-card--children">{children}</div>
          )}
          {icon && <Icon glyph={icon} className="cf-selectable-card--icon" />}
          <input
            className="cf-selectable-card--hidden-input"
            id={id}
            data-testid={`${testID}--hidden-input`}
            name={formName}
            type="checkbox"
            value={label}
            defaultChecked={selected}
            disabled={disabled}
          />
        </div>
      </div>
    )
  }
)

SelectableCard.displayName = 'SelectableCard'
