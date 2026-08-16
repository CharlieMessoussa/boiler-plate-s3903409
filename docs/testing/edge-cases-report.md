# Test Report — Edge Cases & Bug Log

**Author:** Kazi Tajuddin (s4084522) — Dev 2 (Testing)
**Sprint:** Week 4 Mock Sprint · Team 76
**Related PR:** [#11 (krishpatel409:design/ux-mockups)](https://github.com/CharlieMessoussa/boiler-plate-s3903409/pull/11)
**Task:** [Sprint Task 7] Test Edge Cases & Log Bugs

---

## Environment

Same setup as the happy-path test report (`docs/testing/flow-test-report.md`) — Chrome on macOS, tested at `http://localhost:3000` against my Task 1 Firebase project (`capstone-task1-kt`) since Krish did not deploy this sprint.

Tester: Kazi (Dev 2), not the same person who wrote the feature (Krish is Dev 1).

---

## Edge cases from BA requirements

The BA (`docs/BA-REQUIREMENTS.md`) flagged four edge cases to cover: invalid login, direct team-page access without a session, missing photo, and an unusually long blurb. All four are tested below.

### 1. Invalid login — **PASS**

**Steps:**
1. On `/auth/signin`, entered `wrong@test.com` in EMAIL
2. Entered `wrongpass123` in PASSWORD
3. Clicked **Sign in**

**Result:** A red toast appeared in the top-right reading *"Invalid email or password"*. The password field kept its focus ring, and the form values were preserved (no data loss). See `screenshots/invalid-login-error.png`.

**Notes:**
- The error message is generic (doesn't reveal whether the email exists or not) — good for security.
- Toast is non-blocking so the user can immediately retry.

### 2. Direct team-page access without login (must redirect) — **PASS**

**Steps:**
1. Signed out (top-right logout icon)
2. Confirmed session cleared (landed on the sign-in page)
3. In the browser address bar, typed `http://localhost:3000/team` and pressed Enter

**Result:** Route guard fires — redirected back to `/auth/signin`. No flash of the team page contents before the redirect. Clean behaviour.

### 3. Missing photo — **PASS**

**Steps:** Loaded `/team` with all 4 members.

**Result:** Every member card renders with an initial-letter avatar (N, F, K, K) inside their signature-colour ring. This is the designed default per `docs/UX-DESIGN.md` — real photos would replace the initial inside the same ring later.

Since no real photos are supplied in this sprint, the "missing photo" pattern is effectively always in play. Verified consistent rendering across all 4 cards — no broken images, no layout jitter.

### 4. Long blurb (Read more) — **PASS**

**Steps:** On `/team`, focused on Kazi's card (the only member with a blurb longer than the ~2-line threshold).

**Result:**
- Blurb truncates cleanly with an ellipsis (`…`) at the end of the second line.
- A teal **Read more** link appears directly under the truncated text.
- Clicking **Read more** expands the blurb inline (no modal, no page shift). The link swaps to **Show less**.
- Clicking **Show less** collapses the blurb back and swaps the label to **Read more**.
- No layout break in either state. Neighbouring cards (Nikolas, Fuyu, Krish) stay in place; only Kazi's card grows and shrinks.

Matches the design intent in `docs/UX-DESIGN.md` § *Update — Read more pattern for long blurbs*.

---

## Additional checks

### Responsive behaviour — **PASS (sanity check)**

Resized the browser window down to a narrow width (~380 px). The single-column row layout on the team page collapsed naturally without any element clipping or horizontal scroll. Login card also stays centred at narrow widths.

### Console errors during testing — **NONE**

Kept Chrome DevTools open during all tests. No red errors in the Console tab during the sign-in flow, team page render, or the Read more toggle. One warning about a hydration mismatch flashed briefly on first load but did not repeat — not a blocker, worth Krish having a quick look.

---

## Bugs found

**One bug logged in this sprint** — see the happy-path report (`docs/testing/flow-test-report.md` § BUG-01) for **redirect-after-sign-in-lands-on-dashboard-instead-of-team**.

**No new bugs found during edge-case testing.** All four BA-flagged edge cases pass.

---

## Handoff

- Edge case coverage complete against the BA's list.
- One bug outstanding (BUG-01, redirect target). Once Krish fixes it, this feature is green for PM sign-off.
- Report + invalid-login screenshot committed under `docs/testing/` for the master document.

---

*Test performed by Kazi Tajuddin (s4084522), 16 August 2026.*
