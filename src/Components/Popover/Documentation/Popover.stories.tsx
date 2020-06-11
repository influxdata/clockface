// Libraries
import React, {useRef, ChangeEvent} from 'react'
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
import {useState} from '@storybook/addons'

// Components
import {Popover, PopoverRef} from '../'
import {ReflessPopover} from '../Composed/ReflessPopover'
import {
  QuestionMarkTooltip,
  QuestionMarkTooltipRef,
} from '../Composed/QuestionMarkTooltip'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {DapperScrollbars} from '../../DapperScrollbars/DapperScrollbars'
import {Input} from '../../Inputs'

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
    const triggerRefA = useRef<HTMLDivElement>(null)
    const triggerRefB = useRef<HTMLDivElement>(null)
    const triggerRefC = useRef<HTMLButtonElement>(null)
    const triggerRefD = useRef<HTMLDivElement>(null)
    const popover1Ref = useRef<PopoverRef>(null)
    const popover2Ref = useRef<PopoverRef>(null)
    const popover3Ref = useRef<PopoverRef>(null)
    const popover4Ref = useRef<PopoverRef>(null)

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

    const log4Ref = (): void => {
      /* eslint-disable */
      console.log(popover4Ref.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <table className="story--invisible-table">
          <tbody>
            <tr>
              <td>
                <code>PopoverInteraction.Click</code>
              </td>
              <td>
                <div className="mockComponent mockButton" ref={triggerRefA}>
                  Click Me
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>PopoverInteraction.Hover</code>
              </td>
              <td>
                <div className="mockComponent mockButton" ref={triggerRefB}>
                  Hover Me
                </div>
              </td>
            </tr>
            <tr>
              <td>Trigger element is disabled</td>
              <td>
                <SquareButton
                  icon={IconFont.Zap}
                  ref={triggerRefC}
                  status={ComponentStatus.Disabled}
                />
              </td>
            </tr>
            <tr>
              <td>
                Controlled by <code>visible</code> prop
              </td>
              <td>
                <div className="mockComponent mockButton" ref={triggerRefD}>
                  Use Knobs
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Popover.Popover
          ref={popover1Ref}
          triggerRef={triggerRefA}
          enableDefaultStyles={boolean('enableDefaultStyles', true)}
          contents={(onHide: any) => (
            <>
              This Popover uses the style prop
              <Popover.DismissButton
                onClick={onHide}
                color={
                  ComponentColor[
                    select('color', mapEnumKeys(ComponentColor), 'Primary')
                  ]
                }
              />
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
          appearance={
            Appearance[select('appearance', mapEnumKeys(Appearance), 'Outline')]
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
          appearance={Appearance.Solid}
        />
        <Popover.Popover
          ref={popover3Ref}
          triggerRef={triggerRefC}
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
          appearance={Appearance.Outline}
        />
        <Popover.Popover
          ref={popover4Ref}
          triggerRef={triggerRefD}
          visible={boolean('visible', true)}
          enableDefaultStyles={boolean('enableDefaultStyles', true)}
          contents={() => (
            <div>
              My state can be controlled externally
              <br />
              via the <strong>visible</strong> prop
              <br />
              <br />
              Look in the <strong>Knobs</strong> panel
              <div className="story--test-buttons relative">
                <button onClick={log4Ref}>Log Ref</button>
              </div>
            </div>
          )}
          showEvent={PopoverInteraction.None}
          hideEvent={PopoverInteraction.None}
          position={PopoverPosition.Below}
          color={ComponentColor.Success}
          appearance={Appearance.Solid}
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
        appearance={
          Appearance[select('appearance', mapEnumKeys(Appearance), 'Outline')]
        }
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
    const popoverRef = useRef<QuestionMarkTooltipRef>(null)

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
  const triggerRef = useRef<HTMLDivElement>(null)

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
        appearance={Appearance.Outline}
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

testPopoverStories.add('Popover + Autofocus Child', () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const [inputValue, updateInputValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    updateInputValue(e.target.value)
  }

  return (
    <div className="story--example">
      <Popover.Popover
        triggerRef={triggerRef}
        contents={() => (
          <>
            <span>
              This story tests how focus is handled
              <br />
              when an autofocus Input exists as a child of Popover
            </span>
            <Input
              autoFocus={true}
              placeholder="I'm autofocus true"
              value={inputValue}
              onChange={handleInputChange}
            />
          </>
        )}
        showEvent={PopoverInteraction.Click}
        hideEvent={PopoverInteraction.Click}
        position={PopoverPosition.Above}
        color={ComponentColor.Primary}
        appearance={Appearance.Outline}
      />
      <div className="mockComponent mockButton" ref={triggerRef}>
        Click Me
      </div>
    </div>
  )
})
