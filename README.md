# Lectorist Website

Static marketing and legal website for Lectorist.

## Cloudflare Pages

Use these settings for the Git-connected Cloudflare Pages project:

- Framework preset: `None`
- Production branch: `main`
- Build command: leave empty, or use `exit 0` if the dashboard requires a value
- Build output directory: `public`
- Root directory: leave empty / repository root
- Environment variables: none required

Cloudflare Pages will publish everything inside `public`.

## Local Preview

Because this is a static site, you can preview it with any local static server:

```powershell
npx serve public
```

Or open `public/index.html` directly in a browser.

## Domain Setup

The production domain is `www.lectorist.com`.

In Cloudflare Pages, add `www.lectorist.com` under your Pages project's custom domains. If `lectorist.com` is already managed by Cloudflare DNS, Cloudflare can create the needed `CNAME` record automatically. If the domain is managed somewhere else, create this DNS record at that provider:

- Type: `CNAME`
- Name: `www`
- Target: your Cloudflare Pages project domain, such as `<project-name>.pages.dev`

## Before Launch

- Review `public/privacy.html` against the app's real data collection, analytics, crash reporting, subscriptions, and account features.
- Add App Store and Google Play links when the mobile apps are available.
