// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  boolean,
  color,
  object,
  text,
  number,
} from '@storybook/addon-knobs'
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
const contentStyle = {width: '600px'}
const exampleTextDefault = `Try modifying this text to see how scrolling is affected! Distillery raclette swag, actually selfies cred neutra put a bird on it mlkshk hexagon fam. Iceland man braid echo park succulents flexitarian occupy. Organic health goth activated charcoal helvetica poke beard swag tacos drinking vinegar pop-up kickstarter wolf normcore lyft chillwave. Microdosing migas blog intelligentsia air plant typewriter, echo park mumblecore kombucha yuccie wayfarers poutine actually locavore distillery.
Blue bottle four loko kogi woke activated charcoal forage tote bag sartorial. Hammock normcore lo-fi tbh trust fund man bun post-ironic locavore DIY plaid wolf tumeric. Poutine cred microdosing, typewriter jianbing marfa vegan. Kombucha four dollar toast organic bespoke af cred freegan meditation biodiesel tilde chia. Tofu microdosing retro lo-fi, DIY raclette kitsch. 
Art party ramps vice master cleanse ethical scenester. Knausgaard kombucha williamsburg chambray asymmetrical, wolf seitan vaporware swag selfies. Single-origin coffee cloud bread vaporware, authentic sartorial food truck echo park ugh letterpress. IPhone pickled banh mi, lomo fingerstache crucifix letterpress offal lo-fi whatever pok pok chartreuse kitsch banjo.
Keytar celiac copper mug chia typewriter. Umami crucifix tumblr mixtape taxidermy succulents hammock cardigan narwhal. Vegan four loko disrupt gastropub, pop-up drinking vinegar pinterest semiotics photo booth unicorn ugh pork belly before they sold out scenester. Waistcoat disrupt hashtag vice, raclette flannel farm-to-table butcher iPhone biodiesel. Locavore godard brunch hammock bicycle rights flannel letterpress pabst distillery mixtape jean shorts af chartreuse shoreditch small batch. Banh mi slow-carb brooklyn thundercats, helvetica shoreditch locavore.`
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
          scrollTop={number('scrollTop', 0)}
          scrollLeft={number('scrollLeft', 0)}
        >
          <p style={object('content style', contentStyle)}>
            {text('Text Content', exampleTextDefault)}
          </p>
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
