// Libraries
import React, {
  createRef,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {boolean, object, select, withKnobs} from '@storybook/addon-knobs'

// Components
import {Accordion, AccordionRef} from '../'

// Types

// Notes
import AccordionReadme from './Accordion.md'
import {InputLabel, Toggle} from '../../Inputs'
import {
  AlignItems,
  ComponentSize,
  FlexDirection,
  IconPlacement,
  InputToggleType,
  JustifyContent,
} from '../../../Types'
import {FlexBox} from '../../FlexBox'
import {AccordionBodyItem} from '../AccordionBodyItem'
import {mapEnumKeys} from '../../../Utils/storybook'

const accordionStories = storiesOf(
  'Components|Accordion/Examples',
  module
).addDecorator(withKnobs)

const accordionFamilyStories = storiesOf(
  'Components|Accordion/Family',
  module
).addDecorator(withKnobs)

accordionStories.add(
  'Accordion with Toggles',
  () => {
    const accordionRef = createRef<AccordionRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(accordionRef.current)
      /* eslint-enable */
    }

    const margin = {marginRight: '10px'}
    const states = {
      telegraf1: {
        read: false,
        write: false,
      },
      telegraf2: {
        read: false,
        write: false,
      },
    }

    const states2 = {
      bucket1: {
        read: false,
        write: false,
      },
      bucket2: {
        read: false,
        write: false,
      },
    }

    const [readAccss, setReadAccess] = useState(false)
    const [writeAccess, setWriteAccess] = useState(false)
    const [individualAccessStates, setIndividualAccessStates] = useState(states)

    const [readAccss2, setReadAccess2] = useState(false)
    const [writeAccess2, setWriteAccess2] = useState(false)
    const [individualAccessStates2, setIndividualAccessStates2] = useState(
      states2
    )
    setReadAccess2
    setWriteAccess2
    console.log(individualAccessStates.telegraf1)

    useEffect(() => {
      toggleAllIndividualAccessStates(
        'read',
        readAccss,
        individualAccessStates,
        setIndividualAccessStates
      )
    }, [readAccss])

    useEffect(() => {
      toggleAllIndividualAccessStates(
        'write',
        writeAccess,
        individualAccessStates,
        setIndividualAccessStates
      )
    }, [writeAccess])

    useEffect(() => {
      toggleAllIndividualAccessStates(
        'read',
        readAccss2,
        individualAccessStates2,
        setIndividualAccessStates2
      )
    }, [readAccss2])

    useEffect(() => {
      toggleAllIndividualAccessStates(
        'write',
        writeAccess2,
        individualAccessStates2,
        setIndividualAccessStates2
      )
    }, [writeAccess2])

    const handleToggleChange = (
      checked: boolean,
      setChecked: Function
    ): void => {
      setChecked(!checked)
    }

    const handleArrayToggleChange = (
      name: string,
      actionType: string,
      stateObject: object,
      setter: Function
    ): void => {
      const object = Object.assign({}, stateObject)
      const newState = {
        [name]: {
          [actionType]: !object[name][`${actionType}`],
        },
      }
      const newerObject = {[name]: {...object[name], ...newState[name]}}
      const newObject = {...object, ...newerObject}
      setter(newObject)
    }

    const toggleAllIndividualAccessStates = (
      actionType: string,
      state: boolean,
      stateObject: object,
      setter: Function
    ): void => {
      const object = Object.assign({}, stateObject)
      Object.keys(object).forEach(element => {
        const newState = {[actionType]: state}
        const value = object[element]
        const newValue = {...value, ...newState}
        object[element] = newValue
      })
      setter(object)
    }

    const accordionHeader = (
      id: string,
      title: string,
      states: boolean[],
      setters: Function[]
    ) => (
      <FlexBox
        margin={ComponentSize.Small}
        justifyContent={JustifyContent.SpaceBetween}
        direction={FlexDirection.Row}
        stretchToFitWidth={true}
        alignItems={AlignItems.Center}
        /* onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation()
        }} */
        style={{textAlign: 'start'}}
      >
        <FlexBox.Child basis={40} grow={8}>
          <InputLabel size={ComponentSize.Medium}>{title}</InputLabel>
        </FlexBox.Child>
        <FlexBox.Child grow={1}>
          <Toggle
            id={id}
            type={InputToggleType.Checkbox}
            onChange={() => handleToggleChange(states[0], setters[0])}
            size={ComponentSize.ExtraSmall}
            checked={states[0]}
            style={margin}
            tabIndex={0}
            onKeyUp={(e: KeyboardEvent) => {
              e.stopPropagation()
            }}
          ></Toggle>
        </FlexBox.Child>
        <FlexBox.Child grow={1}>
          <Toggle
            id={id + '1'}
            type={InputToggleType.Checkbox}
            onChange={() => handleToggleChange(states[1], setters[1])}
            onKeyUp={(e: KeyboardEvent) => {
              e.stopPropagation()
            }}
            size={ComponentSize.ExtraSmall}
            checked={states[1]}
            style={margin}
            tabIndex={0}
          ></Toggle>
        </FlexBox.Child>
      </FlexBox>
    )
    const accordionBody = (
      id: string,
      title: string,
      name: string,
      setter: Function,
      stateObject: object
    ) => (
      <FlexBox
        margin={ComponentSize.Small}
        justifyContent={JustifyContent.SpaceBetween}
        direction={FlexDirection.Row}
        stretchToFitWidth={true}
        alignItems={AlignItems.Center}
        /* onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation()
        }} */
        style={{textAlign: 'start'}}
      >
        <FlexBox.Child basis={40} grow={8}>
          <InputLabel size={ComponentSize.Medium}>{title}</InputLabel>
        </FlexBox.Child>
        <FlexBox.Child grow={1}>
          <Toggle
            id={id}
            type={InputToggleType.Checkbox}
            onChange={() =>
              handleArrayToggleChange(
                name,
                'read',
                individualAccessStates,
                setter
              )
            }
            size={ComponentSize.ExtraSmall}
            checked={stateObject[name]['read']}
            style={margin}
            tabIndex={0}
            onKeyUp={(e: KeyboardEvent) => {
              e.stopPropagation()
            }}
          ></Toggle>
        </FlexBox.Child>
        <FlexBox.Child grow={1}>
          <Toggle
            id={id + '1'}
            type={InputToggleType.Checkbox}
            onChange={() =>
              handleArrayToggleChange(
                name,
                'write',
                individualAccessStates,
                setter
              )
            }
            onKeyUp={(e: KeyboardEvent) => {
              e.stopPropagation()
            }}
            size={ComponentSize.ExtraSmall}
            checked={stateObject[name]['write']}
            style={margin}
            tabIndex={0}
          ></Toggle>
        </FlexBox.Child>
      </FlexBox>
    )
    console.log(individualAccessStates2['bucket1'])
    

    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
        <Accordion
          iconPlacement={
            IconPlacement[
              select('Icon Placement', mapEnumKeys(IconPlacement), 'Left')
            ]
          }
          expanded={boolean('expanded', true)}
        >
          <Accordion.AccordionHeader>
            {accordionHeader(
              '0',
              'Telegraf Configurations',
              [readAccss, writeAccess],
              [setReadAccess, setWriteAccess]
            )}
          </Accordion.AccordionHeader>
          <AccordionBodyItem>
            <InputLabel size={ComponentSize.Medium}>
              {'Individual Telegraf Configurations'}
            </InputLabel>
          </AccordionBodyItem>
          <Accordion.AccordionBodyItem>
            {console.log('here: ', individualAccessStates)}
            {accordionBody(
              '1',
              'Telegraf Configuration 1',
              'telegraf1',
              setIndividualAccessStates,
              individualAccessStates
            )}
          </Accordion.AccordionBodyItem>
          <Accordion.AccordionBodyItem>
            {accordionBody(
              '2',
              'Telegraf Configuration 2',
              'telegraf2',
              setIndividualAccessStates,
              individualAccessStates
            )}
          </Accordion.AccordionBodyItem>
        </Accordion>
        <Accordion
          iconPlacement={
            IconPlacement[
              select('Icon Placement', mapEnumKeys(IconPlacement), 'Left')
            ]
          }
        >
          <Accordion.AccordionHeader>
            {accordionHeader(
              '5',
              'Bucket',
              [readAccss2, writeAccess2],
              [setReadAccess2, setWriteAccess2]
            )}
          </Accordion.AccordionHeader>
          <AccordionBodyItem>
            <InputLabel size={ComponentSize.Medium}>
              {'Individual Telegraf Configurations'}
            </InputLabel>
          </AccordionBodyItem>
          <Accordion.AccordionBodyItem>
            {console.log('here: ', individualAccessStates)}
            {accordionBody(
              '6',
              'Bucket 1',
              'bucket1',
              setIndividualAccessStates2,
              individualAccessStates2
            )}
          </Accordion.AccordionBodyItem>
          <Accordion.AccordionBodyItem>
            {accordionBody(
              '7',
              'Bucket 2',
              'bucket2',
              setIndividualAccessStates2,
              individualAccessStates2
            )}
          </Accordion.AccordionBodyItem>
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

accordionStories.add(
  'Accordion with plain texts',
  () => {
    const accordionRef = createRef<AccordionRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(accordionRef.current)
      /* eslint-enable */
    }
    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
        {' '}
        <Accordion
          iconPlacement={
            IconPlacement[
              select('Icon Placement', mapEnumKeys(IconPlacement), 'Left')
            ]
          }
        >
          <Accordion.AccordionHeader>
            <span>Cheese Ipsum</span>
          </Accordion.AccordionHeader>
          <Accordion.AccordionBodyItem>
            <span>
              This is your detailed body. This is your detailed body. This is
              your detailed body. This is your detailed body. This is your
              detailed body. This is your detailed body.
            </span>
          </Accordion.AccordionBodyItem>
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

accordionFamilyStories.add(
  'Accordion',
  () => {
    const accordionRef = createRef<AccordionRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(accordionRef.current)
      /* eslint-enable */
    }
    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
        <Accordion iconPlacement={
            IconPlacement[
              select('Icon Placement', mapEnumKeys(IconPlacement), 'Left')
            ]
          } >
          <Accordion.AccordionHeader>
            <span style={{fontWeight: 400, color: '#d4d7dd'}}>
              Cheese Ipsum
            </span>
          </Accordion.AccordionHeader>
          <Accordion.AccordionBodyItem>
            <span>
              This is your detailed body. This is your detailed body. This is
              your detailed body. This is your detailed body. This is your
              detailed body. This is your detailed body.This is your detailed body. This is your detailed body. This is
              your detailed body. This is your detailed body. This is your
              detailed body. This is your detailed body.This is your detailed body. This is your detailed body. This is
              your detailed body. This is your detailed body. This is your
              detailed body. This is your detailed body.
            </span>
          </Accordion.AccordionBodyItem>
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

accordionFamilyStories.add(
  'Accordion Header',
  () => {
    const accordionRef = createRef<AccordionRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(accordionRef.current)
      /* eslint-enable */
    }
    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
          <Accordion.AccordionHeader           style={object('style', {})}
>
            <span style={{fontWeight: 400, color: '#d4d7dd'}}>
              Very long title. Let's see what the container does when we have a very very very verylong text that spans more than one line. We wouldn't want this to break would we? 
            </span>
          </Accordion.AccordionHeader>
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

accordionFamilyStories.add(
  'Accordion Body',
  () => {
    const accordionRef = createRef<AccordionRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(accordionRef.current)
      /* eslint-enable */
    }
    return (
      <div
        className="story--example"
        style={{justifyContent: 'none', alignItems: 'start', display: 'block'}}
      >
          <Accordion.AccordionBodyItem>
            <span>
              Hello
            </span>
          </Accordion.AccordionBodyItem>
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