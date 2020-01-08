// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './PanelSymbolHeader.scss'

// Components
import {
  PanelHeader,
  PanelHeaderProps,
  PanelHeaderRef,
} from '../Family/PanelHeader'

// Types
import {
  ComponentSize,
  FlexDirection,
  AlignItems,
  JustifyContent,
} from '../../../Types'

export interface PanelSymbolHeaderProps extends PanelHeaderProps {
  /** Element to display before header text (Bullet or Icon) */
  symbol?: JSX.Element
  /** Panel title */
  title?: JSX.Element
}

export type PanelSymbolHeaderRef = PanelHeaderRef

export const PanelSymbolHeader = forwardRef<
  PanelSymbolHeaderRef,
  PanelSymbolHeaderProps
>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      title,
      testID = 'panel--symbol-header',
      symbol,
      children,
      className,
      direction = FlexDirection.Row,
      alignItems = AlignItems.Center,
      justifyContent = JustifyContent.SpaceBetween,
    },
    ref
  ) => {
    const panelSymbolHeaderClassName = classnames('cf-panel--symbol-header', {
      [`cf-panel--symbol-header__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <PanelHeader
        id={id}
        ref={ref}
        size={size}
        style={style}
        className={panelSymbolHeaderClassName}
        direction={direction}
        alignItems={alignItems}
        testID={testID}
        justifyContent={justifyContent}
      >
        <div className="cf-panel--symbol-header--title">
          <div className="cf-panel--symbol-header--symbol">{symbol}</div>
          {title}
        </div>
        {children}
      </PanelHeader>
    )
  }
)

PanelSymbolHeader.displayName = 'PanelSymbolHeader'
