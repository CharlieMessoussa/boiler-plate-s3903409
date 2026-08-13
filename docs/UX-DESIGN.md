# UX Design — Login & Team Page

**Author:** Kazi Tajuddin (s4084522) — UX
**Sprint:** Week 4 Mock Sprint · Team 76
**Requirements source:** [`docs/BA-REQUIREMENTS.md`](./BA-REQUIREMENTS.md) by Fuyu Han

---

## Overview

This document covers the visual design for two screens in the Bootstrap Restyling sprint:

1. **Login page** — a visual restyle of the existing login screen. Authentication logic is untouched.
2. **Team page** — a new screen that introduces the four members of Team 76 after sign-in.

Both mockups live in [`docs/design/`](./design/) as PNG exports. The wireframes were built in Excalidraw.

---

## Design direction

### Look and feel

The existing boilerplate ships with a dark UI. Rather than fight that, this design leans into it — a near-black canvas with a single teal accent (`#4FD1B5` approx) used sparingly for interactive and identifying moments. The result reads as focused and modern without introducing a heavy new brand system that the client hasn't specified yet.

### Typography

A handwritten display face is used for the two hero moments — the "Team 76" wordmark on login and the "Meet the team" headline on the team page. This gives the product some personality it currently lacks. Everything else stays in a neutral system sans-serif so the interface remains readable and unfussy.

### One accent, used with intent

Teal is not decorative — it earns its place:

- **Sign in** primary button (login) — the only place teal fills a whole surface, marking the primary action.
- **"Create an account"** link (login) — accented because it's the escape hatch for a new user.
- **Role pill badges** (team page) — helps the eye jump between name and role.
- **Avatar rings** (team page) — one per member, using slightly different accent hues to give each person a small signature.

The rest of the interface is greyscale. This keeps the accent meaningful instead of noisy.

---

## Login page

**File:** [`design/login-mockup.png`](./design/login-mockup.png)

### Layout

- Card centred vertically and horizontally on the page.
- Fixed comfortable width (~380 px) — narrow enough to feel focused, wide enough for typing without cramping.
- Vertical stack: brand mark → subtitle → email → password → primary CTA → divider → Google → footer link.

### Key decisions

- **All-caps field labels ("EMAIL", "PASSWORD")** — separates the labels from the input text so the eye lands on the correct row instantly. Softer than a bold weight.
- **Teal "Sign in" button, dark "Continue with Google" button** — the two options are visually ranked so a returning user is nudged toward the primary email/password flow, without hiding SSO.
- **"or" divider** — makes it explicit that Google is an alternative, not a next step.
- **Footer link** ("New here? Create an account") — small but reachable. Teal accent so it's discoverable without competing with the primary CTA.

### What did NOT change

Per the BA's requirements ([`BA-REQUIREMENTS.md`](./BA-REQUIREMENTS.md) — "The existing login functionality should not be changed"), no fields were added or removed. Only visual treatment.

---

## Team page

**File:** [`design/team-mockup.png`](./design/team-mockup.png)

### Layout

- Small caps eyebrow: "THE PEOPLE BEHIND THE PROJECT"
- Hero headline: "Meet the team"
- One-line tagline: "Four people. One goal. Build something worth showing."
- Below: four horizontal rows, one per member.

Each row is a card containing:

| Region | Content |
|---|---|
| Left | Circular avatar (56 px) with the member's initial and a coloured accent ring |
| Right — top | Name (medium weight) + role pill badge |
| Right — bottom | One-sentence blurb |

### Why horizontal rows instead of a grid

Four members is a small roster. A 2×2 or 4-column grid would leave awkward whitespace at 4 items and doesn't scale well if the team grows or shrinks. Rows read like an actual team list — natural on mobile too, since each row is already the shape a small screen wants.

### Why each avatar has a different ring colour

Each teammate gets a signature accent (Nikolas teal, Fuyu blue, Kazi purple, Krish orange). The initial inside the ring picks up the same hue. This gives each person a small identity without needing five different pill colours for role badges — the badges stay uniformly teal.

### Members and roles

| Initial | Name | Role |
|---|---|---|
| N | Nikolas | Project Manager |
| F | Fuyu | Business Analyst |
| K | Kazi | UX Designer |
| K | Krish | Developer |

---

## Visual consistency between the two screens

Checklist item #3 on the UX card. Both mockups share:

- **Same dark canvas** — no jarring background flip between login and post-login.
- **Same accent colour** used with the same discipline (one primary use per screen: the Sign in button on login, the role pills on team page).
- **Same handwritten display face** for the hero moment on each page.
- **Same body typeface** everywhere else.
- **Same rounded-corner language** on cards, inputs, and buttons.
- **Same generous vertical rhythm** — nothing feels cramped on either page.

---

## Edge cases handled in the design

Directly addressing the "Edge Cases" section of Fuyu's requirements:

| Edge case | Design response |
|---|---|
| **Missing profile photo** | Initial-letter avatar inside a coloured ring is the design default — no dependency on external images. If a real photo is supplied later, it replaces the initial inside the same ring. |
| **Missing member information** | Every card is anchored by the ring + initial + name + role, so a missing blurb collapses the row cleanly without leaving a gap. |
| **Long member names** | Row width flexes with the viewport; names wrap to a second line rather than breaking layout. |
| **Long blurbs** | Blurb sits in its own line under the name/role, allowed to wrap freely. Doesn't push the avatar out of place. |
| **Incorrect login details** | The design leaves room below the password field for an inline error state (single-line, teal error text) without shifting the primary CTA. |
| **Different screen sizes** | Horizontal-row layout collapses gracefully — on narrow viewports each row already reads as a self-contained mini-card. Login card is single-column so it works down to mobile without changes. |

---

## Handoff notes for the developer (Krish)

- **Colours** — teal accent used sparingly; the exact hex can be tuned during implementation. Suggested: `#4FD1B5` for the primary teal.
- **Avatar rings** — 4 accent colours (teal, blue, purple, orange) mapped per team member. Consistent 2 px ring, 56 px avatar.
- **Role pills** — small teal-tinted pill, teal text, ~11-12 px, rounded to a full radius.
- **Fonts** — the display face on the mockups is a wireframe treatment. In implementation, a clean modern display font (e.g. Caveat, Kalam, or similar handwritten Google Font) matches the intent. Body text can stay as the boilerplate default.
- **Primary CTA** — the Sign in button is the only fully-filled teal surface. Other buttons stay outlined.
- **Auth logic** — do not change. Restyle only.
- **Google sign-in** — remains a distinct option separated by an "or" divider. Not removed.

---

## Validation status

- [ ] Login mockup complete
- [ ] Team mockup complete
- [ ] Visual consistency reviewed by UX
- [ ] Shared with BA (Fuyu) for validation
- [ ] Document updated

The final tick happens after Fuyu confirms the design meets her requirements. The card then moves to the Reviewing bucket for Dev pickup.
