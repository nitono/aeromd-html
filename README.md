# @nitonodev/aeromd-html

The [@nitonodev/aeromd](https://www.npmjs.com/package/@nitonodev/aeromd) plugin for generate html pages

---

See changes at [CHANGELOG.md](./CHANGELOG.md)

---

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Connecting](#connecting)
    -   [`generateStyles` function](#generateStyles-function)
    -   [`generateHTMLPage` function](#generateHTMLpage-function)
-   [Feedback](#feedback)

---

<h1 id="installation">Installation</h1>
This package contains a built-in declaration for TypeScript, therefore you do not need to install types for this package separately.

```bash
npm i @nitonodev/aeromd-html
```

<h1 id="usage">Usage</h1>
<h3 id="connecting">
    Connecting
</h3>
To connect this library to you code you may to write next lines of code

```ts
// if you use a commonjs
const { GenerateHTMLPage } = require('@nitonodev/aeromd-html');
// if you use a esm
import { GenerateHTMLPage } from '@nitonodev/aeromd-html';
```

---

<h3 id="quick">Quick Start</h3>

To create a class you may to write next lines of code

```ts
// Instead of mp your variable name
// Instead of '# Hello' your markdown code
const mp = new GenerateHTMLPage('# Hello');
```

---

<h3 id='generateStyles-function'>Generate styles for markdown</h3>
This function generate a md-theme.css file in you directory which contains my custom styles for parsed markdown

| name of function | return value                             | params    |
| ---------------- | ---------------------------------------- | --------- |
| generateStyles   | return CSS styles, create a md-theme.css | no params |

Examples:

```ts
const mp = new GenerateHTMLPage('# Hello');

mp.generateStyles(); // create md-theme.css and return CSS styles as string
```

---

<h3 id="generateHTMLpage-function">Generate HTML page for markdown</h3>
This function contains all function declared at class GenerateHTMLPage and parse markdown, generate styles and write html page for parsed markdown

| name of function | return value                                                             | params    |
| ---------------- | ------------------------------------------------------------------------ | --------- |
| generateHTMLPage | return HTML page, create a md-theme.css, md.html and parse markdown data | no params |

Example:

```ts
const mp = new GenerateHTMLPage('# hello');

mp.generateHTMLPage(); // generate md-theme.css then parse '# hello' then generate md.html with parsed markdown and return HTML page as string
```

---

<h1 id='feedback'>
Feedback
</h1>

You can write me to pyto015@ya.ru or open issue at [Github repo](https://github.com/nitono/aeromd-html)

Links

-   Github: https://github.com/nitono/aeromd-html
-   npm: https://www.npmjs.com/package/@nitonodev/aeromd-html
