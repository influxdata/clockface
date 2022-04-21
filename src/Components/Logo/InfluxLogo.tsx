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
import './InfluxLogo.scss'

export interface InfluxLogoProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
  /** Kubo, KuboOld  */
  logoMark?: LogoMarks | string
  /** InfluxData, InfluxDb, Telegraf  */
  baseText?: LogoBaseText | string
  /** Cloud, Enterprise, Open Source  */
  auxiliaryText?: LogoAuxiliaryText | string
  /** Registered, Trademark  */
  symbol?: LogoSymbols | string
  /** Enables a centered logo on its own line  */
  centeredLogo: boolean
}

export type InfluxLogoRef = HTMLDivElement

export const InfluxLogo = forwardRef<InfluxLogoRef, InfluxLogoProps>(
  (
    {
      fill = InfluxColors.White,
      baseText = LogoBaseText.InfluxData,
      auxiliaryText = LogoAuxiliaryText.None,
      logoMark = LogoMarks.Kubo,
      symbol = LogoSymbols.Registered,
      centeredLogo = false,
      className,
    },
    ref
  ) => {
    const logoClass = classnames('cf-logo--influx cf-logo-size', {
      [`${className}`]: className,
    })

    const getLogoMark = () => {
      switch (logoMark) {
        case 'Kubo':
          return <Kubo fill={fill} centered={centeredLogo} />
        case 'KuboOld':
          return <KuboOld fill={fill} centered={centeredLogo} />
        default:
          return null
      }
    }

    const getBaseText = () => {
      switch (baseText) {
        case 'InfluxData':
          return <InfluxData fill={fill} />
        case 'InfluxDb':
          return <InfluxDb fill={fill} />
        case 'Telegraf':
          return <Telegraf fill={fill} />
        default:
          return null
      }
    }

    const getAuxiliaryText = () => {
      switch (auxiliaryText) {
        case 'Cloud':
          return <Cloud fill={fill} />
        case 'Enterprise':
          return <Enterprise fill={fill} />
        case 'OpenSource':
          return <OpenSource fill={fill} />
        default:
          return null
      }
    }

    const getSymbol = () => {
      switch (symbol) {
        case 'Trademark':
          return <Trademark fill={fill} />
        case 'Registered':
          return <Registered fill={fill} />
        default:
          return null
      }
    }

    return (
      <div className={logoClass} ref={ref}>
        {getLogoMark()}
        {centeredLogo && <div className={'cf-flex-break'} />}
        <div className={logoClass}>
          {getBaseText()}
          {getAuxiliaryText()}
          {getSymbol()}
        </div>
      </div>
    )
  }
)

InfluxLogo.displayName = 'InfluxLogo'
