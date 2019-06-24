// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, boolean, array} from '@storybook/addon-knobs'
// import {mapEnumKeys} from '../../../.storybook/utils'

// Components
import {ResourceCard} from './Card/ResourceCard'
import {ResourceCardName} from './Card/ResourceCardName'
import {ResourceCardEditableName} from './Card/ResourceCardEditableName'
import {ResourceCardDescription} from './Card/ResourceCardDescription'

// Types
// import {IconFont, ComponentColor, Alignment, Sort} from '../../Types'

// Notes
const ResourceCardReadme = marked(require('./Card/ResourceCard.md'))
const ResourceCardDescriptionReadme = marked(
  require('./Card/ResourceCardDescription.md')
)
const ResourceCardNameReadme = marked(require('./Card/ResourceCardName.md'))
const ResourceCardEditableNameReadme = marked(
  require('./Card/ResourceCardEditableName.md')
)

const indexListStories = storiesOf(
  'Components|ResourceList/Card Family',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const resourceCardMeta = ['Created by Bob', 'Updated 25m ago']

indexListStories.add(
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

indexListStories.add(
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

indexListStories.add(
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

indexListStories.add(
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
