// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface Props {
  /** Color name */
  name: string
  /** Color hex value */
  hex: string
  /** Function to be called on color click */
  onClick: (hex: string) => void
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class ColorPickerSwatch extends Component<Props> {
  public static defaultProps = {
    testID: 'color-picker',
  }

  render() {
    const {name, hex, testID} = this.props

    return (
      <div
        className={this.className}
        title={name}
        onClick={this.handleClick}
        data-testid={`${testID}--swatch`}
      >
        <span style={{backgroundColor: hex}} />
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('color-picker--swatch', {[`${className}`]: className})
  }

  private handleClick = (): void => {
    this.props.onClick(this.props.hex)
  }
}
