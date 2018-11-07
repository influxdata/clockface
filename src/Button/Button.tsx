import React, {PureComponent} from 'react'
import './Button.scss'

interface Props {
  label: string
  onClick: () => void
  disabled?: boolean
}

export class Button extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    disabled: false
  }

  render() {
    const { label, disabled } = this.props
    const disabledclass = disabled ? 'button_disabled' : ''
    
    return (
      <div
        className={`button ${disabledclass}`}
        onClick={this.handleClick}
      >
        <span>{label}</span>
      </div>
    )
  }

  private handleClick = ():void => {
    const {disabled, onClick} = this.props

    if (disabled) {
      return
    }
    
    onClick()
  }
}