# RBAC

RBAC is a component that will render the `yes` prop if the
provided permission is within the `permissions` list or if the optional `test` prop returns `true`. Otherwise, the `no` prop is rendered.

### Usage

```tsx
import {RBAC} from '@influxdata/clockface'
```

```tsx
const myCustomTest = (a, b) => a + b === 4
// with a test of your choosing
<RBAC
  test={() => myCustomTest(2, 2)}
  yes={() => <h1>you added to 4!</h1>}
  no={() => <h1>you did not add to 4!</h1>}
/>
```

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
