// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, select, number, text, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {NaturalLanguage} from './NaturalLanguage'
import {NaturalLanguageSection} from './NaturalLanguageSection'
import {NaturalLanguageElement} from './NaturalLanguageElement'
import {NaturalLanguageText} from './NaturalLanguageText'
import {PopoverDismissButton} from '../Popover/PopoverDismissButton'
import {SelectDropdown} from '../Dropdowns/Composed/SelectDropdown'
import {Input} from '../Inputs/Input'

// Types
import {
  ComponentSize,
  InfluxColors,
  InputType,
  ComponentColor,
} from '../../Types/index'

// Notes
import NaturalLanguageReadme from './NaturalLanguage.md'

const alertStories = storiesOf('Components|Forms/Natural Language', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

alertStories.add(
  'NaturalLanguage',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent width (px)', 500)}px`}}>
        <NaturalLanguage
          margin={
            ComponentSize[select('margin', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          <PopoverDismissButton
            onClick={() => {}}
            color={ComponentColor.Danger}
          />
          <NaturalLanguageSection>
            <NaturalLanguageText
              size={
                ComponentSize[
                  select(
                    'All Text & Components: size',
                    mapEnumKeys(ComponentSize),
                    'Small'
                  )
                ]
              }
              text="When"
            />
            <NaturalLanguageElement sizeProportion={1}>
              <SelectDropdown
                options={['any value', 'all values']}
                selectedOption="any value"
                onSelect={() => {}}
                buttonSize={
                  ComponentSize[
                    select(
                      'All Text & Components: size',
                      mapEnumKeys(ComponentSize),
                      'Small'
                    )
                  ]
                }
              />
            </NaturalLanguageElement>
            <NaturalLanguageElement sizeProportion={2}>
              <SelectDropdown
                options={[
                  'is above threshold',
                  'is below threshold',
                  'is inside range',
                  'is outside range',
                ]}
                selectedOption="is inside range"
                onSelect={() => {}}
                buttonSize={
                  ComponentSize[
                    select(
                      'All Text & Components: size',
                      mapEnumKeys(ComponentSize),
                      'Small'
                    )
                  ]
                }
              />
            </NaturalLanguageElement>
          </NaturalLanguageSection>
          <NaturalLanguageSection>
            <NaturalLanguageElement>
              <Input
                type={InputType.Number}
                value="90"
                size={
                  ComponentSize[
                    select(
                      'All Text & Components: size',
                      mapEnumKeys(ComponentSize),
                      'Small'
                    )
                  ]
                }
              />
            </NaturalLanguageElement>
            <NaturalLanguageText
              size={
                ComponentSize[
                  select(
                    'All Text & Components: size',
                    mapEnumKeys(ComponentSize),
                    'Small'
                  )
                ]
              }
              text="to"
            />
            <NaturalLanguageElement>
              <Input
                type={InputType.Number}
                value="100"
                size={
                  ComponentSize[
                    select(
                      'All Text & Components: size',
                      mapEnumKeys(ComponentSize),
                      'Small'
                    )
                  ]
                }
              />
            </NaturalLanguageElement>
            <NaturalLanguageText
              size={
                ComponentSize[
                  select(
                    'All Text & Components: size',
                    mapEnumKeys(ComponentSize),
                    'Small'
                  )
                ]
              }
              text="set status to"
            />
            <NaturalLanguageText
              size={
                ComponentSize[
                  select(
                    'All Text & Components: size',
                    mapEnumKeys(ComponentSize),
                    'Small'
                  )
                ]
              }
              text={text('Status Level: text', 'WARN')}
              backgroundColor={color(
                'Status Level: backgroundColor',
                `${InfluxColors.Pineapple}`
              )}
            />
          </NaturalLanguageSection>
        </NaturalLanguage>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(NaturalLanguageReadme),
    },
  }
)
