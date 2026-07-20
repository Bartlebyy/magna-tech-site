# Maintaining This Site

## 1. How this works, in three sentences

This website is a set of plain files (text and code) stored in a GitHub repository.
Netlify watches that repository, and every time a change is saved ("pushed") to it,
Netlify automatically rebuilds the site and publishes the new version — usually within
about a minute, with no manual "deploy" step required.

## 2. Where things live

- **Code repository:** https://github.com/Bartlebyy/magna-tech-site
- **Netlify project:** magna-tech-site — https://app.netlify.com/projects/magna-tech-site
- **Live site (Netlify subdomain):** https://magna-tech-site.netlify.app — this is live production; every push to `main` auto-deploys here within about a minute.
- **Live site (real domain):** https://magna-tech.com — not yet pointed at Netlify. Point DNS here when ready to cut over (see Known follow-ups).
- **Preview URLs:** any manual `netlify deploy` (without `--prod`) or pull-request build gets its own `*.netlify.app` preview URL — use this to review changes before they reach production.

## 3. The easiest way to make a change: ask an AI coding assistant

To change anything on this site — fix a typo, update an address, add a page, swap a
photo — describe the change in plain English to an AI coding assistant (such as Claude
Code) and point it at this repository. Tell it what file to look at (see the map below,
or just describe what you want changed) and ask it to make the edit, commit it, and push
it. Netlify does the rest; the change is live in about a minute.

You do not need to know how to code to do this. You just need to be able to describe
what you want changed, and confirm the assistant's summary of what it did before it pushes.

## 4. Where common things live

| What you want to change | File |
|---|---|
| Address, phone, email, hours, founding year | `src/_data/company.json` |
| Regional offices and agents | `src/_data/offices.json` |
| Menu / navigation structure | `src/_data/nav.json` |
| Solutions-by-venue page text | `src/_data/solutions.json` |
| Services page text | `src/_data/services.json` |
| Staff list | `src/_data/staff.json` |
| Award citations | `src/_data/awards.json` |
| Portfolio entries | `src/_data/portfolio.json` |
| Homepage copy | `src/pages/index.njk` |
| Any other page's copy | the matching file under `src/pages/` |
| Look and feel (colors, fonts, spacing) | `src/css/style.css` (one file, no build step) |
| Redirects from old URLs | `src/_redirects` |

## 5. The one rule that matters most

**Never type the address, phone number, or other company details directly into a page.**
Always change them in `src/_data/company.json` (or `offices.json` for regional offices)
instead. Every page pulls from these files automatically. This is what stops the address
from drifting into two different versions again, the way it did on the old site.

## 6. Photos

| Photo | Used on |
|---|---|
| Award certificates & plaques (7) | `/about/awards/` — each paired with its own citation, click to enlarge |
| Steven Krams portrait | `/about/about-mte/` |
| Cinema auditorium (cropped from a before/after pair) | `/solutions/cinemas/` |
| Planetarium dome (cropped from a before/after pair) | `/solutions/planetariums/` |
| Drive-in illustrated sign | `/solutions/outdoor-cinemas/` |
| Services hero (cropped from a before/after pair) | `/services/` |
| Team/event photo | `/portfolio/` |
| Film projector (Unsplash, free license) | Homepage hero |
| MTE logo mark | Header, footer, favicon, Organization schema |

**No real MTE project photography exists for Cinemas, Planetariums, or the Drive-In
page.** The images currently there are the best available placeholders — two are cropped
from old "before/after" comparison composites (not full-resolution to start with), and
the drive-in page uses a generic illustrated sign rather than a real installation photo.
**This is the single highest-value thing to fix before launch:** swap in genuine photos
of MTE-installed spaces as they become available. See `src/_data/solutions.json` and
`src/_data/services.json` for the `image` / `imageAlt` fields to update.

