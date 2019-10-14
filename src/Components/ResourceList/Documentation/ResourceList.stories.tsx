// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, boolean, select, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {ResourceList} from '../List/ResourceList'
import {ResourceListHeader} from '../List/ResourceListHeader'
import {ResourceListBody} from '../List/ResourceListBody'
import {ResourceListSorter} from '../List/ResourceListSorter'
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
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const resourceListExampleStories = storiesOf(
  'Components|ResourceList/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

resourceListStories.add(
  'ResourceList',
  () => (
    <div className="story--example">
      <ResourceList />
    </div>
  ),
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
  () => (
    <div className="story--example">
      <ResourceListHeader
        filterComponent={
          <div className="mockComponent" style={{width: '300px'}}>
            Filter Input goes here
          </div>
        }
      >
        {exampleHeaderSorts.map(header => (
          <ResourceListSorter
            key={header.key}
            sortKey={header.key}
            name={header.name}
            sort={Sort.None}
            onClick={() => {}}
          />
        ))}
      </ResourceListHeader>
    </div>
  ),
  {
    readme: {
      content: marked(ResourceListHeaderReadme),
    },
  }
)

resourceListStories.add(
  'ResourceListBody',
  () => (
    <div className="story--example">
      <ResourceListBody
        emptyState={
          <div className="mockComponent stretch">EmptyState goes here</div>
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(ResourceListBodyReadme),
    },
  }
)

resourceListStories.add(
  'ResourceListSorter',
  () => (
    <div className="story--example">
      <ResourceListSorter
        name={text('name', 'Created At')}
        onClick={nextSort =>
          alert(`onClick fired! Next sort is: "${nextSort}"`)
        }
        sort={Sort[select('sort', mapEnumKeys(Sort), 'None')]}
        sortKey={text('sortKey', 'created_at')}
      />
    </div>
  ),
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
              <ResourceCard
                key={dash.id}
                name={<ResourceCard.Name name={dash.name} />}
                description={
                  <ResourceCard.EditableDescription
                    description={dash.description}
                    onUpdate={desc =>
                      alert(`onUpate description fired: ${desc}`)
                    }
                  />
                }
                metaData={[
                  <>Last updated {dash.updatedAt}</>,
                  <>
                    Created by <b>{dash.createdBy}</b>
                  </>,
                ]}
              />
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
