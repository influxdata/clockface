// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps, InfluxColors, ComponentSize} from '../../Types'

interface Props extends StandardProps {
  /** Padding of contents */
  padding: ComponentSize
  /** Background color, should match color of Tab */
  backgroundColor: InfluxColors | string
}

export class TabContents extends Component<Props> {
  public static readonly displayName = 'TabContents'

  public static defaultProps = {
    testID: 'tabs--tab-contents',
    backgroundColor: InfluxColors.Pepper,
  }

  public render() {
    const {testID, id, children} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={this.style}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, padding} = this.props

    return classnames('cf-tabs--tab-contents', {
      [`cf-tabs--tab-contents__${padding}`]: padding,
      [`${className}`]: className,
    })
  }

  private get style(): CSSProperties | undefined {
    const {backgroundColor, style} = this.props

    return {backgroundColor, ...style}
  }
}
