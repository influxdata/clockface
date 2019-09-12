// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'

// Components
import {Button} from 'src/Components/Button/Composed/Button'
import {SquareButton} from 'src/Components/Button/Composed/SquareButton'
import {ConfirmationButton} from 'src/Components/Button/Composed/ConfirmationButton'
import {DismissButton} from 'src/Components/Button/Composed/DismissButton'
import {ButtonBase} from 'src/Components/Button/Base/ButtonBase'

// Types
import {
  PopoverType,
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
} from 'src/Types'

// Notes
import ButtonBaseReadme from 'src/Components/Button/Base/ButtonBase.md'
import ButtonReadme from 'src/Components/Button/Composed/Button.md'
import SquareButtonReadme from 'src/Components/Button/Composed/SquareButton.md'
import ConfirmationButtonReadme from 'src/Components/Button/Composed/ConfirmationButton.md'
import DismissButtonReadme from 'src/Components/Button/Composed/DismissButton.md'

const buttonBaseStories = storiesOf('Components|Buttons/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const buttonComposedStories = storiesOf('Components|Buttons/Composed', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

buttonComposedStories.add(
  'StandardButton',
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
  'SquareButton',
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

buttonComposedStories.add(
  'ConfirmationButton',
  () => (
    <div className="story--example">
      <ConfirmationButton
        confirmationButtonText={text(
          'confirmationButtonText',
          'Yes, Delete it'
        )}
        confirmationButtonColor={
          ComponentColor[
            select('confirmationColor', mapEnumKeys(ComponentColor), 'Danger')
          ]
        }
        confirmationLabel={text(
          'confirmationLabel',
          'Really delete your soul?'
        )}
        popoverColor={
          ComponentColor[
            select('popoverColor', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        popoverType={
          PopoverType[select('popoverType', mapEnumKeys(PopoverType), 'Solid')]
        }
        onConfirm={value => alert(`returnValue: ${value}`)}
        returnValue={text('returnValue', '')}
        icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Trash')]}
        titleText={text('titleText', 'Title Text')}
        color={
          ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Danger')]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        shape={
          ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
        }
        text={text('text', 'Delete Soul')}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(ConfirmationButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'DismissButton',
  () => (
    <div className="story--example">
      <div
        style={{
          width: '200px',
          height: '100px',
          position: 'relative',
          backgroundColor: '#292933',
        }}
      >
        <DismissButton
          onClick={() => alert('Clicked!')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Danger')
            ]
          }
          size={
            ComponentSize[
              select('size', mapEnumKeys(ComponentSize), 'ExtraSmall')
            ]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(DismissButtonReadme),
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
