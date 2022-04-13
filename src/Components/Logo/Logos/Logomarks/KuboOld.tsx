// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import '../../InfluxLogo.scss'

export interface KuboOldProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
  centered: boolean
}

export type KuboOldRef = SVGSVGElement

export const KuboOld = forwardRef<KuboOldRef, KuboOldProps>(
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

    const centeredClassName = centered ? 'cf-centered-logomark' : ''

    const logoStyle = {fill}

    return (
      <svg
        version="1.1"
        id={id}
        data-testid={testID}
        style={logoStyle}
        className={centeredClassName}
        x="0px"
        y="0px"
        viewBox="0 0 188 190"
        width="55"
        height="45"
        ref={ref}
      >
        <path
          className={logoClass}
          d="m170.612 39.292-.045-.164a22.174 22.174 0 0 0-14.297-15.23l-.122-.041L81.176.812 81.15.804a17.79 17.79 0 0 0-6.178-.782A23.469 23.469 0 0 0 60.784 5.29l-.228.186L6.632 55.48l-.093.091a21.831 21.831 0 0 0-6.112 19.88l.025.125 17.569 76.445.047.175a22.196 22.196 0 0 0 5.25 9.384 22.169 22.169 0 0 0 9.04 5.812l.112.038 70.079 21.75.02.007c2.026.634 4.147.9 6.265.787a23.566 23.566 0 0 0 14.115-5.155l.26-.208 57.778-53.535.189-.198a22.76 22.76 0 0 0 5.938-19.918l-.036-.189-16.466-71.48Zm-1.698 78.268-36.58 8.391a4.334 4.334 0 0 1-5.256-3.148l-15.512-67.511a4.325 4.325 0 0 1 3.117-5.243l36.566-8.392a4.334 4.334 0 0 1 5.256 3.149l15.556 67.511a4.143 4.143 0 0 1-3.147 5.243Zm-4.833 9.024-44.351 41.085c-1.687 1.687-2.531 1.055-1.898-1.25l9.247-29.771a7.722 7.722 0 0 1 5.466-5.032l30.482-6.93c2.304-.829 2.725.211 1.054 1.898Zm-58.854 48.211L38.813 154.26a4.396 4.396 0 0 1-2.937-5.454l11.054-35.57a4.431 4.431 0 0 1 2.113-2.635 4.432 4.432 0 0 1 3.354-.379l66.414 20.339a4.413 4.413 0 0 1 2.638 2.102 4.406 4.406 0 0 1 .374 3.352l-11.129 35.646a4.864 4.864 0 0 1-5.467 3.134ZM30.83 140.279 17.367 81.296c-.678-2.305.421-2.787 1.897-1.055l21.234 22.931a8.344 8.344 0 0 1 1.672 7.337l-9.247 29.77c-.587 2.305-1.671 2.305-2.093 0ZM18.42 65.356l50.873-47.111a4.307 4.307 0 0 1 6.13.15l25.39 27.51a4.278 4.278 0 0 1-.21 6.026L49.745 99.12a4.338 4.338 0 0 1-6.099-.211L18.21 71.382a4.31 4.31 0 0 1 .21-6.026Zm103.207 56.528c.617 2.395-.844 3.646-3.163 3.013L55.83 105.613c-2.304-.633-2.726-2.516-1.04-4.189l47.921-44.535c1.672-1.672 3.57-1.04 4.202 1.266l14.714 63.729Zm-36.16-103.64 58.011 17.764c2.319.617 2.319 1.672.075 2.305l-30.481 6.915a8.159 8.159 0 0 1-7.213-2.034L84.624 20.34c-1.882-1.883-1.46-2.727.844-2.094Z"
        />
      </svg>
    )
  }
)

KuboOld.displayName = 'KuboOld'