**Not used, sitting in `src/img/extra/` for you to place:** about a dozen files
(`page1_1-new.jpg`, the `ton_3_spr`/`ton_4_spr` variants, `3.jpg`, `960x0.jpg`,
`untitled-1.jpg`, `untitled-2.png`, and the old `electronic-booth-ver-2.png` ON-LINE BOOTH
graphic) that came in the same batch but didn't have an obvious home. Note: `960x0.jpg` is
a stock photo of a *different* company's drive-in venue (EVX) — don't use it as if it were
MTE's work. Tell us which of the rest belongs where and we'll wire it in.

**Deliberately excluded, not copied into the project:** six files that read as third-party
press/studio material rather than MTE's own photography — two "Tenet" (2020,
Christopher Nolan) promotional images, a Telluride Film Festival press photo, and three
COVID-era cinema-reopening news photos (Korea, China, and the Egyptian Theatre/Netflix).
If you hold an actual license for any of these, say so and we'll add them back; otherwise
leave them out of a rebuilt commercial site.

**Still no photo:** the merged `/solutions/commercial-and-institutional-av/` page and most
Services pages (Installation & Support, Rental Services, Custom Design & Manufacturing,
Consulting, Design & Acoustics) render with no image. Add files to `src/img/solutions/` or
`src/img/services/` and reference them from the matching entry in `solutions.json` /
`services.json` (see the `image` / `imageAlt` fields already used on Cinemas, Planetariums,
etc. for the pattern).

## 7. Where form submissions go

Contact and partner-application form submissions arrive through Netlify Forms. In your
Netlify project dashboard, go to **Forms** to see submissions, and **Forms → Notifications**
to set up an email alert. Point that notification at whichever inbox should receive them
— confirm `digital@myiceco.com` is still monitored before launch (open question Q-01 in
the decision log).

---

## Known follow-ups before this goes live

Ranked roughly by how much it matters before this is treated as launch-ready.

### Content that needs verification or real assets

- **Real project photography (highest priority).** No genuine MTE installation photos
  exist for Cinemas, Planetariums, or the Drive-In page — see section 6 above for exactly
  what's standing in for them. Everything else on the site can be polished, but this is
  the one gap that actually undercuts credibility with a visitor.
- **Academy Award dates (1974, 1990).** These two citations on `/about/awards/` were
  reconstructed from a third-party Oscar-nominations database and a German-language
  Wikipedia article, cross-checked against each other — not verified directly against
  oscars.org. The page currently presents them with full confidence and no caveat; do the
  oscars.org check before treating them as settled fact.
- **Transcribed award/plaque text.** The Kodak and ASC recognition citations on the Awards
  page were transcribed by reading the certificate photos directly (fine print on a couple
  of them is small) — worth a proofread against the physical originals.
- **Offices & agents.** Most entries on the Offices & Agents page are carried over from the
  old site unverified — confirm which are still active before publishing.
- **Terms of Sale.** Carried over from the current site almost as-is; worth a legal
  read-through, especially the collections/returns language, and confirm the Doral, FL FOB
  point still matches how you actually ship.
- **Portfolio.** The current site lists 200+ projects, heavily weighted toward Russian
  regional cinemas. This rebuild uses a curated sample of ~20 — confirm which named clients
  (studios, museums, government bodies) you're comfortable listing publicly, and say if you
  want the full list republished instead.
- **Placeholder solution pages.** A few `/solutions/[venue]/` pages (marked in
  `solutions.json` with `"hasRealCopy": false`) still have short, generic copy pending real
  project detail. They render fine but read thin.

### Before DNS cutover

- **Point magna-tech.com at Netlify.** The site is live and auto-deploying at
  https://magna-tech-site.netlify.app, but the real domain isn't connected yet.
- **Form routing.** Confirm `digital@myiceco.com` (or whichever inbox you choose) is set up
  to receive Netlify Forms notifications — check in the Netlify dashboard under
  **Forms → Notifications**.
- **Google Search Console / sitemap resubmission** once the real domain is live.

### Smaller open items

- A handful of unplaced photos sit in `src/img/extra/` waiting on direction — see section 6.
- Several Services pages (Installation & Support, Rental Services, Custom Design &
  Manufacturing, Consulting, Design & Acoustics) and the merged
  `/solutions/commercial-and-institutional-av/` page have no photo at all.
