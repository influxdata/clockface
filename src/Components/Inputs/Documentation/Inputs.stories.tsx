// Libraries
import React, {RefObject, createRef, ChangeEvent} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {useState} from '@storybook/addons'
import {
  withKnobs,
  radios,
  number,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  Toggle,
  ToggleRef,
  ToggleContainerRef,
  Input,
  InputRef,
  InputContainerRef,
  AutoInput,
  AutoInputRef,
  RangeSlider,
  RangeSliderRef,
  TextArea,
  TextAreaRef,
  TextAreaContainerRef,
  VisibilityInput,
  VisibilityInputRef,
} from '../'
import {InputLabel, InputLabelRef} from '../InputLabel'
import {SelectGroupRef, SelectGroupOptionRef} from '../../SelectGroup/index'
import {FlexBox} from '../../FlexBox'

// Types
import {
  ComponentStatus,
  ComponentSize,
  ComponentColor,
  IconFont,
  AutoComplete,
  FlexDirection,
  AlignItems,
  InputType,
  AutoInputMode,
  InputToggleType,
  Appearance,
} from '../../../Types'

// Notes
import InputReadme from './Input.md'
import AutoInputReadme from './AutoInput.md'
import VisibilityInputReadme from './VisibilityInput.md'
import RangeSliderReadme from './RangeSlider.md'
import TextAreaReadme from './TextArea.md'
import ToggleReadme from './Toggle.md'
import InputLabelReadme from './InputLabel.md'
import MultipleChoiceForm from './MultipleChoiceForm.md'

const inputsBaseStories = storiesOf(
  'Components|Inputs/Base',
  module
).addDecorator(withKnobs)

const inputsComposedStories = storiesOf(
  'Components|Inputs/Composed',
  module
).addDecorator(withKnobs)

const inputsExampleStories = storiesOf(
  'Components|Inputs/Examples',
  module
).addDecorator(withKnobs)

const defaultInputStyle = {
  width: '200px',
}

