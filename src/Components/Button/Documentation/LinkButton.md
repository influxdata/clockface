# LinkButton

This composed variation of `BaseButton` functions almost identically to `Button` except the underlying HTML element is an anchor tag, and the props interface is slightly different to match the properties of anchor tags.

### Usage
```tsx
import {LinkButton} from '@influxdata/clockface'
```

### Example
<!-- STORY -->

### Target

Specifies where to open the linked document

```tsx
import {LinkTarget} from '@influxdata/clockface'
```

| Target | Opens in |
|:----------|:---------------------------------------------------|
| `_blank` | A new window or tab |
| `_self` | The same frame as it was clicked (this is default) |
| `_parent` | The parent frame |
| `_top` | The full body of the window |
| framename | A named frame |

### Rel

Specifies the relationship between the current document and the linked document

```tsx
import {LinkRel} from '@influxdata/clockface'
```

| Rel | Description |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `alternate` | Provides a link to an alternate representation of the document (i.e. print page, translated or mirror) |
| `author` | Provides a link to the author of the document |
| `bookmark` | Permanent URL used for bookmarking |
| `external` | Indicates that the referenced document is not part of the same site as the current document |
| `help` | Provides a link to a help document |
| `license` | Provides a link to licensing information for the document |
| `next` | Provides a link to the next document in the series |
| `nofollow` | Links to an unendorsed document, like a paid link.("nofollow" is used by Google, to specify that the Google search spider should not follow that link) |
| `noreferrer` | Requires that the browser should not send an HTTP referrer header if the user follows the hyperlink |
| `noopener` | Requires that any browsing context created by following the hyperlink must not have an opener browsing context |
| `prev` | Provides a link to the previous document in the series |
| `search` | Links to a search tool for the document |
| `tag` | A tag (keyword) for the current document |

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
