// Libraries
import React, {PureComponent, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Icon'

// Types
import {
  StandardClassProps,
  ComponentSize,
  ComponentColor,
  IconFont,
} from '../../Types'

// Styles
import './SelectableCard.scss'

interface Props extends StandardClassProps {
  /** Text label */
  label: string
  /** Useful for toggling selected state */
  onClick: (id?: string) => void
  /** Controls font size of the card's label */
  fontSize: ComponentSize
  /** Controls the color of the selected border */
  color: ComponentColor
  /** Renders the card in selected state */
  selected: boolean
  /** Renders the card in disabled state */
  disabled: boolean
  /** Unique identifier for this card, is passed in to the hidden checkbox input */
  id: string
  /** Name of the form containing this card */
  formName?: string
  /** Customize the icon that appears in selected state */
  icon?: IconFont
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
        onClick={this.handleClick}
      >
        <label className="cf-selectable-card--label" htmlFor={id}>
          {label}
        </label>
        <div className="cf-selectable-card--body">
          {this.children}
          {this.icon}
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

  private get className(): string {
    const {selected, disabled, fontSize, color} = this.props

    return classnames('cf-selectable-card', {
      'cf-selectable-card__selected': selected,
      'cf-selectable-card__disabled': disabled,
      [`cf-selectable-card__${fontSize}`]: fontSize,
      [`cf-selectable-card__${color}`]: color,
    })
  }

  private get children(): JSX.Element | undefined {
    const {children} = this.props

    if (!children) {
      return
    }

    return <div className="cf-selectable-card--children">{children}</div>
  }

  private get icon(): JSX.Element | undefined {
    const {icon} = this.props

    if (!icon) {
      return
    }

    return <Icon glyph={icon} className="cf-selectable-card--icon" />
  }

  private handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()

    const {onClick, disabled, id} = this.props
    if (!disabled) {
      onClick(id)
    }
  }
}
