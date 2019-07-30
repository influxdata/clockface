// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, boolean, color} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Form} from './Form'
import {FormBox} from './FormBox'
import {FormLabel} from './FormLabel'
import {FormFooter} from './FormFooter'
import {FormDivider} from './FormDivider'
import {FormElement} from './FormElement'
import {FormHelpText} from './FormHelpText'
import {FormElementError} from './FormElementError'
import {FormValidationElement} from './FormValidationElement'
import {Grid} from '../GridLayout/Grid'
import {Button} from '../Button/Composed/Button'
import {Input} from '../Inputs/Input'
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'
import {SlideToggle} from '../SlideToggle/SlideToggle'

// Types
import {
  Columns,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  FlexDirection,
  AlignItems,
} from '../../Types'

// Notes
import FormReadme from './Form.md'

const formStories = storiesOf('Components|Forms/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const formExampleStories = storiesOf('Components|Forms/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const mockValidationFunc = (value: string): string | null => {
  if (!value) {
    return 'Field cannot be empty'
  }

  return null
}

formStories.add(
  'Form',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <Form />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormBox',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <FormBox />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormDivider',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <FormDivider lineColor={color('color', '')} />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormElement',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <FormElement
          label={text('label', 'Element Label')}
          helpText={text('helpText', 'Help Text')}
          errorMessage={text('errorMessage', 'Error Message')}
          required={boolean('required', true)}
        >
          <div className="mockComponent mockInput">Input Goes Here</div>
        </FormElement>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormElementError',
  () => (
    <div className="story--example">
      <FormElementError message={text('errorMessage', 'Error Message')} />
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormFooter',
  () => (
    <div className="story--example">
      <FormFooter>
        <Button text="Cancel" />
        <Button text="Confirm" color={ComponentColor.Success} />
      </FormFooter>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormHelpText',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <FormHelpText text={text('helpText', 'Help Text')} />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormLabel',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <FormLabel
          label={text('label', 'Element Label')}
          required={boolean('required', true)}
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
    },
  }
)

formStories.add(
  'FormValidationElement',
  () => (
    <div className="story--example">
      <div className="story--form-example">
        <FormValidationElement
          label={text('label', 'Element Label')}
          value={text('value', 'Input Value (delete this to cause error)')}
          helpText={text('helpText', 'Help Text')}
          required={boolean('required', true)}
          validationFunc={mockValidationFunc}
        >
          {status => (
            <div className="mockComponent input">{`(status) => <child>${status}</child>`}</div>
          )}
        </FormValidationElement>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(FormReadme),
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
                    />
                  </Form.Element>
                </Grid.Column>
                <Grid.Column widthXS={Columns.Twelve}>
                  <Form.Element label="Team" required={false}>
                    <Form.Box>
                      <ComponentSpacer
                        stretchToFitWidth={true}
                        direction={FlexDirection.Row}
                        alignItems={AlignItems.Center}
                        margin={ComponentSize.Medium}
                      >
                        <SlideToggle
                          active={boolean('Team Toggle', true)}
                          onChange={() => {}}
                          size={ComponentSize.ExtraSmall}
                          color={ComponentColor.Primary}
                        />
                        <SlideToggle.Label
                          text="Add this user to all teams?"
                          active={boolean('Team Toggle', true)}
                        />
                      </ComponentSpacer>
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
