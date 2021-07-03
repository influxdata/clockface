// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'
// Styles
import './Accordion.scss'

// Types
import {/* IconFont */ InfluxColors, StandardFunctionProps} from '../../Types'

export interface AccordionProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
  /*   title?: string
   */ backgroundColor?: InfluxColors
  expanded?: boolean
  nested?: boolean
  /*   toggle?: React.ReactNode
   */
  //accordionHeader?: React.ReactNode;
}

export const AccordionContext = React.createContext({
  isExpanded: false,
  setExpanded: (param: boolean) => {},
})

export type AccordionRef = HTMLDivElement

export const AccordionRoot = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      id,
      style,
      testID = 'alert',
      children,
      className,
      expanded = false,
      //accordionHeader
    },
    ref
  ) => {
    const accordionClassName = classnames('cf-accordion', {
      [`${className}`]: className,
    })

    const [isExpanded, setExpanded] = useState<boolean>(expanded)
    const accordionBodyContainerClassName = classnames(
      'cf-accordion--body-container',
      {
        [`cf-accordion--body-container--expanded`]: isExpanded,
        [`cf-accordion--body-container--collapsed`]: !isExpanded,
      }
    )

    const [header, ...body] = React.Children.toArray(children)

    const initialContextState = {
      isExpanded,
      setExpanded,
    }

    return (
      <div
        ref={ref}
        className={accordionClassName}
        data-testid={testID}
        id={id}
        style={style}
      >
        <AccordionContext.Provider value={initialContextState}>
          {header}
        </AccordionContext.Provider>
        <div className={accordionBodyContainerClassName}>{body}</div>
      </div>
    )
  }
)

AccordionRoot.displayName = 'Accordion'
