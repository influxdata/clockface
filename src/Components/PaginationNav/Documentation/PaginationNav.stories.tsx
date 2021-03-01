// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {mapEnumKeys} from '../../../Utils/storybook'
import {withKnobs, select, number, boolean} from '@storybook/addon-knobs'

// Components
import {
  PaginationNav,
  PaginationNavRef,
  PaginationItemRef,
  PaginationTruncationItemRef,
} from '../'

// Types
import {ComponentSize, Direction} from '../../../Types'

// Notes
import PaginationReadme from './PaginationNav.md'
import PaginationItemReadme from './PaginationNavItem.md'
import PaginationTruncationItemReadme from './PaginationTruncationItem.md'

const PaginationStories = storiesOf(
  'Components|Pagination/PaginationNav',
  module
).addDecorator(withKnobs)

PaginationStories.add(
  'PaginationNav',
  () => {
    const paginationRef = createRef<PaginationNavRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(paginationRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <PaginationNav.PaginationNav
          ref={paginationRef}
          totalPages={number('totalPages', 10)}
          currentPage={1}
          pageRangeOffset={number('pageRangeOffset', 1)}
          onChange={page => {
            /* eslint-disable */
            console.log(`page selected: ${page}`)
            /* eslint-enable */
          }}
          hideDirectionIcon={boolean('hideDirectionIcon', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Medium')]
          }
        ></PaginationNav.PaginationNav>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PaginationReadme),
    },
  }
)

PaginationStories.add(
  'PaginationNavItem',
  () => {
    const paginationItemRef = createRef<PaginationItemRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(paginationItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <PaginationNav.Item
          ref={paginationItemRef}
          direction={
            Direction[select('directionIcon', mapEnumKeys(Direction), 'Left')]
          }
          isActive={boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Medium')]
          }
        />
        <PaginationNav.Item
          ref={paginationItemRef}
          page={number('value', 10).toString()}
          isActive={boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Medium')]
          }
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PaginationItemReadme),
    },
  }
)

PaginationStories.add(
  'PaginationTruncationItem',
  () => {
    const paginationTruncationItemRef = createRef<PaginationTruncationItemRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(paginationTruncationItemRef.current)
      /* eslint-enable */
    }
    return (
      <div className="story--example">
        <PaginationNav.TruncationItem
          ref={paginationTruncationItemRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PaginationTruncationItemReadme),
    },
  }
)
