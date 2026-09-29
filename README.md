# MiamiBroker.com Splash Page

Static GitHub/Netlify-ready splash page for:

1. Nationwide Loans Miami — Mortgage
2. Área Co. Real Estate Associates — Real Estate
3. Miami Live — Notary & Apostille Services

## Upload to GitHub

Upload everything in this folder to the root of the repository:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

There is no build step and no framework required.

## Website links

The service URLs are intentionally kept together at the very top of `script.js`:

```js
const SITE_LINKS = {
  mortgage: "https://nationwideloansmiami.com/",
  realEstate: "https://areaco.netlify.app/",
  miamiLive: ""
};
```

When the Miami Live website is ready, replace the blank value with its URL, for example:

```js
miamiLive: "https://your-new-miami-live-domain.com/"
```

Save and commit the file. The Visit Notary Services button will begin working automatically.

## Button hover behavior

All three Visit buttons change from their brand color to a white background when hovered or keyboard-focused. Their border and text stay in the matching brand color.

## Main phone number

The displayed number is `786-863-3559` and it is click-to-call on compatible devices.
