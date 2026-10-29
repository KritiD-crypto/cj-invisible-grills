# CJ Invisible Grills

A Next.js App Router website for CJ Invisible Grills, with service pages, Bengaluru and Mysuru service-area pages, an editorial journal, gallery, FAQ, contact-to-WhatsApp form and deterministic chat helper.

## Development and deployment

- Package manager: pnpm (`pnpm install`, `pnpm dev`, `pnpm build`, `pnpm start`).
- Deploy the repository to Vercel using the Next.js framework preset.
- Set `NEXT_PUBLIC_SITE_URL` to the real canonical origin (for example, the exact HTTPS domain configured for the deployment) before publishing. If unset, canonical links and sitemap entries are intentionally omitted rather than using an invented domain.
- No database, analytics provider or AI/chat API is connected. Contact enquiries are prepared in the browser and are only sent if the visitor chooses to open WhatsApp.

## Route map

- `/` Home
- `/about` About
- `/services` Services index; `/services/[slug]` category and supplied sub-service pages
- `/areas` searchable city locality lists; `/areas/bengaluru` and `/areas/mysuru` city pages
- `/gallery` category-filtered concept gallery and image preview
- `/blog` searchable journal; `/blog/[slug]` practical guides
- `/faq` grouped native disclosure answers
- `/contact` validated enquiry-to-WhatsApp flow

## Content and real photos

Typed service, locality, article and FAQ content lives in `lib/business.ts`. Replace the AI-assisted illustrative concept images in `public/images/` with approved company photographs, keeping the filenames or updating the references in `lib/business.ts`, `app/page.tsx`, `components/site/gallery-grid.tsx`, and the article routes. The current gallery and image captions explicitly identify concept imagery as illustrative, not verified projects. Add accurate alt text when replacing each image.

## Animation enhancement notes

The current visual motion uses small CSS transitions and keyframes in `app/globals.css`; the hero composition lives in `app/page.tsx`. All effects respect `prefers-reduced-motion`, and the page remains readable without animation. For optional component-level choreography, install Motion with `pnpm add motion` and use `motion/react` in isolated client components under `components/site/`; keep business data and server-rendered content independent of motion. If a future hero genuinely needs 3D, evaluate React Three Fiber only for that bounded visual rather than making the site depend on WebGL.

Test animation changes at narrow mobile widths and on a lower-powered device, check the browser performance panel for layout/paint costs, and verify the experience with the operating-system reduced-motion preference enabled. Avoid scroll-jacking and keep primary content visible if an effect fails.
