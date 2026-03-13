# RSRI Multi-Page Website (Production-Ready Static Build)

This repository contains a multi-page, responsive nonprofit website for **RED STRING RESCUE INC (RSRI)**.

## What changed

The site is now a **multi-page version** and ready for direct static deployment.

### Pages

- `index.html` (Home)
- `about.html` (Mission & organization)
- `programs.html` (Program details)
- `impact.html` (Annual impact metrics)
- `get-involved.html` (Donation + volunteer forms)
- `contact.html` (Contact details + contact form + FAQ)
- `privacy.html` (Privacy policy)
- `terms.html` (Terms of use)
- `thank-you.html` (Form submission success page)

## Built-in production features

- Responsive navigation and mobile menu
- Unified branding/header/footer across all pages
- Accessible layout patterns (skip link, semantic sections, form labels)
- Animated impact counters
- **Netlify Forms integration** on:
  - Donation intent form
  - Volunteer application form
  - Contact form

## Embedded organization information

- EIN: **99-3523444**
- Organization Name: **RED STRING RESCUE INC (RSRI)**
- Principal Officer: **Brandon Philbrick**
- Mailing Address: **307 North Ridgewood Avenue, Edgewater, FL 32132, United States**

## Local preview

```bash
python3 -m http.server 8080
```

Visit: `http://localhost:8080`

## Direct deployment (recommended: Netlify)

Because forms use `data-netlify="true"`, Netlify can capture submissions without custom backend code.

### Steps

1. Push this repo to GitHub.
2. In Netlify, create a new site from the repo.
3. Build command: *(leave empty)*
4. Publish directory: `.`
5. Deploy.

After deploy:

- Go to Netlify dashboard → **Forms** and verify the three forms (`donation`, `volunteer`, `contact`) are detected.
- Optionally configure email notifications for new submissions.

## Optional next upgrades

- Stripe or PayPal live payment integration on `get-involved.html`
- reCAPTCHA / anti-spam hardening for forms
- SEO enhancements (Open Graph image, sitemap, robots, canonical URLs)
- Analytics integration (GA4/Plausible)
