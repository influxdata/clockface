# ResourceCardEditableName

`ResourceCardEditableName` is intended to be passed into the `name` prop in `ResourceCard`. It can be accessed via the single `ResourceCard` import as a subclass.

### Usage
```tsx
import {ResourceCard} from '@influxdata/clockface'
```
```tsx
<ResourceCard.EditableName />
```

### Interactions

This component facilitates changes to saved text via keyboard and mouse. There are 2 modes: view and edit. When in edit mode a text input is visible and always focused. Hitting `enter` or blurring the input will cause it to fire `onUpdate` and return to view mode.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
