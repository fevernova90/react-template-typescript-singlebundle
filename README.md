# A react template that produces a single js bundle.

This template is intended for developer to create a React app that only produce a single js file, which then allows for easy import via script tag on any existing site/html.

- No code-splitting.
- Images(jpg/svg/png) and CSS will be inlined into the single js bundle. (No MiniExtractCSSPlugin).
- Produces 3 files : `index.html`, `bundle.min.js`, `licence file`. The index.html is just there for dev/staging purpose.

---

The other cool stuffs that helps you during development are there, e.g:

- Webpack Dev Server with HMR (React Refresh experimental).
- Babel runtime, transform, etc.
- Typescript enabled.
- CSS minimizer/minification.
- ESLint for linting.
- Prettier for formatting.
- Husky and lint-staged for lint/formatting check before commit.
- Dotenv for both dev and prod mode.

---

## How to get the template

Have node and npm installed, then:

```
npx degit https://github.com/fevernova90/react-template-typescript-singlebundle your-app-folder
```

---

## Gotchas

- This template is not build with create-react-app, so you have to maintained all those dev tools by your own, in most cases it will just works, unless you need further tweak which you have to learn the tools and make adjustment on your own.
- The current Asset Management is using 'asset/inline' for all images including png/jpg (it will convert to base64 inlined), which may prevent any caching (browser/cdn). In some cases where you have a lot of big png/jpg images, you can disable inline images for other than svg/fonts. My recommended method images is to use CDN url within your React app, except for SVGs and smaller images. Read further https://webpack.js.org/guides/asset-management/#setup.
