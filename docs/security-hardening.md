# Security Hardening — ritvaldi.my.id

Date: 2026-04-16  
Scope: Static HTML/CSS/JS website deployed on Vercel.  
Author: Engineering audit — passive external review + codebase analysis.

---

## Stack Summary

| Component | Details |
|---|---|
| Hosting | Vercel (static) |
| Framework | None — raw HTML/CSS/JS |
| Analytics | Google Analytics 4 via `analytics.js` (self-contained bootstrap) |
| Forms | Formspree (contact: `mwvnrkkq`, newsletter: not yet activated) |
| Fonts | Self-hosted woff2 — no Google Fonts CDN |
| Embeds | Instagram embed.js + 3 blockquote Reels |
| CDN/infra | Vercel edge network |

---

## Changes Made

### 1. HTTP Security Headers (`vercel.json`)

All headers applied globally via Vercel `headers` config.

| Header | Value | Reason |
|---|---|---|
| `Content-Security-Policy` | See below | Prevent XSS, clickjacking, data exfiltration |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing attacks |
| `X-Frame-Options` | `DENY` | Belt-and-suspenders alongside CSP frame-ancestors |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer leakage to external sites |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Disable unused browser APIs, opt out of FLoC |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Enforce HTTPS for 2 years, eligible for HSTS preload list |
| `Cross-Origin-Opener-Policy` | `same-origin` | Isolate browsing context, block cross-origin window access |
| `Cross-Origin-Resource-Policy` | `same-origin` | Prevent cross-origin embedding of site resources |

**CORP override for `/images/` and `/fonts/`**: set to `cross-origin` so OG image previews and font loading from CDN crawlers (Telegram, Facebook, etc.) work correctly.

**CSP (enforced):**
```
default-src 'self';
script-src 'self' https://www.googletagmanager.com https://www.instagram.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https://www.instagram.com https://*.cdninstagram.com https://www.google-analytics.com https://*.doubleclick.net;
font-src 'self';
connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com;
frame-src https://www.instagram.com;
object-src 'none';
base-uri 'self';
form-action 'self' https://formspree.io;
frame-ancestors 'none';
upgrade-insecure-requests
```

**Why `'unsafe-inline'` for `style-src`:**  
Every page uses inline `<style>` blocks for critical CSS (above-the-fold performance optimization). Removing these would require a full refactor. Inline CSS is significantly lower risk than inline JS — there is no known CSS exfiltration path that would be blocked by removing `unsafe-inline` on this site's threat model.

