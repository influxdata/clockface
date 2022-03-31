// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Logo Components

import {
  Cloud,
  Enterprise,
  InfluxData,
  InfluxDb,
  Kubo,
  KuboOld,
  OpenSource,
  Registered,
  Telegraf,
  Trademark,
} from './Logos'

// Types
import {
  StandardFunctionProps,
  InfluxColors,
  LogoAuxiliaryText,
  LogoBaseText,
  LogoMarks,
  LogoSymbols,
} from '../../Types'

// Styles
import './InfluxDataLogo.scss'

export interface InfluxLogoProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
  logoMark?: LogoMarks | string
  baseText?: LogoBaseText | string
  auxiliaryText?: LogoAuxiliaryText | string
  symbol?: LogoSymbols | string
}

export type InfluxLogoRef = SVGSVGElement

export const InfluxLogo = forwardRef<InfluxLogoRef, InfluxLogoProps>(
  (
    {
      style,
      fill = InfluxColors.White,
      baseText = LogoBaseText.InfluxData,
      auxiliaryText = LogoAuxiliaryText.None,
      logoMark = LogoMarks.Kubo,
      symbol = LogoSymbols.Registered,
      className,
    },
    ref
  ) => {
    const logoClass = classnames('cf-logo--influxdata', {
      [`${className}`]: className,
    })

    const getLogoMark = () => {
      switch (logoMark) {
        case 'Kubo':
          return <Kubo />
        case 'KuboOld':
          return <KuboOld />
        default:
          return null
      }
    }

    const getBaseText = () => {
      switch (baseText) {
        case 'InfluxData':
          return <InfluxData />
        case 'InfluxDb':
          return <InfluxDb />
        case 'Telegraf':
          return <Telegraf />
        default:
          return null
      }
    }

    const getAuxiliaryText = () => {
      switch (auxiliaryText) {
        case 'Cloud':
          return <Cloud />
        case 'Enterprise':
          return <Enterprise />
        case 'OpenSource':
          return <OpenSource />
        default:
          return null
      }
    }

    const getSymbol = () => {
      switch (symbol) {
        case 'Trademark':
          return <Trademark />
        case 'Registered':
          return <Registered />
        default:
          return null
      }
    }

    return (
      <div className={logoClass}>
        {getLogoMark()}
        <div>
          {getBaseText()}
          {getAuxiliaryText()}
          {getSymbol()}
        </div>
      </div>
    )
  }
)

InfluxLogo.displayName = 'InfluxLogo'
