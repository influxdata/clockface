# Interplay of all portals

This sandbox tests how all the portal-based components interact with each other. Notes on how stacking order is determined:

- Notifications always appear on top
- Portal elements receive an incrementally higher `z-index` as they are added to the portal
  - This means portal elements will stack in the order they are added

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->
