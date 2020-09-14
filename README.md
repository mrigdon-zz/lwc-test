# LWC Test

Barebones LWC example where slotted content is not rendering correctly with synthetic shadow enabled.

## Running

```bash
yarn install
yarn start
```

## Problem

If you look at `widget.html`, the slotted content should render in between the header & footer

```html
<template>
  <div>Widget Header</div>
  <div>
    <slot></slot>
  </div>
  <div>Widget Footer</div>
</template>
```

`public/index.html` renders a widget:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>LWC Test</title>
  </head>
  <body>
    <my-widget>body from slot</my-widget>
    <script src="bundle.js" type="module"></script>
  </body>
</html>
```

But if you open this in a browser, you'll see the body is rendering before the header:

```
body from slot
Widget Header
Widget Footer
```

If you comment out the import of synthetic shadow in `src/index.js`, it works correctly:

```js
// import "@lwc/synthetic-shadow";
import Widget from "my/widget";

customElements.define("my-widget", Widget.CustomElementConstructor);
```

results in:

```
Widget Header
body from slot
Widget Footer
```
