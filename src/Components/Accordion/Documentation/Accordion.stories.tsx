// Libraries
import React, {createRef} from 'react'
import marked from 'marked'
import {InputLabel, Toggle} from '../../Inputs'

// Storybook
import {storiesOf} from '@storybook/react'
import {array, withKnobs} from '@storybook/addon-knobs'

// Components
import {Accordion, AccordionRef} from '../'

// Types

// Notes
import AccordionReadme from './Accordion.md'
import {
  Alignment,
  ComponentSize,
  FlexDirection,
  InputToggleType,
} from '../../../Types'
import {IndexList} from '../../IndexList'
import {useEffect, useState} from '@storybook/client-api'
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

    const margin = {marginLeft: '24px'}

    const individualTelegrafs = {
      telegraf1: {
        read: false,
        write: false,
      },
      telegraf2: {
        read: false,
        write: false,
      },
    }

    console.log('this', individualTelegrafs.telegraf1)

    const columnWidths = array('Column Widths', ['70%', '10%', '10%', '10%'])
    const exampleHeaders = array('Headers', ['Name', 'Read', 'Write', 'All'])
    const exampleNames = array('Names', ['Telegraf1', 'Telegraf2'])

    const [allAccess, setAllAccess] = useState(false)
    const [readAccss, setReadAccess] = useState(false)
    const [writeAccess, setWriteAccess] = useState(false)
    const [indeterminateState, setIndeterminate] = useState(false)
    const [individualReads, setIndividualAccessStates] = useState(
      individualTelegrafs
    )

    console.log('this', {individualTelegrafs , ...individualReads})
    
    const readToggle1 = (
      <Toggle
        id={'Read1'}
        type={InputToggleType.Checkbox}
        onChange={() =>
          handleArrayToggleChange( 'telegraf1', 'read')
        }
        size={ComponentSize.ExtraSmall}
        checked={individualReads.telegraf1.read}
      />
    )
    const readToggle2 = (
      <Toggle
        id={'Read2'}
        type={InputToggleType.Checkbox}
        onChange={() =>
            handleArrayToggleChange( 'telegraf2', 'read')
          }
        size={ComponentSize.ExtraSmall}
        checked={individualReads.telegraf2.read}
      />
    )

    const writeToggle1 = (
        <Toggle
          id={'Write1'}
          type={InputToggleType.Checkbox}
          onChange={() =>
            handleArrayToggleChange( 'telegraf1', 'write')
          }
          size={ComponentSize.ExtraSmall}
          checked={individualReads.telegraf1.write}
        />
      )


      const writeToggle2 = (
        <Toggle
          id={'Write2'}
          type={InputToggleType.Checkbox}
          onChange={() =>
            handleArrayToggleChange( 'telegraf2', 'write')
          }
          size={ComponentSize.ExtraSmall}
          checked={individualReads.telegraf2.write}
        />
      )

      const allToggle1 = (
        <Toggle
          id={'All1'}
          type={InputToggleType.Checkbox}
          onChange={() =>
            handleArrayToggleChange( 'telegraf1', 'all')
          }
          size={ComponentSize.ExtraSmall}
          checked={(individualReads.telegraf1.write === true && individualReads.telegraf1.read === true )}
        />
      )

      const allToggle2 = (
        <Toggle
          id={'All2'}
          type={InputToggleType.Checkbox}
          onChange={() =>
            handleArrayToggleChange( 'telegraf2', 'all')
          }
          size={ComponentSize.ExtraSmall}
          checked={(individualReads.telegraf2.write === true && individualReads.telegraf2.read === true )}
        />
      )

    const readToggles = [readToggle1, readToggle2]
    const writeToggles = [writeToggle1, writeToggle2]
    const allToggles = [allToggle1, allToggle2]

    useEffect(() => {
      setReadAccess(allAccess)
      setWriteAccess(allAccess)
      const object = individualReads;
      toggleAllIndividualAccessStates(object,['read','write'], allAccess);
      setIndividualAccessStates(object)
    }, [allAccess])

    useEffect(() => {
      if (readAccss || writeAccess) {
        setIndeterminate(true)
      }

      if (readAccss && writeAccess) {
        setAllAccess(true)
        setIndeterminate(false)
      }

      if (!readAccss && !writeAccess) {
        setIndeterminate(false)
        setAllAccess(false)
      }

      const object = individualReads;
      toggleAllIndividualAccessStates(object,['read'], readAccss); 
      toggleAllIndividualAccessStates(object,['write'],writeAccess)
      setIndividualAccessStates(object)
    }, [readAccss, writeAccess])

    const toggleAllIndividualAccessStates = (object: any, actionType: string[], state: boolean) => {
        if(actionType.length === 1 ){
            console.log('hello')
        object.telegraf1[`${actionType[0]}`] = state;
        object.telegraf2[`${actionType[0]}`] = state;
        } else {
        object.telegraf1[`${actionType[0]}`] = state;
        object.telegraf2[`${actionType[0]}`] = state;
        object.telegraf1[`${actionType[1]}`] = state;
        object.telegraf2[`${actionType[1]}`] = state;
        }
        return object;
    }
    const handleToggleChange = (
      checked: boolean,
      setChecked: Function
    ): void => {
      /* eslint-disable */
      /* eslint-enable */
      console.log('handle')
      setChecked(!checked)
    }

    const handleArrayToggleChange = (name: string, actionType: string ): void => {
      /* eslint-disable */
      /* eslint-enable */

      const object = individualReads;
      if (actionType === 'all'){
        object[name].read = !object.telegraf1.read;
        object[name].write = !object.telegraf1.write;


    } else {
      object[name][`${actionType}`] = !object[name][`${actionType}`];
    }
      console.log('object: ', object)
      setIndividualAccessStates(object);

      //setChecked(object)
    }



    const simpleTable = (
      <IndexList>
        <IndexList.Header>
          {exampleHeaders.map((col, i) =>
            i === 0 ? (
              <IndexList.HeaderCell
                key={`header--${col}${i}`}
                columnName={col}
                width={columnWidths[i]}
                alignment={Alignment.Left}
              />
            ) : (
              <IndexList.HeaderCell
                key={`header--${col}${i}`}
                columnName={col}
                width={columnWidths[i]}
                alignment={Alignment.Center}
              />
            )
          )}
        </IndexList.Header>
        <IndexList.Body
          emptyState={<div>Empty</div>}
          columnCount={exampleNames.length}
        >
          {exampleNames.map((row, i) => (
            <IndexList.Row key={`row--${row}${i}`}>
              <IndexList.Cell alignment={Alignment.Left}>
                {exampleNames[i]}
              </IndexList.Cell>
              <IndexList.Cell alignment={Alignment.Center}>
                {readToggles[i]}
              </IndexList.Cell>
              <IndexList.Cell alignment={Alignment.Center}>
                {writeToggles[i]}
              </IndexList.Cell>
              <IndexList.Cell alignment={Alignment.Center}>
                {allToggles[i]}
              </IndexList.Cell>
            </IndexList.Row>
          ))}
        </IndexList.Body>
      </IndexList>
    )

    const accordionHeader = (
      <FlexBox margin={ComponentSize.Small}>
        <Toggle
          id={'0'}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(allAccess, setAllAccess)}
          size={ComponentSize.ExtraSmall}
          checked={allAccess}
          indeterminate={indeterminateState}
        ></Toggle>
        <InputLabel htmlFor={'0'} size={ComponentSize.Medium}>
          Telegraf
        </InputLabel>
      </FlexBox>
    )

    const accordionBodyToggle1 = (
      <FlexBox margin={ComponentSize.Small}>
        <Toggle
          id={'1'}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(readAccss, setReadAccess)}
          size={ComponentSize.ExtraSmall}
          checked={readAccss}
          style={margin}
        ></Toggle>
        <InputLabel htmlFor={'1'} size={ComponentSize.Medium}>
          Read
        </InputLabel>
      </FlexBox>
    )

    const accordionBodyToggle2 = (
      <FlexBox margin={ComponentSize.Small}>
        <Toggle
          id={'2'}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(writeAccess, setWriteAccess)}
          size={ComponentSize.ExtraSmall}
          checked={writeAccess}
          style={margin}
        ></Toggle>
        <InputLabel htmlFor={'2'} size={ComponentSize.Medium}>
          Write
        </InputLabel>
      </FlexBox>
    )

    const nestedAccordionHeader = (
      <InputLabel size={ComponentSize.Medium} style={margin}>
        {' '}
        Manage Individual Telegraf Permissions
      </InputLabel>
    )

    const nestedAccordion = (
      <Accordion accordionHeader={nestedAccordionHeader}>
        {simpleTable}
      </Accordion>
    )
    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
        <FlexBox direction={FlexDirection.Column}>
          <Accordion accordionHeader={accordionHeader}>
            {accordionBodyToggle1}
            {accordionBodyToggle2}
            {nestedAccordion}
          </Accordion>
          <Accordion accordionHeader={accordionHeader}></Accordion>
        </FlexBox>
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
