import React, {PureComponent} from 'react'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
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
    const disabledclass = disabled ? 'button-disabled' : ''
    
    return (
      <ThemeContext.Consumer>
        {(theme: string) => (
          <span className={`clockface-button ${theme}`}>
            <div
              className={`button ${disabledclass}`}
              onClick={this.handleClick}
            >
              <span>{label}</span>
            </div>
          </span>
        )}
      </ThemeContext.Consumer>
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