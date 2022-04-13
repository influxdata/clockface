// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import '../../InfluxLogo.scss'

export interface RegisteredProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
}

export type RegisteredRef = SVGSVGElement

export const Registered = forwardRef<RegisteredRef, RegisteredProps>(
  (
    {
      className = '',
      id = 'svg--influxdata',
      fill = InfluxColors.White,
      testID = 'svg--influxdata',
    },
    ref
  ) => {
    const logoClass = classnames('cf-logo', {
      [`${className}`]: className,
    })

    const logoStyle = {fill, marginBottom: '13px'}

    return (
      <svg
        version="1.1"
        id={id}
        data-testid={testID}
        style={logoStyle}
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        width="31"
        height="21"
        ref={ref}
      >
        <path
          className={logoClass}
          d="M10.82 20.775c-1.894 0-3.611-.45-5.152-1.348a10.004 10.004 0 0 1-3.66-3.66C1.11 14.227.66 12.51.66 10.615c0-1.894.45-3.611 1.348-5.152a10.003 10.003 0 0 1 3.66-3.66C7.208.904 8.926.455 10.82.455c1.926 0 3.643.45 5.152 1.348 1.54.9 2.76 2.119 3.66 3.66.898 1.54 1.348 3.258 1.348 5.152 0 1.894-.45 3.611-1.348 5.152a10.004 10.004 0 0 1-3.66 3.66c-1.509.899-3.226 1.348-5.152 1.348Zm0-1.782c1.573 0 2.97-.369 4.189-1.107a8.315 8.315 0 0 0 2.985-2.986c.739-1.284 1.108-2.712 1.108-4.285s-.37-2.985-1.108-4.237a8.203 8.203 0 0 0-2.985-3.034c-1.22-.738-2.616-1.107-4.19-1.107-1.54 0-2.936.369-4.188 1.107a8.204 8.204 0 0 0-2.986 3.034c-.738 1.252-1.107 2.664-1.107 4.237s.369 3.001 1.107 4.285a8.316 8.316 0 0 0 2.986 2.986c1.252.738 2.648 1.107 4.189 1.107ZM7.4 15.238V5.51h3.274c1.22 0 2.151.273 2.793.818.674.546 1.011 1.3 1.011 2.264a3.38 3.38 0 0 1-.433 1.685c-.289.481-.722.85-1.3 1.107l2.407 3.853h-2.022l-2.119-3.515H9.135v3.514H7.4Zm3.13-8.186H9.135v3.13h1.348c.802 0 1.364-.129 1.685-.386.321-.256.482-.658.482-1.203 0-1.028-.707-1.541-2.12-1.541Z"
        />
      </svg>
    )
  }
)

Registered.displayName = 'Registered'
