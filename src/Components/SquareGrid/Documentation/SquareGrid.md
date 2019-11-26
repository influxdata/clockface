# SquareGrid

This is a handy way to build a layout that is fluid, responsive, and ensures all the children are perfect squares. The `cardSize` prop gives the grid an approximate size, so children will render as close to the specified size as possible.

### Usage
```tsx
import {SquareGrid} from '@influxdata/clockface'
```
```tsx
<SquareGrid>
  <SquareGrid.Card />
</SquareGrid>
```

`SquareGridCard` does not have any visual styling by default, so you will have to make use of its `style` prop, `className` prop, or have the child element fill the size.

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
