// Libraries
import React, {PureComponent, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Icon'

// Types
import {
  StandardProps,
  ComponentSize,
  ComponentColor,
  IconFont,
} from '../../Types'

// Styles
import './SelectableCard.scss'

interface Props extends StandardProps {
  /** Text label */
  label: string
  /** Useful for toggling selected state */
  onClick: () => void
  /** Controls font size of the card's label */
  fontSize: ComponentSize
  /** Controls the color of the selected border */
  color: ComponentColor
  /** Pass in a graphical element to render it in the center of the card */
  image?: JSX.Element
  /** Renders the card in selected state */
  selected: boolean
  /** Renders the card in disabled state */
  disabled: boolean
  /** Unique identifier for this card, is passed in to the hidden checkbox input */
  id: string
  /** Name of the form containing this card */
  formName?: string
}

export class SelectableCard extends PureComponent<Props> {
  public static readonly displayName = 'SelectableCard'

  public static defaultProps = {
    testID: 'selectable-card',
    fontSize: ComponentSize.Small,
    color: ComponentColor.Success,
    selected: false,
    disabled: false,
  }

  public render() {
    const {id, label, selected, formName, disabled, testID, style} = this.props

    return (
      <div
        id={id}
        data-testid={testID}
        style={style}
        className={this.className}
      >
        <div
          className="cf-selectable-card--container"
          onClick={this.handleClick}
        >
          <Icon
            glyph={IconFont.Checkmark}
            className="cf-selectable-card--icon"
          />
          <input
            className="cf-selectable-card--hidden-input"
            id={id}
            data-testid={`${testID}--hidden-input`}
            name={formName}
            type="checkbox"
            value={label}
            checked={selected}
            disabled={disabled}
          />
          {this.image}
          <label className="cf-selectable-card--label" htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    )
  }

  private get className(): string {
    const {selected, disabled, fontSize, color, image} = this.props

    return classnames('cf-selectable-card', {
      'cf-selectable-card__selected': selected,
      'cf-selectable-card__disabled': disabled,
      'cf-selectable-card__has-image': image,
      [`cf-selectable-card__${fontSize}`]: fontSize,
      [`cf-selectable-card__${color}`]: color,
    })
  }

  private get image(): JSX.Element | undefined {
    const {image} = this.props

    if (!image) {
      return
    }

    return <div className="cf-selectable-card--image">{image}</div>
  }

  private handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()
    const {onClick, disabled} = this.props
    if (!disabled) {
      onClick()
    }
  }
}
