// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  color,
  select,
  number,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  Form,
  FormBoxRef,
  FormLabelRef,
  FormFooterRef,
  FormDividerRef,
  FormElementRef,
  FormHelpTextRef,
  FormElementErrorRef,
  FormValidationElementRef,
} from '../index'

import {Grid} from '../../Grid'
import {Button} from '../../Button/Composed/Button'
import {Input} from '../../Inputs/Input'
import {FlexBox} from '../../FlexBox'
import {SlideToggle} from '../../SlideToggle'
import {InputLabel} from '../../Inputs/InputLabel'
import {Panel} from '../../Panel'
import {TextBlock} from '../../TextBlock/TextBlock'
import {DismissButton} from '../../Button/Composed/DismissButton'
import {SelectDropdown} from '../../Dropdowns/Composed/SelectDropdown'
import {FormValidationTest} from './FormValidationTest'

// Types
import {
  Columns,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  FlexDirection,
  AlignItems,
  InputType,
  InfluxColors,
} from '../../../Types'

// Notes
import FormReadme from './Form.md'
import FormElementReadme from './FormElement.md'
import FormValidationElementReadme from './FormValidationElement.md'
import NaturalLanguageFormReadme from './NaturalLanguageForm.md'
import {FormRef} from '../Form'

const formStories = storiesOf('Components|Forms/Standard', module).addDecorator(
  withKnobs
)

const formExampleStories = storiesOf(
  'Components|Forms/Examples',
  module
).addDecorator(withKnobs)

const mockValidationFunc = (value: string): string | null => {
  if (!value) {
    return 'Field cannot be empty'
  }

  return null
}

formStories.add(
  'Form',
  () => {
    const formRef = createRef<FormRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.Form ref={formRef} />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormBox',
  () => {
    const formBoxRef = createRef<FormBoxRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formBoxRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.Box ref={formBoxRef} />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormDivider',
  () => {
    const formDividerRef = createRef<FormDividerRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formDividerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.Divider ref={formDividerRef} lineColor={color('color', '')} />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormElement',
  () => {
    const formElementRef = createRef<FormElementRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formElementRef.current)
      /* eslint-enable */
    }

    const addOnElement = () => (
      <div
        className="mockComponent mockInput"
        style={{
          width: '20px',
          height: '20px',
          minHeight: '20px',
          borderRadius: '10px',
        }}
      >
        $
      </div>
    )

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.Element
            ref={formElementRef}
            label={text('label', 'Element Label')}
            helpText={text('helpText', 'Help Text')}
            errorMessage={text('errorMessage', 'Error Message')}
            required={boolean('required', true)}
            labelAddOn={boolean('labelAddOn', false) ? addOnElement : undefined}
          >
            <div className="mockComponent mockInput">Input Goes Here</div>
          </Form.Element>
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormElementReadme),
    },
  }
)

