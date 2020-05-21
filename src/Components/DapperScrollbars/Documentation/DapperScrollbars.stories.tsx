// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {useState} from '@storybook/addons'
import {withKnobs, boolean, color, object, number} from '@storybook/addon-knobs'

// Components
import {DapperScrollbars, FusionScrollHandler} from '../DapperScrollbars'
import {Form} from '../../Form'
import {Dropdown} from '../../Dropdowns'

const scrollbarStories = storiesOf('Utilities|Scrollbars', module).addDecorator(
  withKnobs
)

const fixedDefaultStyle = {width: '300px', height: '600px'}
const autoSizeDefaultStyle = {
  width: '300px',
  maxWidth: '300px',
  maxHeight: '300px',
}
const selectionStyle = {color: 'red'}
const instructionStyle = {color: 'green'}
const contentStyle = {width: '600px'}
const exampleTextDefault = `Try modifying this text to see how scrolling is affected! Distillery raclette swag, actually selfies cred neutra put a bird on it mlkshk hexagon fam. Iceland man braid echo park succulents flexitarian occupy. Organic health goth activated charcoal helvetica poke beard swag tacos drinking vinegar pop-up kickstarter wolf normcore lyft chillwave. Microdosing migas blog intelligentsia air plant typewriter, echo park mumblecore kombucha yuccie wayfarers poutine actually locavore distillery.
Blue bottle four loko kogi woke activated charcoal forage tote bag sartorial. Hammock normcore lo-fi tbh trust fund man bun post-ironic locavore DIY plaid wolf tumeric. Poutine cred microdosing, typewriter jianbing marfa vegan. Kombucha four dollar toast organic bespoke af cred freegan meditation biodiesel tilde chia. Tofu microdosing retro lo-fi, DIY raclette kitsch. 
Art party ramps vice master cleanse ethical scenester. Knausgaard kombucha williamsburg chambray asymmetrical, wolf seitan vaporware swag selfies. Single-origin coffee cloud bread vaporware, authentic sartorial food truck echo park ugh letterpress. IPhone pickled banh mi, lomo fingerstache crucifix letterpress offal lo-fi whatever pok pok chartreuse kitsch banjo.
Keytar celiac copper mug chia typewriter. Umami crucifix tumblr mixtape taxidermy succulents hammock cardigan narwhal. Vegan four loko disrupt gastropub, pop-up drinking vinegar pinterest semiotics photo booth unicorn ugh pork belly before they sold out scenester. Waistcoat disrupt hashtag vice, raclette flannel farm-to-table butcher iPhone biodiesel. Locavore godard brunch hammock bicycle rights flannel letterpress pabst distillery mixtape jean shorts af chartreuse shoreditch small batch. Banh mi slow-carb brooklyn thundercats, helvetica shoreditch locavore.`

scrollbarStories.add('Scrollbar Example', () => {
  const [selection, setSelection] = useState<string>('Foo')
  const handleSelectionChange = (value: string) => {
    setSelection(value)
  }

  return (
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
          <p style={object('selection style', selectionStyle)}>"{selection}"</p>
          <p style={object('instruction style', instructionStyle)}>
            1. Scroll until you hide the above word
          </p>
          <p style={object('instruction style', instructionStyle)}>
            2. Make a selection
          </p>
          <p style={object('instruction style', instructionStyle)}>
            3. Scrollbars should stay in place and you should not see the
            selection change until you manually scroll back
          </p>
          <p style={object('content style', contentStyle)}>
            {exampleTextDefault}
          </p>
        </DapperScrollbars>
        <Form.Element label="Select a word">
          <Dropdown
            button={(active, onClick) => (
              <Dropdown.Button active={active} onClick={onClick}>
                {selection}
              </Dropdown.Button>
            )}
            menu={onCollapse => (
              <Dropdown.Menu onCollapse={onCollapse}>
                <Dropdown.Item
                  id="foo"
                  value="Foo"
                  onClick={handleSelectionChange}
                  selected={selection === 'Foo'}
                >
                  Foo
                </Dropdown.Item>
                <Dropdown.Item
                  id="bar"
                  value="Bar"
                  onClick={handleSelectionChange}
                  selected={selection === 'Bar'}
                >
                  Bar
                </Dropdown.Item>
                <Dropdown.Item
                  id="baz"
                  value="Baz"
                  onClick={handleSelectionChange}
                  selected={selection === 'Baz'}
                >
                  Baz
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          />
        </Form.Element>
      </div>
    </div>
  )
})

scrollbarStories.add('AutoSize Example', () => (
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
        <p>{exampleTextDefault}</p>
      </DapperScrollbars>
    </div>
  </div>
))

scrollbarStories.add('Synchronized Scrolling', () => {
  const [scrollbarState, setScrollbarState] = useState<number>(0)

  const scrollBarStyle = {
    backgroundColor: '#333',
    width: '200px',
    height: '300px',
    margin: '16px',
  }

  const handleUpdate: FusionScrollHandler = (scrollValues): void => {
    const {scrollTop} = scrollValues

    setScrollbarState(scrollTop)
  }

  return (
    <div className="story--example">
      <DapperScrollbars
        style={scrollBarStyle}
        onScroll={handleUpdate}
        noScrollX={true}
        autoHide={false}
        autoSize={false}
        thumbStartColor={color('thumbStartColor', '#00C9FF')}
        thumbStopColor={color('thumbStopColor', '#9394FF')}
        scrollTop={scrollbarState}
      >
        <p>{exampleTextDefault}</p>
      </DapperScrollbars>
      <DapperScrollbars
        style={scrollBarStyle}
        onScroll={handleUpdate}
        noScrollX={true}
        autoHide={false}
        autoSize={false}
        thumbStartColor={color('thumbStartColor', '#00C9FF')}
        thumbStopColor={color('thumbStopColor', '#9394FF')}
        scrollTop={scrollbarState}
      >
        <p>{exampleTextDefault}</p>
      </DapperScrollbars>
    </div>
  )
})
