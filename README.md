# Magna-Tech Electronic Co. — Website

An [Eleventy](https://www.11ty.dev/) static site, built per the rebuild/SEO plan. See
`MAINTENANCE.md` for the plain-English guide to changing content day to day.

## What this is

- A low-maintenance, static (no database, no plugins) rebuild of magna-tech.com.
- Every page pulls address/phone/office/nav data from single-source JSON files in
  `src/_data/`, so information can't drift between pages the way it did on the old site.
- Content has been cleaned up and re-organized per the rebuild plan and decision log
  (new homepage copy, corrected URL slugs, consolidated Solutions structure, one contact
  form instead of sixteen, and so on). See `MAINTENANCE.md` for a list of what still
  needs your input before this is launch-ready.

## Local setup

```bash
nvm use          # reads .nvmrc, pins Node 20
npm install
npm run serve    # local dev server with live reload
npm run build    # outputs static files to _site/
```

## Deploying

This repo is set up for Netlify:

1. Push this repository to GitHub.
2. In Netlify, "Add new site → Import an existing project" and connect the GitHub repo.
   Netlify will read `netlify.toml` automatically (build command and publish directory
   are already configured).
3. Netlify will give you a preview URL (`your-site-name.netlify.app`). **Review the whole
   site there before touching DNS** — check every page against the old site's URL list,
   submit the contact form and confirm it arrives, and run the homepage through Google's
   Rich Results Test for the JSON-LD schema.
4. Once you're happy, point your domain's DNS at Netlify and enable HTTPS (Netlify does
   this automatically via Let's Encrypt).
5. Re-submit `sitemap.xml` in Google Search Console after cutover.

## Structure

```
src/
  _includes/       Layout + reusable partials (header, footer, contact form, schema)
  _data/            Single-source JSON: company info, offices, nav, solutions, services, etc.
  css/style.css     One hand-written stylesheet, no framework/build step
  pages/            Every page on the site, organized by section
_redirects          Netlify redirect rules for every changed URL from the old site
netlify.toml        Build command, publish directory, and security headers
```

## Before you launch

See the "Known follow-ups before this goes live" section at the bottom of
`MAINTENANCE.md` — there are a handful of open items (award-citation verification,
office list verification, portfolio curation, legal review of the sale terms, and adding
real photography) that need your input before this should replace the live site.
