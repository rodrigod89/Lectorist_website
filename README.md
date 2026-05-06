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

Because this is a static site, you can preview it with any local static server:

```powershell
npx serve docs
```

Or open `docs/index.html` directly in a browser.

## Domain Setup

The production domain is `www.lectorist.com`.

In GitHub Pages, add `www.lectorist.com` under the repository's Pages settings. At the DNS provider, create this DNS record:

- Type: `CNAME`
- Name: `www`
- Target: `rodrigod89.github.io`

## Before Launch

- Review `docs/privacy.html` against the app's real data collection, analytics, crash reporting, subscriptions, and account features.
- Add App Store and Google Play links when the mobile apps are available.
