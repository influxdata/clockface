// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {SquareGrid, SquareGridRef, SquareGridCardRef} from '../'

// Types
import {ComponentSize} from '../../../Types'

// Notes
import SquareGridReadme from './SquareGrid.md'

const squareGridStories = storiesOf(
  'Layout|Fluid Square Grid',
  module
).addDecorator(withKnobs)

squareGridStories.add(
  'SquareGrid',
  () => {
    const squareGridRef: RefObject<SquareGridRef> = createRef()
    const squareGridCardRef: RefObject<SquareGridCardRef> = createRef()

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('SquareGrid', squareGridRef.current)
      console.log('SquareGridCard', squareGridCardRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SquareGrid.SquareGrid
          ref={squareGridRef}
          cardSize={text('cardSize', '100px')}
          gutter={
            ComponentSize[
              select(
                'gutter',
                {None: '', ...mapEnumKeys(ComponentSize)},
                'None'
              )
            ]
          }
        >
          <SquareGrid.Card>
            <div className="mockComponent stretch">A</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">B</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">C</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">D</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">E</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">F</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">G</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">H</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">I</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">J</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">K</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">L</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">M</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">N</div>
          </SquareGrid.Card>
          <SquareGrid.Card>
            <div className="mockComponent stretch">O</div>
          </SquareGrid.Card>
        </SquareGrid.SquareGrid>
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SquareGridReadme),
    },
  }
)