inputsBaseStories.add(
  'Input (Text)',
  () => {
    const inputRef: RefObject<InputRef> = createRef()
    const inputContainerRef: RefObject<InputContainerRef> = createRef()

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('InputRef', inputRef.current)
      console.log('InputContainerRef', inputContainerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Input
          ref={inputRef}
          containerRef={inputContainerRef}
          placeholder={text('placeholder', 'Placeholder Text')}
          value={text('value', 'Value Text')}
          onChange={() => {
            // do nothing
          }}
          name={text('name', 'Name')}
          titleText={text('titleText', 'Title Text')}
          disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
          maxLength={number('maxLength', 24)}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          style={object('style', defaultInputStyle)}
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
          type={InputType.Text}
        />
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Number)',
  () => {
    const [value, setValue] = useState<number>(25)

    return (
      <div className="story--example">
        <Input
          min={number('min', 0)}
          max={number('max', 50)}
          value={value}
          onChange={e =>
            setValue(e.target.value === '' ? NaN : Number(e.target.value))
          }
          name={text('name', 'Name')}
          titleText={text('titleText', 'Title Text')}
          disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
          maxLength={number('maxLength', 24)}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          style={object('style', defaultInputStyle)}
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          type={InputType.Number}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Password)',
  () => (
    <div className="story--example">
      <Input
        placeholder={text('placeholder', 'Placeholder Text')}
        value={text('value', 'Value Text')}
        onChange={() => {
          // do nothing
        }}
        name={text('name', 'Name')}
        titleText={text('titleText', 'Title Text')}
        disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
        maxLength={number('maxLength', 24)}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        style={object('style', defaultInputStyle)}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        autocomplete={
          AutoComplete[
            radios<AutoComplete>(
              'autocomplete',
              mapEnumKeys(AutoComplete),
              AutoComplete.Off
            )
          ]
        }
        type={InputType.Password}
      />
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Email)',
  () => (
    <div className="story--example">
      <Input
        placeholder={text('placeholder', 'Placeholder Text')}
        value={text('value', 'value@text.com')}
        onChange={() => {
          // do nothing
        }}
        name={text('name', 'Name')}
        titleText={text('titleText', 'Title Text')}
        disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
        maxLength={number('maxLength', 24)}
        icon={
          IconFont[
            select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
          ]
        }
        style={object('style', defaultInputStyle)}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        autocomplete={
          AutoComplete[
            radios<AutoComplete>(
              'autocomplete',
              mapEnumKeys(AutoComplete),
              AutoComplete.Off
            )
          ]
        }
        type={InputType.Email}
      />
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'Input (Checkbox)',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent Width (px)', 300)}px`}}>
        <FlexBox
          direction={FlexDirection.Row}
          alignItems={AlignItems.Center}
          margin={ComponentSize.Medium}
          stretchToFitWidth={true}
        >
          <Input
            name={text('name', 'Name')}
            onChange={() => {
              // do nothing
            }}
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            status={
              ComponentStatus[
                select('status', mapEnumKeys(ComponentStatus), 'Default')
              ]
            }
            type={InputType.Checkbox}
            checked={boolean('checked', true)}
          />
          <InputLabel
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            active={boolean('checked', true)}
            wrapText={boolean('Label: wrapText', true)}
          >
            {text('Label: text', 'I Agree to Terms and Conditions')}
          </InputLabel>
        </FlexBox>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(InputReadme),
    },
  }
)

inputsBaseStories.add(
  'InputLabel',
  () => {
    const inputLabelRef: RefObject<InputLabelRef> = createRef()

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('ToggleRef', inputLabelRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <InputLabel
          ref={inputLabelRef}
          style={object('style', {})}
          active={boolean('active', true)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          {text('children', 'I am a label!')}
        </InputLabel>
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(InputLabelReadme),
    },
  }
)

inputsBaseStories.add(
  'Toggle',
  () => {
    const toggleRef: RefObject<ToggleRef> = createRef()
    const toggleContainerRef: RefObject<ToggleContainerRef> = createRef()

    const [checked, setChecked] = useState<boolean>(false)

    const handleToggleChange = (value: string): void => {
      /* eslint-disable */
      console.log('onChange fired!', value)
      /* eslint-enable */
      setChecked(!checked)
    }

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('ToggleRef', toggleRef.current)
      console.log('ToggleContainerRef', toggleContainerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Toggle
          checked={checked}
          ref={toggleRef}
          titleText={text('titleText', 'Title Text')}
          disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
          containerRef={toggleContainerRef}
          id={text('id', 'example_toggle_id')}
          value={text('value', 'Value Text')}
          style={object('style', {})}
          tabIndex={number('tabIndex', 1)}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          disabled={boolean('disabled', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          appearance={
            Appearance[select('appearance', mapEnumKeys(Appearance), 'Outline')]
          }
          type={
            InputToggleType[
              select('type', mapEnumKeys(InputToggleType), 'Checkbox')
            ]
          }
          onChange={handleToggleChange}
        >
          {!!text('label', '') && (
            <InputLabel
              size={
                ComponentSize[
                  select('size', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
              active={checked}
              htmlFor={text('id', 'example_toggle_id')}
            >
              {text('label', '')}
            </InputLabel>
          )}
        </Toggle>
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ToggleReadme),
    },
  }
)

inputsBaseStories.add(
  'TextArea',
  () => {
    const textAreaRefDefault: RefObject<TextAreaRef> = createRef()
    const textAreaRefDisabled: RefObject<TextAreaRef> = createRef()
    const textAreaRefValid: RefObject<TextAreaRef> = createRef()
    const textAreaRefError: RefObject<TextAreaRef> = createRef()
    const textAreaRefLoading: RefObject<TextAreaRef> = createRef()
    const textAreaContainerRef: RefObject<TextAreaContainerRef> = createRef()

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('TextAreaRef (Default)', textAreaRefDefault.current)
      console.log('TextAreaRef (Disabled)', textAreaRefDisabled.current)
      console.log('TextAreaRef (Valid)', textAreaRefValid.current)
      console.log('TextAreaRef (Error)', textAreaRefError.current)
      console.log('TextAreaRef (Loading)', textAreaRefLoading.current)
      console.log(
        'TextAreaContainerRef (Default)',
        textAreaContainerRef.current
      )
      /* eslint-enable */
    }

    const exampleTextAreaStyle = {width: '160px', margin: '0 10px'}

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Refs</button>
        </div>
        <TextArea
          ref={textAreaRefDefault}
          containerRef={textAreaContainerRef}
          value={text(
            'value',
            'Example text can be controlled from the Knobs panel on the right'
          )}
          maxLength={number('maxLength', 50)}
          minLength={number('minLength', 5)}
          placeholder={text('placeholder', 'Placeholder Text')}
          onChange={() => {
            // do nothing
          }}
          monospace={boolean('monospace', false)}
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          style={object('style', exampleTextAreaStyle)}
          cols={number('cols', 20)}
          rows={number('rows', 10)}
          status={ComponentStatus.Default}
        />
        <TextArea
          ref={textAreaRefDisabled}
          value={text(
            'value',
            'Example text can be controlled from the Knobs panel on the right'
          )}
          maxLength={number('maxLength', 50)}
          minLength={number('minLength', 5)}
          placeholder={text('placeholder', 'Placeholder Text')}
          onChange={() => {
            // do nothing
          }}
          monospace={boolean('monospace', false)}
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          style={object('style', exampleTextAreaStyle)}
          cols={number('cols', 20)}
          rows={number('rows', 10)}
          status={ComponentStatus.Disabled}
        />
        <TextArea
          ref={textAreaRefValid}
          value={text(
            'value',
            'Example text can be controlled from the Knobs panel on the right'
          )}
          maxLength={number('maxLength', 50)}
          minLength={number('minLength', 5)}
          placeholder={text('placeholder', 'Placeholder Text')}
          onChange={() => {
            // do nothing
          }}
          monospace={boolean('monospace', false)}
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          style={object('style', exampleTextAreaStyle)}
          cols={number('cols', 20)}
          rows={number('rows', 10)}
          status={ComponentStatus.Valid}
        />
        <TextArea
          ref={textAreaRefError}
          value={text(
            'value',
            'Example text can be controlled from the Knobs panel on the right'
          )}
          maxLength={number('maxLength', 50)}
          minLength={number('minLength', 5)}
          placeholder={text('placeholder', 'Placeholder Text')}
          onChange={() => {
            // do nothing
          }}
          monospace={boolean('monospace', false)}
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          style={object('style', exampleTextAreaStyle)}
          cols={number('cols', 20)}
          rows={number('rows', 10)}
          status={ComponentStatus.Error}
        />
        <TextArea
          ref={textAreaRefLoading}
          value={text(
            'value',
            'Example text can be controlled from the Knobs panel on the right'
          )}
          maxLength={number('maxLength', 50)}
          minLength={number('minLength', 5)}
          placeholder={text('placeholder', 'Placeholder Text')}
          onChange={() => {
            // do nothing
          }}
          monospace={boolean('monospace', false)}
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          style={object('style', exampleTextAreaStyle)}
          cols={number('cols', 20)}
          rows={number('rows', 10)}
          status={ComponentStatus.Loading}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(TextAreaReadme),
    },
  }
)

inputsComposedStories.add(
  'Visibility Input',
  () => {
    const [value, setValue] = useState<string>('Value text')
    const visibilityInputRef: RefObject<VisibilityInputRef> = createRef()

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('VisibilityInputRef', visibilityInputRef.current)
      /* eslint-enable */
    }

    const handleInputChange = (e: ChangeEvent<VisibilityInputRef>): void => {
      setValue(e.target.value)
    }

    return (
      <div className="story--example">
        <VisibilityInput
          ref={visibilityInputRef}
          placeholder={text('placeholder', 'Placeholder Text')}
          value={value}
          onChange={handleInputChange}
          name={text('name', 'Name')}
          titleText={text('titleText', 'Title Text')}
          disabledTitleText={text('disabledTitleText', 'Disabled Title Text')}
          maxLength={number('maxLength', 24)}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          style={object('style', defaultInputStyle)}
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          autocomplete={
            AutoComplete[
              radios<AutoComplete>(
                'autocomplete',
                mapEnumKeys(AutoComplete),
                AutoComplete.Off
              )
            ]
          }
        />
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(VisibilityInputReadme),
    },
  }
)

inputsComposedStories.add(
  'AutoInput',
  () => {
    const autoInputRef: RefObject<AutoInputRef> = createRef()
    const autoInputSelectGroupRef: RefObject<SelectGroupRef> = createRef()
    const autoInputSelectGroupAutoRef: RefObject<SelectGroupOptionRef> = createRef()
    const autoInputSelectGroupCustomRef: RefObject<SelectGroupOptionRef> = createRef()

    const handleLogRef = (): void => {
      /* eslint-disable */
      console.log('AutoInput', autoInputRef.current)
      console.log('AutoInput SelectGroup', autoInputSelectGroupRef.current)
      console.log(
        'AutoInput SelectGroupOption',
        autoInputSelectGroupAutoRef.current
      )
      console.log(
        'AutoInput SelectGroupOption',
        autoInputSelectGroupCustomRef.current
      )
      /* eslint-enable */
    }

    const exampleAutoInputStyle = {width: '300px'}

    return (
      <div className="story--example">
        <AutoInput
          ref={autoInputRef}
          radioRef={autoInputSelectGroupRef}
          radioButtonAutoRef={autoInputSelectGroupAutoRef}
          radioButtonCustomRef={autoInputSelectGroupCustomRef}
          style={object('style', exampleAutoInputStyle)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          mode={
            AutoInputMode[select('mode', mapEnumKeys(AutoInputMode), 'Auto')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          onChangeMode={mode => alert(`${mode}`)}
          inputComponent={
            <Input
              value={text('Input: value', 'Swoggles')}
              placeholder={text(
                'Input: placeholder',
                'Enter a custom value...'
              )}
              size={
                ComponentSize[
                  select('size', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
              type={
                InputType[select('Input: type', mapEnumKeys(InputType), 'Text')]
              }
              maxLength={number('Input: maxLength', 100)}
              min={number('Input: min', 0)}
              max={number('Input: max', 100)}
            />
          }
        />
        <div className="story--test-buttons">
          <button onClick={handleLogRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AutoInputReadme),
    },
  }
)

inputsComposedStories.add(
  'Range Slider',
  () => {
    const [rangeSliderValue, setRangeSliderValue] = useState<number>(50)
    const rangeSliderRef: RefObject<RangeSliderRef> = createRef()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setRangeSliderValue(parseInt(e.target.value))
    }

    const handleLogRef = (): void => {
      /* eslint-disable */
      console.log(rangeSliderRef.current)
      /* eslint-enable */
    }

    const exampleRangeSliderStyle = {width: '100%'}

    return (
      <div className="story--example">
        <RangeSlider
          ref={rangeSliderRef}
          min={number('min', 0)}
          max={number('max', 100)}
          value={rangeSliderValue}
          step={number('step', 0)}
          onChange={handleInputChange}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          labelPrefix={text('labelPrefix', '')}
          labelSuffix={text('labelSuffix', '')}
          fill={boolean('fill', true)}
          hideLabels={boolean('hide labels', false)}
          style={object('style', exampleRangeSliderStyle)}
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
        />
        <div className="story--test-buttons">
          <button onClick={handleLogRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(RangeSliderReadme),
    },
  }
)

inputsExampleStories.add(
  'Multiple Choice Form',
  () => {
    const [weapon, setWeapon] = useState<string>('chainsaw')

    const handleToggleChange = (value: string): void => {
      setWeapon(value)
    }

    return (
      <div className="story--example">
        <FlexBox
          direction={FlexDirection.Column}
          margin={ComponentSize.Large}
          alignItems={AlignItems.FlexStart}
        >
          <p>Choose a weapon to fight zombies with</p>
          <Toggle
            tabIndex={1}
            value="chainsaw"
            id="chainsaw"
            name="zombie_fighting_weapon"
            checked={weapon === 'chainsaw'}
            onChange={handleToggleChange}
            type={InputToggleType.Radio}
            size={ComponentSize.ExtraSmall}
            color={
              ComponentColor[
                select('color', mapEnumKeys(ComponentColor), 'Primary')
              ]
            }
            appearance={
              Appearance[
                select('appearance', mapEnumKeys(Appearance), 'Outline')
              ]
            }
          >
            <InputLabel active={weapon === 'chainsaw'} htmlFor="chainsaw">
              Chainsaw
            </InputLabel>
          </Toggle>
          <Toggle
            tabIndex={2}
            value="crowbar"
            id="crowbar"
            name="zombie_fighting_weapon"
            checked={weapon === 'crowbar'}
            onChange={handleToggleChange}
            type={InputToggleType.Radio}
            size={ComponentSize.ExtraSmall}
            color={
              ComponentColor[
                select('color', mapEnumKeys(ComponentColor), 'Primary')
              ]
            }
            appearance={
              Appearance[
                select('appearance', mapEnumKeys(Appearance), 'Outline')
              ]
            }
          >
            <InputLabel active={weapon === 'crowbar'} htmlFor="crowbar">
              Crowbar
            </InputLabel>
          </Toggle>
          <Toggle
            tabIndex={3}
            value="katana"
            id="katana"
            name="zombie_fighting_weapon"
            checked={weapon === 'katana'}
            onChange={handleToggleChange}
            type={InputToggleType.Radio}
            size={ComponentSize.ExtraSmall}
            color={
              ComponentColor[
                select('color', mapEnumKeys(ComponentColor), 'Primary')
              ]
            }
            appearance={
              Appearance[
                select('appearance', mapEnumKeys(Appearance), 'Outline')
              ]
            }
          >
            <InputLabel active={weapon === 'katana'} htmlFor="katana">
              Katana
            </InputLabel>
          </Toggle>
        </FlexBox>
      </div>
    )
  },
  {
    readme: {
      content: marked(MultipleChoiceForm),
    },
  }
)
