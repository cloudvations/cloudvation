# Cloudvation Marketing Website — Product Specification

## 1. Purpose

Create a modern, credible marketing site for **Cloudvation**, a cloud migration service provider. The site should explain the offering clearly, build trust with prospective clients, and convert qualified visitors into contact enquiries.

The first release is a small, static-first website that is straightforward to update: content lives in clearly grouped data/config files, page components are reusable, and no database or custom backend is required.

## 2. Goals and success criteria

- Clearly communicate Cloudvation's cloud migration expertise within the first screen.
- Direct visitors to services, case studies, or a contact enquiry from every page.
- Establish confidence using a concise delivery process, platform expertise, security signals, and customer proof.
- Work well across mobile, tablet, and desktop devices.
- Meet a solid accessibility baseline (semantic structure, keyboard navigation, visible focus, labelled form controls, sufficient contrast).
- Keep routine copy, services, case studies, navigation, and footer details easy to change without editing layout code.

## 3. Audience

Primary audience: founders, technology leaders, and operations leaders at growing companies planning a cloud migration, modernization project, or cloud cost/security improvement.

Secondary audience: technical decision-makers comparing migration partners.

## 4. Information architecture

| Route | Purpose | Primary action |
| --- | --- | --- |
| `/` | Explain value, key services, process, proof, and next step. | Book a migration consultation |
| `/services` | Detail each engagement area, deliverables, and common outcomes. | Discuss your migration |
| `/case-studies` | Present concise, outcome-led customer/project stories. | Start a similar project |
| `/contact` | Capture qualified enquiries. | Send enquiry |

## 5. Global experience

### Header/navigation

- Sticky top header with Cloudvation wordmark/logo linking to `/`.
- Desktop links: Home, Services, Case Studies, Contact.
- High-contrast CTA: **Book a consultation**, linking to `/contact`.
- Mobile menu with the same links and CTA; it must be keyboard accessible and close on navigation/Escape.
- Current page is visibly indicated and programmatically exposed with `aria-current`.

### Footer

- Brand summary and short positioning statement.
- Sitemap: Home, Services, Case Studies, Contact.
- Contact/address block: business location, enquiry email, and optional phone number.
- Social links only when official profiles are supplied.
- Copyright year and privacy-policy placeholder/link.

## 6. Home page

### 6.1 Hero

- Clear eyebrow/label such as “Cloud migration, made practical”.
- Headline focused on secure, low-disruption migration and modernization.
- One concise supporting paragraph.
- Primary CTA: **Plan your migration** → `/contact`.
- Secondary CTA: **Explore services** → `/services`.
- Supporting visual treatment: abstract cloud/infrastructure illustration or code-native graphic; avoid generic stock imagery as the primary message.

### 6.2 Hero accordion

An accessible accordion beside or below the hero copy. It conveys the core engagement path without overcrowding the page.

1. **Assess** — current-state review, risk and dependency mapping, cost baseline.
2. **Migrate** — phased move, landing zone, application/data migration, validation.
3. **Optimize** — security hardening, observability, reliability, and FinOps improvements.

Behavior: one panel open initially; each trigger is a real button with `aria-expanded` and an associated controlled panel; supports mouse, touch, keyboard, and screen readers.

### 6.3 Services overview

- Section heading, value-focused introduction, and three-to-four service cards.
- Each card includes a simple icon, service title, concise result-oriented description, and link to the relevant Services section.
- Initial services: Migration Strategy & Readiness, Cloud Landing Zones, Application & Data Migration, and Cloud Optimization & Managed Enablement.
- End with a link/CTA to `/services`.

### 6.4 Trust section

Combine several forms of proof while retaining an uncluttered layout:

- Platform expertise badges/logos (only verified partners/platforms should be shown).
- Three brief differentiators: security-first, outcome-led, and transparent delivery.
- A simple four-step delivery timeline: Discover → Design → Deliver → Improve.
- Optional customer logo strip and testimonial only when approved assets/quotes exist.
- A final in-context CTA to `/contact`.

## 7. Services page

- Intro hero: headline, short explanation, contact CTA.
- Detailed service sections/cards for the four initial services.
- For each service: ideal situation, what is included, expected outcomes, and an optional delivery duration/range only after it is validated by the business.
- “How we work” engagement model: assessment, roadmap, implementation, handover/enablement.
- FAQ covering migration disruption, cloud selection, security, and getting started.
- Closing CTA to contact.

## 8. Case studies page

