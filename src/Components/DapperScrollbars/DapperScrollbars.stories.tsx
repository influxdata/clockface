// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, color, object, text} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {DapperScrollbars} from './DapperScrollbars'

// Notes
import DapperScrollbarsExample1Readme from './DapperScrollbarsExample1.md'
import DapperScrollbarsExample2Readme from './DapperScrollbarsExample2.md'

const scrollbarStories = storiesOf('Utilities|Scrollbars', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const fixedDefaultStyle = {width: '300px', height: '180px'}
const autoSizeDefaultStyle = {width: '300px', maxHeight: '300px'}
const exampleTextDefault =
  'Try modifying this text to see how scrolling is affected! Lorem ipsum dolor amet bitters normcore godard ethical blog single-origin coffee pickled hella master cleanse. Artisan hell of photo booth cardigan pok pok post-ironic ethical readymade poutine flexitarian brooklyn cronut semiotics. Poutine kinfolk hot chicken tofu deep v yr bespoke copper mug blog whatever street art beard affogato. Meditation unicorn kogi sartorial, quinoa raclette neutra bushwick. Copper mug sartorial prism readymade hella asymmetrical swag scenester cray venmo humblebrag messenger bag lumbersexual biodiesel.'

scrollbarStories.add(
  'Fixed Example',
  () => (
    <div className="story--example">
      <div className="scroll--container">
        <DapperScrollbars
          style={object('style', fixedDefaultStyle)}
          removeTracksWhenNotUsed={boolean('removeTracksWhenNotUsed', false)}
          removeTrackYWhenNotUsed={boolean('removeTrackYWhenNotUsed', false)}
          removeTrackXWhenNotUsed={boolean('removeTrackXWhenNotUsed', false)}
          noScrollX={boolean('noScrollX', false)}
          noScrollY={boolean('noScrollY', false)}
          noScroll={boolean('noScroll', false)}
          autoHide={boolean('autoHide', true)}
          autoSize={false}
          thumbStartColor={color('thumbStartColor', '#00C9FF')}
          thumbStopColor={color('thumbStopColor', '#9394FF')}
        >
          <p>{text('Text Content', exampleTextDefault)}</p>
        </DapperScrollbars>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(DapperScrollbarsExample1Readme),
    },
  }
)

scrollbarStories.add(
  'AutoSize Example',
  () => (
    <div className="story--example">
      <div className="scroll--container">
        <DapperScrollbars
          style={object('style', autoSizeDefaultStyle)}
          removeTracksWhenNotUsed={boolean('removeTracksWhenNotUsed', false)}
          removeTrackYWhenNotUsed={boolean('removeTrackYWhenNotUsed', false)}
          removeTrackXWhenNotUsed={boolean('removeTrackXWhenNotUsed', false)}
          noScrollX={boolean('noScrollX', false)}
          noScrollY={boolean('noScrollY', false)}
          noScroll={boolean('noScroll', false)}
          autoHide={boolean('autoHide', true)}
          autoSize={true}
          thumbStartColor={color('thumbStartColor', '#00C9FF')}
          thumbStopColor={color('thumbStopColor', '#9394FF')}
        >
          <p>{text('Text Content', exampleTextDefault)}</p>
        </DapperScrollbars>
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(DapperScrollbarsExample2Readme),
    },
  }
)
