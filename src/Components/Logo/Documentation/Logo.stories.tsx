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
} from '../'

// Types
import {InfluxColors} from '../../../Types'

// Notes
import InfluxDataLogoReadme from './InfluxDataLogo.md'
import InfluxDBCloudLogoReadme from './InfluxDBCloudLogo.md'

const logoStories = storiesOf('Graphics|Brand/Logos', module).addDecorator(
  withKnobs
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
