// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'

// Components
import {Snippet, SnippetRef} from '../Snippet'

// Notes
import SnippetReadme from './Snippet.md'

const snippetStories = storiesOf('Atomic|Snippet', module).addDecorator(withKnobs)

snippetStories.add(
  'Example',
  () => {
    const snippetRef = createRef<SnippetRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(snippetRef.current)
      /* eslint-enable */
    }

    const textExample = `// You can generate a Token from the "Tokens Tab" in the UI
influx, err := influxdb.New(myHTTPInfluxAddress, myToken, influxdb.WithHTTPClient(myHTTPClient))
if err != nil {
  panic(err) // error handling here; normally we wouldn't use fmt but it works for the example
}
// Add your app code here
influx.Close() // closes the client.  After this the client is useless.`

    return (
      <div className="story--example">
        <Snippet
          ref={snippetRef}
          text={text('text', textExample)}
          language="go"
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SnippetReadme),
    },
  }
)
