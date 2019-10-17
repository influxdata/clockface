// Libraries
import React, {FunctionComponent} from 'react'
import chroma, {Color} from 'chroma-js'

// Styles
import './ThemeGenerator.scss'

type ThemeType = 'dark' | 'light'

export interface Theme {
  type: ThemeType
  whiteTint?: string
  blackTint?: string
  goldenHour: boolean
  primary: string
  secondary: string
  success: string
  warning: string
  danger: string
}

interface ThemeGeneratorProps {
  theme: Theme
}

export const ThemeGenerator: FunctionComponent<ThemeGeneratorProps> = ({
  theme,
}) => {
  const {
    whiteTint,
    blackTint,
    primary,
    secondary,
    success,
    warning,
    danger,
    goldenHour,
  } = theme

  const goldHighlighter = (color: string): Color => {
    const adjustedColor = chroma(color).brighten(2.5)
    return chroma.blend(adjustedColor, '#7f7d59', 'overlay')
  }

  const goldShader = (color: string): Color => {
    const adjustedColor = chroma(color).darken(2.5)
    return chroma.blend(adjustedColor, '#4c4c7f', 'overlay')
  }

  let white = '#f9f9f9'
  let black = '#111111'
  const nuetralSteps = 20
  const colorSteps = 9

  if (whiteTint) {
    const hue = chroma(whiteTint).get('hsv.h')
    const value = chroma(white).get('hsv.v')
    const saturation = 0.03
    white = chroma.hsv(hue, saturation, value).hex()
  }

  if (blackTint) {
    const hue = chroma(blackTint).get('hsv.h')
    const value = chroma(black).get('hsv.v')
    const saturation = 0.83
    black = chroma.hsv(hue, saturation, value).hex()
  }

  let nuetrals = chroma
    .scale([black, white])
    .correctLightness()
    .colors(nuetralSteps)

  nuetrals.push('#ffffff')

  if (theme.type === 'light') {
    nuetrals.reverse()
  }

  let primaryLight = chroma(primary).brighten(3.2)
  let primaryDark = chroma(primary).darken(3.2)

  let secondaryLight = chroma(secondary).brighten(3.2)
  let secondaryDark = chroma(secondary).darken(3.2)

  let successLight = chroma(success).brighten(3.2)
  let successDark = chroma(success).darken(3.2)

  let warningLight = chroma(warning).brighten(3.2)
  let warningDark = chroma(warning).darken(3.2)

  let dangerLight = chroma(danger).brighten(3.2)
  let dangerDark = chroma(danger).darken(3.2)

  if (goldenHour) {
    primaryLight = goldHighlighter(primary)
    primaryDark = goldShader(primary)

    secondaryLight = goldHighlighter(secondary)
    secondaryDark = goldShader(secondary)

    successLight = goldHighlighter(success)
    successDark = goldShader(success)

    warningLight = goldHighlighter(warning)
    warningDark = goldShader(warning)

    dangerLight = goldHighlighter(danger)
    dangerDark = goldShader(danger)
  }

  const primaryScale = chroma
    .scale([primaryDark, primary, primaryLight])
    .colors(colorSteps)

  const secondaryScale = chroma
    .scale([secondaryDark, secondary, secondaryLight])
    .colors(colorSteps)

  const successScale = chroma
    .scale([successDark, success, successLight])
    .colors(colorSteps)

  const warningScale = chroma
    .scale([warningDark, warning, warningLight])
    .colors(colorSteps)

  const dangerScale = chroma
    .scale([dangerDark, danger, dangerLight])
    .colors(colorSteps)

  return (
    <div className="theme-generator">
      <section className="theme-generator--section">
        <div className="theme-generator--details">
          <h2>Nuetrals</h2>
          <p>
            Generated {nuetralSteps} shades starting with {black} and ending
            with {white}
          </p>
        </div>
        <div className="theme-generator--grid">
          {nuetrals.map((n, i) => (
            <div key={`${n}-${i}`} className="theme-generator--color">
              <p>
                <b>{`N${i}`}</b>
                <code>{`${n}`}</code>
              </p>
              <div
                className="theme-generator--swatch"
                style={{backgroundColor: n}}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="theme-generator--section">
        <div className="theme-generator--details">
          <h2>Primary</h2>
          <p>
            Generated {colorSteps} colors based on {primary}
          </p>
          <p>Contrast Test:</p>
          <div
            className="theme-generator--contrast"
            style={{backgroundColor: primary}}
          >
            <div className="theme-generator--contrast-white">{`White (${chroma
              .contrast(primary, '#ffffff')
              .toFixed(2)})`}</div>
            <div className="theme-generator--contrast-black">{`Black (${chroma
              .contrast(primary, '#000000')
              .toFixed(2)})`}</div>
          </div>
        </div>
        <div className="theme-generator--grid">
          {primaryScale.map((n, i) => (
            <div key={`${n}-${i}`} className="theme-generator--color">
              <p>
                <b>{`Primary${i}`}</b>
                <code>{`${n}`}</code>
              </p>
              <div
                className="theme-generator--swatch"
                style={{backgroundColor: n}}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="theme-generator--section">
        <div className="theme-generator--details">
          <h2>Secondary</h2>
          <p>
            Generated {colorSteps} colors based on {secondary}
          </p>
          <p>Contrast Test:</p>
          <div
            className="theme-generator--contrast"
            style={{backgroundColor: secondary}}
          >
            <div className="theme-generator--contrast-white">{`White (${chroma
              .contrast(secondary, '#ffffff')
              .toFixed(2)})`}</div>
            <div className="theme-generator--contrast-black">{`Black (${chroma
              .contrast(secondary, '#000000')
              .toFixed(2)})`}</div>
          </div>
        </div>
        <div className="theme-generator--grid">
          {secondaryScale.map((n, i) => (
            <div key={`${n}-${i}`} className="theme-generator--color">
              <p>
                <b>{`Secondary${i}`}</b>
                <code>{`${n}`}</code>
              </p>
              <div
                className="theme-generator--swatch"
                style={{backgroundColor: n}}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="theme-generator--section">
        <div className="theme-generator--details">
          <h2>Success</h2>
          <p>
            Generated {colorSteps} colors based on {success}
          </p>
          <p>Contrast Test:</p>
          <div
            className="theme-generator--contrast"
            style={{backgroundColor: success}}
          >
            <div className="theme-generator--contrast-white">{`White (${chroma
              .contrast(success, '#ffffff')
              .toFixed(2)})`}</div>
            <div className="theme-generator--contrast-black">{`Black (${chroma
              .contrast(success, '#000000')
              .toFixed(2)})`}</div>
          </div>
        </div>
        <div className="theme-generator--grid">
          {successScale.map((n, i) => (
            <div key={`${n}-${i}`} className="theme-generator--color">
              <p>
                <b>{`Success${i}`}</b>
                <code>{`${n}`}</code>
              </p>
              <div
                className="theme-generator--swatch"
                style={{backgroundColor: n}}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="theme-generator--section">
        <div className="theme-generator--details">
          <h2>Warning</h2>
          <p>
            Generated {colorSteps} colors based on {warning}
          </p>
          <p>Contrast Test:</p>
          <div
            className="theme-generator--contrast"
            style={{backgroundColor: warning}}
          >
            <div className="theme-generator--contrast-white">{`White (${chroma
              .contrast(warning, '#ffffff')
              .toFixed(2)})`}</div>
            <div className="theme-generator--contrast-black">{`Black (${chroma
              .contrast(warning, '#000000')
              .toFixed(2)})`}</div>
          </div>
        </div>
        <div className="theme-generator--grid">
          {warningScale.map((n, i) => (
            <div key={`${n}-${i}`} className="theme-generator--color">
              <p>
                <b>{`Warning${i}`}</b>
                <code>{`${n}`}</code>
              </p>
              <div
                className="theme-generator--swatch"
                style={{backgroundColor: n}}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="theme-generator--section">
        <div className="theme-generator--details">
          <h2>Danger</h2>
          <p>
            Generated {colorSteps} colors based on {danger}
          </p>
          <p>Contrast Test:</p>
          <div
            className="theme-generator--contrast"
            style={{backgroundColor: danger}}
          >
            <div className="theme-generator--contrast-white">{`White (${chroma
              .contrast(danger, '#ffffff')
              .toFixed(2)})`}</div>
            <div className="theme-generator--contrast-black">{`Black (${chroma
              .contrast(danger, '#000000')
              .toFixed(2)})`}</div>
          </div>
        </div>
        <div className="theme-generator--grid">
          {dangerScale.map((n, i) => (
            <div key={`${n}-${i}`} className="theme-generator--color">
              <p>
                <b>{`Danger${i}`}</b>
                <code>{`${n}`}</code>
              </p>
              <div
                className="theme-generator--swatch"
                style={{backgroundColor: n}}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
