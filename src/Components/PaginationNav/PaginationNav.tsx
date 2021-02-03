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

  /** Total nuber of pages there exists */
  totalPages: number
  /** currently active page */
  currentPage?: number
  /** Function to be called on page change */
  onChange: (page: number) => void
  /** Determines how many pages are displayed within the nav. 
   * 1 = 7 {1,...,4,5,6,...20}, 
   * 2 = 9 {1,...,4,5,6,7,8...20}, 
   * 3 = 11 {1,...,4,5,6,7,8,9,10...20} and so on */
  pageRangeOffset: number
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
      currentPage = 1,
      onChange,
      pageRangeOffset = 1,
    },
    ref
  ) => {
    const paginationNavClassName = classnames('cf-pagination', {
      [`${className}`]: className,
    })
    const [activePage, setActivePage] = useState(currentPage)

    const computePageSpread = (page: number, pageOffset: number) => {
      const itemsToShow1 = 5 + 2 * (pageOffset >= 1 ? pageOffset : 1)
      if (totalPages > itemsToShow1) {
        const firstItem = Math.max(2, page - pageOffset)
        const lastItem = Math.min(totalPages - 1, page + pageOffset)

        const isLeftTruncated = firstItem > 2
        const isRightTruncated = totalPages - lastItem > 1

        const overflowOffset = itemsToShow1 - 4 - (lastItem - firstItem)

        if (isLeftTruncated && !isRightTruncated) {
          //if left is truncated but right isn't, take off the overflow from left
          return {
            firstBreakpoint: firstItem - overflowOffset,
            secondBreakpoint: lastItem,
          }
        }

        if (!isLeftTruncated && isRightTruncated) {
          //if right is truncated but left isn't, add the overflow to right
          return {
            firstBreakpoint: firstItem,
            secondBreakpoint: lastItem + overflowOffset,
          }
        }
        return {
          firstBreakpoint: firstItem,
          secondBreakpoint: lastItem,
        }
      } else {
        return {
          // if we don't need truncation
          firstBreakpoint: 2,
          secondBreakpoint: totalPages - 1,
        }
      }
    }

    const [breakpoints, setBreakpoints] = useState(
      computePageSpread(activePage, pageRangeOffset)
    )

    const moveLeft = () => {
      const targetPage = activePage - 1

      if (targetPage < 1) {
        // if moving past least avail page, do nothing
      } else {
        moveToPage(targetPage)
      }
    }

    const moveRight = () => {
      const targetPage = activePage + 1
      if (targetPage > totalPages) {
        // if moving past highest avail page, do nothing
      } else {
        moveToPage(targetPage)
      }
    }

    const moveToPage = (page: number) => {
      if (page === activePage) {
        //if moving to current page, do nothing
      } else {
        //if trying to move to page 0, lower than 0, or greater than total pages, don't
        if (page >= 0 && page <= totalPages) setActivePage(page)
        onChange(page)
      }
    }

    useEffect(() => {
      setBreakpoints(computePageSpread(activePage, pageRangeOffset))
    }, [totalPages, pageRangeOffset])

    useEffect(() => {
      setActivePage(activePage)
      if (activePage > breakpoints.secondBreakpoint) {
        setBreakpoints(computePageSpread(activePage, pageRangeOffset))
      } else if (activePage < breakpoints.firstBreakpoint) {
        setBreakpoints(computePageSpread(activePage, pageRangeOffset))
      }
    }, [activePage])

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
              onClick={() => moveToPage(1)}
            />
          }
          {breakpoints.firstBreakpoint > 2 && (
            //compute whtehr it should be an ellipse or a number
            <PaginationTruncationItem
              startingPage={totalPages}
            ></PaginationTruncationItem>
          )}
          {[...Array(totalPages)]
            .map((_, i) => i)
            .slice(
              breakpoints.firstBreakpoint,
              breakpoints.secondBreakpoint + 1
            )
            .map(item => (
              <PaginationItem
                page={item}
                isActive={checkActive(item)}
                onClick={() => moveToPage(item)}
              />
            ))}
          {//compute whtehr it should be an ellipse or a number
          breakpoints.secondBreakpoint !== totalPages - 1 && (
            <PaginationTruncationItem
              startingPage={totalPages}
            ></PaginationTruncationItem>
          )}
          {//compute last number
          totalPages !== 1 && (
            <PaginationItem
              page={totalPages}
              isActive={checkActive(totalPages)}
              onClick={() => moveToPage(totalPages)}
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
