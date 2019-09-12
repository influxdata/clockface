// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'

// Types
import {DropdownMenuTheme, InfluxColors, StandardClassProps} from '../../../Types'

interface Props extends StandardClassProps {
  /** Pixel width of menu, if empty the menu will match the width of its parent  */
  overrideWidth?: number
  /** Pixel height after which the dropdown menu will scroll */
  maxHeight: number
  /** Controls coloration of the dropdown menu and all subcomponents */
  theme: DropdownMenuTheme
  /** Disable scrolling horizontally */
  noScrollX: boolean
  /** Disable scrolling vertically */
  noScrollY: boolean
  /** Automatically scroll to selected item when dropdown is opened */
  scrollToSelected: boolean
  /** Function to handle closing the menu when a child item is clicked */
  onCollapse?: () => void
}

export class DropdownMenu extends Component<Props> {
  public static readonly displayName = 'DropdownMenu'

  public static defaultProps = {
    theme: DropdownMenuTheme.Sapphire,
    testID: 'dropdown-menu',
    noScrollX: true,
    noScrollY: false,
    scrollToSelected: true,
    maxHeight: 250,
  }

  public render() {
    const {
      children,
      maxHeight,
      testID,
      noScrollX,
      noScrollY,
      onCollapse,
      id,
    } = this.props

    const {thumbStartColor, thumbStopColor} = this.thumbColorsFromTheme

    return (
      <div
        className={this.containerClass}
        style={this.containerStyle}
        onClick={onCollapse}
      >
        <DapperScrollbars
          style={{
            width: '100%',
            minWidth: '100%',
            maxWidth: '100%',
            maxHeight: `${maxHeight}px`,
          }}
          autoHide={false}
          autoSizeHeight={true}
          thumbStartColor={thumbStartColor}
          thumbStopColor={thumbStopColor}
          noScrollX={noScrollX}
          noScrollY={noScrollY}
          scrollTop={this.selectedPosition}
        >
          <div
            className="cf-dropdown-menu--contents"
            data-testid={testID}
            id={id}
          >
            {children}
          </div>
        </DapperScrollbars>
      </div>
    )
  }

  private get selectedPosition(): number {
    const {scrollToSelected, children} = this.props

    if (!children || !scrollToSelected) {
      return 0
    }

    const itemHeight = 24
    const items = React.Children.map(children, child =>
      _.get(child, 'props.selected', false)
    )
    const itemIndex = items.findIndex(item => item === true)

    return itemHeight * itemIndex
  }

  private get containerClass(): string {
    const {className, theme} = this.props

    return classnames('cf-dropdown-menu', {
      [`${className}`]: className,
      [`cf-dropdown__${theme}`]: theme,
    })
  }

  private get containerStyle(): CSSProperties {
    const {overrideWidth, style} = this.props

    if (overrideWidth) {
      return {width: `${overrideWidth}px`, ...style}
    }

    return {width: '100%', ...style}
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