**If Instagram embed causes CSP violations in production:**  
Add `https://*.fbcdn.net` to `img-src`. The embed renders inside an iframe (Instagram's own context), so image CDN requests are unlikely to hit our CSP, but placeholder images may.

---

### 2. GA4 Bootstrap Extracted to `analytics.js`

**Before:** Every HTML file had an inline `<script>` block for GA4 initialization.  
**After:** Single external file `/analytics.js`, referenced as `<script src="/analytics.js">` in all 22 HTML files.

**Impact:** Enables strict `script-src` in CSP without `'unsafe-inline'`. No functional change — identical behavior, deferred via `window.addEventListener('load', ...)`.

**Files changed:** `index.html`, `blog.html`, `404.html`, all 19 blog post HTML files.

---

### 3. Instagram embed.js — Protocol-relative URL Fixed

**Before:** `<script async src="//www.instagram.com/embed.js">`  
**After:** `<script async src="https://www.instagram.com/embed.js">`

**Impact:** Protocol-relative URLs inherit the page protocol. While HTTPS is always used in practice, an explicit `https://` is unambiguous, consistent with CSP `script-src`, and removes any theoretical downgrade risk.

---

### 4. Contact Form Hardening (`index.html` + `main.js`)

**Honeypot field added (`_gotcha`):**  
A hidden input named `_gotcha` is included in the form. Real users never fill it (it's visually and accessibly hidden). Bots that fill all fields will be filtered in two layers:
- **Formspree layer**: Formspree natively ignores submissions where `_gotcha` is filled.
- **Client layer** (`main.js`): JS checks `_gotcha` value before even calling `fetch()`.

**maxlength attributes added:**
- Name: 120 chars
- Email: 254 chars (RFC 5321 maximum)
- Message: 3000 chars

**JS-level length slicing:**  
Values are `.slice()`'d in the `JSON.stringify` payload as a second enforcement layer. Prevents oversized payloads if `maxlength` is bypassed via DevTools.

**Submit throttle (30s):**  
`_lastContactSubmit` timestamp variable tracks the last successful submission attempt. Subsequent attempts within 30 seconds are rejected client-side with a generic error message — no network call made.

**Error message normalization:**  
Previously, Formspree API error messages were forwarded directly to the user (`n.errors.map(e=>e.message).join(", ")`), which could leak internal API details. Now all error states show a single generic user-facing message.

---

### 5. `.well-known/security.txt`

Created at `/.well-known/security.txt` per RFC 9116.  
Contact: `ritvaldi@synapsis.id`  
Expires: `2027-04-16T00:00:00.000Z`

**Action required:** Update the `Expires` field annually, or set a rolling expiry. The file will show as "expired" to security scanners after the date passes.

---

### 6. `robots.txt` Updates

Added `Disallow` for:
- `/.git/` — git metadata (Vercel won't serve it, but explicit is better)
- `/node_modules/` — local dev dependencies (same rationale)
- `/CATATAN.md` — personal notes file, not for public indexing

No SEO-relevant paths were changed.

---

## Additional Changes (Round 2)

### 6. Cloudflare Turnstile — Server-side CAPTCHA (`api/contact.js`)

A Vercel Serverless Function was created at `/api/contact`. The contact form now submits to this endpoint instead of directly to Formspree.

**Architecture:**
```
Browser → POST /api/contact → [validate Turnstile] → POST Formspree → return result
```

**What the function does:**
1. Checks `Origin` header — rejects requests not from `ritvaldi.my.id`
2. Server-side honeypot check (belt-and-suspenders with client-side)
3. Validates Cloudflare Turnstile token against `challenges.cloudflare.com/turnstile/v0/siteverify`
4. Forwards cleaned payload to Formspree

**Turnstile configuration required (manual — outside repo):**
1. Go to https://dash.cloudflare.com → Turnstile → Add Site
2. Domain: `ritvaldi.my.id`
3. Widget type: **Managed** (recommended)
4. Copy the **Site Key** → replace `YOUR_TURNSTILE_SITE_KEY` in `index.html` (in the `data-sitekey` attribute)
5. Copy the **Secret Key** → add `TURNSTILE_SECRET_KEY` as environment variable in Vercel dashboard (Settings → Environment Variables)
6. Set for Production environment only

**Graceful degradation:** If `TURNSTILE_SECRET_KEY` env var is not set (during initial deploy), Turnstile validation is skipped and the form works normally. The widget won't render until a valid site key is configured in the HTML.

**Formspree form ID security improvement:** The Formspree form ID (`mwvnrkkq`) is now only referenced in `api/contact.js` (server-side code), not in the client-side JS bundle. This removes it from browser DevTools exposure.

**CSP updated:** `challenges.cloudflare.com` added to `script-src`, `connect-src`, and `frame-src`.

**`form-action` tightened:** Previously `'self' https://formspree.io`. Now `'self'` only — the form submits to `/api/contact` (same origin); Formspree is called server-side.

---

### 7. Newsletter Form Hardening (`main.js`)

The newsletter form submit handler (for when the form HTML is eventually built) now includes:
- **Honeypot check**: reads `[name="_gotcha"]` input — silently returns if filled
- **60-second throttle**: prevents rapid successive submissions
- **Email validation**: trims, checks `@` presence, slices to 254 chars
- **Error message normalization**: returns generic message, no internal detail

**Still required when activating the newsletter form:**
1. Create form at formspree.io → get real form ID
2. Replace `YOUR_NEWSLETTER_FORM_ID` in `main.js`
3. Add `<input type="text" name="_gotcha" style="display:none!important" tabindex="-1" />` inside the newsletter form HTML

---

### 8. GitHub Actions CI (`.github/workflows/ci.yml`)

Lightweight hygiene check workflow — runs on every push/PR to `main`.

**Checks:**
- `security.txt` present
- `analytics.js` present  
- `api/contact.js` present
- No inline GA4 scripts in HTML (regression guard)
- All `target="_blank"` have `rel="noopener"`
- No protocol-relative `src=//` URLs
- `vercel.json` has headers block + CSP
- Warns (non-blocking) if Turnstile or newsletter form IDs are still placeholders
- Warns (non-blocking) if obvious hardcoded secrets found

---

## Gaps Remaining (Require Manual / External Action)

### A. Cloudflare Turnstile Keys (Required to Activate CAPTCHA)
See "Turnstile configuration required" in section 6 above. The code is deployed and ready; only the keys are missing.

### B. Newsletter Form Activation
See section 7 above. Form hardening is in place; only the Formspree form ID and HTML form element are missing.

### C. HSTS Preload List
The HSTS header is set with `preload` flag. To actually be added to browsers' preload list:
1. Submit at https://hstspreload.org
2. Ensure `ritvaldi.my.id` and `www.ritvaldi.my.id` both serve valid HTTPS
3. Once submitted, cannot easily be removed — plan accordingly

### D. CSP Violation Reporting (Optional)
To catch CSP violations in production without disabling enforcement, add a `report-uri` or `report-to` directive to the CSP in `vercel.json`:
```
...; report-uri https://YOUR-REPORT-ENDPOINT/csp-report
```
Free options: [report-uri.com](https://report-uri.com), [Sentry CSP reporting](https://docs.sentry.io/platforms/javascript/configuration/filtering/#content-security-policy).

### E. Formspree Domain Allowlist
In the Formspree dashboard for form `mwvnrkkq`, restrict allowed origins to `https://ritvaldi.my.id` only. The form ID is now server-side only, but origin allowlisting in Formspree adds an extra layer.

### F. Subresource Integrity (SRI) for analytics.js
Currently same-origin, covered by CSP `'self'`. If `analytics.js` is ever served from a CDN, add an `integrity` hash attribute to the `<script>` tag. Requires a build step to auto-generate the hash on change.

---

## Manual Verification Checklist (After Deploy)

Run these checks after pushing to production:

- [ ] `curl -I https://ritvaldi.my.id` → verify `Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security`, `X-Content-Type-Options` headers present
- [ ] Open browser DevTools → Console → no CSP violation errors on homepage
- [ ] Open browser DevTools → Console → no CSP violation errors on a blog post page
- [ ] Instagram Reels embeds load correctly on homepage
- [ ] Contact form submits successfully (end-to-end test)
- [ ] Contact form: honeypot field is not visible and not tab-reachable
- [ ] Contact form: entering a message >3000 chars is blocked by `maxlength`
- [ ] Visit `https://ritvaldi.my.id/.well-known/security.txt` → returns correct content
- [ ] Visit `https://ritvaldi.my.id/analytics.js` → returns the GA4 bootstrap script
- [ ] `https://securityheaders.com/?q=ritvaldi.my.id` → grade should be A or A+
- [ ] `https://observatory.mozilla.org/analyze/ritvaldi.my.id` → grade should improve significantly
- [ ] GA4 tracking still works (check Realtime in GA4 dashboard after visiting site)
- [ ] No `404` errors in Vercel function logs for `/analytics.js`

---

## Security Score Improvement (Expected)

| Tool | Before | After (Expected) |
|---|---|---|
| securityheaders.com | F (no headers) | A |
| Mozilla Observatory | D/F | B+ to A |
| SSL Labs | A (Vercel handles TLS) | A (unchanged) |
