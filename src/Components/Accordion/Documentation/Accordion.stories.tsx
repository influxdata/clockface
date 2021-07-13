// Libraries
import React, {createRef, useState} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import { withKnobs} from '@storybook/addon-knobs'

// Components
import { Accordion, AccordionRef} from '../'

// Types

// Notes
import AccordionReadme from './Accordion.md'
 import {InputLabel, Toggle} from '../../Inputs'
import {
  ComponentSize,
  FlexDirection,
  InputToggleType,
  JustifyContent,
} from '../../../Types'
import {FlexBox} from '../../FlexBox'  

const accordionStories = storiesOf('Atomic|Accordion', module).addDecorator(
  withKnobs
)

accordionStories.add(
  'Example',
  () => {
    const alertRef = createRef<AccordionRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(alertRef.current)
      /* eslint-enable */
    }

     const margin = {marginRight: '10px'}
    



    const [readAccss, setReadAccess] = useState(false)
    const [writeAccess, setWriteAccess] = useState(false)

    


    const handleToggleChange = (
      checked: boolean,
      setChecked: Function
    ): void => {
      
      setChecked(!checked)
    }


    const accordionHeader = (
      id: string,
      title: string,
      state: boolean,
      setter: Function,
    ) => (
      <FlexBox
        margin={ComponentSize.Small}
        justifyContent={JustifyContent.SpaceBetween}
        direction={FlexDirection.Row}
        stretchToFitWidth={true}
      >
        <FlexBox.Child basis={40} grow={8}>
          <InputLabel size={ComponentSize.Medium}>{title}</InputLabel>
        </FlexBox.Child>
        <FlexBox.Child grow={1}>
          <Toggle
            id={id}
            type={InputToggleType.Checkbox}
            onChange={() => handleToggleChange(state, setter)}
            size={ComponentSize.ExtraSmall}
            checked={state}
            style={margin}
            tabIndex={0}
          ></Toggle>
        </FlexBox.Child>
        <FlexBox.Child grow={1}>
          <Toggle
            id={id}
            type={InputToggleType.Checkbox}
            onChange={() => handleToggleChange(state, setter)}
            size={ComponentSize.ExtraSmall}
            checked={state}
            style={margin}
            tabIndex={0}
          ></Toggle>
        </FlexBox.Child>
      </FlexBox>
    )

    const accordionBodyToggle = (
      id: string,
      title: string,
      state: boolean,
      setter: Function
    ) => (
      <FlexBox margin={ComponentSize.Small}>
        <Toggle
          id={id}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(state, setter)}
          size={ComponentSize.ExtraSmall}
          checked={state}
          style={margin}
        ></Toggle>
        <InputLabel htmlFor={'1'} size={ComponentSize.Medium}>
          {title}
        </InputLabel>
      </FlexBox>
    )  
  
    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
        <div 
        style= {{width: '560px'}}>
       {    <Accordion >
            <Accordion.AccordionHeader>
              {accordionHeader(
                '0',
                'Telegraf',
                readAccss,
                setReadAccess,
              )}
            </Accordion.AccordionHeader>
            <Accordion.AccordionBodyItem>
            {accordionBodyToggle('4', 'Read', writeAccess, setWriteAccess)}

            </Accordion.AccordionBodyItem>
          </Accordion>   }
          </div>
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
