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

---

## How to get the template

Have node and npm installed, then:

```
npx degit https://github.com/fevernova90/react-template-typescript-singlebundle your-app-folder
```
