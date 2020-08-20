// Libraries
import React, {RefObject, createRef, KeyboardEvent} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
  array,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Components
import {SelectableCard, SelectableCardRef} from '../'

// Types
import {ComponentColor, ComponentSize, IconFont} from '../../../Types'

// Notes
import SelectableCardReadme from './SelectableCard.md'

const selectableCardStories = storiesOf(
  'Components|Cards/SelectableCard',
  module
).addDecorator(withKnobs)

const exampleStyle = {
  width: '200px',
  height: '200px',
  marginLeft: '8px',
  marginRight: '8px',
}

selectableCardStories.add(
  'SelectableCard',
  () => {
    const selectableCard1Ref: RefObject<SelectableCardRef> = createRef()
    const selectableCard2Ref: RefObject<SelectableCardRef> = createRef()
    const selectableCard3Ref: RefObject<SelectableCardRef> = createRef()
    const selectableCard4Ref: RefObject<SelectableCardRef> = createRef()
    const selectableCard5Ref: RefObject<SelectableCardRef> = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('SelectableCard 1', selectableCard1Ref.current)
      console.log('SelectableCard 2', selectableCard2Ref.current)
      console.log('SelectableCard 3', selectableCard3Ref.current)
      console.log('SelectableCard 4', selectableCard4Ref.current)
      console.log('SelectableCard 5', selectableCard5Ref.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example" style={{height: '400px'}}>
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
        <SelectableCard
          ref={selectableCard1Ref}
          style={object('style', exampleStyle)}
          id={text('id', 'Titular Title')}
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'Checkmark'
              )
            ]
          }
          label={text('label', 'Titular Title')}
          selected={boolean('selected', true)}
          disabled={boolean('disabled', false)}
          fontSize={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Success')
            ]
          }
          onClick={() => {
            alert('card clicked!')
          }}
        />
        <SelectableCard
          ref={selectableCard2Ref}
          style={object('style', exampleStyle)}
          id="selected-card"
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'Checkmark'
              )
            ]
          }
          label="Selected"
          selected={true}
          disabled={false}
          fontSize={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Success')
            ]
          }
          onClick={() => {
            alert('card clicked!')
          }}
        >
          <div className="mockComponent stretch">Image</div>
        </SelectableCard>
        <SelectableCard
          ref={selectableCard3Ref}
          style={object('style', exampleStyle)}
          id="selected-disabled-card"
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'Checkmark'
              )
            ]
          }
          label="Selected + Disabled"
          selected={true}
          disabled={true}
          fontSize={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Success')
            ]
          }
          onClick={() => {
            alert('card clicked!')
          }}
        >
          <div className="mockComponent stretch">Image</div>
        </SelectableCard>
        <SelectableCard
          ref={selectableCard4Ref}
          style={object('style', exampleStyle)}
          id="default-card"
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'Checkmark'
              )
            ]
          }
          label="Default"
          selected={false}
          disabled={false}
          fontSize={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Success')
            ]
          }
          onClick={() => {
            alert('card clicked!')
          }}
        >
          <div className="mockComponent stretch">Image</div>
        </SelectableCard>
        <SelectableCard
          ref={selectableCard5Ref}
          style={object('style', exampleStyle)}
          id="disabled-card"
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'Checkmark'
              )
            ]
          }
          label="Disabled"
          selected={false}
          disabled={true}
          fontSize={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Success')
            ]
          }
          onClick={() => {
            alert('card clicked!')
          }}
        >
          <div className="mockComponent stretch">Image</div>
        </SelectableCard>
      </div>
    )
  },
  {
    readme: {
      content: marked(SelectableCardReadme),
    },
  }
)

selectableCardStories.add(
  'Using tabIndex',
  () => {
    const [activeCardIDs, updateActiveCardIDs] = useState<string[]>([])

    const cards = [
      {label: 'Blade Runner', color: ComponentColor.Default},
      {label: 'Equilibrium', color: ComponentColor.Primary},
      {label: 'Ghost In The Shell', color: ComponentColor.Secondary},
      {label: 'Interstellar', color: ComponentColor.Success},
      {label: 'Akira', color: ComponentColor.Warning},
      {label: 'Total Recall', color: ComponentColor.Danger},
    ]

    const disabledCards = array('Disabled Cards', ['Interstellar'])

    const isCardSelected = (card: string): boolean => {
      return activeCardIDs.includes(card)
    }

    const isCardDisabled = (card: string): boolean => {
      return disabledCards.includes(card)
    }

    const handleCardClick = (card: string): void => {
      const cardCurrentlyActive = activeCardIDs.includes(card)
      let updatedActiveCardIDs = activeCardIDs

      if (cardCurrentlyActive) {
        updatedActiveCardIDs = updatedActiveCardIDs.filter(
          cardID => cardID !== card
        )
      } else {
        updatedActiveCardIDs = [...updatedActiveCardIDs, card]
      }

      updateActiveCardIDs(updatedActiveCardIDs)
    }

    const handleCardKeyDown = (
      card: string,
      e: KeyboardEvent<SelectableCardRef>
    ): void => {
      const spaceKey = e.keyCode === 32
      const cardCurrentlyActive = activeCardIDs.includes(card)
      let updatedActiveCardIDs = activeCardIDs

      if (cardCurrentlyActive) {
        updatedActiveCardIDs = updatedActiveCardIDs.filter(
          cardID => cardID !== card
        )
      } else {
        updatedActiveCardIDs = [...updatedActiveCardIDs, card]
      }

      spaceKey && updateActiveCardIDs(updatedActiveCardIDs)
    }

    return (
      <div className="story--example" style={{height: '400px'}}>
        {cards.map((card, i) => (
          <SelectableCard
            formName="scifi movies"
            style={exampleStyle}
            tabIndex={i + 1}
            key={card.label}
            id={card.label}
            label={card.label}
            selected={isCardSelected(card.label)}
            disabled={isCardDisabled(card.label)}
            onClick={handleCardClick}
            onKeyDown={handleCardKeyDown}
            color={card.color}
          />
        ))}
      </div>
    )
  },
  {
    readme: {
      content: marked(SelectableCardReadme),
    },
  }
)
