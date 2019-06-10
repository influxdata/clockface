// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Label} from './Label'

// Types
import {ComponentSize, InfluxColors} from '../../Types'

// Notes
const LabelReadme = marked(require('./Label.md'))

const labelStories = storiesOf('Atomic|Label', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

labelStories.add(
  'Examples',
  () => (
    <div className="story--example">
      <table className="story--example-table">
        <tbody>
          <tr>
            <td>
              <p>Read Only</p>
            </td>
            <td>
              <Label
                id="example-label"
                name={text('name', 'Fresh Label')}
                description={text(
                  'description',
                  'I am okay with being labeled'
                )}
                color={color('backgroundColor', `${InfluxColors.Star}`)}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Clickable</p>
            </td>
            <td>
              <Label
                id="example-label"
                name={text('name', 'Fresh Label')}
                description={text(
                  'description',
                  'I am okay with being labeled'
                )}
                color={color('backgroundColor', `${InfluxColors.Star}`)}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
                onClick={id => {
                  alert(`Label with id: ${id} has been clicked`)
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Removable</p>
            </td>
            <td>
              <Label
                id="example-label"
                name={text('name', 'Fresh Label')}
                description={text(
                  'description',
                  'I am okay with being labeled'
                )}
                color={color('backgroundColor', `${InfluxColors.Star}`)}
                size={
                  ComponentSize[
                    select('size', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
                onDelete={id => {
                  alert(`Label with id: ${id} has been deleted`)
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
      content: LabelReadme,
    },
  }
)
