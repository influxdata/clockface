// Libraries
import React, {Component} from 'react'

interface PassedProps {
  /** Color name */
  name: string
  /** Color hex value */
  hex: string
  /** Function to be called on color click */
  onClick: (hex: string) => void
}

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

export class ColorPickerSwatch extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'color-picker',
  }

  render() {
    const {name, hex, testID} = this.props

    return (
      <div
        className="color-picker--swatch"
        title={name}
        onClick={this.handleClick}
        data-testid={`${testID}--swatch`}
      >
        <span style={{backgroundColor: hex}} />
      </div>
    )
  }

  private handleClick = (): void => {
    this.props.onClick(this.props.hex)
  }
}
