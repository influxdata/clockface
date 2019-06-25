// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {
  withKnobs,
  text,
  boolean,
  array,
  select,
  object,
  number,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'

// Components
import {ResourceList} from './List/ResourceList'
import {ResourceListHeader} from './List/ResourceListHeader'
import {ResourceListBody} from './List/ResourceListBody'
import {ResourceListSorter} from './List/ResourceListSorter'
import {ResourceCard} from './Card/ResourceCard'
import {ResourceCardName} from './Card/ResourceCardName'
import {ResourceCardEditableName} from './Card/ResourceCardEditableName'
import {ResourceCardDescription} from './Card/ResourceCardDescription'
import {Input} from '../Inputs/Input'
import {EmptyState} from '../EmptyState/EmptyState'
import {SlideToggle} from '../SlideToggle/SlideToggle'
import {SquareButton} from '../Button/Composed/SquareButton'
import {Label} from '../Label/Label'
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

// Types
import {
  Sort,
  IconFont,
  ComponentSize,
  ComponentColor,
  FlexDirection,
} from '../../Types'

// Notes
const ResourceListReadme = marked(require('./List/ResourceList.md'))
const ResourceListHeaderReadme = marked(require('./List/ResourceListHeader.md'))
const ResourceListBodyReadme = marked(require('./List/ResourceListBody.md'))
const ResourceListSorterReadme = marked(require('./List/ResourceListSorter.md'))
const ResourceCardReadme = marked(require('./Card/ResourceCard.md'))
const ResourceCardDescriptionReadme = marked(
  require('./Card/ResourceCardDescription.md')
)
const ResourceCardNameReadme = marked(require('./Card/ResourceCardName.md'))
const ResourceCardEditableNameReadme = marked(
  require('./Card/ResourceCardEditableName.md')
)
const ResourceListExampleReadme = marked(require('./ResourceListExample.md'))
const ResourceCardExampleReadme = marked(require('./ResourceCardExample.md'))

const indexListStories = storiesOf(
  'Components|ResourceList/List Family',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const indexListCardStories = storiesOf(
  'Components|ResourceList/Card Family',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const indexListExampleStories = storiesOf(
  'Components|ResourceList/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

indexListStories.add(
  'ResourceList',
  () => (
    <div className="story--example">
      <ResourceList />
    </div>
  ),
  {
    readme: {
      content: ResourceListReadme,
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

indexListStories.add(
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
      content: ResourceListHeaderReadme,
    },
  }
)

indexListStories.add(
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
      content: ResourceListBodyReadme,
    },
  }
)

indexListStories.add(
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
      content: ResourceListSorterReadme,
    },
  }
)

const resourceCardMeta = ['Created by Bob', 'Updated 25m ago']

indexListCardStories.add(
  'ResourceCard',
  () => (
    <div className="story--example">
      <ResourceCard
        name={
          <ResourceCardName
            name={text('name', 'Card Name')}
            onClick={() => alert('<ResourceCardName /> onClick fired!')}
          />
        }
        description={
          <ResourceCardDescription
            description={text(
              'description',
              'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
            )}
            onUpdate={description =>
              alert(
                `<ResourceCardDescription /> onUpdate fired with "${description}"`
              )
            }
            placeholder={text('description placeholder', 'Enter a description')}
          />
        }
        disabled={boolean('disabled', false)}
        metaData={array('metaData', resourceCardMeta).map(meta => (
          <span key={meta}>{meta}</span>
        ))}
      />
    </div>
  ),
  {
    readme: {
      content: ResourceCardReadme,
    },
  }
)

indexListCardStories.add(
  'ResourceCardDescription',
  () => (
    <div className="story--example">
      <ResourceCardDescription
        description={text(
          'description',
          'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
        )}
        onUpdate={description => alert(`onUpdate fired with "${description}"`)}
        placeholder={text('description placeholder', 'Enter a description')}
      />
    </div>
  ),
  {
    readme: {
      content: ResourceCardDescriptionReadme,
    },
  }
)

indexListCardStories.add(
  'ResourceCardName',
  () => (
    <div className="story--example">
      <ResourceCardName
        name={text('name', 'Card Name')}
        onClick={() => alert('onClick fired!')}
      />
    </div>
  ),
  {
    readme: {
      content: ResourceCardNameReadme,
    },
  }
)

indexListCardStories.add(
  'ResourceCardEditableName',
  () => (
    <div className="story--example">
      <ResourceCardEditableName
        name={text('name', 'Card Name')}
        onClick={() => alert('onClick fired!')}
        onUpdate={name => alert(`onUpdate fired with "${name}"`)}
        noNameString={text('noNameString', 'Untitled Card')}
        placeholder={text('placeholder', 'Name this card...')}
      />
    </div>
  ),
  {
    readme: {
      content: ResourceCardEditableNameReadme,
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

indexListExampleStories.add(
  'Dashboards List',
  () => (
    <div className="story--example">
      <ResourceList>
        <ResourceList.Header
          filterComponent={
            <Input
              icon={IconFont.Search}
              placeholder="Filter dashboards..."
              widthPixels={280}
              value={text('Search term', '')}
            />
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
            sort={Sort.None}
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
              <EmptyState.Text
                text={
                  text('Search term', '') === ''
                    ? 'No dashboards exist'
                    : 'No dashboards match your search term'
                }
              />
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
                  <ResourceCard.Description
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
      content: ResourceListExampleReadme,
    },
  }
)

indexListExampleStories.add(
  'Toggleable Card',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Width (px)', 500)}px`}}>
        <ResourceCard
          name={
            <ResourceCard.Name
              name={text('name', 'Just another brick in the wall')}
            />
          }
          description={
            <ResourceCard.Description
              description={text(
                'description',
                'Hey! Teacher! Leave us kids alone'
              )}
              onUpdate={desc => alert(`onUpate description fired: ${desc}`)}
            />
          }
          metaData={[
            <>Last updated 2h ago</>,
            <>
              Created by <b>Pink Floyd</b>
            </>,
          ]}
          disabled={boolean('disabled', false)}
          toggle={
            <SlideToggle
              size={ComponentSize.ExtraSmall}
              active={!boolean('disabled', false)}
              onChange={() => {}}
            />
          }
          contextMenu={
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash}
              color={ComponentColor.Danger}
            />
          }
          labels={
            <ComponentSpacer
              direction={FlexDirection.Row}
              margin={ComponentSize.Small}
            >
              <Label
                id="CRIT"
                description="I'm a cool label"
                name="CRIT"
                color="#da3434"
                size={ComponentSize.ExtraSmall}
              />
              <Label
                id="WARN"
                description="I'm a cool label"
                name="WARN"
                color="#f2b218"
                size={ComponentSize.ExtraSmall}
              />
              <Label
                id="OK"
                description="I'm a cool label"
                name="OK"
                color="#6ac255"
                size={ComponentSize.ExtraSmall}
              />
            </ComponentSpacer>
          }
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: ResourceCardExampleReadme,
    },
  }
)
