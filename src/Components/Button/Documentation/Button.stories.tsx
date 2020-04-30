// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'
import {ButtonBaseContrastTester} from '../Base/ButtonBaseContrastTester'
import {Button, ButtonRef} from '../Composed/Button'
import {SquareButton, SquareButtonRef} from '../Composed/SquareButton'
import {ConfirmationButton} from '../Composed/ConfirmationButton'
import {DismissButton, DismissButtonRef} from '../Composed/DismissButton'
import {CTAButton, CTAButtonRef} from '../Composed/CTAButton'
import {CTALinkButton, CTALinkButtonRef} from '../Composed/CTALinkButton'
import {LinkButton, LinkButtonRef} from '../Composed/LinkButton'

// Types
import {
  Appearance,
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
  LinkRel,
  LinkTarget,
} from '../../../Types'

// Notes
import ButtonBaseReadme from './ButtonBase.md'
import ButtonReadme from './Button.md'
import SquareButtonReadme from './SquareButton.md'
import ConfirmationButtonReadme from './ConfirmationButton.md'
import DismissButtonReadme from './DismissButton.md'
import CTAButtonReadme from './CTAButton.md'
import CTALinkButtonReadme from './CTALinkButton.md'
import LinkButtonReadme from './LinkButton.md'
import ButtonBaseContrastTesterReadme from './ButtonBaseContrastTester.md'

const buttonBaseStories = storiesOf(
  'Components|Buttons/Base',
  module
).addDecorator(withKnobs)

const buttonComposedStories = storiesOf(
  'Components|Buttons/Composed',
  module
).addDecorator(withKnobs)

buttonComposedStories.add(
  'StandardButton',
  () => {
    const buttonRef = createRef<ButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Button
          ref={buttonRef}
          text={text('text', 'Button Text')}
          onClick={() => alert('clicked')}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          active={boolean('active', false)}
          type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
          placeIconAfterText={boolean('placeIconAfterText', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ButtonReadme),
    },
  }
)

buttonBaseStories.add(
  'Contrast Tester',
  () => {
    return (
      <div className="story--example">
        <ButtonBaseContrastTester />
      </div>
    )
  },
  {
    readme: {
      content: marked(ButtonBaseContrastTesterReadme),
    },
  }
)

buttonComposedStories.add(
  'SquareButton',
  () => {
    const buttonRef = createRef<SquareButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SquareButton
          ref={buttonRef}
          onClick={() => alert('clicked')}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Zap')]}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          active={boolean('active', false)}
          type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SquareButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'ConfirmationButton',
  () => {
    const onShow = (): void => {
      /* eslint-disable */
      console.log('calling onShow')
      /* eslint-enable */
    }

    const onHide = (): void => {
      /* eslint-disable */
      console.log('calling onHide')
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <ConfirmationButton
          confirmationButtonText={text(
            'confirmationButtonText',
            'Yes, Delete it'
          )}
          onShow={onShow}
          onHide={onHide}
          confirmationButtonColor={
            ComponentColor[
              select('confirmationColor', mapEnumKeys(ComponentColor), 'Danger')
            ]
          }
          confirmationLabel={text(
            'confirmationLabel',
            'Really delete your soul?'
          )}
          popoverColor={
            ComponentColor[
              select('popoverColor', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          popoverAppearance={
            Appearance[select('appearance', mapEnumKeys(Appearance), 'Solid')]
          }
          onConfirm={value => alert(`returnValue: ${value}`)}
          returnValue={text('returnValue', '')}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Trash')]}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Danger')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          text={text('text', 'Delete Soul')}
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(ConfirmationButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'DismissButton',
  () => {
    const buttonRef = createRef<DismissButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div
          style={{
            width: '200px',
            height: '100px',
            position: 'relative',
            backgroundColor: '#292933',
          }}
        >
          <DismissButton
            ref={buttonRef}
            onClick={() => alert('Clicked!')}
            color={
              ComponentColor[
                select('color', mapEnumKeys(ComponentColor), 'Danger')
              ]
            }
            size={
              ComponentSize[
                select('size', mapEnumKeys(ComponentSize), 'ExtraSmall')
              ]
            }
            status={
              ComponentStatus[
                select('status', mapEnumKeys(ComponentStatus), 'Default')
              ]
            }
          />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DismissButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'CTAButton',
  () => {
    const buttonRef = createRef<CTAButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <CTAButton
          ref={buttonRef}
          onClick={() => alert('Clicked!')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Secondary')
            ]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          text={text('text', 'Buy Now')}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          placeIconAfterText={boolean('placeIconAfterText', false)}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(CTAButtonReadme),
    },
  }
)

buttonBaseStories.add(
  'Base Button',
  () => {
    const buttonRef = createRef<ButtonBaseRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <ButtonBase
          ref={buttonRef}
          onClick={() => alert('clicked')}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          active={boolean('active', false)}
          type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
        >
          {text('text', 'Button Text')}
        </ButtonBase>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ButtonBaseReadme),
    },
  }
)

buttonComposedStories.add(
  'LinkButton',
  () => {
    const buttonRef = createRef<LinkButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <LinkButton
          href={text('href', 'http://www.example.com')}
          target={
            LinkTarget[select('target', mapEnumKeys(LinkTarget), 'Blank')]
          }
          rel={
            LinkRel[
              select('rel', {None: 'none', ...mapEnumKeys(LinkRel)}, 'None')
            ]
          }
          ref={buttonRef}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Zap')]}
          text={text('text', 'Yeehaw')}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          active={boolean('active', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(LinkButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'CTALinkButton',
  () => {
    const buttonRef = createRef<CTALinkButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <CTALinkButton
          href={text('href', 'http://www.example.com')}
          target={
            LinkTarget[select('target', mapEnumKeys(LinkTarget), 'Blank')]
          }
          rel={
            LinkRel[
              select('rel', {None: 'none', ...mapEnumKeys(LinkRel)}, 'None')
            ]
          }
          ref={buttonRef}
          icon={
            IconFont[
              select('icon', {None: '', ...mapEnumKeys(IconFont)}, 'Zap')
            ]
          }
          text={text('text', 'Yeehaw')}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          active={boolean('active', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(CTALinkButtonReadme),
    },
  }
)
