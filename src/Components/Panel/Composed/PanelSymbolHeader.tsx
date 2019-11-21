// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './PanelSymbolHeader.scss'

// Components
import {Panel, PanelHeaderRef} from '..'

// Types
import {ComponentSize, StandardFunctionProps} from '../../../Types'

export interface PanelSymbolHeaderProps extends StandardFunctionProps {
  /** Element to display before header text (Bullet or Icon) */
  symbol?: JSX.Element
  /** Panel title */
  title?: JSX.Element
  /** Controls padding on nested header component */
  size?: ComponentSize
}

export type PanelSymbolHeaderRef = PanelHeaderRef

export const PanelSymbolHeader = forwardRef<
  PanelSymbolHeaderRef,
  PanelSymbolHeaderProps
>(
  (
    {
      id,
      style,
      title,
      testID = 'panel--symbol-header',
      symbol,
      children,
      className,
      size = ComponentSize.Small,
    },
    ref
  ) => {
    const panelSymbolHeaderClassName = classnames('cf-panel--symbol-header', {
      [`cf-panel--symbol-header__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <Panel.Header
        className={panelSymbolHeaderClassName}
        data-testid={testID}
        size={size}
        style={style}
        ref={ref}
        id={id}
      >
        <div className="cf-panel--symbol-header--title">
          <div className="cf-panel--symbol-header--symbol">{symbol}</div>
          {title}
        </div>
        {children}
      </Panel.Header>
    )
  }
)

PanelSymbolHeader.displayName = 'PanelSymbolHeader'
