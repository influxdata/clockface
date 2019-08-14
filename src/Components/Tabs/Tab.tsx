// Libraries
import React, {Component, MouseEvent, CSSProperties} from 'react'
import chroma from 'chroma-js'
import classnames from 'classnames'

// Types
import {StandardProps, InfluxColors, ComponentSize} from '../../Types'

interface Props extends StandardProps {
  /** Renders the tab highlighted */
  active: boolean
  /** Size of tab */
  size: ComponentSize
  /** Unique identifier of tab */
  id: string
  /** Text label of tab */
  text: string
  /** Icon to appear left of the text label */
  icon?: JSX.Element
  /** Function to call when tab is clicked, id of tab is passed in */
  onClick: (id?: string) => void
  /** If a function is passed in a dismiss button is rendered in the right of the tab */
  onDismiss?: (id?: string) => void
  /** Background color of tab, text color is determined automatically to optimize contrast */
  backgroundColor: InfluxColors | string
}

export class Tab extends Component<Props> {
  public static readonly displayName = 'Tab'

  public static defaultProps = {
    testID: 'tabs--tab',
    size: ComponentSize.Small,
    backgroundColor: InfluxColors.Pepper,
  }

  public render() {
    const {testID, id, icon, text, onDismiss} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={this.style}
        onClick={this.handleClick}
      >
        {icon}
        <span className="cf-tabs--tab-label">{text}</span>
        {onDismiss && (
          <button
            className="cf-tabs--tab-dismiss"
            onClick={this.handleDismissClick}
            type="button"
          >
            <div className="cf-tabs--tab-dismiss-circle" />
          </button>
        )}
      </div>
    )
  }

  private handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
    const {onClick, id} = this.props

    onClick(id)
  }

  private handleDismissClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    e.preventDefault()
    const {onDismiss, id} = this.props

    if (onDismiss) {
      onDismiss(id)
    }
  }

  private get className(): string {
    const {className, active, size} = this.props

    const darkText = this.textColor === InfluxColors.Kevlar

    return classnames('cf-tabs--tab', {
      [`cf-tabs--tab__${size}`]: size,
      'cf-tabs--tab__active': active,
      'cf-tabs--tab__dark-text': darkText,
      'cf-tabs--tab__light-text': !darkText,
      [`${className}`]: className,
    })
  }

  private get style(): CSSProperties | undefined {
    const {backgroundColor, style} = this.props
    const color = this.textColor

    return {backgroundColor, color, ...style}
  }

  private get textColor(): InfluxColors {
    const {backgroundColor} = this.props

    const darkContrast = chroma.contrast(
      `${backgroundColor}`,
      InfluxColors.Kevlar
    )
    const lightContrast = chroma.contrast(
      `${backgroundColor}`,
      InfluxColors.White
    )

    if (darkContrast > lightContrast) {
      return InfluxColors.Kevlar
    }
    return InfluxColors.White
  }
}
