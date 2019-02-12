// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface PassedProps {
  id: string
  active: boolean
  value: any
  children: JSX.Element | string | number
  onClick: (value: any) => void
  titleText: string
}

interface DefaultProps {
  disabled?: boolean
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
