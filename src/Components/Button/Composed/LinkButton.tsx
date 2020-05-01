// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {ButtonProps} from '../Composed/Button'
import {IconAndText} from './IconAndText'

// Types
import {
  Omit,
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  ButtonShape,
  LinkTarget,
  LinkRel,
} from '../../../Types'

// Styles
import './LinkButton.scss'

export interface LinkButtonProps
  extends Omit<
    ButtonProps,
    | 'onClick'
    | 'onMouseOver'
    | 'onMouseOut'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'type'
  > {
  /** Destination for link button */
  href: string
  /** Where to open to the link */
  target?: LinkTarget | string
  /** Describes the relationship between this document and the linked document */
  rel?: LinkRel
}

export type LinkButtonRef = HTMLAnchorElement

export const LinkButton = forwardRef<LinkButtonRef, LinkButtonProps>(
  (
    {
      id,
      rel,
      text,
      size,
      icon,
      href,
      style,
      active,
      target = LinkTarget.Self,
      tabIndex,
      titleText,
      className,
      testID = 'link-button',
      shape = ButtonShape.Default,
      color = ComponentColor.Default,
      status = ComponentStatus.Default,
      placeIconAfterText,
    },
    ref
  ) => {
    const linkButtonClass = classnames(
      `cf-button cf-button-${size} cf-button-${color}`,
      {
        'cf-button-square': shape === ButtonShape.Square,
        'cf-button-stretch': shape === ButtonShape.StretchToFit,
        'cf-button--loading': status === ComponentStatus.Loading,
        'cf-button--disabled': status === ComponentStatus.Disabled,
        active,
        [`${className}`]: className,
      }
    )

    return (
      <a
        id={id}
        ref={ref}
        rel={rel}
        href={href}
        style={style}
        title={titleText}
        color={color}
        target={target}
        tabIndex={tabIndex}
        className={linkButtonClass}
        data-testid={testID}
      >
        <IconAndText
          placeIconAfterText={placeIconAfterText}
          text={text}
          icon={icon}
        />
        {status === ComponentStatus.Loading && (
          <div
            className={`cf-button-spinner cf-button-spinner--${ComponentSize.Large}`}
          />
        )}
      </a>
    )
  }
)

LinkButton.displayName = 'LinkButton'
