// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Label, LabelRef} from '../'

// Types
import {ComponentSize, InfluxColors} from '../../../Types'

// Notes
import LabelReadme from './Label.md'

const labelStories = storiesOf('Atomic|Label', module).addDecorator(withKnobs)

labelStories.add(
  'Examples',
  () => {
    const labelReadOnlyRef: React.RefObject<LabelRef> = React.createRef()
    const labelClickableRef: React.RefObject<LabelRef> = React.createRef()
    const labelDeletableRef: React.RefObject<LabelRef> = React.createRef()

    const logLabelRefs = (): void => {
      /* eslint-disable */
      console.log('Read-Only Label', labelReadOnlyRef.current)
      console.log('Clickable Label', labelClickableRef.current)
      console.log('Deletable Label', labelDeletableRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <table className="story--example-table">
          <tbody>
            <tr>
              <td>
                <p>Read Only</p>
              </td>
              <td>
                <Label
                  ref={labelReadOnlyRef}
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
                  ref={labelClickableRef}
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
                  ref={labelDeletableRef}
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
        <div className="story--test-buttons">
          <button onClick={logLabelRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(LabelReadme),
    },
  }
)
