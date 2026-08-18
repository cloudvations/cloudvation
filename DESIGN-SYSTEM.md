# Cloudvation — Visual Design Direction

## Design idea

**Modern infrastructure confidence.** The interface should feel precise, calm, and capable: a crisp blue visual system, generous space, short direct copy, and subtle cloud/network motifs. It should communicate engineering discipline without looking cold or overly corporate.

## Color system

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#071A36` | Primary text, dark footer, navigation text |
| Navy | `#0B2B5A` | Dark surfaces, large visual accents |
| Cloud Blue | `#2563EB` | Primary CTA, active navigation, links |
| Sky | `#38BDF8` | Gradients, highlights, secondary accents |
| Ice | `#EAF3FF` | Section backgrounds, tinted cards |
| Mist | `#F7FAFF` | Primary page background |
| Slate | `#51627A` | Supporting text |
| Line | `#D8E4F4` | Borders and dividers |

Primary buttons use Cloud Blue with white text. Hover darkens toward Navy; keyboard focus uses a visible Sky-blue ring. Ink on Mist and white-on-Cloud Blue are the default high-contrast text pairs. Green, amber, and red are reserved for success, warning, and error states.

## Typography

- **Primary family:** Inter (fallback: `system-ui`, `sans-serif`).
- **Display style:** 700–800 weight, tight but readable letter spacing, 48–72px desktop / 40–48px mobile for page hero headlines.
- **Body:** 16–18px, 1.55–1.7 line height, Slate text for supporting copy.
- **Eyebrows:** 12–13px, 700 weight, uppercase with generous tracking, Cloud Blue.
- **UI labels:** 14–16px, 600–700 weight.

## Layout and spacing

- Content container: maximum `1200px`, with 24px mobile and 48px desktop side gutters.
- Page rhythm: 80–120px vertical section spacing on desktop; 56–72px on mobile.
- Grid: 12 columns on desktop, 6 on tablet, 4 on mobile.
- Cards: 16–20px radius, 1px Line border, white background, restrained shadow only on hover/focus.
- Buttons: 12px radius, at least 44px high, strong text labels rather than icon-only controls.

## Shared components

### Header

White, subtly translucent sticky header. Wordmark at left; simple text navigation in the center/right; a filled **Book a consultation** CTA at the far right. On mobile, show the wordmark and menu toggle; reveal navigation in a full-width panel below the header.

### Hero

Two-column layout on desktop and one column on mobile. Copy is left aligned. The companion visual is an abstract blue infrastructure composition: soft radial glow, a network of small nodes, and lightweight translucent panels—not a stock data-center photo.

### Accordion

Three stacked items with a numbered blue badge. The opened item gets a pale Ice background and exposed body copy; chevron rotates with a short, reduced-motion-safe transition. This acts as the hero visual's practical counterpart.

### Service cards

Four equal cards on a desktop grid (two-by-two on medium screens, one column on mobile). Each has a small blue line icon, title, one short outcome statement, and text link. Hover elevates gently and turns the link Cloud Blue.

### Trust section

Pale Ice background with a compact logo/expertise strip, then three credibility statements and a horizontal four-stage engagement timeline. Do not use unverified customer logos or certifications.

### Footer

Ink/Navy background with white headings, pale-blue links, and muted blue-gray supporting copy. Arrange Brand, Sitemap, Contact, and Legal columns responsively.

## Home page composition

1. **Header** — sticky navigation + consultation CTA.
2. **Hero** — positioning, two CTAs, and the three-stage migration accordion.
3. **Services** — four outcome-led cards with link to the services page.
4. **Trust** — delivery process, verified expertise, and proof (when available).
5. **Conversion band** — concise invitation to discuss a migration.
6. **Footer** — sitemap, address/contact details, legal.

## Other pages

- **Services:** compact hero; alternating detailed service rows; delivery model and FAQ; contact CTA.
- **Case studies:** compact hero; three-column outcome-led case study grid; clearly labelled anonymized cards until approved proof is available.
- **Contact:** compact hero; two-column form and contact-details layout; ice-tinted form panel with clear success/error feedback.

## Interaction principles

- Motion should be short (150–220ms), subtle, and never block reading or form completion.
- Honor `prefers-reduced-motion` by disabling decorative motion and replacing slide effects with instant state changes.
- Every interactive item has visible hover, focus, active, and disabled states.
- Maintain 44×44px minimum touch targets and use semantic HTML before ARIA enhancements.

## Content voice

Use concise, outcome-led language. Prefer “Move with confidence” and “Reduce risk before you migrate” over generic claims such as “best-in-class solutions.” Pair technical credibility with business impact: resilience, cost visibility, delivery speed, and lower migration risk.
