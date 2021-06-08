// Libraries
import React, {Component} from 'react'

// Components
import {AccordionRoot, AccordionProps} from './Accordion';

export class Accordion extends Component<AccordionProps> {
  public static readonly displayName = 'IndexList'

  public static Accordion = AccordionRoot

  render() {
    return <AccordionRoot {...this.props} />
  }
}

export {AccordionProps, AccordionRef} from './Accordion'
