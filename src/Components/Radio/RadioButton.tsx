// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface PassedProps {
  /** id for individual radio button */
  id: string
  /** Toggles radio button active state */
  active: boolean
  /** Input value of the selected radio button */
  value: any
  /** Text or label element for radio button */
  children: JSX.Element | string | number
  /** Function to be called on radio button click */
  onClick: (value: any) => void
  /** Text to be displayed on hover tooltip */
  titleText: string
}

interface DefaultProps {
  /** Toggles disabled state */
  disabled?: boolean
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
}

type Props = PassedProps & DefaultProps

export class RadioButton extends Component<Props> {
  public static defaultProps: DefaultProps = {
    disabled: false,
    disabledTitleText: 'This option is disabled',
  }

  public render() {
    const {children, disabled} = this.props

    return (
      <button
        type="button"
        className={this.className}
        disabled={disabled}
        onClick={this.handleClick}
        title={this.title}
      >
        {children}
      </button>
    )
  }

  private get className(): string {
    const {active, disabled} = this.props

    return classnames('radio-button', {
      active,
      disabled,
    })
  }

  private get title(): string | undefined {
    const {titleText, disabledTitleText, disabled} = this.props

    if (disabled) {
      return disabledTitleText
    }

    return titleText
  }

  private handleClick = () => {
    const {onClick, value} = this.props

    onClick(value)
  }
}
