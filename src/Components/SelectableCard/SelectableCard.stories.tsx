// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, boolean, select, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SelectableCard} from 'src/Components/SelectableCard/SelectableCard'

// Types
import {ComponentColor, ComponentSize, IconFont} from 'src/Types'

// Notes
import SelectableCardReadme from 'src/Components/SelectableCard/SelectableCard.md'

const selectableCardStories = storiesOf(
  'Components|Cards/SelectableCard',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const exampleStyle = {
  width: '200px',
  height: '200px',
  marginLeft: '8px',
  marginRight: '8px',
}

selectableCardStories.add(
  'SelectableCard',
  () => (
    <div className="story--example" style={{height: '400px'}}>
      <SelectableCard
        style={object('style', exampleStyle)}
        id={text('id', 'Titular Title')}
        icon={
          IconFont[
            select(
              'icon',
              {None: 'none', ...mapEnumKeys(IconFont)},
              'Checkmark'
            )
          ]
        }
        label={text('label', 'Titular Title')}
        selected={boolean('selected', true)}
        disabled={boolean('disabled', false)}
        fontSize={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Success')
          ]
        }
        onClick={() => {
          alert('card clicked!')
        }}
      />
      <SelectableCard
        style={object('style', exampleStyle)}
        id={text('id', 'Titular Title')}
        icon={
          IconFont[
            select(
              'icon',
              {None: 'none', ...mapEnumKeys(IconFont)},
              'Checkmark'
            )
          ]
        }
        label={text('label', 'Titular Title')}
        selected={boolean('selected', true)}
        disabled={boolean('disabled', false)}
        fontSize={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Success')
          ]
        }
        onClick={() => {
          alert('card clicked!')
        }}
      >
        <div className="mockComponent stretch">Image</div>
      </SelectableCard>
      <SelectableCard
        style={object('style', exampleStyle)}
        id={text('id', 'Titular Title')}
        icon={
          IconFont[
            select(
              'icon',
              {None: 'none', ...mapEnumKeys(IconFont)},
              'Checkmark'
            )
          ]
        }
        label={text('label', 'Titular Title')}
        selected={false}
        disabled={boolean('disabled', false)}
        fontSize={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Success')
          ]
        }
        onClick={() => {
          alert('card clicked!')
        }}
      >
        <div className="mockComponent stretch">Image</div>
      </SelectableCard>
    </div>
  ),
  {
    readme: {
      content: marked(SelectableCardReadme),
    },
  }
)
