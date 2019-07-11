# ResourceCardDescription

`ResourceCardDescription` is intended to be passed into the `description` prop in `ResourceCard`. It can be accessed via the single `ResourceCard` import as a subclass.

### Usage
```jsx
import {ResourceCard} from '@influxdata/clockface'
```
```jsx
<ResourceCard.Description />
```

### Interactions

This component facilitates changes to saved text via keyboard and mouse. There are 2 modes: view and edit. When in edit mode a text input is visible and always focused. Hitting `enter` or blurring the input will cause it to fire `onUpdate` and return to view mode.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
