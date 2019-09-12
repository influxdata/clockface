# 12 Column Grid

This is an implementation of a traditional page layout grid. The reason there are 12 columns is because 12 is divisible many different and visually pleasing ways. If you are familiar with grids and graphic design this will be an easy component family to use. It supports responsive layouts at a few breakpoints (which are listed below). This component family began as the Bootstrap grid but evolved into its own.

### Usage
```tsx
import {Grid} from '@influxdata/clockface'
// Sub-components
<Grid />
<Grid.Row />
<Grid.Column />
```

`<Grid />` is intended to contain a grid.

`<Grid.Row />` is intended to contain columns and primarily control how columns wrap.

`<Grid.Column />` is a container for content with a built in margin to separate it from neighboring columns.

While this component family may seem like the ultimate layout tool, it is also bulkier. For simply aligning elements we recommend using `<FlexBox />` instead.

### Examples

The number of columns in a row should add up to 12 unless you want the row to wrap, in which case we recommend the number of columns add up to a multiple of 12.
<!-- STORY -->

### Responsive Breakpoints

A grid contains 12 columns, and each column can take up between 1-12 columns. The responsive magic comes into play allowing a column to change size based on the browser size. For example, you might want a column to take up a third (4 columns) on a tablet and full width (12 columns) on a phone. Breakpoints follow the philosophy of "Mobile First" which means that as the screen gets larger the new sizing rules override previous rules.

| Prop | Breakpoint | Approximate Device Target |
|---------|-------------------|---------------------------|
| widthXS | `0px - 749px` | Phone (Vertical) |
| widthSM | `750px - 1079px` | Phone (Horizontal) Tablet |
| widthMD | `1080px - 1499px` | Laptop |
| widthLG | `1500px - ∞` | Desktop |

### Offsets

In addition to widths columns can be passed a responsive offset. This prop simply pushes columns to the right a specified number of columns. This is useful if you want to center a column or ensure spacing between columns.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
