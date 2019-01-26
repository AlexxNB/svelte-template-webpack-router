# Svelte SPA Template (Webpack version)

**In any case it is better to use template based on Rollup. You can find it here:** https://github.com/AlexxNB/svelte-template-spa 

This is a project template for [Svelte](https://svelte.technology) single page apps. It lives at https://github.com/AlexxNB/svelte-template-webpack-router.

It is based on [template-webpack](https://github.com/sveltejs/template-webpack) and [svelte-router](https://github.com/jikkai/svelte-router) as a router. Also used [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) for icons.

## Features
* Clear structure for new project
* Using Webpack4. Hot Reload Modules enabled.
* Using extract-css-chunks plugin for HRM supporting.
* Supporting for SCSS in SFC and external files.
* Integrated router with two way navigation possibility. No page reload.
    * Regular URLs (you need set rewrite rule on production server!).
    * URL with hash(need configs changing)
* Icon component with SVG sprite autogenerating.

## Installation

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit AlexxNB/svelte-template-webpack-router svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Configuration

You can change configuration in the `template.config.js` file:

```javascript
// Default title of the pages
title: 'MyApp',      

// hash - will handle URLs like localhost:8080/#/sub1/sub2
// history - common URLs like localhost:8080/sub1/sub2 
// Note: On production server you should manually set rewrite all requests to index.html
urlmode: 'history',  

// Use proxy endpoint to remote server: http://localhost:8080/api -> http://my.site/api
proxy:{          

    // Enable | Disable proxy feature
    enabled: false,  

    // Endpoint on local environment , Remote server to handle endpoint                      
    endpoints:[
        ['/api' , 'http://my.site'],     
        ...
    ]    
}
```

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

Then all you builded SPA files will be in `dist` directory.
