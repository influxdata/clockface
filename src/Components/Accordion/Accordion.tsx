// Libraries
import React, {forwardRef, useEffect, useState} from 'react'
import classnames from 'classnames'
// Styles
import './Accordion.scss'
// Types
import {Direction, StandardFunctionProps} from '../../Types'

export interface AccordionProps extends StandardFunctionProps {
  /** Determines whether the accordion is expanded by default or not */
  expanded?: boolean
  /** Prevents any interaction with this element, including the onClick function */
  disabled?: boolean
  /** Function to be called when the accordion is expanded or collapsed */
  onChange?: () => void
}

export const AccordionContext = React.createContext<
  | {
      isExpanded: boolean
      setExpanded: (param: boolean) => void
      iconPlacementPosition: Direction
      isDisabled: boolean
      onChange: () => void
      hasBody: boolean
    }
  | undefined
>(undefined)

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export type AccordionRef = HTMLDivElement

export const AccordionRoot = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      id,
      style,
      testID = 'accordion',
      children,
      className,
      expanded = false,
      disabled = false,
      onChange,
    },
    ref
  ) => {
    const accordionClassName = classnames('cf-accordion', {
      [`${className}`]: className,
    })

    const [isExpanded, setExpanded] = useState(expanded)
    const [animation, setAnimation] = useState(false)
    const [isDisabled, setDisabled] = useState(disabled)

    useEffect(() => {
      setExpanded(expanded)
    }, [expanded])

    useEffect(() => {
      setDisabled(disabled)
    }, [disabled])

    useEffect(() => {
      if (isExpanded !== false && !animation) {
        setAnimation(true)
      }
    }, [isExpanded])

    const accordionBodyContainerClassName = classnames(
      'cf-accordion--body-container',
      {
        [`cf-accordion--body-container--expanded`]: isExpanded,
        [`cf-accordion--body-container--collapsed`]: !isExpanded,
        [`cf-accordion--body-container--disable-animation`]: !animation,
      }
    )

    const [header, ...body] = React.Children.toArray(children)
    const hasBody = body.length ? true : false

    /* eslint-disable */
    const onChangeFunction = () => {
      if (onChange) {
        onChange()
      } else {
        return
      }
    }
    const contextState = {
      isExpanded,
      setExpanded,
      iconPlacementPosition: hasBody ? Direction.Left : Direction.None,
      isDisabled,
      onChange: onChangeFunction,
      hasBody: hasBody,
    }

    return (
      <div
        ref={ref}
        className={accordionClassName}
        data-testid={testID}
        id={id}
        style={style}
      >
        <AccordionContext.Provider value={contextState}>
          {header}
          <div className={accordionBodyContainerClassName}>{body}</div>
        </AccordionContext.Provider>
      </div>
    )
  }
)

AccordionRoot.displayName = 'Accordion'
