# RBAC

RBAC is a component that will render the `yes` prop if the
provided permission is within the `permissions` list or if the optional `test` prop returns `true`. Otherwise, the `no` prop is rendered.

### Usage

```tsx
import {RBAC} from '@influxdata/clockface'
```

```tsx
type Permission = 'read:all' | 'write:all'
```

```tsx
// with a list of permissions
const userPermissions = ['read:all']
<RBAC<Permission>
  permissions={userPermissions}
  perform="read:all"
  yes={() => <h1>you can read users</h1>}
  no={() => <h1>insufficient permissions</h1>}
/>
```

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