- Intro that defines outcomes Cloudvation delivers.
- Responsive case-study card grid with fields: client/industry (or anonymized label), challenge, approach, and measurable outcomes.
- Individual case-study detail pages are optional for the first release; cards can initially expand in place or link to a future route.
- Use honest placeholders until real, approved client proof exists. Do not invent customer logos, quotes, certifications, or metrics.
- Closing CTA to contact.

## 9. Contact page and hosted form integration

### Contact content

- Reassuring intro and expected response time, once the business confirms it.
- Enquiry email/address plus the hosted form.

### Form fields

- Name (required)
- Work email (required; email validation)
- Company (optional)
- Role (optional)
- Cloud environment / provider (optional select)
- Migration goal (required select)
- Project details (required textarea)
- Estimated timeline (optional select)
- Consent checkbox acknowledging the privacy policy (required)

### Form behavior

- Submit to a configured Formspree form endpoint using an environment variable (for example, `NEXT_PUBLIC_FORMSPREE_ENDPOINT`), not a hard-coded production endpoint.
- Client-side required-field validation plus accessible inline errors and a form-level error summary.
- Loading state prevents duplicate submissions.
- Success state thanks the visitor and explains the next step; failure state provides a retry option and visible enquiry email fallback.
- Enable Formspree's built-in spam protection/configuration and set the recipient destination in its dashboard.
- Add privacy-policy language before launch. Do not collect sensitive credentials, production logs, or confidential data in the form.

## 10. Visual direction

- Tone: confident, calm, technically capable, and concise; avoid cloud-industry clichés.
- Style: spacious editorial layout, subtle grid/gradient accents, rounded but restrained surfaces, intentional motion only where it aids comprehension.
- Palette: a modern blue-led system—deep navy for text/navigation, rich cobalt for primary actions, bright sky blue for emphasis, and pale blue-tinted white surfaces. Use cool slate neutrals for supporting text, borders, and backgrounds; reserve non-blue colors for semantic feedback only (success, warning, error). Final tokens should provide accessible contrast, for example: navy `#0B1F3A`, primary blue `#2563EB`, bright blue `#38BDF8`, pale surface `#F4F8FF`, and slate text `#475569`.
- Typography: modern highly legible sans-serif with clear size/weight hierarchy.
- Use CSS/SVG/code-native decorative artwork before adding large image assets, preserving performance and maintainability.

## 11. Technical approach

- Recommended stack: Next.js (App Router), TypeScript, and Tailwind CSS.
- Static-first pages; use server components by default. Limit client components to the mobile navigation, accordion, and contact form.
- Keep editable content in typed files such as `src/content/site.ts`, `services.ts`, and `caseStudies.ts`.
- Store business/configuration values in environment variables where appropriate; document required keys in `.env.example`.
- Use optimized local SVG/image assets and descriptive alt text. Decorative visuals should be hidden from assistive technology.
- Include page-level metadata, Open Graph defaults, favicon, canonical base URL configuration, sitemap, and robots configuration.
- Use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and respect `prefers-reduced-motion`.

## 12. Content and asset inputs needed before launch

- Final logo/wordmark and brand colors, if available.
- Business address, public email, phone number, social profiles, and jurisdiction/privacy-policy text.
- Confirmed cloud platforms, certifications, partnerships, and security claims.
- Approved service descriptions and engagement details.
- Approved case studies, customer logos, testimonials, and measurable outcomes (or decision to launch with anonymized/placeholder cards).
- Formspree account/form endpoint and destination email.
- Production domain for metadata, canonical URLs, and the Formspree allowed-origin setup.

## 13. Acceptance criteria

- All four routes render and are reachable from both desktop and mobile navigation.
- Header, footer, CTAs, form controls, and accordion work with keyboard only.
- Mobile navigation works at narrow widths without hidden/unreachable links.
- The contact form validates required fields, reports success/failure accessibly, and posts to the configured hosted-form endpoint.
- The site has no fabricated proof points and no broken placeholder links.
- Core pages pass a production build and basic lint/type checks.
- Content edits for services, case studies, nav, and footer are centralized rather than duplicated across page files.

## 14. Delivery sequence

1. Scaffold the Next.js/TypeScript/Tailwind project and global design tokens.
2. Build reusable layout, header/navigation, footer, buttons, accordion, and content data structures.
3. Build the home page, then the Services and Case Studies pages.
4. Build the Contact page and integrate Formspree using an environment variable.
5. Add metadata, responsive/accessibility polish, and form/error-state testing.
6. Replace placeholders with approved business content and deploy.
