// Libraries
import React, {createRef, RefObject} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, boolean, array, number} from '@storybook/addon-knobs'

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
} from '../../../Types'

// Notes
import ResourceCardReadme from './ResourceCard.md'
import ResourceCardDescriptionReadme from './ResourceCardDescription.md'
import ResourceCardEditableDescriptionReadme from './ResourceCardEditableDescription.md'
import ResourceCardNameReadme from './ResourceCardName.md'
import ResourceCardEditableNameReadme from './ResourceCardEditableName.md'
import ResourceCardExampleReadme from './ResourceCardExample.md'

const resourceListCardStories = storiesOf(
  'Components|ResourceList/Card Family',
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

const resourceCardMeta = ['Created by Bob', 'Updated 25m ago']

resourceListCardStories.add(
  'ResourceCard',
  () => {
    const resourceCardRef: RefObject<ResourceCardRef> = createRef()
    const resourceCardNameRef: RefObject<ResourceCardNameRef> = createRef()
    const resourceCardEditableDescriptionRef: RefObject<
      ResourceCardEditableDescriptionRef
    > = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('ResourceCard', resourceCardRef.current)
      console.log('ResourceCardName', resourceCardNameRef.current)
      console.log('ResourceCardEditableDescription', resourceCardEditableDescriptionRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <ResourceCard.ResourceCard
          ref={resourceCardRef}
          name={
            <ResourceCardName
              ref={resourceCardNameRef}
              name={text('name', 'Card Name')}
              onClick={() => alert('<ResourceCardName /> onClick fired!')}
            />
          }
          description={
            <ResourceCardEditableDescription
              ref={resourceCardEditableDescriptionRef}
              description={text(
                'description',
                'Heirloom letterpress shaman, mixtape swag +1 8-bit coloring book ennui fanny pack small batch farm-to-table seitan sriracha austin. 8-bit mustache master cleanse bitters, vinyl shoreditch hot chicken authentic quinoa. '
              )}
              onUpdate={description =>
                alert(
                  `<ResourceCardEditableDescription /> onUpdate fired with "${description}"`
                )
              }
              placeholder={text(
                'description placeholder',
                'Enter a description'
              )}
            />
          }
          disabled={boolean('disabled', false)}
          metaData={array('metaData', resourceCardMeta).map(meta => (
            <span key={meta}>{meta}</span>
          ))}
        />
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
    const resourceCardDescriptionRef: RefObject<
      ResourceCardDescriptionRef
    > = createRef()

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
    const resourceCardEditableDescriptionRef: RefObject<
      ResourceCardEditableDescriptionRef
    > = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('ResourceCardEditableDescription', resourceCardEditableDescriptionRef.current)
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
    const resourceCardEditableNameRef1: RefObject<
      ResourceCardEditableNameRef
    > = createRef()
    const resourceCardEditableNameRef2: RefObject<
      ResourceCardEditableNameRef
    > = createRef()

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

resourceListExampleStories.add(
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
            <ResourceCard.EditableDescription
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
          }
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(ResourceCardExampleReadme),
    },
  }
)
