// Libraries
import React, {createRef, useState} from 'react'
import marked from 'marked'
import {Toggle} from '../../Inputs'


// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'


// Components
import {Accordion, AccordionRef} from '../'

// Types

// Notes
import AccordionReadme from './Accordion.md'
import { InputToggleType } from '../../../Types'

const accordionStories = storiesOf('Atomic|Accordion', module).addDecorator(withKnobs)

accordionStories.add(
  'Example',
  () => {
    const alertRef = createRef<AccordionRef>()
    const [checked, setChecked] = useState<boolean>(false)
    const [checked2, setChecked2] = useState<boolean>(false);
    const handleToggleChange = (value: string): void => {
        console.log('hello')
      /* eslint-enable */
      setChecked(!checked)
    }
    const handleToggleChange2 = (value: string): void => {
        console.log('hello2')
    
        /* eslint-enable */
        setChecked2(!checked2)
      }
    const logRef = (): void => {
      /* eslint-disable */
      console.log(alertRef.current)
      /* eslint-enable */
    }

    const accordion = (
        <Accordion>

        <Toggle type={InputToggleType.Checkbox} id={'5'} onChange={handleToggleChange2} checked={checked2}></Toggle>
        <span>hello</span>

    </Accordion>
    )

    return (
      <div className="story--example">
        <Accordion>

            <Toggle type={InputToggleType.Checkbox} id={'1'} onChange={handleToggleChange} checked={checked}></Toggle>
            {accordion}

        </Accordion>

        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AccordionReadme),
    },
  }
)
