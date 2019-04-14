import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Button} from './Button'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

import README from './README.md'

// const readme = `# Button Component

// SWOGGLES
// sdfsdf
// sdfsdf

// import {Button} from '@influxdata/clockface'

// > sdfdsfsdfsdf

// <!-- PROPS -->`

const buttonStories = storiesOf('Components|Buttons', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })

buttonStories.add('Button Component', () => (
  <Button
    text={text('text', 'Button Text')}
    onClick={() => alert('clicked')}
    icon={
      IconFont[select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')]
    }
    titleText={text('titleText', 'Title Text')}
    color={
      ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Default')]
    }
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
    shape={ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]}
    status={
      ComponentStatus[select('status', mapEnumKeys(ComponentStatus), 'Default')]
    }
    active={boolean('active', false)}
    type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
  />
))
