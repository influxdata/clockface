// Libraries
import React, {PureComponent, ReactChild} from 'react'
import classnames from 'classnames'

// Components
import {DismissButton} from '../Button/Composed/DismissButton'
import {Popover, PopoverProps, PopoverDefaultProps} from './Popover'

// Styles
import './TextPopover.scss'

// Types
import {Omit, ComponentColor} from '../../Types'

interface Props extends Omit<PopoverProps, 'contents'> {
  /** Text contents of popover dialog */
  text: ReactChild
  /** Determines whether to show the dismiss button in the dialog */
  showDismissButton?: boolean
  /** Color of dismiss button */
  dismissButtonColor: ComponentColor
}

export class TextPopover extends PureComponent<Props> {
  public static readonly displayName = 'TextPopover'

  public static defaultProps = {
    ...PopoverDefaultProps,
    testID: 'text-popover',
    showDismissButton: false,
    dismissButtonColor: ComponentColor.Primary,
  }

  public render() {
    const {
      testID,
      children,
      id,
      style,
      color,
      showEvent,
      hideEvent,
      distanceFromTrigger,
      position,
      type,
      visible,
      disabled,
      showDismissButton,
      dismissButtonColor,
      text,
    } = this.props

    return (
      <Popover
        testID={testID}
        id={id}
        style={style}
        color={color}
        showEvent={showEvent}
        hideEvent={hideEvent}
        distanceFromTrigger={distanceFromTrigger}
        position={position}
        type={type}
        visible={visible}
        disabled={disabled}
        contents={onHide => {
          if (showDismissButton) {
            return (
              <div className={this.className}>
                <DismissButton onClick={onHide} color={dismissButtonColor} />
                {text}
              </div>
            )
          }

          return <div className={this.className}>{text}</div>
        }}
      >
        {children}
      </Popover>
    )
  }

  private get className(): string {
    const {showDismissButton} = this.props

    return classnames('cf-text-popover', {
      'cf-text-popover__dismissable': showDismissButton,
    })
  }
}
