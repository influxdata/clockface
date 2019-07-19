// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Columns, StandardProps} from '../../Types'

interface Props extends StandardProps {
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
}

export class FormFooter extends Component<Props> {
  public static readonly displayName = 'FormFooter'

  public static defaultProps = {
    testID: 'form--footer',
    widthXS: Columns.Twelve,
  }

  public render() {
    const {children, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
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

    return classnames('cf-form--element form--footer', {
      [`cf-col-xs-${widthXS}`]: widthXS,
      [`cf-col-sm-${widthSM}`]: widthSM,
      [`cf-col-md-${widthMD}`]: widthMD,
      [`cf-col-lg-${widthLG}`]: widthLG,
      [`cf-col-xs-offset-${offsetXS}`]: offsetXS,
      [`cf-col-sm-offset-${offsetSM}`]: offsetSM,
      [`cf-col-md-offset-${offsetMD}`]: offsetMD,
      [`cf-col-lg-offset-${offsetLG}`]: offsetLG,
      [`${className}`]: className,
    })
  }
}
