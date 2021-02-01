// Libraries
import React, {forwardRef, useState, useEffect} from 'react'
import classnames from 'classnames'
// Components
import {PaginationItem} from './PaginationItem'
import {PaginationDirectionItem} from './PaginationDirectionItem'
import {PaginationTruncationItem} from './paginationTruncationItem'
// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps, DirectionType} from '../../Types'

export interface PaginationNavProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
  totalPages: number
  itemsToShow?: number
  currentPage?: number
}

export type PaginationNavRef = HTMLElement

export const Pagination = forwardRef<PaginationNavRef, PaginationNavProps>(
  (
    {
      id,
      style,
      testID = 'Pagination-nav',
      className,
      totalPages,
      itemsToShow = 7,
      currentPage = 1,
    },
    ref
  ) => {
    const paginationNavClassName = classnames('cf-pagination', {
      [`${className}`]: className,
    })

    const [activePage, setActivePage] = useState(currentPage)
    const [breakpoint, setbreakpoint] = useState(activePage + 1)
    const [firstTruncation, setfirstTruncation] = useState(
      activePage > itemsToShow - 2
    )
    const [secondTruncation, setSecondTruncation] = useState(
      totalPages - activePage > itemsToShow - 3
    )

    const moveLeft = () => {
      if (activePage >= 2) {
        setActivePage(activePage - 1)
      }
    }

    const moveRight = () => {
      if (activePage <= totalPages - 1) {
        setActivePage(activePage + 1)
      }
    }

    const moveTo = (page: number) => {
      setActivePage(page)
    }

    useEffect(() => {
      setActivePage(activePage)
    }, [activePage])

    //This method needs to be refactored to be more readable. convoluted logic with incoherent one off conditions.
    useEffect(() => {
      const divider = itemsToShow - 3

      //you only need breakpoints if theres more items than can be shown
      if (
        totalPages > itemsToShow &&
        activePage !== totalPages &&
        activePage !== 1
      ) {
        //if the activePage is greater than what can be shown -3
        if (activePage >= divider + +!!secondTruncation) {
          if (!firstTruncation) {
            setfirstTruncation(true)
            setbreakpoint(activePage)
          }
        } else {
          if (firstTruncation) {
            setfirstTruncation(false)
            //this is quite possibly the most hacky one off thing ever. There is something about useEffect call orders in react that I need to study a little more to understand. This is causing the state of secondtruncation to not update before doing this computation so i can't use (+!!secondTrundcation);
            const pageOffset = totalPages === itemsToShow + 1 ? 1 : 0

            activePage + pageOffset >= divider
              ? setbreakpoint(activePage - divider + 2 + pageOffset)
              : setbreakpoint(activePage)
          }
        }

        if (totalPages - activePage > divider) {
          setSecondTruncation(true)
          if (activePage > divider) {
            setbreakpoint(activePage)
          }
        } else {
          if (secondTruncation) {
            setSecondTruncation(false)
            setbreakpoint(totalPages - divider)
          }
        }
      }
    console.log('active ' + activePage);
    console.log('breakpoint ' + breakpoint);
    })

    const checkActive = (page: number) => {
      return activePage === page ? true : false
    }
    return (
      <nav
        className={paginationNavClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <ul className="cf-pagination--container">
          <PaginationDirectionItem
            direction={DirectionType.Left}
            onClick={moveLeft}
          />
          {
            <PaginationItem
              page={1}
              isActive={checkActive(1)}
              onClick={() => moveTo(1)}
            />
          }
          {firstTruncation && (
            //compute whtehr it should be an ellipse or a number
            <PaginationTruncationItem
              startingPage={totalPages}
            ></PaginationTruncationItem>
          )}
          {[...Array(totalPages)]
            .map((_, i) => i)
            .slice(
              breakpoint,
              breakpoint +
                itemsToShow -
                2 -
                +!!secondTruncation -
                +!!firstTruncation
            )
            .map(item => (
              <PaginationItem
                page={item}
                isActive={checkActive(item)}
                onClick={() => moveTo(item)}
              />
            ))}
          {//compute whtehr it should be an ellipse or a number
          secondTruncation && (
            <PaginationTruncationItem
              startingPage={totalPages}
            ></PaginationTruncationItem>
          )}
          {//compute last number
          totalPages >= itemsToShow && (
            <PaginationItem
              page={totalPages}
              isActive={checkActive(totalPages)}
              onClick={() => moveTo(totalPages)}
            />
          )}
          <PaginationDirectionItem
            direction={DirectionType.Right}
            onClick={moveRight}
          />
        </ul>
      </nav>
    )
  }
)

Pagination.displayName = 'PaginationNav'
