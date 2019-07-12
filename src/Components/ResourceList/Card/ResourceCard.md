# ResourceCard

`ResourceCard` is the parent component of the `ResourceCard` Family; every member of the component family can be accessed from this single import. `ResourceCard` is best used in tandem with `ResourceList`.

### Usage
```tsx
import {ResourceCard} from '@influxdata/clockface'
```

Most of ResourceCard's props are render props which help enforce an opinionated structure on the layout. This ensures that if a card has all of its render props passed in, the components look nice together. While any component can be passed into the render props, we recommend using the components included in the ResourceCard family.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
