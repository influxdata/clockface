// Libraries
import React from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import './InfluxData.scss'

export interface TrademarkProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
}

export const Trademark = ({
  className = '',
  id = 'svg--influxdata',
  fill = InfluxColors.White,
  testID = 'svg--influxdata',
}) => {
  const logoClass = classnames('cf-logo--influxdata', {
    [`${className}`]: className,
  })

  const logoStyle = {fill}

  return (
    <svg
      version="1.1"
      id={id}
      data-testid={testID}
      style={logoStyle}
      x="0px"
      y="0px"
      viewBox="0 0 407 108"
      width="28"
      height="45"
    >
      <path
        className={logoClass}
        d="M4.595 13.804v-10.7H.614V.994H11v2.112H7.054v10.699H4.595Zm8.622 0L13.874.993h2.39l3.912 8.136L24.158.993h2.389l.658 12.81h-2.182l-.415-9.486-3.532 7.27h-1.731l-3.566-7.34-.381 9.557h-2.181Z"
      />
    </svg>
  )
}

Trademark.displayName = 'Trademark'
