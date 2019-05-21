// Libraries
import React, {CSSProperties} from 'react'
import marked from 'marked'
import chroma from 'chroma-js'

// Storybook
import {storiesOf} from '@storybook/react'

// Components
import {Button} from '../Components/Button/Composed/Button'
import {Input} from '../Components/Inputs/Input'
import {Icon} from '../Components/Icon/Icon'

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
import {getColorsFromGradient} from '../Constants/colors'

// Notes
const TypesReadme = marked(require('./Types.md'))
const ColorsGradientsReadme = marked(require('./ColorsGradients.md'))
const IconFontReadme = marked(require('./IconFont.md'))

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
                onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  {
    readme: {
      content: TypesReadme,
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

    const colorCardClassName = (hexcode: string): string => {
      const cardTextColor =
        chroma(hexcode).luminance() >= 0.4 ? 'dark-text' : 'light-text'

      return `colors-grid--card ${cardTextColor}`
    }

    const gradientCardClassName = (gradient: string): string => {
      const {start} = getColorsFromGradient(gradient)

      const cardTextColor =
        chroma(start).luminance() >= 0.4 ? 'dark-text' : 'light-text'

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
        <h3>Clockface Color Palette</h3>
        <pre className="language-js">
          <code>
            import &#123;InfluxColors&#125; from '@influxdata/clockface'
          </code>
        </pre>
        <div className="colors-grid">
          {colorsArray.map(color => (
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
        <div className="gradients-grid">
          {Object.keys(Gradients).map(g => (
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
      content: ColorsGradientsReadme,
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
      content: IconFontReadme,
    },
  }
)
