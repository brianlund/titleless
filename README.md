# Titleless

A toolbar button that hides Reddit post titles.

## Install

1. Open `chrome://extensions`.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and choose this folder.
4. Pin **Titleless** to the toolbar.

Click the toolbar button to switch title hiding on or off. The badge shows the current state, which is remembered between browser sessions.

## Check

```sh
node test.mjs
```

## Release

1. Update `version` in `manifest.json` and merge the change to `main`.
2. Create and push a matching tag, such as `v1.0.1`.

GitHub Actions checks the extension, packages the runtime files, and attaches the ZIP and its SHA-256 checksum to a GitHub Release. Upload that ZIP to the Chrome Web Store.