formStories.add(
  'FormElementError',
  () => {
    const formElementErrorRef = createRef<FormElementErrorRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formElementErrorRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Form.ElementError
          ref={formElementErrorRef}
          message={text('errorMessage', 'Error Message')}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormFooter',
  () => {
    const formFooterRef = createRef<FormFooterRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formFooterRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Form.Footer ref={formFooterRef}>
          <Button text="Cancel" />
          <Button text="Confirm" color={ComponentColor.Success} />
        </Form.Footer>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormHelpText',
  () => {
    const formHelpTextRef = createRef<FormHelpTextRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formHelpTextRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.HelpText
            ref={formHelpTextRef}
            text={text('helpText', 'Help Text')}
          />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormLabel',
  () => {
    const formLabelRef = createRef<FormLabelRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formLabelRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.Label
            ref={formLabelRef}
            label={text('label', 'Element Label')}
            required={boolean('required', true)}
          />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormValidationElement',
  () => {
    const formValidationElementRef = createRef<FormValidationElementRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(formValidationElementRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form.ValidationElement
            ref={formValidationElementRef}
            label={text('label', 'Element Label')}
            value={text('value', 'Input Value (delete this to cause error)')}
            helpText={text('helpText', 'Help Text')}
            required={boolean('required', true)}
            validationFunc={mockValidationFunc}
          >
            {status => (
              <Input
                status={status}
                value={text(
                  'value',
                  'Input Value (delete this to cause error)'
                )}
                onChange={() => {
                  // do nothing
                }}
              />
            )}
          </Form.ValidationElement>
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormValidationElementReadme),
    },
  }
)

formExampleStories.add(
  'Validation Function',
  () => (
    <div className="story--example" style={{flexDirection: 'column'}}>
      <FormValidationTest />
    </div>
  ),
  {
    readme: {
      content: marked(FormValidationElementReadme),
    },
  }
)

formExampleStories.add(
  'Create User Form',
  () => {
    const usernameValidator = (value: string): string | null => {
      if (!value) {
        return 'Username cannot be blank'
      }

      return null
    }

    const emailValidator = (value: string): string | null => {
      if (!value) {
        return 'Email cannot be blank'
      }

      const regexBlurb = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!regexBlurb.test(value)) {
        return 'Please enter a valid email address'
      }

      return null
    }

    const submitStatus = (): ComponentStatus => {
      const usernameIsValid = usernameValidator(text('Username', ''))
      const emailIsValid = emailValidator(text('Email', ''))

      if (usernameIsValid === null && emailIsValid === null) {
        return ComponentStatus.Default
      }

      return ComponentStatus.Disabled
    }

    return (
      <div className="story--example">
        <div className="story--form-example">
          <Form>
            <Grid>
              <Grid.Row>
                <Grid.Column widthXS={Columns.Six}>
                  <Form.ValidationElement
                    label="Username"
                    required={true}
                    value={text('Username', '')}
                    validationFunc={usernameValidator}
                  >
                    {status => (
                      <Input
                        size={ComponentSize.Medium}
                        placeholder="A user needs a name..."
                        value={text('Username', '')}
                        status={status}
                        onChange={() => {
                          // do nothing
                        }}
                      />
                    )}
                  </Form.ValidationElement>
                </Grid.Column>
                <Grid.Column widthXS={Columns.Six}>
                  <Form.ValidationElement
                    label="Email"
                    required={true}
                    value={text('Email', '')}
                    validationFunc={emailValidator}
                  >
                    {status => (
                      <Input
                        size={ComponentSize.Medium}
                        placeholder="example@example.com"
                        value={text('Email', '')}
                        status={status}
                        onChange={() => {
                          // do nothing
                        }}
                      />
                    )}
                  </Form.ValidationElement>
                </Grid.Column>
                <Grid.Column widthXS={Columns.Twelve}>
                  <Form.Element label="Title or Description" required={false}>
                    <Input
                      size={ComponentSize.Medium}
                      placeholder="What role does this user play?"
                      value={text('Description', '')}
                      onChange={() => {
                        // do nothing
                      }}
                    />
                  </Form.Element>
                </Grid.Column>
                <Grid.Column widthXS={Columns.Twelve}>
                  <Form.Element label="Team" required={false}>
                    <Form.Box>
                      <FlexBox
                        stretchToFitWidth={true}
                        direction={FlexDirection.Row}
                        alignItems={AlignItems.Center}
                        margin={ComponentSize.Medium}
                      >
                        <SlideToggle
                          active={boolean('Team Toggle', true)}
                          onChange={() => {
                            // do nothing
                          }}
                          size={ComponentSize.ExtraSmall}
                          color={ComponentColor.Primary}
                        />
                        <InputLabel active={boolean('Team Toggle', true)}>
                          Add this user to all teams?
                        </InputLabel>
                      </FlexBox>
                    </Form.Box>
                  </Form.Element>
                </Grid.Column>
                <Grid.Column widthXS={Columns.Twelve}>
                  <Form.Footer>
                    <Button
                      text="Create User"
                      color={ComponentColor.Primary}
                      size={ComponentSize.Medium}
                      status={submitStatus()}
                    />
                  </Form.Footer>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formExampleStories.add(
  'Natural Language Form',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent width (px)', 500)}px`}}>
        <Panel>
          <DismissButton
            onClick={() => {
              // do nothing
            }}
            color={ComponentColor.Danger}
          />
          <Panel.Body
            size={
              ComponentSize[
                select('Panel: size', mapEnumKeys(ComponentSize), 'Small')
              ]
            }
          >
            <FlexBox
              direction={FlexDirection.Column}
              margin={
                ComponentSize[
                  select('margin', mapEnumKeys(ComponentSize), 'Small')
                ]
              }
            >
              <FlexBox
                stretchToFitWidth={true}
                direction={FlexDirection.Row}
                margin={
                  ComponentSize[
                    select('margin', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <TextBlock
                  size={
                    ComponentSize[
                      select(
                        'TextBlock, Input, Dropdown: size',
                        mapEnumKeys(ComponentSize),
                        'Small'
                      )
                    ]
                  }
                  text="When"
                />
                <FlexBox.Child grow={1}>
                  <SelectDropdown
                    options={['any value', 'all values']}
                    selectedOption="any value"
                    onSelect={() => {
                      // do nothing
                    }}
                    buttonSize={
                      ComponentSize[
                        select(
                          'TextBlock, Input, Dropdown: size',
                          mapEnumKeys(ComponentSize),
                          'Small'
                        )
                      ]
                    }
                  />
                </FlexBox.Child>
                <FlexBox.Child grow={2}>
                  <SelectDropdown
                    options={[
                      'is above threshold',
                      'is below threshold',
                      'is inside range',
                      'is outside range',
                    ]}
                    selectedOption="is inside range"
                    onSelect={() => {
                      // do nothing
                    }}
                    buttonSize={
                      ComponentSize[
                        select(
                          'TextBlock, Input, Dropdown: size',
                          mapEnumKeys(ComponentSize),
                          'Small'
                        )
                      ]
                    }
                  />
                </FlexBox.Child>
              </FlexBox>
              <FlexBox
                stretchToFitWidth={true}
                direction={FlexDirection.Row}
                margin={
                  ComponentSize[
                    select('margin', mapEnumKeys(ComponentSize), 'Small')
                  ]
                }
              >
                <FlexBox.Child>
                  <Input
                    type={InputType.Number}
                    value="90"
                    size={
                      ComponentSize[
                        select(
                          'TextBlock, Input, Dropdown: size',
                          mapEnumKeys(ComponentSize),
                          'Small'
                        )
                      ]
                    }
                  />
                </FlexBox.Child>
                <TextBlock
                  size={
                    ComponentSize[
                      select(
                        'TextBlock, Input, Dropdown: size',
                        mapEnumKeys(ComponentSize),
                        'Small'
                      )
                    ]
                  }
                  text="to"
                />
                <FlexBox.Child>
                  <Input
                    type={InputType.Number}
                    value="100"
                    size={
                      ComponentSize[
                        select(
                          'TextBlock, Input, Dropdown: size',
                          mapEnumKeys(ComponentSize),
                          'Small'
                        )
                      ]
                    }
                  />
                </FlexBox.Child>
                <TextBlock
                  size={
                    ComponentSize[
                      select(
                        'TextBlock, Input, Dropdown: size',
                        mapEnumKeys(ComponentSize),
                        'Small'
                      )
                    ]
                  }
                  text="set status to"
                />
                <TextBlock
                  size={
                    ComponentSize[
                      select(
                        'TextBlock, Input, Dropdown: size',
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
              </FlexBox>
            </FlexBox>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(NaturalLanguageFormReadme),
    },
  }
)
