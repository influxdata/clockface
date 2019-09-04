// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, boolean, select, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SelectableCard} from './SelectableCard'

// Types
import {ComponentColor, ComponentSize, IconFont} from '../../Types'

// Notes
import SelectableCardReadme from './SelectableCard.md'

const selectableCardStories = storiesOf(
  'Components|Cards/SelectableCard',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

selectableCardStories.add(
  'SelectableCard',
  () => (
    <div className="story--example">
      <SelectableCard
        style={{
          width: `${number('width', 200)}px`,
          height: `${number('height', 200)}px`,
          marginRight: '15px',
        }}
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
        style={{
          width: `${number('width', 200)}px`,
          height: `${number('height', 200)}px`,
          marginRight: '15px',
        }}
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
        style={{
          width: `${number('width', 200)}px`,
          height: `${number('height', 200)}px`,
        }}
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
