// Libraries
import React, {createRef, RefObject} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {SelectGroup, SelectGroupRef, SelectGroupOptionRef} from '../'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  InputToggleType,
} from '../../../Types'

// Notes
import SelectGroupReadme from './SelectGroup.md'
import SelectGroupOptionReadme from './SelectGroupOption.md'
import SelectGroupExampleReadme from './SelectGroupExample.md'
import {useState} from '@storybook/addons'

const selectGroupStories = storiesOf(
  'Components|SelectGroup/Family',
  module
).addDecorator(withKnobs)

const selectGroupExampleStories = storiesOf(
  'Components|SelectGroup/Examples',
  module
).addDecorator(withKnobs)

selectGroupStories.add(
  'SelectGroup',
  () => {
    const mirepoix = ['Celery', 'Carrot', 'Onion', 'Garlic']

    const [selectedSelectGroup, setSelectedSelectGroup] = useState<string>(
      mirepoix[0]
    )
    const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([
      mirepoix[0],
    ])
    const selectGroupRef: RefObject<SelectGroupRef> = createRef()
    const selectGroupButtonCeleryRef: RefObject<SelectGroupOptionRef> = createRef()
    const selectGroupButtonCarrotRef: RefObject<SelectGroupOptionRef> = createRef()
    const selectGroupButtonOnionRef: RefObject<SelectGroupOptionRef> = createRef()

    const selectGroupButtonRefs = {
      Celery: selectGroupButtonCeleryRef,
      Carrot: selectGroupButtonCarrotRef,
      Onion: selectGroupButtonOnionRef,
    }

    const logSelectGroupRefs = (): void => {
      /* eslint-disable */
      console.log('SelectGroup', selectGroupRef.current)
      console.log('SelectGroupOption', selectGroupButtonCeleryRef.current)
      console.log('SelectGroupOption', selectGroupButtonCarrotRef.current)
      console.log('SelectGroupOption', selectGroupButtonOnionRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SelectGroup.SelectGroup
          ref={selectGroupRef}
          style={object('style', {width: '260px'})}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          shape={
            ButtonShape[
              select('shape', mapEnumKeys(ButtonShape), 'StretchToFit')
            ]
          }
        >
          {mirepoix.map((btn, i) => {
            const isSelectGroup =
              select('type', mapEnumKeys(InputToggleType), 'SelectGroup') ===
              'SelectGroup'
            const active = isSelectGroup
              ? selectedSelectGroup === btn
              : selectedCheckbox.includes(btn)

            const setActive = (value: any): void => {
              if (isSelectGroup) {
                setSelectedSelectGroup(value)
              } else {
                let updatedSelection = selectedCheckbox
                if (selectedCheckbox.includes(btn)) {
                  updatedSelection = updatedSelection.filter(s => s !== btn)
                } else {
                  updatedSelection = [...updatedSelection, btn]
                }
                setSelectedCheckbox(updatedSelection)
              }
            }

            const disabled =
              btn === mirepoix[3] ||
              (boolean('disabled (carrot)', false) && btn === mirepoix[1])

            return (
              <SelectGroup.Option
                type={
                  InputToggleType[
                    select('type', mapEnumKeys(InputToggleType), 'SelectGroup')
                  ]
                }
                name={
                  select(
                    'type',
                    mapEnumKeys(InputToggleType),
                    'SelectGroup'
                  ) === 'SelectGroup'
                    ? 'mirepoix'
                    : `mirepoix-${btn}`
                }
                ref={selectGroupButtonRefs[btn]}
                key={btn}
                id={btn}
                tabIndex={i + 1}
                active={active}
                value={btn}
                titleText={btn}
                onClick={setActive}
                disabled={disabled}
              >
                {btn}
              </SelectGroup.Option>
            )
          })}
        </SelectGroup.SelectGroup>
        <div className="story--test-buttons">
          <button onClick={logSelectGroupRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SelectGroupReadme),
    },
  }
)

selectGroupStories.add(
  'SelectGroupOption',
  () => {
    const selectGroupButtonRef: RefObject<SelectGroupOptionRef> = createRef()

    const logSelectGroupOptionRef = (): void => {
      /* eslint-disable */
      console.log(selectGroupButtonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SelectGroup.Option
          ref={selectGroupButtonRef}
          id={text('id', 'example-selectGroup-option')}
          active={boolean('active', false)}
          value={text('value', 'example-selectGroup-option')}
          onClick={value => {
            alert(value)
          }}
          disabled={boolean('disabled', false)}
          titleText={text('titleText', 'I am helpful text!')}
          disabledTitleText={text(
            'titleText',
            'Explainer for why this item is disabled'
          )}
        >
          {text('children', 'Button Label')}
        </SelectGroup.Option>
        <div className="story--test-buttons">
          <button onClick={logSelectGroupOptionRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SelectGroupOptionReadme),
    },
  }
)

selectGroupExampleStories.add(
  'Note Editor Mode Toggle',
  () => {
    const [activeItemID, updateActiveItemID] = useState<string>('mode-compose')

    return (
      <div className="story--example">
        <div style={{width: `${number('Parent width', 240)}px`}}>
          <SelectGroup
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            color={
              ComponentColor[
                select('color', mapEnumKeys(ComponentColor), 'Default')
              ]
            }
            shape={ButtonShape.StretchToFit}
          >
            <SelectGroup.Option
              titleText="Compose your Note using Markdown"
              id="mode-compose"
              active={activeItemID === 'mode-compose'}
              value="mode-compose"
              onClick={activeItemID => updateActiveItemID(activeItemID)}
            >
              Compose
            </SelectGroup.Option>
            <SelectGroup.Option
              titleText="See a preview of your Note"
              id="mode-preview"
              active={activeItemID === 'mode-preview'}
              value="mode-preview"
              onClick={activeItemID => updateActiveItemID(activeItemID)}
            >
              Preview
            </SelectGroup.Option>
          </SelectGroup>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SelectGroupExampleReadme),
    },
  }
)
