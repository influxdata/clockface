// Libraries
import React, {createRef, RefObject} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  array,
  number,
  select,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {ResourceCard, ResourceCardRef} from '../Card'
import {ResourceCardName, ResourceCardNameRef} from '../Card/ResourceCardName'
import {
  ResourceCardEditableName,
  ResourceCardEditableNameRef,
} from '../Card/ResourceCardEditableName'
import {
  ResourceCardDescription,
  ResourceCardDescriptionRef,
} from '../Card/ResourceCardDescription'
import {
  ResourceCardEditableDescription,
  ResourceCardEditableDescriptionRef,
} from '../Card/ResourceCardEditableDescription'
import {ResourceCardMeta, ResourceCardMetaRef} from '../Card/ResourceCardMeta'
import {SlideToggle} from '../../SlideToggle'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {Label} from '../../Label/Label'
import {FlexBox} from '../../FlexBox'

// Types
import {
  IconFont,
  ComponentSize,
  ComponentColor,
  FlexDirection,
  AlignItems,
  JustifyContent,
} from '../../../Types'

// Notes
import ResourceCardReadme from './ResourceCard.md'
import ResourceCardDescriptionReadme from './ResourceCardDescription.md'
import ResourceCardEditableDescriptionReadme from './ResourceCardEditableDescription.md'
import ResourceCardNameReadme from './ResourceCardName.md'
import ResourceCardEditableNameReadme from './ResourceCardEditableName.md'
import ResourceCardMetaReadme from './ResourceCardMeta.md'
import ResourceCardExampleReadme from './ResourceCardExample.md'

const resourceListCardStories = storiesOf(
  'Components|ResourceList/Card Family',
  module
).addDecorator(withKnobs)

const resourceListExampleStories = storiesOf(
  'Components|ResourceList/Examples',
  module
).addDecorator(withKnobs)

const resourceCardMeta = ['Created by Bob', 'Updated 25m ago']

resourceListCardStories.add(
  'ResourceCard',
  () => {
    const resourceCardRef: RefObject<ResourceCardRef> = createRef()
    const resourceCardNameRef: RefObject<ResourceCardNameRef> = createRef()
    const resourceCardMetaRef: RefObject<ResourceCardMetaRef> = createRef()
    const resourceCardEditableDescriptionRef: RefObject<ResourceCardEditableDescriptionRef> = createRef()

    const [name, setName] = useState<string>('Edit my name!')
    const [description, setDescription] = useState<string>(
      'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa.'
    )

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('ResourceCard', resourceCardRef.current)
      console.log('ResourceCardName', resourceCardNameRef.current)
      console.log('ResourceCardMeta', resourceCardMetaRef.current)
      console.log(
        'ResourceCardEditableDescription',
        resourceCardEditableDescriptionRef.current
      )
      /* eslint-enable */
    }

    const resourceCardExampleStyle = {
      width: '500px',
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <ResourceCard.ResourceCard
          ref={resourceCardRef}
          disabled={boolean('disabled', false)}
          contextMenuInteraction={select(
            'contextMenuInteraction',
            ['alwaysVisible', 'showOnHover'],
            'showOnHover'
          )}
          style={object('style', resourceCardExampleStyle)}
          direction={
            FlexDirection[
              select('direction', mapEnumKeys(FlexDirection), 'Column')
            ]
          }
          alignItems={
            AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Stretch')]
          }
          justifyContent={
            JustifyContent[
              select(
                'justifyContent ',
                mapEnumKeys(JustifyContent),
                'FlexStart'
              )
            ]
          }
          margin={
            ComponentSize[select('margin', mapEnumKeys(ComponentSize), 'Small')]
          }
          contextMenu={
            <div
              className="mockComponent"
              style={{width: '90px', height: '26px'}}
            >
              Menu
            </div>
          }
          highlightOnHover={boolean('highlightOnHover', true)}
        >
          <ResourceCardEditableName
            ref={resourceCardNameRef}
            name={name}
            onUpdate={setName}
            onClick={() => alert('<ResourceCardEditableName /> onClick fired!')}
          />
          <ResourceCardEditableDescription
            ref={resourceCardEditableDescriptionRef}
            description={description}
            onUpdate={setDescription}
            placeholder={text('description placeholder', 'Enter a description')}
          />
          <ResourceCardMeta ref={resourceCardMetaRef}>
            {array('metaData', resourceCardMeta).map(meta => (
              <span key={meta}>{meta}</span>
            ))}
          </ResourceCardMeta>
        </ResourceCard.ResourceCard>
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceCardReadme),
    },
  }
)

