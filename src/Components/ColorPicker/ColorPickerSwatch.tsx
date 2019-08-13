// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Color name */
  name: string
  /** Color hex value */
  hex: string
  /** Function to be called on color click */
  onClick: (hex: string) => void
  /** Used to determine percentage width of parent to take up */
  swatchesPerRow: number
  /** Index - used to determine if corners are rounded or not */
  index: number
  /** Number of colors used in Color Picker, used to determine rounded corners */
  swatchesCount: number
}

export class ColorPickerSwatch extends Component<Props> {
  public static readonly displayName = 'ColorPickerSwatch'

  public static defaultProps = {
    testID: 'color-picker',
  }

  render() {
    const {name, hex, testID, id} = this.props

    return (
      <div
        className={this.className}
        title={name}
        onClick={this.handleClick}
        data-testid={`${testID}--swatch`}
        style={this.style}
        id={id}
      >
        <span style={{backgroundColor: hex}} />
      </div>
    )
  }

  private get style(): CSSProperties {
    const {swatchesPerRow, style} = this.props
    const size = `${100 / swatchesPerRow}%`

    return {
      ...style,
      width: size,
      paddingBottom: size,
    }
  }

  private get className(): string {
    const {className, index, swatchesCount, swatchesPerRow} = this.props

    return classnames('cf-color-picker--swatch', {
      [`${className}`]: className,
      'cf-color-picker--swatch__top-left': index === 0,
      'cf-color-picker--swatch__top-right': index === swatchesPerRow - 1,
      'cf-color-picker--swatch__bottom-left':
        index === swatchesCount - swatchesPerRow,
      'cf-color-picker--swatch__bottom-right': index === swatchesCount - 1,
    })
  }

  private handleClick = (): void => {
    this.props.onClick(this.props.hex)
  }
}
