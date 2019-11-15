// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  boolean,
  text,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Popover, PopoverRef} from '../'
import {ReflessPopover} from '../Composed/ReflessPopover'
import {
  QuestionMarkTooltip,
  QuestionMarkTooltipRef,
} from '../Composed/QuestionMarkTooltip'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'

// Types
import {
  Appearance,
  PopoverInteraction,
  PopoverPosition,
  ComponentColor,
  IconFont,
  ComponentStatus,
} from '../../../Types'

// Notes
import PopoverReadme from './Popover.md'
import ReflessPopoverReadme from './ReflessPopover.md'
import QuestionMarkTooltipReadme from './QuestionMarkTooltip.md'

const popoverStories = storiesOf('Atomic|Popover/Base', module).addDecorator(
  withKnobs
)

const composedPopoverStories = storiesOf(
  'Atomic|Popover/Composed',
  module
).addDecorator(withKnobs)

const testPopoverStories = storiesOf(
  'Atomic|Popover/Tests',
  module
).addDecorator(withKnobs)

const exampleStyle = {
  width: '250px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

popoverStories.add(
  'Popover',
  () => {
    const triggerRefA = createRef<HTMLDivElement>()
    const triggerRefB = createRef<HTMLDivElement>()
    const triggerRefC = createRef<HTMLButtonElement>()
    const popover1Ref = createRef<PopoverRef>()
    const popover2Ref = createRef<PopoverRef>()
    const popover3Ref = createRef<PopoverRef>()

    const log1Ref = (): void => {
      /* eslint-disable */
      console.log(popover1Ref.current)
      /* eslint-enable */
    }

    const log2Ref = (): void => {
      /* eslint-disable */
      console.log(popover2Ref.current)
      /* eslint-enable */
    }

    const log3Ref = (): void => {
      /* eslint-disable */
      console.log(popover3Ref.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div
          className="mockComponent mockButton"
          ref={triggerRefA}
          style={{marginRight: '60px'}}
        >
          Click Me
        </div>
        <div
          className="mockComponent mockButton"
          ref={triggerRefB}
          style={{marginRight: '60px'}}
        >
          Hover Me
        </div>
        <SquareButton
          icon={IconFont.Zap}
          ref={triggerRefC}
          status={ComponentStatus.Disabled}
        />
        <Popover.Popover
          ref={popover1Ref}
          triggerRef={triggerRefA}
          enableDefaultStyles={false}
          contents={(onHide: any) => (
            <>
              PopoverContents
              <Popover.DismissButton onClick={onHide} />
              <div className="story--test-buttons">
                <button onClick={log1Ref}>Log Ref</button>
              </div>
            </>
          )}
          className={text('className', '')}
          style={object('style', exampleStyle)}
          caretSize={number('caretSize', 8)}
          distanceFromTrigger={number('distanceFromTrigger', 4)}
          showEvent={PopoverInteraction.Click}
          hideEvent={PopoverInteraction.Click}
          position={
            PopoverPosition[
              select('position', mapEnumKeys(PopoverPosition), 'Below')
            ]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          type={
            Appearance[select('type', mapEnumKeys(Appearance), 'Outline')]
          }
        />
        <Popover.Popover
          ref={popover2Ref}
          triggerRef={triggerRefB}
          enableDefaultStyles={boolean('enableDefaultStyles', true)}
          contents={() => (
            <>
              <div style={{marginTop: '30px'}}>
                I'm just a simple popover looking for my
                <br />
                place in this <strong>vast and beautiful</strong> world.
                <br />
                Will you help me?
              </div>
              <div className="story--test-buttons">
                <button onClick={log2Ref}>Log Ref</button>
              </div>
            </>
          )}
          showEvent={PopoverInteraction.Hover}
          hideEvent={PopoverInteraction.Hover}
          position={PopoverPosition.ToTheRight}
          color={ComponentColor.Secondary}
          type={Appearance.Solid}
        />
        <Popover.Popover
          ref={popover3Ref}
          triggerRef={triggerRefC}
          visible={true}
          enableDefaultStyles={boolean('enableDefaultStyles', true)}
          contents={() => (
            <>
              <div style={{marginTop: '30px'}}>
                I'm just a simple popover looking for my
                <br />
                place in this <strong>vast and beautiful</strong> world.
                <br />
                Will you help me?
              </div>
              <div className="story--test-buttons">
                <button onClick={log3Ref}>Log Ref</button>
              </div>
            </>
          )}
          showEvent={PopoverInteraction.None}
          hideEvent={PopoverInteraction.None}
          position={PopoverPosition.Below}
          color={ComponentColor.Success}
          type={Appearance.Outline}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(PopoverReadme),
    },
  }
)

composedPopoverStories.add(
  'ReflessPopover',
  () => (
    <div className="story--example">
      <ReflessPopover
        visible={boolean('visible', false)}
        enableDefaultStyles={boolean('enableDefaultStyles', false)}
        contents={onHide => (
          <>
            PopoverContents
            <Popover.DismissButton onClick={onHide} />
          </>
        )}
        className={text('className', '')}
        style={object('style', exampleStyle)}
        triggerStyle={object('triggerStyle', {display: 'inline-block'})}
        caretSize={number('caretSize', 8)}
        distanceFromTrigger={number('distanceFromTrigger', 4)}
        showEvent={PopoverInteraction.Click}
        hideEvent={PopoverInteraction.Click}
        position={
          PopoverPosition[
            select('position', mapEnumKeys(PopoverPosition), 'Below')
          ]
        }
        color={
          ComponentColor[
            select('color', mapEnumKeys(ComponentColor), 'Primary')
          ]
        }
        type={Appearance[select('type', mapEnumKeys(Appearance), 'Outline')]}
      >
        <div className="mockComponent mockButton">Popover Trigger Element</div>
      </ReflessPopover>
    </div>
  ),
  {
    readme: {
      content: marked(ReflessPopoverReadme),
    },
  }
)

composedPopoverStories.add(
  'QuestionMarkTooltip',
  () => {
    const popoverRef = createRef<QuestionMarkTooltipRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(popoverRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <QuestionMarkTooltip
          ref={popoverRef}
          diameter={number('diameter', 18)}
          tooltipContents={text('tooltipContents', 'Hello world!')}
          className={text('className', '')}
          style={object('style', {})}
          tooltipStyle={object('tooltipStyle', {})}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(QuestionMarkTooltipReadme),
    },
  }
)

testPopoverStories.add('Popover Trigger within a DapperScrollbars', () => {
  const triggerRef = createRef<HTMLDivElement>()

  return (
    <div className="story--example">
      <Popover.Popover
        triggerRef={triggerRef}
        contents={() => (
          <>
            <div>
              I'm just a simple popover looking for my
              <br />
              place in this <strong>vast and beautiful</strong> world.
              <br />
              Will you help me?
            </div>
          </>
        )}
        showEvent={PopoverInteraction.Click}
        hideEvent={PopoverInteraction.Click}
        position={PopoverPosition.Below}
        color={ComponentColor.Success}
        type={Appearance.Outline}
      />
      <DapperScrollbars
        style={{width: '100%', height: '100%', position: 'absolute'}}
      >
        <div style={{padding: '30px'}}>
          <p>
            Lorem ipsum dolor amet mixtape authentic lomo stumptown messenger
            bag hexagon artisan, beard enamel pin biodiesel keytar tumeric raw
            denim iceland selfies. Blue bottle banh mi hot chicken plaid irony
            raclette yr skateboard messenger bag four dollar toast food truck
            palo santo tote bag. Hella hell of trust fund celiac, shaman
            whatever intelligentsia prism sriracha man braid fanny pack cardigan
            af semiotics. Retro freegan locavore, blue bottle hell of tofu
            austin direct trade williamsburg actually tattooed forage occupy
            plaid kitsch. Microdosing 3 wolf moon four loko, shabby chic
            sriracha echo park hell of small batch franzen chia tumeric. Hashtag
            authentic echo park, cornhole flannel sartorial cloud bread
            taxidermy.
          </p>
          <p>
            Poke tbh synth, everyday carry hella small batch XOXO salvia
            literally 3 wolf moon pork belly. Blog marfa migas iPhone, crucifix
            salvia tousled. Actually hella polaroid kitsch waistcoat tote bag
            forage palo santo single-origin coffee cornhole umami fingerstache.
            Heirloom gastropub twee pickled tumblr snackwave portland leggings
            raclette shabby chic kitsch knausgaard. Lumbersexual palo santo woke
            forage narwhal meh letterpress. Gochujang YOLO cardigan, hexagon
            hell of kogi succulents squid brooklyn.
          </p>
          <p>
            Poke tbh synth, everyday carry hella small batch XOXO salvia
            literally 3 wolf moon pork belly. Blog marfa migas iPhone, crucifix
            salvia tousled. Actually hella polaroid kitsch waistcoat tote bag
            forage palo santo single-origin coffee cornhole umami fingerstache.
            Heirloom gastropub twee pickled tumblr snackwave portland leggings
            raclette shabby chic kitsch knausgaard. Lumbersexual palo santo woke
            forage narwhal meh letterpress. Gochujang YOLO cardigan, hexagon
            hell of kogi succulents squid brooklyn.
          </p>
          <div
            className="mockComponent mockButton"
            ref={triggerRef}
            style={{margin: '30px 0'}}
          >
            Click Me
          </div>
          <p>
            Ennui truffaut artisan drinking vinegar distillery tumeric roof
            party kickstarter. Leggings vice try-hard cardigan crucifix pork
            belly poutine. Yuccie 8-bit leggings, kombucha gluten-free
            post-ironic knausgaard snackwave craft beer. Tumblr shabby chic deep
            v, irony slow-carb celiac skateboard kale chips succulents ennui
            franzen.
          </p>
        </div>
      </DapperScrollbars>
    </div>
  )
})
