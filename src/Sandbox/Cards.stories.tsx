// Libraries
import React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {ResourceCard} from '../Components/ResourceList/Card'
import {FlexBox} from '../Components/FlexBox'
import {SquareButton} from '../Components/Button/Composed/SquareButton'
import {
  AlignItems,
  ComponentColor,
  ComponentSize,
  FlexDirection,
  IconFont,
  JustifyContent,
} from '../Types'
import {SlideToggle} from '../Components/SlideToggle'
import {InputLabel} from '../Components/Inputs'
import {Icon} from '../Components/Icon'
import {Label} from '../Components/Label'
import {Button} from '../Components/Button/Composed/Button'

const cardStories = storiesOf('Sandbox/Cards', module)

cardStories.add('Resource Cards', () => {
  return (
    <div className="story--example">
      <FlexBox direction={FlexDirection.Column} margin={ComponentSize.Large}>
        <CardBuckets />
        <CardBucketsFull />
        <CardDisabled />
        <CardTask />
        <CardLabel />
        <CardAll />
      </FlexBox>
    </div>
  )
})

function CardBuckets() {
  return (
    <ResourceCard
      contextMenu={
        <FlexBox margin={ComponentSize.ExtraSmall}>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Duplicate_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogSolid_New}
              color={ComponentColor.Colorless}
            />
          </span>
        </FlexBox>
      }
    >
      <ResourceCard.Name name="Rolling temperature notebook" />
      <ResourceCard.Meta>
        <strong>System bucket</strong>
        <span>Retention: 7 days</span>
      </ResourceCard.Meta>
    </ResourceCard>
  )
}

function CardBucketsFull() {
  return (
    <ResourceCard
      contextMenu={
        <FlexBox margin={ComponentSize.ExtraSmall}>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Duplicate_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogSolid_New}
              color={ComponentColor.Colorless}
            />
          </span>
        </FlexBox>
      }
    >
      <ResourceCard.Name name="Rolling temperature notebook" />
      <ResourceCard.Meta>
        <strong>System bucket</strong>
        <span>Retention: 7 days</span>
      </ResourceCard.Meta>
      <FlexBox
        direction={FlexDirection.Row}
        justifyContent={JustifyContent.SpaceBetween}
        margin={ComponentSize.Medium}
      >
        <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Medium}>
          <Button
            icon={IconFont.Plus_New}
            text="Add a label"
            size={ComponentSize.ExtraSmall}
            color={ComponentColor.Colorless}
          />
          <Label
            id=""
            description=""
            name="user:influx"
            color="#9AF445"
            size={ComponentSize.ExtraSmall}
            /* eslint-disable */
            onDelete={() => {}}
            /* eslint-enable */
          />
        </FlexBox>
        <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Medium}>
          <Button
            icon={IconFont.Plus_New}
            text="Add data"
            size={ComponentSize.ExtraSmall}
            color={ComponentColor.Default}
          />
        </FlexBox>
      </FlexBox>
    </ResourceCard>
  )
}

function CardDisabled() {
  return (
    <ResourceCard
      disabled={true}
      contextMenu={
        <FlexBox margin={ComponentSize.ExtraSmall}>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Duplicate_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogSolid_New}
              color={ComponentColor.Colorless}
            />
          </span>
        </FlexBox>
      }
    >
      <ResourceCard.EditableName
        name="Rolling temperature notebook"
        onUpdate={name => alert(`onUpate name fired: ${name}`)}
      />
      <ResourceCard.EditableDescription
        description="No description"
        onUpdate={desc => alert(`onUpate description fired: ${desc}`)}
      />
      <ResourceCard.Meta>
        <FlexBox
          direction={FlexDirection.Row}
          alignItems={AlignItems.Center}
          margin={ComponentSize.Medium}
        >
          <SlideToggle
            /* eslint-disable */
            onChange={() => {
              // Do nothing
            }}
            /* eslint-enable */
            size={ComponentSize.ExtraSmall}
            active={false}
          />
          <InputLabel active={true}>Active</InputLabel>
        </FlexBox>
        <strong>System bucket</strong>
        <a href="#">Setup instructions</a>
        <span>
          Last completed: 2021-07-21T09:15:00Z{' '}
          <Icon glyph={IconFont.AlertTriangle} />
        </span>
        <span>Scheduled to run every 15m</span>
        <Button
          color={ComponentColor.Colorless}
          icon={IconFont.Clipboard_New}
          text="ID: 07dd331e1c9fc00"
          placeIconAfterText
        />
      </ResourceCard.Meta>
    </ResourceCard>
  )
}

