// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Columns} from '../../Types'

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
  /** Number of columns spanned when viewport width is less than 750px */
  widthXS?: Columns
}

interface PassedProps {
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

type Props = DefaultProps & PassedProps

export class FormFooter extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'form--footer',
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
    } = this.props

    return classnames('form--element form--submit', {
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
