// Libraries
import React, {Component} from 'react'

// Components
import {AccordionRoot, AccordionProps} from './Accordion'
import {AccordionHeader} from './AccordionHeader'
import {AccordionBodyItem} from './AccordionBodyItem'
import {AccordionNestedItem} from './AccordionNestedItem'
import './Accordion.scss'


export class Accordion extends Component<AccordionProps> {
  public static readonly displayName = 'IndexList'

  public static Accordion = AccordionRoot
  public static AccordionHeader = AccordionHeader
  public static AccordionBodyItem = AccordionBodyItem
  public static AccordionNestedItem = AccordionNestedItem

  render() {
    return <AccordionRoot {...this.props} />
  }
}

export {AccordionProps, AccordionRef} from './Accordion'