resourceListCardStories.add(
  'ResourceCardDescription',
  () => {
    const resourceCardDescriptionRef: RefObject<ResourceCardDescriptionRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(resourceCardDescriptionRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <ResourceCardDescription
          ref={resourceCardDescriptionRef}
          description={text(
            'description',
            'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
          )}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceCardDescriptionReadme),
    },
  }
)

resourceListCardStories.add(
  'ResourceCardEditableDescription',
  () => {
    const resourceCardEditableDescriptionRef: RefObject<ResourceCardEditableDescriptionRef> = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log(
        'ResourceCardEditableDescription',
        resourceCardEditableDescriptionRef.current
      )
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <ResourceCardEditableDescription
          ref={resourceCardEditableDescriptionRef}
          description={text(
            'description',
            'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
          )}
          onUpdate={description =>
            alert(`onUpdate fired with "${description}"`)
          }
          placeholder={text('description placeholder', 'Enter a description')}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceCardEditableDescriptionReadme),
    },
  }
)

resourceListCardStories.add(
  'ResourceCardName',
  () => {
    const resourceCardNameRef1: RefObject<ResourceCardNameRef> = createRef()
    const resourceCardNameRef2: RefObject<ResourceCardNameRef> = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log(resourceCardNameRef1.current)
      console.log(resourceCardNameRef2.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <div style={{margin: '30px'}}>
          <ResourceCardName
            ref={resourceCardNameRef1}
            name={text('name', 'Card Name')}
            onClick={() => alert('onClick fired!')}
          />
        </div>
        <div style={{margin: '30px'}}>
          <ResourceCardName
            ref={resourceCardNameRef2}
            name={text('name', 'Card Name')}
          />
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceCardNameReadme),
    },
  }
)

resourceListCardStories.add(
  'ResourceCardEditableName',
  () => {
    const resourceCardEditableNameRef1: RefObject<ResourceCardEditableNameRef> = createRef()
    const resourceCardEditableNameRef2: RefObject<ResourceCardEditableNameRef> = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log(resourceCardEditableNameRef1.current)
      console.log(resourceCardEditableNameRef2.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <div style={{margin: '30px'}}>
          <ResourceCardEditableName
            ref={resourceCardEditableNameRef1}
            name={text('name', 'Card Name')}
            onClick={() => alert('onClick fired!')}
            onUpdate={name => alert(`onUpdate fired with "${name}"`)}
            noNameString={text('noNameString', 'Untitled Card')}
            placeholder={text('placeholder', 'Name this card...')}
          />
        </div>
        <div style={{margin: '30px'}}>
          <ResourceCardEditableName
            ref={resourceCardEditableNameRef2}
            name={text('name', 'Card Name')}
            onUpdate={name => alert(`onUpdate fired with "${name}"`)}
            noNameString={text('noNameString', 'Untitled Card')}
            placeholder={text('placeholder', 'Name this card...')}
          />
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceCardEditableNameReadme),
    },
  }
)

resourceListCardStories.add(
  'ResourceCardMeta',
  () => {
    const resourceCardMeta: RefObject<ResourceCardMetaRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(resourceCardMeta.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <ResourceCardMeta
          ref={resourceCardMeta}
          direction={
            FlexDirection[
              select('direction', mapEnumKeys(FlexDirection), 'Row')
            ]
          }
          alignItems={
            AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Center')]
          }
          justifyContent={
            JustifyContent[
              select(
                'justifyContent ',
                mapEnumKeys(JustifyContent),
                'FlexStart'
              )
            ]
          }
        >
          <span>Boosh</span>
          <span>Bang</span>
          <span>Wham</span>
          <span>Pow</span>
        </ResourceCardMeta>
      </div>
    )
  },
  {
    readme: {
      content: marked(ResourceCardMetaReadme),
    },
  }
)

resourceListExampleStories.add(
  'Toggleable Card',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Width (px)', 500)}px`}}>
        <ResourceCard
          contextMenu={
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash}
              color={ComponentColor.Danger}
            />
          }
        >
          <SlideToggle
            size={ComponentSize.ExtraSmall}
            active={!boolean('disabled', false)}
            onChange={() => {
              // do nothing
            }}
          />
          <ResourceCard.Name
            name={text('name', 'Just another brick in the wall')}
          />
          <ResourceCard.EditableDescription
            description={text(
              'description',
              'Hey! Teacher! Leave us kids alone'
            )}
            onUpdate={desc => alert(`onUpate description fired: ${desc}`)}
          />
          <>Last updated 2h ago</>,
          <>
            Created by <b>Pink Floyd</b>
          </>
          <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Small}>
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
          </FlexBox>
        </ResourceCard>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(ResourceCardExampleReadme),
    },
  }
)
