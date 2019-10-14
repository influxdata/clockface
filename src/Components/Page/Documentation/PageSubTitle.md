# Page Sub-Title

Used primarily within `<Page.HeaderLeft />` as the secondary title of a page, hence the name. It is best used in combination with `<Page.Title />`.

### Usage

```tsx
import {Page} from '@influxdata/clockface'
```

```tsx
<Page.SubTitle />
```

### Recommended

Best used with `FlexBox` and `Page.Title` like so:

```tsx
<FlexBox
  direction={FlexDirection.Column}
  alignItems={AlignItems.FlexStart}
  margin={ComponentSpacer.Small}
>
  <Page.Title title="Primary Title" />
  <Page.SubTitle title="Secondary Title" />
</FlexBox>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
