# Maintaining the Icon Font

We use a tool called [Icomoon](https://icomoon.io/) to generate the icon font. In order to login you will need to be an InfluxData employee and have access to the design vault. All icons have been produced in Adobe Illustrator, but any vector software will do.

### Design Guidelines

When designing an icon the first consideration is whether it will be used in the navigation menu or as a regular icon. Since navigation menu icons are usually only displayed at one size they are not beholden to the same scaling constraints as normal icons.

| Icon Type  | Canvas Size   | Stroke Width |
| ---------- | ------------- | ------------ |
| Navigation | `26px / 26px` | `2px`        |
| Standard   | `40px / 40px` | `3px`        |

- Shapes should adhere to the grid as much as possible (especially any straight or 45º lines).
- Strokes should maintain a consistent and uniform width.
- If the icon does not take up the entire width of the canvas, resize the canvas to match the width (this prevents weird spacing when the font is in use).
- Icons usually come in a "outline" style but in some cases they also have a "solid" variation.
- The majority of icons in the UI are displayed at a `13px` font size, so I recommend testing them at that size for legibility.

![Example of Navigation Icon](hosted_assets/icon-example.png)

### Updating the Icon Font

1. Generate the font in `icomoon` then download it.
2. Copy the font files to `/src/Styles/Fonts` and replace existing font files.
3. Open the included `style.css` file in your editor. You should see an entry like below for each icon:

```
.icon.add-cell:before {
  content: "\e925";
}
```

4. Reformat every entry to look like so:

```
&.add-cell:before {content: "\e925";}
```

5. Copy all entries, then open `src/Styles/icon.scss` and starting from line `32` paste over the existing definitions
6. Not required, but please sort alphabetically for a generally better developer experience
7. Open `src/Types/index.ts` and look for the `IconFont` enum. You will have to add the new icons in camel case (for the key) and snake case (for the value). The value should match the name of the class name specified in `icon.scss`
8. If you run storybook and navigate to the Icon Font story you should see your new icons in there
