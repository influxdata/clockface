// Libraries
import React, {forwardRef} from 'react' // Styles
/* import classnames from 'classnames'
 */ import './Accordion.scss'

// Types
import {/* IconFont */ InfluxColors, StandardFunctionProps} from '../../Types'

export interface AccordionNestedItemProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
  /*   title?: string
   */ backgroundColor?: InfluxColors
  nested?: boolean
  //accordionHeader?: React.ReactNode;
}

export type AccordionNestedItemRef = HTMLDivElement

export const AccordionNestedItem = forwardRef<
  AccordionNestedItemRef,
  AccordionNestedItemProps
>(({id, style, testID = 'alert', children, nested}, ref) => {
  /*   const childArray = React.Children.toArray(children);
    
    const lastChild = nested? childArray.pop(): null;

    const childToRender = React.Children.map(childArray, child => (
      <div className="cf-accordion--body">{child}</div>
    )) */

  return (
    <div
      ref={ref}
      className={'cf-accordion--nested--item'}
      data-testid={testID}
      id={id}
      style={style}
    >
      {children}
    </div>
  )
})

AccordionNestedItem.displayName = 'AccordionNestedItem'
