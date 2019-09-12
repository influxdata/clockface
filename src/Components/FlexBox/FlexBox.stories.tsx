// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, boolean, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {FlexBox} from 'src/Components/FlexBox/FlexBox'
import {FlexBoxChild} from 'src/Components/FlexBox/FlexBoxChild'

// Types
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
  ComponentSize,
} from 'src/Types'

// Notes
import FlexBoxReadme from 'src/Components/FlexBox/FlexBox.md'
import FlexBoxChildReadme from 'src/Components/FlexBox/FlexBoxChild.md'

const componentSpacerStories = storiesOf('Layout|FlexBox', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

componentSpacerStories.add(
  'FlexBox',
  () => (
    <div className="story--example">
      <FlexBox
        direction={
          FlexDirection[select('direction', mapEnumKeys(FlexDirection), 'Row')]
        }
        alignItems={
          AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Center')]
        }
        justifyContent={
          JustifyContent[
            select('justifyContent ', mapEnumKeys(JustifyContent), 'FlexStart')
          ]
        }
        margin={
          ComponentSize[
            select('margin', {None: '', ...mapEnumKeys(ComponentSize)}, 'None')
          ]
        }
        stretchToFitWidth={boolean('stretchToFitWidth', false)}
        stretchToFitHeight={boolean('stretchToFitHeight', false)}
      >
        <div
          className="mockComponent box"
          style={{height: '40px', width: '40px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '60px', width: '60px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '80px', width: '80px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '100px', width: '100px'}}
        />
        <div
          className="mockComponent box"
          style={{height: '120px', width: '120px'}}
        />
      </FlexBox>
    </div>
  ),
  {
    readme: {
      content: marked(FlexBoxReadme),
    },
  }
)

componentSpacerStories.add(
  'FlexChild',
  () => (
    <div className="story--example">
      <FlexBox
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        justifyContent={JustifyContent.FlexStart}
        margin={
          ComponentSize[
            select('margin', {None: '', ...mapEnumKeys(ComponentSize)}, 'Small')
          ]
        }
        stretchToFitWidth={true}
      >
        <FlexBoxChild
          basis={number('Child A: basis', 40)}
          grow={number('Child A: grow', 0)}
          shrink={number('Child A: shrink', 0)}
        >
          <div className="mockComponent stretch">A</div>
        </FlexBoxChild>
        <FlexBoxChild
          basis={number('Child B: basis', 0)}
          grow={number('Child B: grow', 1)}
          shrink={number('Child B: shrink', 0)}
        >
          <div className="mockComponent stretch">B</div>
        </FlexBoxChild>
        <FlexBoxChild
          basis={number('Child C: basis', 0)}
          grow={number('Child C: grow', 2)}
          shrink={number('Child C: shrink', 0)}
        >
          <div className="mockComponent stretch">C</div>
        </FlexBoxChild>
        <FlexBoxChild
          basis={number('Child D: basis', 80)}
          grow={number('Child D: grow', 0)}
          shrink={number('Child D: shrink', 0)}
        >
          <div className="mockComponent stretch">D</div>
        </FlexBoxChild>
      </FlexBox>
    </div>
  ),
  {
    readme: {
      content: marked(FlexBoxChildReadme),
    },
  }
)
