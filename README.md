# Lectorist Website

Static marketing and legal website for Lectorist.

## GitHub Pages

Use these settings for GitHub Pages:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/docs`
- Custom domain: `www.lectorist.com`

GitHub Pages will publish everything inside `docs`.

## Local Preview

On Windows, double-click `run-local.cmd` in the repository root or run it from PowerShell:

```powershell
.\run-local.cmd
```

Open <http://127.0.0.1:3000> in your browser. Press Ctrl+C to stop the server. The launcher requires Node.js and npm, and the first run may download `serve`.

The local server serves `docs/` at the URL root, so links such as `/assets/styles.css` work as they do on GitHub Pages.

## Domain Setup

The production domain is `www.lectorist.com`.

In GitHub Pages, add `www.lectorist.com` under the repository's Pages settings. At the DNS provider, create this DNS record:

- Type: `CNAME`
- Name: `www`
- Target: `rodrigod89.github.io`

## Before Launch

- Review `docs/privacy.html` against the app's real data collection, analytics, crash reporting, subscriptions, and account features.
- Add App Store and Google Play links when the mobile apps are available.
