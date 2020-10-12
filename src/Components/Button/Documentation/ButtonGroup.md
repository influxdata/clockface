# ButtonGroup

A simple way to visually group a set of same-size buttons. Intended for `Button` and related components as the only children.

### Usage

```tsx
import {ButtonGroup} from '@influxdata/clockface'
```

```tsx
<ButtonGroup>
  <Button />
  <Button />
  <Button />
</ButtonGroup>
```

### Example

<!-- STORY -->

### Best Practices

If you are going to mix `SquareButton` with other buttons we recommend sticking with `direction={FlexDirection.Row}` (like in the example above). Otherwise the buttons will not have consistent width when vertically stacked.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
