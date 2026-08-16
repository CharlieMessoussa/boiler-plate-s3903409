# Test Report — Login → Redirect → Team Page Flow (Happy Path)

**Author:** Kazi Tajuddin (s4084522) — Dev 2 (Testing)
**Sprint:** Week 4 Mock Sprint · Team 76
**Related PR:** [#11 (krishpatel409:design/ux-mockups)](https://github.com/CharlieMessoussa/boiler-plate-s3903409/pull/11)
**Task:** [Sprint Task 6] Test Login → Redirect → Team Page Flow

---

## Environment

| Item | Value |
|---|---|
| Test type | Manual, end-to-end |
| Base | `krishpatel409:design/ux-mockups` at commit `55b1b84` |
| Firebase project | `capstone-task1-kt` (used my Task 1 project since I don't have credentials for `capstone-task1-boilerplate` that Krish's `.firebaserc` points at) |
| Deployed URL | Not available — Krish did not deploy this sprint. Tested against `http://localhost:3000` and documented the deviation. |
| Browser | Chrome (latest) on macOS |
| Test account | Existing Google user from Task 1 setup |
| Tester | Kazi (Dev 2). Not the same person who wrote the feature (Krish is Dev 1), per assignment rule. |

---

## Test results

### 1. Valid login end-to-end — **PASS**

Loaded `http://localhost:3000` → landing page rendered as expected (Sign in / Create account buttons on dark canvas).

Clicked **Sign in** → routed to `/auth/signin` → restyled login page rendered per the approved UX design (teal primary CTA, "Continue with Google" secondary, EMAIL/PASSWORD all-caps labels, handwritten "Capstone Task 1" wordmark, "Sign in to continue" subtitle).

Clicked **Continue with Google** → Google OAuth flow completed successfully → session established → user landed in the app.

### 2. Redirect to team page — **FAIL (bug logged)**

**Expected:** After a successful sign-in, user should land on `/team`.
**Actual:** User is redirected to `/dashboard`. See bug BUG-01 below.

Team page renders correctly when navigated to manually via the Sidebar, but the redirect target after sign-in is wrong.

### 3. All required content on team page — **PASS**

Navigated to `/team` manually. Verified against BA requirements (`docs/BA-REQUIREMENTS.md`) and UX design (`docs/UX-DESIGN.md`):

| Element | Result |
|---|---|
| "THE PEOPLE BEHIND THE PROJECT" eyebrow | ✅ Present, teal accent |
| "Meet the team" hero heading | ✅ Present, handwritten display face |
| Tagline "Four people. One goal. Build something worth showing." | ✅ Present |
| Nikolas card — PM, teal ring | ✅ Correct |
| Fuyu card — BA, blue ring | ✅ Correct |
| Kazi card — UX, purple ring | ✅ Correct |
| Krish card — Developer, orange ring | ✅ Correct |
| Role pill badges (teal) | ✅ Present on all 4 cards |
| Initial-letter avatar (missing-photo fallback) | ✅ Applied consistently across all 4 members |
| "Read more" toggle on long blurbs | ✅ Present on Kazi's card only (the only blurb exceeding the 2-line threshold) |

### 4. Sign-out — **PASS**

Clicked the logout icon in the top-right of the app shell. Session cleared. Returned to the landing/sign-in state cleanly.

---

## Bugs logged

### BUG-01 — Redirect after sign-in goes to Dashboard instead of Team page

**Severity:** Medium (blocks Task 6 checklist item 2)
**Assignee:** Krish (Dev 1)

**Reproduction:**
1. Open `http://localhost:3000`
2. Click **Sign in**
3. Complete Google sign-in with a valid account
4. Observe: URL lands on `/dashboard`, not `/team`

**Expected:** Per Task 6 acceptance criteria (*"Redirect to team page confirmed"*) and BA requirements, a successful sign-in should route the user to `/team`.

**Actual:** User lands on `/dashboard`. Team page is only reachable manually via the Sidebar link.

**Suggested fix:** In the sign-in flow (`frontend/src/app/(auth)/auth/signin/page.tsx` or wherever the post-auth redirect is set), change the redirect target from `/dashboard` to `/team`.

**Blocker for sign-off:** Yes — Task 6 checklist item 2 cannot be legitimately ticked until this is fixed.

---

## Handoff

- **BUG-01** needs to go back to Krish for a quick fix. Once he pushes and it's re-tested green, Task 6 is complete.
- Task 7 (edge cases) is a separate report — see `docs/testing/edge-cases-report.md`.
- All other happy-path items pass. Feature is close to ready — just the redirect target to swap.

---

*Test performed by Kazi Tajuddin (s4084522), 16 August 2026.*
