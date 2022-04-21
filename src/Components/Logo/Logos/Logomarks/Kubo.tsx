// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import '../../InfluxLogo.scss'

export interface KuboProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
  centered: boolean
}

export type KuboRef = SVGSVGElement

export const Kubo = forwardRef<KuboRef, KuboProps>(
  (
    {
      className = '',
      id = 'svg--influxdata',
      fill = InfluxColors.White,
      centered = false,
      testID = 'svg--influxdata',
    },
    ref
  ) => {
    const logoClass = classnames('cf-logo', {
      [`${className}`]: className,
    })

    const logoStyle = {fill}

    const centeredClassName = centered ? 'cf-centered-logomark' : ''

    return (
      <svg
        version="1.1"
        id={id}
        data-testid={testID}
        style={logoStyle}
        x="0px"
        y="0px"
        className={centeredClassName}
        viewBox="0 0 154 156"
        width="80"
        height="45"
        ref={ref}
      >
        <path
          className={logoClass}
          d="m114.396 107.645 36.309-8.294a4.117 4.117 0 0 0 2.708-1.906 4.088 4.088 0 0 0 .416-3.277l-15.441-66.722a4.291 4.291 0 0 0-1.963-2.631 4.319 4.319 0 0 0-3.254-.482l-36.295 8.294a4.288 4.288 0 0 0-2.62 1.955 4.26 4.26 0 0 0-.474 3.227l15.397 66.724a4.288 4.288 0 0 0 1.962 2.63 4.323 4.323 0 0 0 3.255.482ZM101.884 148.876l44.022-40.606c1.66-1.668 1.241-2.695-1.046-1.876l-30.255 6.849a7.677 7.677 0 0 0-3.353 1.795 7.633 7.633 0 0 0-2.073 3.179L100 147.64c-.627 2.278.21 2.903 1.884 1.236ZM21.567 135.623l65.922 20.296a4.841 4.841 0 0 0 3.284-.556 4.813 4.813 0 0 0 2.142-2.541l11.047-35.231a4.323 4.323 0 0 0-.372-3.313 4.365 4.365 0 0 0-2.618-2.077L35.051 92.099a4.41 4.41 0 0 0-3.33.374 4.381 4.381 0 0 0-2.097 2.604l-10.972 35.156a4.333 4.333 0 0 0 .344 3.293 4.363 4.363 0 0 0 2.571 2.097ZM.28 63.51l13.364 58.295c.419 2.278 1.495 2.278 2.078 0l9.179-29.423a8.218 8.218 0 0 0-1.66-7.252L2.164 62.467C.7 60.755-.392 61.231.281 63.51ZM51.822 1.194 1.328 47.756a4.249 4.249 0 0 0-.21 5.956l25.249 27.204a4.315 4.315 0 0 0 6.054.208L82.9 34.489a4.22 4.22 0 0 0 .21-5.956L57.905 1.342a4.274 4.274 0 0 0-3.01-1.34 4.29 4.29 0 0 0-3.074 1.192ZM100.629 106.602c2.302.626 3.752-.61 3.139-2.978L89.163 40.638c-.627-2.278-2.51-2.903-4.17-1.25L37.428 83.403c-1.675 1.653-1.256 3.514 1.031 4.14l62.17 19.059ZM125.457 18.75 67.877 1.194c-2.287-.625-2.706.208-.837 2.07l21.077 22.588a8.132 8.132 0 0 0 7.16 2.01l30.255-6.834c2.227-.626 2.227-1.668-.075-2.278Z"
        />
      </svg>
    )
  }
)

Kubo.displayName = 'Kubo'
