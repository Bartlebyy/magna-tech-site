# Maintaining This Site

## 1. How this works, in three sentences

This website is a set of plain files (text and code) stored in a GitHub repository.
Netlify watches that repository, and every time a change is saved ("pushed") to it,
Netlify automatically rebuilds the site and publishes the new version — usually within
about a minute, with no manual "deploy" step required.

## 2. Where things live

- **Code repository:** _add your GitHub URL here once the repo is created_
- **Netlify project:** _add your Netlify project name / URL here once connected_
- **Live site:** https://magna-tech.com (once DNS is pointed at Netlify)
- **Preview site:** Netlify gives you a `*.netlify.app` preview URL before you connect the real domain — use this to review changes before they go live.

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

Real photos are now wired into the site under `src/img/`:

| Photo | Used on |
|---|---|
| Award certificates (7) | `/about/awards/` |
| Steven Krams portrait | `/about/about-mte/` |
| Cinema auditorium | `/solutions/cinemas/` |
| Planetarium dome | `/solutions/planetariums/` |
| Drive-in screen | `/solutions/outdoor-cinemas/` |
| Services / Consulting banners | `/services/` and `/services/consulting/` |
| Vintage equipment banner | `/vintage-equipment/` |
| Outlet/catalog banner | `/products/` |
| Team/event photo | `/portfolio/` |

**Not used, sitting in `src/img/extra/` for you to place:** about a dozen files
(`page1_1-new.jpg`, the `ton_3_spr`/`ton_4_spr` variants, `3.jpg`, `960x0.jpg`,
`untitled-1.jpg`, `untitled-2.png`, and the old `electronic-booth-ver-2.png` ON-LINE BOOTH
graphic) that came in the same batch but didn't have an obvious home. Tell us which page
each belongs to and we'll wire it in.

**Deliberately excluded, not copied into the project:** six files that read as third-party
press/studio material rather than MTE's own photography — two "Tenet" (2020,
Christopher Nolan) promotional images, a Telluride Film Festival press photo, and three
COVID-era cinema-reopening news photos (Korea, China, and the Egyptian Theatre/Netflix).
If you hold an actual license for any of these, say so and we'll add them back; otherwise
leave them out of a rebuilt commercial site.

**Still no photo:** most Solutions pages (Corporate, Cruise Ships, Educational Facilities,
Government & Military, Houses of Worship, Control Rooms, Entertainment, Health Care,
Shopping Malls, Sport Venues, Performing Arts Theaters, Museums) and most Services pages
still render with no image. Add files to `src/img/solutions/` or `src/img/services/` and
reference them from the matching entry in `solutions.json` / `services.json` (see the
`image` / `imageAlt` fields already used on Cinemas, Planetariums, etc. for the pattern).

## 7. Where form submissions go

Contact and partner-application form submissions arrive through Netlify Forms. In your
Netlify project dashboard, go to **Forms** to see submissions, and **Forms → Notifications**
to set up an email alert. Point that notification at whichever inbox should receive them
— confirm `digital@myiceco.com` is still monitored before launch (open question Q-01 in
the decision log).

---

## Known follow-ups before this goes live

These are called out here so they don't get lost between this file and the decision log:

- **Academy Award year/citation (D-014):** the Awards page content was reconstructed from
  a secondary database and cross-checked against a second source, not verified directly
  against oscars.org. Do that check before publishing.
- **Offices & agents (Q-03):** most entries on the Offices & Agents page are carried over
  unverified — confirm which are still active.
- **Terms of Sale (D-file):** carried over from the current site almost as-is; worth a
  legal read-through, especially the collections/returns language, and confirm the
  Doral, FL FOB point still matches how you actually ship.
- **Portfolio (Q-05):** the current site lists 200+ projects, heavily weighted toward
  Russian regional cinemas. This rebuild uses a curated sample of ~20 — confirm which
  named clients (studios, museums, government bodies) you're comfortable listing publicly,
  and let us know if you want the full list republished instead.
- **Placeholder solution pages:** several `/solutions/[venue]/` pages (marked in
  `solutions.json` with `"hasRealCopy": false`) have short, generic copy pending real
  project detail. They render fine but read thin — flesh them out as projects come in.
- **Images:** real photos are now wired in — see section 6 above for what's placed,
  what's unplaced in `src/img/extra/`, and what was deliberately excluded as third-party
  content. Several Solutions/Services pages still have no photo at all.
- **Form routing:** confirm `digital@myiceco.com` (or whichever inbox you choose) is set
  up to receive Netlify Forms notifications before launch.
