// Libraries
import React, {CSSProperties} from 'react'
import marked from 'marked'
import chroma from 'chroma-js'

// Storybook
import {storiesOf} from '@storybook/react'

// Components
import {Button} from '../Components/Button/Composed/Button'
import {Input} from '../Components/Inputs/Input'
import {Icon} from '../Components/Icon/Base/Icon'

// Types
import {
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  InfluxColors,
  Gradients,
  IconFont,
} from './'

// Constants
import {getColorsFromGradient} from '../Utils/colors'

// Notes
import TypesReadme from './Types.md'
import ColorsGradientsReadme from './ColorsGradients.md'
import IconFontReadme from './IconFont.md'

const dataTypeStories = storiesOf('Data Types|Shared', module)

dataTypeStories.add(
  'Overview',
  () => (
    <div className="markdown-body">
      <h3>Component Colorization and Size</h3>
      <pre className="language-js">
        <code>
          import &#123;ComponentColor, ComponentSize&#125; from
          '@influxdata/clockface'
        </code>
      </pre>
      <table className="two-axis-table">
        <tbody>
          <tr>
            <td />
            <td>
              <code>Default</code>
            </td>
            <td>
              <code>Primary</code>
            </td>
            <td>
              <code>Secondary</code>
            </td>
            <td>
              <code>Success</code>
            </td>
            <td>
              <code>Warning</code>
            </td>
            <td>
              <code>Danger</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ExtraSmall</code>
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Default}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Success}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Warning}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>Small</code>
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Default}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Success}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Warning}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>Medium</code>
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Default}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Success}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Warning}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>Large</code>
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Default}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Success}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Warning}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h3>Component Status</h3>
      <pre className="language-js">
        <code>
          import &#123;ComponentStatus&#125; from '@influxdata/clockface'
        </code>
      </pre>
      <table className="two-axis-table">
        <tbody>
          <tr>
            <td>
              <code>ComponentStatus.Default</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Default}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Disabled</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Disabled}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Loading</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Loading}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Valid</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Valid}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Error</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Error}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  {
    readme: {
      content: marked(TypesReadme),
    },
  }
)

dataTypeStories.add(
  'Colors & Gradients',
  () => {
    const convertEnumToObjArray = (enumerator: object) => {
      const enumKeys = Object.keys(enumerator)

      return enumKeys.map(ek => ({
        key: ek,
        value: enumerator[ek],
      }))
    }

    const colorsArray = convertEnumToObjArray(InfluxColors)
    const gradientsArray = Object.keys(Gradients)

    const nuetrals = colorsArray.slice(0, 21)
    const blues = colorsArray.slice(21, 29)
    const purples = colorsArray.slice(29, 37)
    const greens = colorsArray.slice(37, 45)
    const yellows = colorsArray.slice(45, 53)
    const reds = colorsArray.slice(53, 61)
    const brandColors = colorsArray.slice(61, 66)

    const clockfaceGradients = gradientsArray.slice(0, 40)
    const brandGradients = gradientsArray.slice(40, 50)
    const defaultGradients = gradientsArray.slice(50, 53)
    const primaryGradients = gradientsArray.slice(53, 56)
    const secondaryGradients = gradientsArray.slice(56, 59)
    const successGradients = gradientsArray.slice(59, 62)
    const warningGradients = gradientsArray.slice(62, 65)
    const dangerGradients = gradientsArray.slice(65, 68)

    const colorCardClassName = (hexcode: string): string => {
      const lightContrast = chroma.contrast(InfluxColors.White, hexcode)
      const darkContrast = chroma.contrast(InfluxColors.Obsidian, hexcode)
      const cardTextColor =
        lightContrast >= darkContrast ? 'light-text' : 'dark-text'

      return `colors-grid--card ${cardTextColor}`
    }

    const gradientCardClassName = (gradient: string): string => {
      const {start} = getColorsFromGradient(gradient)

      const lightContrast = chroma.contrast(InfluxColors.White, start)
      const darkContrast = chroma.contrast(InfluxColors.Obsidian, start)
      const cardTextColor =
        lightContrast >= darkContrast ? 'light-text' : 'dark-text'

      return `gradients-grid--card ${cardTextColor}`
    }

    const generateGradientStyle = (gradient: string): CSSProperties => {
      const {start, stop} = getColorsFromGradient(gradient)

      return {
        background: `linear-gradient(45deg,  ${start} 0%,${stop} 100%)`,
      }
    }

    return (
      <div className="markdown-body">
        <h3>Clockface Colors</h3>
        <pre className="language-js">
          <code>
            import &#123;InfluxColors&#125; from '@influxdata/clockface'
          </code>
        </pre>
        <h5>Nuetrals</h5>
        <div className="colors-grid">
          {nuetrals.map((color, i) => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{`G${i} ${color.key}`}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Blues</h5>
        <div className="colors-grid">
          {blues.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Purples</h5>
        <div className="colors-grid">
          {purples.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Greens</h5>
        <div className="colors-grid">
          {greens.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Yellows</h5>
        <div className="colors-grid">
          {yellows.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Reds</h5>
        <div className="colors-grid">
          {reds.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>InfluxData Brand Colors</h5>
        <div className="colors-grid">
          {brandColors.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <hr />
        <h3>Clockface Gradients</h3>
        <pre className="language-js">
          <code>import &#123;Gradients&#125; from '@influxdata/clockface'</code>
        </pre>
        <h5>Multi-Hue Gradients</h5>
        <div className="gradients-grid">
          {clockfaceGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <h5>InfluxData Brand Gradients</h5>
        <div className="gradients-grid">
          {brandGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <h5>Single Hue Gradients</h5>
        <p>Default (Grey)</p>
        <div className="gradients-grid">
          {defaultGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Primary (Blue)</p>
        <div className="gradients-grid">
          {primaryGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Secondary (Purple)</p>
        <div className="gradients-grid">
          {secondaryGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Success (Green)</p>
        <div className="gradients-grid">
          {successGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Warning (Yellow)</p>
        <div className="gradients-grid">
          {warningGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Danger (Red)</p>
        <div className="gradients-grid">
          {dangerGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={generateGradientStyle(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ColorsGradientsReadme),
    },
  }
)

dataTypeStories.add(
  'Icon Font',
  () => {
    const getIconValue = (icon: string): string => IconFont[icon]

    return (
      <div className="markdown-body">
        <div className="icon-grid">
          {Object.keys(IconFont).map(icon => (
            <div key={icon} className="icon-grid--cell">
              <Icon glyph={getIconValue(icon)} />
              <code>{icon}</code>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IconFontReadme),
    },
  }
)
