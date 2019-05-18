// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'

// Components
import {Button} from '../Components/Button/Composed/Button'
import {Input} from '../Components/Inputs/Input'

// Types
import {ComponentColor, ComponentSize, ComponentStatus} from './'

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

dataTypeStories.add('Colors & Gradients', () => <div>Blurp</div>, {
  readme: {
    content: ColorsGradientsReadme,
  },
})

dataTypeStories.add('Icon Font', () => <div>Blurp</div>, {
  readme: {
    content: IconFontReadme,
  },
})
