// Libraries
import React, {forwardRef} from 'react'

// Components
import {LinkButton, LinkButtonProps, LinkButtonRef} from './LinkButton'

// Styles
import './CTAButton.scss'

// Types
import {ComponentSize} from '../../../Types'

export interface CTALinkButtonProps extends Omit<LinkButtonProps, 'size'> {}

export type CTALinkButtonRef = LinkButtonRef

export const CTALinkButton = forwardRef<CTALinkButtonRef, CTALinkButtonProps>(
  (
    {
      id,
      rel,
      text,
      icon,
      href,
      shape,
      color,
      style,
      status,
      target,
      active,
      tabIndex,
      titleText,
      className,
      placeIconAfterText,
      testID = 'cta-link-button',
    },
    ref
  ) => {
    return (
      <LinkButton
        id={id}
        ref={ref}
        rel={rel}
        icon={icon}
        text={text}
        href={href}
        style={style}
        shape={shape}
        color={color}
        active={active}
        target={target}
        status={status}
        tabIndex={tabIndex}
        data-testid={testID}
        titleText={titleText}
        size={ComponentSize.Large}
        placeIconAfterText={placeIconAfterText}
        className={`cf-cta-button ${className}`}
      />
    )
  }
)

CTALinkButton.displayName = 'CTALinkButton'
