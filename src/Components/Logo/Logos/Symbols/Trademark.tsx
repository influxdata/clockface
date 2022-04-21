// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import '../../InfluxLogo.scss'

export interface TrademarkProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
}

export type TrademarkRef = SVGSVGElement

export const Trademark = forwardRef<TrademarkRef, TrademarkProps>(
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

    const logoStyle = {fill, marginBottom: '20px'}

    return (
      <svg
        version="1.1"
        id={id}
        data-testid={testID}
        style={logoStyle}
        x="0px"
        y="0px"
        viewBox="0 0 56 28"
        width="40"
        height="14"
        ref={ref}
      >
        <path
          className={logoClass}
          d="M4.595 13.804v-10.7H.614V.994H11v2.112H7.054v10.699H4.595Zm8.622 0L13.874.993h2.39l3.912 8.136L24.158.993h2.389l.658 12.81h-2.182l-.415-9.486-3.532 7.27h-1.731l-3.566-7.34-.381 9.557h-2.181Z"
        />
      </svg>
    )
  }
)

Trademark.displayName = 'Trademark'
