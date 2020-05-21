// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, boolean, select, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {ResourceList, ResourceListRef} from '../List'
import {
  ResourceListHeader,
  ResourceListHeaderRef,
} from '../List/ResourceListHeader'
import {ResourceListBody, ResourceListBodyRef} from '../List/ResourceListBody'
import {
  ResourceListSorter,
  ResourceListSorterRef,
} from '../List/ResourceListSorter'
import {ResourceCard} from '../Card'
import {Input} from '../../Inputs/Input'
import {EmptyState} from '../../EmptyState'

// Types
import {Sort, IconFont} from '../../../Types'

// Notes
import ResourceListReadme from './ResourceList.md'
import ResourceListHeaderReadme from './ResourceListHeader.md'
import ResourceListBodyReadme from './ResourceListBody.md'
import ResourceListSorterReadme from './ResourceListSorter.md'
import ResourceListExampleReadme from './ResourceListExample.md'

const resourceListStories = storiesOf(
  'Components|ResourceList/List Family',
  module
).addDecorator(withKnobs)

const resourceListExampleStories = storiesOf(
  'Components|ResourceList/Examples',
  module
).addDecorator(withKnobs)

resourceListStories.add(
  'ResourceList',
  () => {
    const resourceListRef: RefObject<ResourceListRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(resourceListRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <ResourceList.ResourceList ref={resourceListRef} />
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceListReadme),
    },
  }
)

const exampleHeaderSorts = [
  {
    key: 'name',
    name: 'Name',
  },
  {
    key: 'created_at',
    name: 'Created At',
  },
  {
    key: 'color',
    name: 'Color',
  },
]

resourceListStories.add(
  'ResourceListHeader',
  () => {
    const resourceListHeaderRef: RefObject<ResourceListHeaderRef> = createRef()
    const resourceListSorterNameRef: RefObject<ResourceListSorterRef> = createRef()
    const resourceListSorterCreatedRef: RefObject<ResourceListSorterRef> = createRef()
    const resourceListSorterColorRef: RefObject<ResourceListSorterRef> = createRef()

    const sorterRefs = [
      resourceListSorterNameRef,
      resourceListSorterCreatedRef,
      resourceListSorterColorRef,
    ]

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('ResourceListHeader', resourceListHeaderRef.current)
      console.log(
        'ResourceListSorter (Name)',
        resourceListSorterNameRef.current
      )
      console.log(
        'ResourceListSorter (Created)',
        resourceListSorterCreatedRef.current
      )
      console.log(
        'ResourceListSorter (Color)',
        resourceListSorterColorRef.current
      )
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <ResourceListHeader
          ref={resourceListHeaderRef}
          filterComponent={
            <div className="mockComponent" style={{width: '300px'}}>
              Filter Input goes here
            </div>
          }
        >
          {exampleHeaderSorts.map((header, i) => (
            <ResourceListSorter
              ref={sorterRefs[i]}
              key={header.key}
              sortKey={header.key}
              name={header.name}
              sort={Sort.None}
              onClick={() => {
                // do nothing
              }}
            />
          ))}
        </ResourceListHeader>
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceListHeaderReadme),
    },
  }
)

resourceListStories.add(
  'ResourceListBody',
  () => {
    const resourceListBodyRef: RefObject<ResourceListBodyRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(resourceListBodyRef.current)
      /* eslint-enable */
    }

    const options: any = {
      null: null,
      false: false,
      'React elements': 'Resource List appears here YAY!',
    }
    const children = select(
      'Children',
      options,
      'Resource List appears here YAY!'
    )
    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <ResourceListBody
          ref={resourceListBodyRef}
          emptyState={
            <div className="mockComponent stretch">EmptyState goes here</div>
          }
        >
          {children}
        </ResourceListBody>
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceListBodyReadme),
    },
  }
)

resourceListStories.add(
  'ResourceListSorter',
  () => {
    const resourceListSorterRef: RefObject<ResourceListSorterRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(resourceListSorterRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <ResourceListSorter
          ref={resourceListSorterRef}
          name={text('name', 'Created At')}
          onClick={nextSort =>
            alert(`onClick fired! Next sort is: "${nextSort}"`)
          }
          sort={Sort[select('sort', mapEnumKeys(Sort), 'None')]}
          sortKey={text('sortKey', 'created_at')}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceListSorterReadme),
    },
  }
)

const exampleDashboards = [
  {
    id: '23wfsdff',
    name: 'Server Stats',
    description: 'Monitoring dashboard for our 17 servers',
    updatedAt: '24m ago',
    createdBy: 'Bob',
  },
  {
    id: '9sdifsdw',
    name: 'West Garden',
    description: 'Soil and water monitoring for west side garden',
    updatedAt: '8d ago',
    createdBy: 'Bob',
  },
  {
    id: '0sdf09ds',
    name: 'East Garden',
    description: 'Soil and water monitoring for east side garden',
    updatedAt: '2s ago',
    createdBy: 'Fred',
  },
]

resourceListExampleStories.add(
  'Dashboards List',
  () => (
    <div className="story--example">
      <ResourceList>
        <ResourceList.Header
          filterComponent={
            boolean('Include Filter', true) ? (
              <Input
                icon={IconFont.Search}
                placeholder="Filter dashboards..."
                style={object('input style', {width: '200px'})}
                value={text('Search term', '')}
              />
            ) : (
              undefined
            )
          }
        >
          <ResourceList.Sorter
            name="Name"
            sortKey="name"
            onClick={(nextSort, sortKey) =>
              alert(
                `Sorter clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`
              )
            }
            sort={Sort.Ascending}
          />
          <ResourceList.Sorter
            name="Description"
            sortKey="desc"
            onClick={(nextSort, sortKey) =>
              alert(
                `Sorter clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`
              )
            }
            sort={Sort.None}
          />
          <ResourceList.Sorter
            name="Last Updated"
            sortKey="updated"
            onClick={(nextSort, sortKey) =>
              alert(
                `Sorter clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`
              )
            }
            sort={Sort.None}
          />
        </ResourceList.Header>
        <ResourceList.Body
          emptyState={
            <EmptyState>
              <EmptyState.Text>
                {text('Search term', '') === ''
                  ? 'No dashboards exist'
                  : 'No dashboards match your search term'}
              </EmptyState.Text>
            </EmptyState>
          }
        >
          {object('Dashboards', exampleDashboards)
            .filter(d =>
              d.name.toLocaleLowerCase().includes(text('Search term', ''))
            )
            .map(dash => (
              <ResourceCard key={dash.id}>
                <ResourceCard.Name name={dash.name} />
                <ResourceCard.EditableDescription
                  description={dash.description}
                  onUpdate={desc => alert(`onUpate description fired: ${desc}`)}
                />
                <>Last updated {dash.updatedAt}</>,
                <>
                  Created by <b>{dash.createdBy}</b>
                </>
              </ResourceCard>
            ))}
        </ResourceList.Body>
      </ResourceList>
    </div>
  ),
  {
    readme: {
      content: marked(ResourceListExampleReadme),
    },
  }
)
