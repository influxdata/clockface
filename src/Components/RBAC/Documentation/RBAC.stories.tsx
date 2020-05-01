// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number} from '@storybook/addon-knobs'

// Components
import {RBAC} from '../../../'

// Notes
import RBACReadme from './RBAC.md'
import RBACTestReadme from './RBACTest.md'

const logoStories = storiesOf('RBAC', module).addDecorator(withKnobs)

logoStories.add(
  'RBAC',
  () => {
    type Permission = 'read:all' | 'write:all'
    const permissions = ['read:all', 'write:all']

    return (
      <div className="story--example">
        <RBAC<Permission>
          permissions={['read:all']}
          perform={select('perform', permissions, 'read:all') as Permission}
          yes={() => <h2>you have permission</h2>}
          no={() => <h2>you do not have permission</h2>}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(RBACReadme),
    },
  }
)

const test = (a: number, b: number) => a + b === 4

logoStories.add(
  'RBAC with custom test',
  () => {
    const a = number('a', 2)
    const b = number('b', 2)

    return (
      <div className="story--example">
        <RBAC
          test={() => test(a, b)}
          yes={() => <h2>{`${a} and ${b} add to 4!`}</h2>}
          no={() => (
            <h2>{`${a} and ${b} don't add to 4...do you you even math?`}</h2>
          )}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(RBACTestReadme),
    },
  }
)
