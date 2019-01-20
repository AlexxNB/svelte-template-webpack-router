# Svelte SPA Template

This is a project template for [Svelte](https://svelte.technology) single page apps. It lives at https://github.com/AlexxNB/svelte-template-webpack-router.

It is based on [template-webpack](https://github.com/sveltejs/template-webpack) and [svelte-router](https://github.com/jikkai/svelte-router) as a router.

## Installation

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit AlexxNB/svelte-template-webpack-router svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

## Building

```bash
npm run build
```

Then all you builded SPA files will be in public directory.

## URLs
Default settings uses ordinary URLs based on `"history"` method. You can change mode to `"hash"` in `./App.html` to use URLs with `#` sign.
