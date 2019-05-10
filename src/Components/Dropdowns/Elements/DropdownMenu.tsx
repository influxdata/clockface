// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'

// Types
import {DropdownMenuTheme, InfluxColors} from '../../../Types'

interface Props {
  /** Pixel width of menu, if empty the menu will match the width of its parent  */
  overrideWidth?: number
  /** Pixel height after which the dropdown menu will scroll */
  maxHeight: number
  /** Test ID for Integration Tests */
  testID: string
  /** Useful when you want to apply custom positioning to the dropdown or override the appearance */
  className?: string
  /** Controls coloration of the dropdown menu and all subcomponents */
  theme: DropdownMenuTheme
  /** Disable scrolling horizontally */
  noScrollX: boolean
  /** Disable scrolling vertically */
  noScrollY: boolean
}

export class DropdownMenu extends Component<Props> {
  public static defaultProps = {
    theme: DropdownMenuTheme.Sapphire,
    testID: 'dropdown--menu',
    noScrollX: true,
    noScrollY: false,
    maxHeight: 250,
  }

  public render() {
    const {children, maxHeight, testID, noScrollX, noScrollY} = this.props

    const {thumbStartColor, thumbStopColor} = this.thumbColorsFromTheme

    return (
      <div className={this.containerClass} style={this.containerStyle}>
        <DapperScrollbars
          style={{
            maxWidth: '100%',
            maxHeight: `${maxHeight}px`,
          }}
          autoSize={true}
          autoHide={false}
          thumbStartColor={thumbStartColor}
          thumbStopColor={thumbStopColor}
          noScrollX={noScrollX}
          noScrollY={noScrollY}
        >
          <div className="dropdown--menu" data-testid={testID}>
            {children}
          </div>
        </DapperScrollbars>
      </div>
    )
  }

  private get containerClass(): string {
    const {className, theme} = this.props

    return classnames('dropdown--menu-container', {
      [`${className}`]: className,
      [`dropdown--${theme}`]: theme,
    })
  }

  private get containerStyle(): CSSProperties {
    const {overrideWidth} = this.props

    if (overrideWidth) {
      return {width: `${overrideWidth}px`}
    }

    return {width: '100%'}
  }

  private get thumbColorsFromTheme() {
    const {theme} = this.props

    switch (theme) {
      case DropdownMenuTheme.Malachite:
        return {
          thumbStartColor: InfluxColors.Wasabi,
          thumbStopColor: InfluxColors.Neutrino,
        }
      case DropdownMenuTheme.Onyx:
        return {
          thumbStartColor: InfluxColors.Laser,
          thumbStopColor: InfluxColors.Comet,
        }
      case DropdownMenuTheme.Amethyst:
        return {
          thumbStartColor: InfluxColors.Neutrino,
          thumbStopColor: InfluxColors.Moonstone,
        }
      case DropdownMenuTheme.Sapphire:
      default:
        return {
          thumbStartColor: InfluxColors.Neutrino,
          thumbStopColor: InfluxColors.Hydrogen,
        }
    }
  }
}
