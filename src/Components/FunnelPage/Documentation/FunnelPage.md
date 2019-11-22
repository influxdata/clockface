# FunnelPage

Funnel pages are designed to guide a user through a funnel (aka focused workflow) with minimal distractions. For this reason there is no navigation (beyond the optional logo) and the content is scaled up with the assumption that the copy will be minimal. While the background colors of the page are customizable we recommend sticking with the defaults to adhere to InfluxData brand guidelines.

### Usage

```tsx
import {FunnelPage} from '@influxdata/clockface'
```

### Typography

For semantic purposes the page title should always be `h1`. The subtitles can be `<p>` or whatever tag you see fit. We have created some CSS Classes that will ensure visual consistency regardless of what heading or paragraph elements you use.

| Design | Element | Class |
|:------------|:--------|:------|
| Page Title | `<h1 />` | `.cf-funnel-page--title` |
| Subtitle | `any` | `.cf-funnel-page--subtitle` |
| Panel Title | `<h3 />`* | `.cf-funnel-page--panel-title` |

* While we recommend `<h3 />` as the element for Panel Titles, feel free to adjust as necessary.

```tsx
// Recommended usage:
<AppWrapper type="funnel">
  <FunnelPage>
    <h1 className="cf-funnel-page--title">I am a page title</h1>
    <p className="cf-funnel-page--subtitle">I am a subtitle</p>
  </FunnelPage>
</AppWrapper>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
