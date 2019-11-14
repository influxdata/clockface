// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {PopNav, PopNavRef} from '../index'

// Types
import {ComponentSize, Alignment, ComponentColor} from '../../../Types'

// Notes
import PopNavReadme from './PopNav.md'

const popNavStories = storiesOf(
  'Components|Navigation/PopNav',
  module
).addDecorator(withKnobs)

popNavStories.add(
  'PopNav',
  () => {
    const popNavRef = createRef<PopNavRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(popNavRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example top">
        <PopNav.PopNav
          ref={popNavRef}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          buttonColor={
            ComponentColor[
              select(
                'button color',
                {None: 'none', ...mapEnumKeys(ComponentColor)},
                'none'
              )
            ]
          }
          align={
            Alignment[select('alignment', mapEnumKeys(Alignment), 'Right')]
          }
        >
          <div
            style={{
              margin: '0 16px',
            }}
          >
            <div
              style={{
                color: 'white',
              }}
            >
              Signed in as
            </div>
            <div
              style={{
                color: '#BEF0FF',
              }}
            >
              somewhatlongusername@yourdomain.com
            </div>
          </div>
          <PopNav.Item
            titleLink={className => (
              <a className={className} href="#">
                First Item
              </a>
            )}
            active={false}
          />
          <PopNav.Item
            titleLink={className => (
              <a className={className} href="#">
                Second Item
              </a>
            )}
            active={false}
          />
          <PopNav.Item
            titleLink={className => (
              <a className={className} href="#">
                Third Item
              </a>
            )}
            active={false}
          />
        </PopNav.PopNav>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(PopNavReadme),
    },
  }
)

popNavStories.add(
  'PopNavItem',
  () => (
    <div className="story--example">
      <PopNav.Item
        titleLink={className => (
          <a className={className} href="#">
            Menu Item
          </a>
        )}
        active={false}
      />
    </div>
  ),
  {
    readme: {
      content: marked(PopNavReadme),
    },
  }
)
