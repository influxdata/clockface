import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Form} from './Form'
import {FormBox} from './FormBox'
import {FormLabel} from './FormLabel'
import {FormFooter} from './FormFooter'
import {FormDivider} from './FormDivider'
import {FormElement} from './FormElement'
import {FormHelpText} from './FormHelpText'
import {FormElementError} from './FormElementError'
import {FormValidationElement} from './FormValidationElement'
import {withKnobs, object, text, select, boolean} from '@storybook/addon-knobs'
import {Columns, ComponentStatus} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const formStories = storiesOf('Form', module).addDecorator(withKnobs)

const handleValidation = () => {
  return null
}

formStories.add('Form Component Family', () => {
  const theStatus =
    ComponentStatus[select('status', mapEnumKeys(ComponentStatus), 'Error')]

  return (
    <Form style={object('style', {})}>
      <Form.Box>
        <Form.Element
          label={text('label', 'Element Label')}
          helpText={text('helpText', 'Help Text')}
          errorMessage={text('errorMessage', 'Error Message')}
          required={boolean('required', true)}
        >
          <div className="mockComponent input" />
        </Form.Element>
        <Form.Divider />
      </Form.Box>
      <Form.Box>
        <Form.ValidationElement
          label={text('label', 'Element Label')}
          value={text('value', 'Element Label')}
          required={boolean('required', true)}
          validationFunc={handleValidation}
        >
          {(status = theStatus) => (
            <div className="mockComponent input">{status}</div>
          )}
        </Form.ValidationElement>
      </Form.Box>
      <Form.Footer>
        <div className="mockComponent stretch">Form Footer</div>
      </Form.Footer>
    </Form>
  )
})

formStories.add('FormBox Component', () => <FormBox />)

formStories.add('FormDivider Component', () => <FormDivider />)

formStories.add('FormElement Component', () => (
  <FormElement
    label={text('label', 'Element Label')}
    helpText={text('helpText', 'Help Text')}
    errorMessage={text('errorMessage', 'Error Message')}
    required={boolean('required', true)}
  >
    <div className="mockComponent input" />
  </FormElement>
))

formStories.add('FormElementError Component', () => (
  <FormElementError message={text('errorMessage', 'Error Message')} />
))

formStories.add('FormFooter Component', () => (
  <FormFooter
    widthXS={Columns[select('widthXS', mapEnumKeys(Columns), 'Ten')]}
    widthSM={Columns[select('widthSM', mapEnumKeys(Columns), 'Ten')]}
    widthMD={Columns[select('widthMD', mapEnumKeys(Columns), 'Ten')]}
    widthLG={Columns[select('widthLG', mapEnumKeys(Columns), 'Ten')]}
    offsetXS={Columns[select('offsetXS', mapEnumKeys(Columns), 'One')]}
    offsetSM={Columns[select('offsetSM', mapEnumKeys(Columns), 'One')]}
    offsetMD={Columns[select('offsetMD', mapEnumKeys(Columns), 'One')]}
    offsetLG={Columns[select('offsetLG', mapEnumKeys(Columns), 'One')]}
  >
    <div className="mockComponent stretch">Form Footer</div>
  </FormFooter>
))

formStories.add('FormHelpText Component', () => (
  <FormHelpText text={text('helpText', 'Help Text')} />
))

formStories.add('FormLabel Component', () => (
  <FormLabel
    label={text('label', 'Element Label')}
    required={boolean('required', true)}
  >
    <div className="mockComponent input" />
  </FormLabel>
))

formStories.add('FormValidationElement Component', () => {
  const theStatus =
    ComponentStatus[select('status', mapEnumKeys(ComponentStatus), 'Error')]

  return (
    <FormValidationElement
      label={text('label', 'Element Label')}
      value={text('value', 'Element Label')}
      required={boolean('required', true)}
      validationFunc={handleValidation}
    >
      {(status = theStatus) => (
        <div className="mockComponent input">{status}</div>
      )}
    </FormValidationElement>
  )
})
