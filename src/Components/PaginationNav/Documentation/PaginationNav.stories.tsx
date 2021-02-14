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
  PaginationDirectionItemRef,
  PaginationTruncationItemRef,
} from '../'

// Types
import {Direction} from '../../../Types'

// Notes
import PaginationReadme from './PaginationNav.md'
import PaginationItemReadme from './PaginationNavItem.md'
import PaginationNavDirectionItemReadme from './PaginationNavDirectionItem.md'
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
        <PaginationNav.Item
          ref={paginationItemRef}
          page={number('value', 10)}
          isActive={boolean('active', false)}
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
  'PaginationNavDirectionItem',
  () => {
    const paginationDirectionItemRef = createRef<PaginationDirectionItemRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(paginationDirectionItemRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <PaginationNav.DirectionItem
          ref={paginationDirectionItemRef}
          direction={
            Direction[select('direction', mapEnumKeys(Direction), 'left')]
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
      content: marked(PaginationNavDirectionItemReadme),
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
        <PaginationNav.TruncationItem ref={paginationTruncationItemRef} />
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
