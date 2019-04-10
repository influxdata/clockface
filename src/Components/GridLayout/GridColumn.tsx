// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Columns} from '../../Types'

interface Props {
  /** Number of columns spanned when viewport width is less than 750px */
  widthXS: Columns
  /** Number of columns spanned when viewport width is greater than 750px */
  widthSM?: Columns
  /** Number of columns spanned when viewport width is greater than 1080px */
  widthMD?: Columns
  /** Number of columns spanned when viewport width is greater than 1500px */
  widthLG?: Columns
  /** Number of columns shifted when viewport width is less than 750px */
  offsetXS?: Columns
  /** Number of columns shifted when viewport width is greater than 750px */
  offsetSM?: Columns
  /** Number of columns shifted when viewport width is greater than 1080px */
  offsetMD?: Columns
  /** Number of columns shifted when viewport width is greater than 1500px */
  offsetLG?: Columns
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class GridColumn extends Component<Props> {
  public static defaultProps = {
    testID: 'grid--column',
    widthXS: Columns.Twelve,
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {
      widthXS,
      widthSM,
      widthMD,
      widthLG,
      offsetXS,
      offsetSM,
      offsetMD,
      offsetLG,
      className,
    } = this.props

    return classnames('grid--column', {
      [`${className}`]: className,
      [`col-xs-${widthXS}`]: widthXS,
      [`col-sm-${widthSM}`]: widthSM,
      [`col-md-${widthMD}`]: widthMD,
      [`col-lg-${widthLG}`]: widthLG,
      [`col-xs-offset-${offsetXS}`]: offsetXS,
      [`col-sm-offset-${offsetSM}`]: offsetSM,
      [`col-md-offset-${offsetMD}`]: offsetMD,
      [`col-lg-offset-${offsetLG}`]: offsetLG,
    })
  }
}
