# Empty State Text

This is a sub-component of Empty State.

### Usage
```tsx
import {EmptyState} from '@influxdata/clockface'

<EmptyState.Text />
```

### Gotchas
This component takes the `text` prop and converts it into an array of strings, then iterates over it looking for matches from `highlightWords`, wraps those and then injects the array back in.
In order to produce a line break type `LINEBREAK` in the `text` string with spaces around it.
Due to how it is implented, there are some quirks with the `highlightWords` prop. Because space characters are stripped out you need 2 space characters after a highlighted word.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
