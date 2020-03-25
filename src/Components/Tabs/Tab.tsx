// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, RenderLinkElement} from '../../Types'

export interface TabProps extends StandardFunctionProps {
  /** Renders the tab highlighted */
  active: boolean
  /** Unique identifier of tab */
  id: string
  /** Text label of tab */
  text: string
  /** Icon to appear left of the text label */
  icon?: JSX.Element
  /** Function to call when tab is clicked, id of tab is passed in */
  onClick?: (id?: string) => void
  /** If a function is passed in a dismiss button is rendered in the right of the tab */
  onDismiss?: (id?: string) => void
  /** Optional link element. Will override onClick prop */
  linkElement?: RenderLinkElement
}

export type TabRef = HTMLDivElement

export const Tab = forwardRef<TabRef, TabProps>(
  (
    {
      id,
      icon,
      text,
      style,
      testID = 'tabs--tab',
      active,
      onClick,
      className,
      onDismiss,
      linkElement,
    },
    ref
  ) => {
    const handleClick = (): void => {
      if (onClick) {
        onClick(id)
      }
    }

    const handleDismissClick = (e: MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation()
      e.preventDefault()

      if (onDismiss) {
        onDismiss(id)
      }
    }

    const tabClass = classnames('cf-tabs--tab', {
      'cf-tabs--tab__active': active,
      [`${className}`]: className,
    })

    const tabContents = (
      <>
        {icon}
        <span className="cf-tabs--tab-label">{text}</span>
        {onDismiss && (
          <button
            className="cf-tabs--tab-dismiss"
            onClick={handleDismissClick}
            type="button"
          >
            <div className="cf-tabs--tab-dismiss-circle" />
          </button>
        )}
        <div className="cf-tabs--state-indicator" />
      </>
    )

    if (linkElement) {
      return React.cloneElement(
        linkElement(tabClass),
        {'data-testid': testID},
        tabContents
      )
    }

    return (
      <div
        ref={ref}
        className={tabClass}
        data-testid={testID}
        id={id}
        style={style}
        onClick={handleClick}
      >
        {tabContents}
      </div>
    )
  }
)

Tab.displayName = 'Tab'
