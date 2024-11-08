# Install Remix
```bash
npx create-remix@latest . --template remix-run/remix/templates/classic-remix-compiler/remix-javascript
```

# All Npm 
```bash
npm i --save-dev @types/react
npm i --save-dev @types/react-dom
```

## **Font Awesome** [Open Website](https://fontawesome.com/)

- คำสั่งติดตั้ง

``` powershell
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/react-fontawesome@latest
```

- ชุด icon free

``` powershell
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

file ```root.jsx/tsx```

```.jsx```
```jsx
import fontAwesomeStyles from "@fortawesome/fontawesome-svg-core/styles.css"; 

export const links = () => [
  {
    rel: "stylesheet",
    href: fontAwesomeStyles,
  },
];
```

```.tsx```
```tsx
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import fontAwesomeStyles from "@fortawesome/fontawesome-svg-core/styles.css"; 
fontAwesomeConfig.autoAddCss = false;

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: fontAwesomeStyles,
  },
];
```


# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
