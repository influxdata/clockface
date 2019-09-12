// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {Tab} from './Tab'
import {TabContents} from './TabContents'
import {TabsContainer} from './TabsContainer'

// Types
import {
  ComponentSize,
  StandardClassProps,
  Orientation,
  InfluxColors,
  Alignment,
} from '../../Types'

// Styles
import './Tabs.scss'

interface Props extends StandardClassProps {
  /** Layout of tabs */
  orientation: Orientation
  /** Controls whether the container renders with padding or not */
  padding?: ComponentSize
  /** Background color of tab container */
  backgroundColor?: InfluxColors | string
  /** Alignment of tabs within container (perpendicular to orientation) */
  alignment: Alignment
}

export class Tabs extends Component<Props> {
  public static readonly displayName = 'Tabs'

  public static defaultProps = {
    testID: 'tabs',
    orientation: Orientation.Horizontal,
    alignment: Alignment.Left,
  }

  public static Tab = Tab
  public static TabContents = TabContents
  public static Container = TabsContainer

  public render() {
    const {children, testID, id} = this.props

    return (
      <nav
        className={this.className}
        data-testid={testID}
        id={id}
        style={this.style}
      >
        {children}
      </nav>
    )
  }

  private get style(): CSSProperties | undefined {
    const {backgroundColor, style} = this.props

    if (backgroundColor) {
      return {
        backgroundColor,
        ...style,
      }
    }

    return style
  }

  private get className(): string {
    const {className, orientation, padding, alignment} = this.props

    return classnames('cf-tabs', {
      [`cf-tabs__align-${alignment}`]: alignment,
      [`cf-tabs__${orientation}`]: orientation,
      [`cf-tabs__padding-${padding}`]: padding,
      [`${className}`]: className,
    })
  }
}
