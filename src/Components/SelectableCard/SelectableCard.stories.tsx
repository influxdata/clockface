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
      <div
        style={{
          width: `${number('Parent width', 240)}px`,
          height: `${number('Parent height', 240)}px`,
          marginRight: '15px',
        }}
      >
        <SelectableCard
          id={text('id', 'platform')}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Checkmark')]}
          label={text('label', 'Platform')}
          selected={true}
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
      </div>
      <div
        style={{
          width: `${number('Parent width', 240)}px`,
          height: `${number('Parent height', 240)}px`,
          marginRight: '15px',
        }}
      >
        <SelectableCard
          id={text('id', 'platform')}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Checkmark')]}
          label={text('label', 'Platform')}
          selected={true}
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
          image={<div className="mockComponent stretch">Image</div>}
        />
      </div>
      <div
        style={{
          width: `${number('Parent width', 240)}px`,
          height: `${number('Parent height', 240)}px`,
        }}
      >
        <SelectableCard
          id={text('id', 'platform')}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Checkmark')]}
          label={text('label', 'Platform')}
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
          image={<div className="mockComponent stretch">Image</div>}
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(SelectableCardReadme),
    },
  }
)
