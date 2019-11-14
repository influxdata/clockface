// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'

// Components
import {SquareButton} from '../Button/Composed/SquareButton'

// Types
import {
  ComponentSize,
  ComponentColor,
  StandardFunctionProps,
  IconFont,
  Alignment,
} from '../../Types'

// Styles
import './PopNav.scss'
import {ClickOutside} from '../ClickOutside/ClickOutside'

export interface PopNavProps extends StandardFunctionProps {
  /** Height of bar and it's elements */
  size?: ComponentSize
  /** Sets the alignment of the menu to the button */
  align?: Alignment
  /** Controls initial visibility of the menu */
  visible?: boolean
  /** Controls the color of the trigger button */
  buttonColor?: ComponentColor
}

export type PopNavRef = HTMLDivElement

export const PopNavRoot = forwardRef<PopNavRef, PopNavProps>(
  (
    {
      id,
      style,
      children,
      className,
      buttonColor,
      visible = false,
      testID = 'pop-nav',
      align = Alignment.Right,
      size = ComponentSize.Small,
    },
    ref
  ) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(visible)

    const popNavClass = classnames('cf-pop-nav', {
      [`cf-pop-nav__${size}`]: size,
      [`cf-pop-nav__${align}`]: align,
      'cf-nav__expanded': menuVisible,
      [`${className}`]: className,
    })

    const handleToggleMenu = (): void => {
      setMenuVisible(!menuVisible)
    }

    const handleClickOutside = (): void => {
      if (menuVisible === true) {
        setMenuVisible(false)
      }
    }

    const defaultButtonColor = menuVisible
      ? ComponentColor.Secondary
      : ComponentColor.Default

    return (
      <ClickOutside onClickOutside={handleClickOutside}>
        <div
          id={id}
          ref={ref}
          style={style}
          data-testid={testID}
          className={popNavClass}
        >
          <SquareButton
            size={size}
            icon={IconFont.User}
            color={buttonColor || defaultButtonColor}
            onClick={handleToggleMenu}
            className="cf-pop-nav--trigger"
          />
          <nav className="cf-pop-nav--menu">
            <div className="cf-pop-nav--contents">{children}</div>
          </nav>
        </div>
      </ClickOutside>
    )
  }
)

PopNavRoot.displayName = 'PopNav'
