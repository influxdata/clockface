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
  JustifyContent,
} from '../../../Types'
import {IndexList} from '../../IndexList'
import {useEffect, useState} from '@storybook/client-api'
import {FlexBox} from '../../FlexBox'
import {AccordionBodyItem} from '../AccordionBodyItem'
/* import {AccordionNestedItem} from '../AccordionNestedItem'
 */
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
    const [allAccess2, setAllAccess2] = useState(false)
    const [readAccss2, setReadAccess2] = useState(false)
    const [writeAccess2, setWriteAccess2] = useState(false)
    const [allAccess3, setAllAccess3] = useState(false)
    const [readAccss3, setReadAccess3] = useState(false)
    const [writeAccess3, setWriteAccess3] = useState(false)
    const [individualReads, setIndividualAccessStates] = useState(
      individualTelegrafs
    )

    console.log('this', {individualTelegrafs, ...individualReads})

    const readToggle1 = (
      <Toggle
        id={'Read1'}
        type={InputToggleType.Checkbox}
        onChange={() => handleArrayToggleChange('telegraf1', 'read')}
        size={ComponentSize.ExtraSmall}
        checked={individualReads.telegraf1.read}
      />
    )
    const readToggle2 = (
      <Toggle
        id={'Read2'}
        type={InputToggleType.Checkbox}
        onChange={() => handleArrayToggleChange('telegraf2', 'read')}
        size={ComponentSize.ExtraSmall}
        checked={individualReads.telegraf2.read}
      />
    )

    const writeToggle1 = (
      <Toggle
        id={'Write1'}
        type={InputToggleType.Checkbox}
        onChange={() => handleArrayToggleChange('telegraf1', 'write')}
        size={ComponentSize.ExtraSmall}
        checked={individualReads.telegraf1.write}
      />
    )

    const writeToggle2 = (
      <Toggle
        id={'Write2'}
        type={InputToggleType.Checkbox}
        onChange={() => handleArrayToggleChange('telegraf2', 'write')}
        size={ComponentSize.ExtraSmall}
        checked={individualReads.telegraf2.write}
      />
    )

    const allToggle1 = (
      <Toggle
        id={'All1'}
        type={InputToggleType.Checkbox}
        onChange={() => handleArrayToggleChange('telegraf1', 'all')}
        size={ComponentSize.ExtraSmall}
        checked={
          individualReads.telegraf1.write === true &&
          individualReads.telegraf1.read === true
        }
      />
    )

    const allToggle2 = (
      <Toggle
        id={'All2'}
        type={InputToggleType.Checkbox}
        onChange={() => handleArrayToggleChange('telegraf2', 'all')}
        size={ComponentSize.ExtraSmall}
        checked={
          individualReads.telegraf2.write === true &&
          individualReads.telegraf2.read === true
        }
      />
    )

    const readToggles = [readToggle1, readToggle2]
    const writeToggles = [writeToggle1, writeToggle2]
    const allToggles = [allToggle1, allToggle2]

    useEffect(() => {
      setReadAccess(allAccess)
      setWriteAccess(allAccess)
      const object = individualReads
      toggleAllIndividualAccessStates(object, ['read', 'write'], allAccess)
      setIndividualAccessStates(object)
    }, [allAccess])

    useEffect(() => {
      setReadAccess2(allAccess2)
      setWriteAccess2(allAccess2)
    }, [allAccess2])

    useEffect(() => {
      setReadAccess(allAccess3)
      setWriteAccess(allAccess3)
    }, [allAccess3])

    useEffect(() => {
      if (readAccss || writeAccess) {
      }

      if (readAccss && writeAccess) {
        setAllAccess(true)
      }

      if (!readAccss && !writeAccess) {
        setAllAccess(false)
      }

      const object = individualReads
      toggleAllIndividualAccessStates(object, ['read'], readAccss)
      toggleAllIndividualAccessStates(object, ['write'], writeAccess)
      setIndividualAccessStates(object)
    }, [readAccss, writeAccess])

    useEffect(() => {
      if (readAccss2 || writeAccess2) {
      }

      if (readAccss2 && writeAccess2) {
        setAllAccess2(true)
      }

      if (!readAccss2 && !writeAccess2) {
        setAllAccess2(false)
      }
    }, [readAccss2, writeAccess2])

    useEffect(() => {
      if (readAccss3 || writeAccess3) {
      }

      if (readAccss3 && writeAccess3) {
        setAllAccess3(true)
      }

      if (!readAccss3 && !writeAccess3) {
        setAllAccess3(false)
      }
    }, [readAccss3, writeAccess3])

    const toggleAllIndividualAccessStates = (
      object: any,
      actionType: string[],
      state: boolean
    ) => {
      if (actionType.length === 1) {
        console.log('hello')
        object.telegraf1[`${actionType[0]}`] = state
        object.telegraf2[`${actionType[0]}`] = state
      } else {
        object.telegraf1[`${actionType[0]}`] = state
        object.telegraf2[`${actionType[0]}`] = state
        object.telegraf1[`${actionType[1]}`] = state
        object.telegraf2[`${actionType[1]}`] = state
      }
      return object
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

    const handleArrayToggleChange = (
      name: string,
      actionType: string
    ): void => {
      /* eslint-disable */
      /* eslint-enable */

      const object = individualReads
      if (actionType === 'all') {
        object[name].read = !object.telegraf1.read
        object[name].write = !object.telegraf1.write
      } else {
        object[name][`${actionType}`] = !object[name][`${actionType}`]
      }
      console.log('object: ', object)
      setIndividualAccessStates(object)

      //setChecked(object)
    }
    const paddingLeft = {paddingLeft: '40px'}
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
                style={paddingLeft}
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
              <IndexList.Cell alignment={Alignment.Left} style={paddingLeft}>
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
          ></Toggle>
        </FlexBox.Child>
      </FlexBox>
    )
    /* const accordionHeaderChecks = (
      <FlexBox margin={ComponentSize.Small}>
        <Toggle
          id={'0'}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(allAccess, setAllAccess)}
          size={ComponentSize.ExtraSmall}
          checked={allAccess}
          indeterminate={indeterminateState}
          style={margin}
        ></Toggle>
        <InputLabel htmlFor={'0'} size={ComponentSize.Medium}>
          Checks
        </InputLabel>
      </FlexBox>
    )

    const accordionHeaderDashboards = (
      <FlexBox margin={ComponentSize.Small}>
        <Toggle
          id={'0'}
          type={InputToggleType.Checkbox}
          onChange={() => handleToggleChange(allAccess, setAllAccess)}
          size={ComponentSize.ExtraSmall}
          checked={allAccess}
          indeterminate={indeterminateState}
          style={margin}
        ></Toggle>
        <InputLabel htmlFor={'0'} size={ComponentSize.Medium}>
          Dashboards
        </InputLabel>
      </FlexBox>
    ) */

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

    /* const accordionBodyToggle2 = (
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
    ) */

    /* const nestedAccordionHeader = (
      <FlexBox margin={ComponentSize.Small}>
        <InputLabel size={ComponentSize.Medium} style={margin}>
          {' '}
          Manage Individual Telegraf Permissions
        </InputLabel>
      </FlexBox>
    ) */

    const nestedAccordion = <Accordion>{simpleTable}</Accordion>

    console.log(nestedAccordion)

    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
        <div style={{width: '560px'}}>
          <Accordion /* accordionHeader={accordionHeader} */>
            <Accordion.AccordionHeader>
              {accordionHeader(
                '0',
                'Telegraf',
                allAccess,
                setAllAccess,
              )}
            </Accordion.AccordionHeader>
            <AccordionBodyItem>
              {accordionHeader(
                '6',
                'Telegraf1',
                readAccss3,
                setReadAccess3,
              )}{' '}
            </AccordionBodyItem>
            <AccordionBodyItem>
              {accordionHeader(
                '6',
                'Telegraf2',
                writeAccess3,
                setWriteAccess3,
              )}{' '}
            </AccordionBodyItem>

            {
              //nestedAccordion
            }
          </Accordion>
          <Accordion /* accordionHeader={accordionHeader} */>
            <Accordion.AccordionHeader>
              {accordionHeader(
                '3',
                'Checks',
                allAccess2,
                setAllAccess2,
              )}
            </Accordion.AccordionHeader>
            <AccordionBodyItem>
              {accordionBodyToggle('4', 'Read', readAccss2, setReadAccess2)}
            </AccordionBodyItem>
            <AccordionBodyItem>
              {accordionBodyToggle('5', 'Write', writeAccess2, setWriteAccess2)}
            </AccordionBodyItem>
          </Accordion>
          <Accordion /* accordionHeader={accordionHeader} */>
            <Accordion.AccordionHeader>
              {accordionHeader(
                '6',
                'Dashboards',
                allAccess3,
                setAllAccess3,
              )}
            </Accordion.AccordionHeader>
            <AccordionBodyItem>
              {accordionBodyToggle('7', 'Read', readAccss3, setReadAccess3)}
            </AccordionBodyItem>
            <AccordionBodyItem>
              {accordionBodyToggle('8', 'Write', writeAccess3, setWriteAccess3)}
            </AccordionBodyItem>
          </Accordion>
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
