// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {Button} from './Composed/Button'
import {SquareButton} from './Composed/SquareButton'
import {ButtonBase} from './Base/ButtonBase'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
} from '../../Types'

// Notes
import ButtonBaseReadme from './Base/ButtonBase.md'
import ButtonReadme from './Composed/Button.md'
import SquareButtonReadme from './Composed/SquareButton.md'

const buttonBaseStories = storiesOf('Components|Buttons/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const buttonComposedStories = storiesOf('Components|Buttons/Composed', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

buttonComposedStories.add(
  'Standard Button',
  () => (
    <div className="story--example">
      <Button
        text={text('text', 'Button Text')}
        onClick={() => alert('clicked')}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        titleText={text('titleText', 'Title Text')}
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        shape={
          ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
        }
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        active={boolean('active', false)}
        type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
        placeIconAfterText={boolean('placeIconAfterText', false)}
      />
    </div>
  ),
  {
    readme: {
      content: marked(ButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'Square Button (Icon Only)',
  () => (
    <div className="story--example">
      <SquareButton
        onClick={() => alert('clicked')}
        icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Zap')]}
        titleText={text('titleText', 'Title Text')}
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        active={boolean('active', false)}
        type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
      />
    </div>
  ),
  {
    readme: {
      content: marked(SquareButtonReadme),
    },
  }
)

buttonBaseStories.add(
  'Base Button',
  () => (
    <div className="story--example">
      <ButtonBase
        onClick={() => alert('clicked')}
        titleText={text('titleText', 'Title Text')}
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        shape={
          ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
        }
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        active={boolean('active', false)}
        type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
      >
        {text('text', 'Button Text')}
      </ButtonBase>
    </div>
  ),
  {
    readme: {
      content: marked(ButtonBaseReadme),
    },
  }
)
