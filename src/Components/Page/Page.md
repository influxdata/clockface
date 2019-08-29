# Page

The `Page` component family is for laying out pages, hence the name. It is best used in combination with `AppWrapper` and `NavMenu`. *NOTE:* `Page` components used outside of `AppWrapper` may not appear as expected.

### Usage
```tsx
import {Page} from '@influxdata/clockface'
```
In combination with `AppWrapper` and `NavMenu`:

```tsx
<AppWrapper>
  <NavMenu />
  <Page>
    <Page.Header />
    <Page.Contents>
      // Contents go here
    </Page.Contents>
  </Page>
</AppWrapper>
```

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
