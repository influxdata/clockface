// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'

// Styles
import './DismissButton.scss'

// Types
import {
  ComponentStatus,
  ComponentColor,
  ButtonShape,
  ComponentSize,
  ButtonType,
} from '../../../Types'
import {ButtonBaseProps} from '../Base/ButtonBase'

export interface DismissButtonProps extends ButtonBaseProps {}

export type DismissButtonRef = ButtonBaseRef

export const DismissButton = forwardRef<DismissButtonRef, DismissButtonProps>(
  (
    {
      id,
      style,
      onClick,
      tabIndex,
      titleText,
      className,
      onMouseOut,
      onMouseOver,
      onMouseEnter,
      onMouseLeave,
      active = false,
      type = ButtonType.Button,
      testID = 'dismiss-button',
      color = ComponentColor.Primary,
      size = ComponentSize.ExtraSmall,
      status = ComponentStatus.Default,
    },
    ref
  ) => {
    const SquareButtonClass = classnames('cf-dismiss-button', {
      [`${className}`]: className,
    })

    return (
      <ButtonBase
        tabIndex={tabIndex}
        titleText={titleText}
        shape={ButtonShape.Square}
        color={color}
        className={SquareButtonClass}
        testID={testID}
        id={id}
        size={size}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        status={status}
        active={active}
        type={type}
        style={style}
        ref={ref}
      >
        <div className="cf-dismiss-button--x" />
      </ButtonBase>
    )
  }
)

DismissButton.displayName = 'DismissButton'
