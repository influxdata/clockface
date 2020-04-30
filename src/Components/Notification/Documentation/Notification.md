# Notification

This `Notification` component peeks in to quickly and temporarily provide feedback and information to the user.

### Usage

```tsx
import {Notification} from '@influxdata/clockface'
```
```tsx
<Notifcation />
```
This component uses react portals to render itself on the top of the DOM. You can control the position using the `verticalAlignment` and `horizontalAlignment` props. If there are multiple `Notifications` present they will automatically stack.

### Customization

You can pass in a `backgroundColor` or `gradient` to control the colorization of the panel. If both props are passed in the `gradient` prop will override the `backgroundColor` prop.

By default a notification will have `max-width: 500px`. If you want to change that pass in a new style object to the `style` prop.

### Testing

All testIDs are based on the single `testID` prop

| Element | Default Value | Custom Value |
|:----------------|:-------------------------|:-------------------|
| Dialog | `notification` | `custom` |
| Dismiss Button | `notification--dismiss` | `custom--dismiss` |
| Child Container | `notification--children` | `custom--children` |

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
