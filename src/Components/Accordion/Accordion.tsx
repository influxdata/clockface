// Libraries
import React, {forwardRef, useState, useEffect} from 'react'
import classnames from 'classnames'
// Styles
import './Accordion.scss'
// Types
import {IconPlacement, StandardFunctionProps} from '../../Types'

export interface AccordionProps extends StandardFunctionProps {
  /** Determines whether the expand Icon is at the left or right */
  iconPlacement?: IconPlacement
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
      iconPlacementPosition: IconPlacement
      isDisabled: boolean
      onChange: () => void
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
      iconPlacement = IconPlacement.Left,
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
    const [iconPlacementPosition, setIconPlacementPosition] = useState(
      iconPlacement
    )

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

    useEffect(() => {
      setIconPlacementPosition(iconPlacement)
    }, [iconPlacement])

    const accordionBodyContainerClassName = classnames(
      'cf-accordion--body-container',
      {
        [`cf-accordion--body-container--expanded`]: isExpanded,
        [`cf-accordion--body-container--collapsed`]: !isExpanded,
        [`cf-accordion--body-container--disable-animation`]: !animation,
      }
    )

    const [header, ...body] = React.Children.toArray(children)

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
      iconPlacementPosition,
      isDisabled,
      onChange: onChangeFunction,
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
