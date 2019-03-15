// Libraries
import React, {Component} from 'react'

interface PassedProps {
  name: string
  hex: string
  onClick: (hex: string) => void
}

interface DefaultProps {
  testID?: string
}

type Props = PassedProps & DefaultProps

export class ColorPickerSwatch extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'color-picker-swatch',
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