function CardAll() {
  return (
    <ResourceCard
      contextMenu={
        <FlexBox margin={ComponentSize.ExtraSmall}>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Duplicate_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogSolid_New}
              color={ComponentColor.Colorless}
            />
          </span>
        </FlexBox>
      }
    >
      <ResourceCard.EditableName
        name="Rolling temperature notebook"
        onUpdate={name => alert(`onUpate name fired: ${name}`)}
      />
      <ResourceCard.EditableDescription
        description="No description"
        onUpdate={desc => alert(`onUpate description fired: ${desc}`)}
      />
      <ResourceCard.Meta>
        <FlexBox
          direction={FlexDirection.Row}
          alignItems={AlignItems.Center}
          margin={ComponentSize.Medium}
        >
          <SlideToggle
            onChange={() => {
              // Do nothing
            }}
            size={ComponentSize.ExtraSmall}
            active={true}
          />
          <InputLabel active={true}>Active</InputLabel>
        </FlexBox>
        <strong>System bucket</strong>
        <a href="#">Setup instructions</a>
        <span>
          Last completed: 2021-07-21T09:15:00Z{' '}
          <Icon glyph={IconFont.AlertTriangle} />
        </span>
        <span>Scheduled to run every 15m</span>
        <Button
          color={ComponentColor.Colorless}
          icon={IconFont.Clipboard_New}
          text="ID: 07dd331e1c9fc00"
          placeIconAfterText
        />
      </ResourceCard.Meta>
      <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Medium}>
        <Label
          id="CRIT"
          description="I'm a cool label"
          name="CRIT"
          color="#da3434"
          size={ComponentSize.ExtraSmall}
          /* eslint-disable */
          onDelete={() => {}}
          /* eslint-enable */
        />
        <Label
          id="WARN"
          description="I'm a cool label"
          name="WARN"
          color="#f2b218"
          size={ComponentSize.ExtraSmall}
          /* eslint-disable */
          onDelete={() => {}}
          /* eslint-enable */
        />
        <Label
          id="OK"
          description="I'm a cool label"
          name="OK"
          color="#6ac255"
          size={ComponentSize.ExtraSmall}
          /* eslint-disable */
          onDelete={() => {}}
          /* eslint-enable */
        />
      </FlexBox>
    </ResourceCard>
  )
}

function CardTask() {
  return (
    <ResourceCard>
      <ResourceCard.Name name="Notebook Task for local_54f15257-1b35-4567-becc-fb1c2462e996" />
      <ResourceCard.Meta>
        <FlexBox
          direction={FlexDirection.Row}
          alignItems={AlignItems.Center}
          margin={ComponentSize.Medium}
        >
          <SlideToggle
            /* eslint-disable */
            onChange={() => {
              // Do nothing
            }}
            /* eslint-enable */
            size={ComponentSize.ExtraSmall}
            active={true}
          />
          <InputLabel active={true}>Active</InputLabel>
        </FlexBox>
        <span>Created: 2021-07-20 17:45:43</span>
        <span>Created by: trys@clearleft.com</span>
        <span>Last used: 6 minutes ago</span>
      </ResourceCard.Meta>
      <FlexBox
        direction={FlexDirection.Row}
        justifyContent={JustifyContent.FlexEnd}
        margin={ComponentSize.Medium}
      >
        <Button
          icon={IconFont.Plus_New}
          text="Add data"
          size={ComponentSize.ExtraSmall}
          color={ComponentColor.Default}
        />
        <Button
          text="Edit Task"
          size={ComponentSize.ExtraSmall}
          color={ComponentColor.Primary}
        />
      </FlexBox>
    </ResourceCard>
  )
}

function CardLabel() {
  return (
    <ResourceCard
      contextMenu={
        <FlexBox margin={ComponentSize.ExtraSmall}>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Duplicate_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash_New}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogSolid_New}
              color={ComponentColor.Colorless}
            />
          </span>
        </FlexBox>
      }
    >
      <ResourceCard.Meta>
        <Label
          id="Analytics"
          description="I'm a cool label"
          name="Analytics"
          color="#C5F98D"
          size={ComponentSize.Small}
          /* eslint-disable */
          onDelete={() => {}}
          /* eslint-enable */
        />
        <span>No description</span>
      </ResourceCard.Meta>
    </ResourceCard>
  )
}
