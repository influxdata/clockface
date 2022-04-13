// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  InfluxDataLogo,
  InfluxDataLogoRef,
  InfluxDBCloudLogo,
  InfluxDBCloudLogoRef,
  InfluxLogo,
  InfluxLogoRef,
} from '../'

// Types
import {
  InfluxColors,
  LogoAuxiliaryText,
  LogoBaseText,
  LogoMarks,
  LogoSymbols,
} from '../../../Types'

// Notes
import InfluxDataLogoReadme from './InfluxDataLogo.md'
import InfluxDBCloudLogoReadme from './InfluxDBCloudLogo.md'
import InfluxLogoReadme from './InfluxLogo.md'

const logoStories = storiesOf('Components/Logos', module).addDecorator(
  withKnobs
)

logoStories.add(
  'InfluxLogo',
  () => {
    const logoRef = createRef<InfluxLogoRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(logoRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <InfluxLogo
          ref={logoRef}
          auxiliaryText={
            LogoAuxiliaryText[
              select('auxiliary', mapEnumKeys(LogoAuxiliaryText), 'None')
            ]
          }
          baseText={
            LogoBaseText[
              select('base', mapEnumKeys(LogoBaseText), 'InfluxData')
            ]
          }
          logoMark={
            LogoMarks[select('logomark', mapEnumKeys(LogoMarks), 'Kubo')]
          }
          symbol={
            LogoSymbols[
              select('symbol', mapEnumKeys(LogoSymbols), 'Registered')
            ]
          }
          fill={
            InfluxColors[select('fill', mapEnumKeys(InfluxColors), 'White')]
          }
          centeredLogo={boolean('Center Logo', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(InfluxLogoReadme),
    },
  }
)

logoStories.add(
  'InfluxData',
  () => {
    const logoRef = createRef<InfluxDataLogoRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(logoRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <InfluxDataLogo
          ref={logoRef}
          simplified={boolean('simplified', false)}
          fill={
            InfluxColors[select('fill', mapEnumKeys(InfluxColors), 'White')]
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
      content: marked(InfluxDataLogoReadme),
    },
  }
)

logoStories.add(
  'InfluxDB Cloud',
  () => {
    const logoRef = createRef<InfluxDBCloudLogoRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(logoRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <InfluxDBCloudLogo
          ref={logoRef}
          fill={
            InfluxColors[select('fill', mapEnumKeys(InfluxColors), 'White')]
          }
          cloud={boolean('cloud', true)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(InfluxDBCloudLogoReadme),
    },
  }
)
