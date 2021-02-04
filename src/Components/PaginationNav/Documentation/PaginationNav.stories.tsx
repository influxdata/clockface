// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {mapEnumKeys} from '../../../Utils/storybook'
import {withKnobs, select, number} from '@storybook/addon-knobs'

// Components
import {PaginationNav, PaginationNavRef} from '..'

// Types
import {DirectionType} from '../../../Types'

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
          totalPages={number('totalPages', 10)}
          currentPage={1}
          pageRangeOffset={number('pageRangeOffset', 1)}
          onChange={page => {
            /* eslint-disable */
            console.log(`page selected: ${page}`)
            /* eslint-enable */
          }}
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
  () => (
    <div className="story--example">
      <PaginationNav.Item page={number('value', 10)} isActive={false} />
    </div>
  ),
  {
    readme: {
      content: marked(PaginationItemReadme),
    },
  }
)

PaginationStories.add(
  'PaginationNavDirectionItem',
  () => (
    <div className="story--example">
      <PaginationNav.DirectionItem
        direction={
          DirectionType[select('direction', mapEnumKeys(DirectionType), 'left')]
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(PaginationNavDirectionItemReadme),
    },
  }
)

PaginationStories.add(
  'PaginationTruncationItem',
  () => (
    <div className="story--example">
      <PaginationNav.TruncationItem />
    </div>
  ),
  {
    readme: {
      content: marked(PaginationTruncationItemReadme),
    },
  }
)
