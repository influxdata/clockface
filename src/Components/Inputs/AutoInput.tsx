// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {Radio} from '../Radio/Radio'
import {RadioButton} from '../Radio/RadioButton'

// Types
import {
  StandardClassProps,
  ButtonShape,
  ComponentColor,
  ComponentSize,
  AutoInputMode,
} from '../../Types'

// Styles
import './AutoInput.scss'

interface Props extends StandardClassProps {
  /** Pass in a component of type "Input" */
  inputComponent: JSX.Element
  /** Fires when the radio is toggled and the mode changes */
  onChangeMode: (mode: AutoInputMode) => void
  /** Modality of radio, either "Auto" or "Custom" */
  mode: AutoInputMode
  /** Radio color */
  color: ComponentColor
  /** Radio */
  size: ComponentSize
}

export class AutoInput extends Component<Props> {
  public static readonly displayName = 'AutoInput'

  public static defaultProps = {
    color: ComponentColor.Primary,
    size: ComponentSize.Small,
    testID: 'auto-input',
    id: 'auto-input',
  }

  public render() {
    const {testID, id, size, color, mode, onChangeMode, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <div className="auto-input--radio">
          <Radio shape={ButtonShape.StretchToFit} size={size} color={color}>
            <RadioButton
              active={mode === AutoInputMode.Auto}
              id={`${id}--${AutoInputMode.Auto}`}
              testID={`${testID}--${AutoInputMode.Auto}`}
              titleText="Decide for me"
              value={AutoInputMode.Auto}
              onClick={onChangeMode}
            >
              Auto
            </RadioButton>
            <RadioButton
              active={mode === AutoInputMode.Custom}
              id={`${id}--${AutoInputMode.Custom}`}
              testID={`${testID}--${AutoInputMode.Custom}`}
              titleText="I want to specify my own value"
              value={AutoInputMode.Custom}
              onClick={onChangeMode}
            >
              Custom
            </RadioButton>
          </Radio>
        </div>
        {this.input}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('auto-input', {
      [`${className}`]: className,
    })
  }

  private get input(): JSX.Element | undefined {
    const {testID, id, mode, inputComponent} = this.props

    if (mode === AutoInputMode.Custom) {
      return (
        <div
          className="auto-input--input"
          data-testid={`${testID}--input`}
          id={`${id}--input`}
        >
          {inputComponent}
        </div>
      )
    }

    return
  }
}
