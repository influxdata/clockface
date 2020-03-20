// Libraries
import React, {forwardRef, CSSProperties} from 'react'
import classnames from 'classnames'
import chroma from 'chroma-js'

// Components
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'

// Utilities
import {generateInlineCSSGradient} from '../../../Utils/colors'

// Styles
import './FunnelPage.scss'

// Types
import {InfluxColors, StandardFunctionProps} from '../../../Types'

export interface FunnelPageProps extends StandardFunctionProps {
  /** Places a logo in the top left corner */
  logo?: JSX.Element
  /** Primary page background color */
  backgroundColor?: InfluxColors | string
  /** First background accent color */
  accentColorA?: InfluxColors | string
  /** Second background accent color */
  accentColorB?: InfluxColors | string
  /** Control inline styles of the outermost elemment */
  pageStyle?: CSSProperties
  /** Renders a graphic in the funnel page */
  enableGraphic?: boolean
}

export type FunnelPageRef = HTMLDivElement

export const FunnelPageRoot = forwardRef<FunnelPageRef, FunnelPageProps>(
  (
    {
      id,
      logo,
      style,
      testID = 'funnel-page',
      children,
      pageStyle,
      className,
      accentColorA = InfluxColors.Sapphire,
      accentColorB = InfluxColors.Amethyst,
      enableGraphic = false,
      backgroundColor = InfluxColors.DeepPurple,
    },
    ref
  ) => {
    const funnelPageClassName = classnames('cf-funnel-page', {
      [`${className}`]: className,
    })

    const backgroundStyle = {backgroundColor, ...pageStyle}
    const accentGradientAColors = [
      {
        position: 0,
        color: `${chroma(accentColorA).alpha(0.6)}`,
      },
      {
        position: 100,
        color: `${chroma(accentColorA).alpha(0)}`,
      },
    ]
    const accentGradientBColors = [
      {
        position: 0,
        color: `${chroma(accentColorB).alpha(0.6)}`,
      },
      {
        position: 100,
        color: `${chroma(accentColorB).alpha(0)}`,
      },
    ]
    const backgroundGradientColors = [
      {
        position: 0,
        color: `${chroma(backgroundColor).alpha(0)}`,
      },
      {
        position: 100,
        color: `${chroma(backgroundColor).alpha(0.8)}`,
      },
    ]
    const accentGradientA = generateInlineCSSGradient(
      250,
      accentGradientAColors
    )
    const accentGradientB = generateInlineCSSGradient(
      140,
      accentGradientBColors
    )
    const backgroundGradient = generateInlineCSSGradient(
      180,
      backgroundGradientColors
    )

    let backgroundGraphic = <></>

    if (enableGraphic) {
      backgroundGraphic = <div className="cf-funnel-page--graphic" />
    }

    return (
      <div
        className={funnelPageClassName}
        data-testid={testID}
        id={id}
        style={backgroundStyle}
        ref={ref}
      >
        <DapperScrollbars className="cf-funnel-page--scroll">
          <div
            className="cf-funnel-page--content"
            data-testid={`${testID}--content`}
            style={style}
          >
            {logo ? (
              <div
                className="cf-funnel-page--logo"
                data-testid={`${testID}--logo`}
              >
                {logo}
              </div>
            ) : null}
            {children}
          </div>
        </DapperScrollbars>
        {backgroundGraphic}
        <div className="cf-funnel-page--gradient" style={accentGradientA} />
        <div className="cf-funnel-page--gradient" style={accentGradientB} />
        <div className="cf-funnel-page--gradient" style={backgroundGradient} />
      </div>
    )
  }
)

FunnelPageRoot.displayName = 'FunnelPage'
