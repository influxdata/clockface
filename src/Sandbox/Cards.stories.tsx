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
              icon={IconFont.Duplicate}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogThick}
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
              icon={IconFont.Duplicate}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogThick}
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
            icon={IconFont.Plus}
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
            onDelete={() => {}}
          />
        </FlexBox>
        <FlexBox direction={FlexDirection.Row} margin={ComponentSize.Medium}>
          <Button
            icon={IconFont.Plus}
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
              icon={IconFont.Duplicate}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogThick}
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
          icon={IconFont.Duplicate}
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
              icon={IconFont.Duplicate}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.Trash}
              color={ComponentColor.Colorless}
            />
          </span>
          <span>
            <SquareButton
              size={ComponentSize.ExtraSmall}
              icon={IconFont.CogThick}
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
          icon={IconFont.Duplicate}
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
          onDelete={() => {}}
        />
        <Label
          id="WARN"
          description="I'm a cool label"
          name="WARN"
          color="#f2b218"
          size={ComponentSize.ExtraSmall}
          onDelete={() => {}}
        />
        <Label
          id="OK"
          description="I'm a cool label"
          name="OK"
          color="#6ac255"
          size={ComponentSize.ExtraSmall}
          onDelete={() => {}}
        />
      </FlexBox>
    </ResourceCard>
  )
}
