// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Columns} from '../../Types'

interface PassedProps {
  /** Number of columns spanned when viewport width is greater than 750px */
  colsSM?: Columns
  /** Number of columns spanned when viewport width is greater than 1080px */
  colsMD?: Columns
  /** Number of columns spanned when viewport width is greater than 1500px */
  colsLG?: Columns
  /** Number of columns shifted when viewport width is less than 750px */
  offsetXS?: Columns
  /** Number of columns shifted when viewport width is greater than 750px */
  offsetSM?: Columns
  /** Number of columns shifted when viewport width is greater than 1080px */
  offsetMD?: Columns
  /** Number of columns shifted when viewport width is greater than 1500px */
  offsetLG?: Columns
}

interface DefaultProps {
  /** Number of columns spanned when viewport width is less than 750px */
  colsXS?: Columns
}

type Props = DefaultProps & PassedProps

export class FormFooter extends Component<Props> {
  public static defaultProps: DefaultProps = {
    colsXS: Columns.Twelve,
  }

  public render() {
    const {children} = this.props
    return <div className={this.className}>{children}</div>
  }

  private get className(): string {
    const {
      colsXS,
      colsSM,
      colsMD,
      colsLG,
      offsetXS,
      offsetSM,
      offsetMD,
      offsetLG,
    } = this.props

    return classnames('form--element form--submit', {
      [`col-xs-${colsXS}`]: colsXS,
      [`col-sm-${colsSM}`]: colsSM,
      [`col-md-${colsMD}`]: colsMD,
      [`col-lg-${colsLG}`]: colsLG,
      [`col-xs-offset-${offsetXS}`]: offsetXS,
      [`col-sm-offset-${offsetSM}`]: offsetSM,
      [`col-md-offset-${offsetMD}`]: offsetMD,
      [`col-lg-offset-${offsetLG}`]: offsetLG,
    })
  }
}
