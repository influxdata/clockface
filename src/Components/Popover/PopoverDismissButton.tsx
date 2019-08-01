// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {SquareButton} from '../Button/Composed/SquareButton'

// Styles
import './Popover.scss'

// Types
import {
  ComponentColor,
  StandardProps,
  IconFont,
  ComponentSize,
} from '../../Types'

interface Props extends StandardProps {
  /** Button color */
  color: ComponentColor
  /** Pass the "onHide" function in here */
  onClick: any
}

export class PopoverDismissButton extends Component<Props> {
  public static readonly displayName = 'PopoverDismissButton'

  public static defaultProps = {
    color: ComponentColor.Primary,
    testID: 'popover-dismiss-button',
  }

  public render() {
    const {testID, id, color, onClick} = this.props

    return (
      <SquareButton
        icon={IconFont.Remove}
        color={color}
        className={this.className}
        testID={testID}
        id={id}
        size={ComponentSize.ExtraSmall}
        onClick={onClick}
      />
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-popover--dismiss-button', {
      [`${className}`]: className,
    })
  }
}
