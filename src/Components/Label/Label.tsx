// Libraries
import React, {Component, CSSProperties, MouseEvent} from 'react'
import chroma from 'chroma-js'
import classnames from 'classnames'

// Types
import {StandardClassProps, ComponentSize, InfluxColors} from 'src/Types'

// Styles
import 'src/Components/Label/Label.scss'

interface Props extends StandardClassProps {
  /** Unique value to be returned when Label is clicked */
  id: string
  /** Name of the Label, appears inside the label */
  name: string
  /** Description of Label, appears on hover */
  description: string
  /** Used to colorize the label, can be hexcode or rgba */
  color: InfluxColors | string
  /** Optional click handler */
  onClick?: (id: string) => void
  /** Optional delete handler, if passed in the delete button is rendered */
  onDelete?: (id: string) => void
  /** Size of Label */
  size: ComponentSize
}

interface State {
  isMouseOver: boolean
}

export class Label extends Component<Props, State> {
  public static readonly displayName = 'Label'

  public static defaultProps = {
    size: ComponentSize.ExtraSmall,
    testID: 'label--pill',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      isMouseOver: false,
    }
  }

  public render() {
    const {name, testID, id} = this.props

    return (
      <div
        className={this.className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={this.style}
        title={this.title}
        id={id}
      >
        <span
          className="cf-label--name"
          onClick={this.handleClick}
          data-testid={`${testID} ${name}`}
        >
          {name}
        </span>
        {this.deleteButton}
      </div>
    )
  }

  private handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    const {id, onClick} = this.props

    if (onClick) {
      e.stopPropagation()
      e.preventDefault()
      onClick(id)
    }
  }

  private handleDelete = (): void => {
    const {id, onDelete} = this.props

    if (onDelete) {
      onDelete(id)
    }
  }

  private handleMouseEnter = (): void => {
    const {onClick} = this.props

    if (onClick) {
      this.setState({isMouseOver: true})
    }
  }

  private handleMouseLeave = (): void => {
    const {onClick} = this.props

    if (onClick) {
      this.setState({isMouseOver: false})
    }
  }

  private get className(): string {
    const {size, onClick, onDelete, className} = this.props

    return classnames('cf-label', {
      [`${className}`]: className,
      [`cf-label--${size}`]: size,
      'cf-label--deletable': onDelete,
      'cf-label--clickable': onClick,
    })
  }

  private get title(): string {
    const {onClick, name, description} = this.props

    if (onClick) {
      return `Click to see all resources with the "${name}" label`
    }

    return `${description}`
  }

  private get deleteButton(): JSX.Element | undefined {
    const {onDelete, name, testID} = this.props

    if (onDelete) {
      return (
        <button
          className="cf-label--delete"
          onClick={this.handleDelete}
          type="button"
          title={`Remove label "${name}"`}
          data-testid={`${testID}--delete ${name}`}
        >
          <div
            className="cf-label--delete-x"
            style={{backgroundColor: this.textColor}}
          />
          <div
            className="cf-label--delete-x"
            style={{backgroundColor: this.textColor}}
          />
        </button>
      )
    }

    return
  }

  private get style(): CSSProperties {
    const {isMouseOver} = this.state
    const {color, onClick, style} = this.props

    let backgroundColor = color

    if (isMouseOver && onClick) {
      backgroundColor = `${chroma(color).brighten(1)}`
    }

    return {
      backgroundColor: `${backgroundColor}`,
      color: this.textColor,
      ...style,
    }
  }

  private get textColor(): string {
    const {color} = this.props

    const darkContrast = chroma.contrast(color, InfluxColors.Kevlar)
    const lightContrast = chroma.contrast(color, InfluxColors.White)

    if (darkContrast > lightContrast) {
      return InfluxColors.Kevlar
    } else {
      return InfluxColors.White
    }
  }
}
