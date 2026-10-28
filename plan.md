# ATEX Automation — Landing Page Design and Implementation Plan

## Design read

This is a redesign-overhaul of the blank Vite frontend for Philippine industrial buyers, plant engineers, and procurement teams. The supplied screenshot is a structural reference only: compact navigation; a wide hero; an introduction and fact strip; a split navy product/equipment showcase; and further stacked content on mobile. Do not copy its unrelated product, color palette, or imagery.

Calibration: visual variance 5/10 (stable reference-aligned structure with an asymmetrical hero); motion 3/10 (short interaction feedback and restrained image/tab transitions); information density 5/10 (specific, scannable company information); asset dependence 8/10 (official wordmark, plant image, and product/service visuals); brand fidelity 8/10 (preserve identity and source claims while applying the requested palette).

## Design system

**Design movement:** Industrial editorial field journal—precise, open, engineering-oriented, and grounded in the supplied visual hierarchy.

**Core principles:** Evidence before embellishment; restrained industrial clarity; generous whitespace; commercial next steps made obvious.

**Color philosophy:** White `#ffffff` and light off-white `#f5f6f7` create a clean, open surface; user-requested navy `#23334c` carries trust, emphasis, and the product showcase; charcoal `#202329`, muted gray, and pale rules support legibility. Keep the original logo's cyan subline intact. Do not introduce the reference screenshot's palette.

**Layout paradigm:** Split editorial hero with a real plant image; labeled introduction column; four facts in a horizontal strip; navy two-panel product selector; open section rhythm; single-column mobile reflow. Content width is capped around 1200–1280px.

**Signature elements:** Fine engineering-style divider rules and section numbers; the preserved logo cyan; an interactive equipment panel with the selected item shown on a light image surface.

**Interaction philosophy:** Visible focus rings and 44px-class touch controls; mobile navigation closes on link selection and Escape; product tabs respond to click and arrow/Home/End keys; inquiry CTAs use verified email, phone, or the official inquiry-information page. No fake lead form or submission state.

**Animation:** 160–280ms feedback for buttons, navigation, and selected tabs; restrained photo zoom and image change only; `prefers-reduced-motion` disables transitions and animation. No motion is required to understand content.

**Typography:** Space Grotesk for confident technical headlines and DM Sans for clear body copy. One H1 in the hero; H2 section titles including INTRODUCTION and ABOUT US; H3/H4 for product and service features; generous body line height.

**Brand essence:** A Philippine industrial instrumentation and automation partner that serves plants with quality products and end-to-end support. Personality: capable, precise, dependable.

**Brand voice:** Source-led, specific and direct. Examples: “At ATEX, we view our Clients as Partners.” “ATEX is proud to help power plants from Luzon, Visayas and Mindanao achieve their goals and objectives.”

**Wordmark & logo:** Use the official unmodified ATEX logo image from `public/atex-brand/atex-logo.png` in the header and footer; preserve its gray mark and cyan subline. Do not recreate it in a default font.

**Signature brand color:** `#23334c`, per the explicit brief.

## Page structure

1. Header with official logo; Products, Services, About us, and Our offices anchors; a prominent inquiry CTA.
2. Hero with the source power-plant image, ATEX's power-plant positioning, regional coverage and direct CTAs.
3. INTRODUCTION with “At ATEX, we view our Clients as Partners,” consultation-to-after-sales scope, technical expertise, and a source-verified facts strip including the official 2012 founding year without invented performance numbers.
4. Navy OUR PRODUCTS showcase with keyboard-accessible selection among genuine source imagery and product categories; link to the official datasheet request destination.
5. OUR SERVICES with Maintenance, Repair, Installation, Commissioning, six official service categories, and source-described SWAS, FDAS and VESDA work.
6. ABOUT US with company background, Mission and Vision; THE ATEX AUTOMATION WAY with Attend, Accumulate and Advantage.
7. OUR RECOGNITION with source-attributed recognition text.
8. Inquiry CTA and OUR OFFICES with actual Cainta, Davao and Cagayan addresses; real general sales phone/email; official logo footer.

## Content and assets

Sources: `https://sites.google.com/view/atexautomation/home` and related official Products, Services, Gallery, Contact and Inquiry pages; `https://atexautomation.com/` and `/services/` for current logo and equipment media. `brand-spec.md` records the copied source facts and asset provenance. The official homepage power-plant photo is used descriptively only, not represented as an identified ATEX customer installation. Use the source-verified 2012 founding year only; avoid other unverified dates, named projects, clients, credentials, project counts, and numerical outcomes.

## Implementation and project structure

Keep this frontend-only Vite + React + JavaScript + CSS app at `/`, with no user-data backend. `src/App.jsx` owns accessible page sections, the responsive mobile menu, and product-category selector. `src/styles.css` owns color/type tokens, responsive layout, and reduced-motion/focus states. `public/atex-brand/` stores official brand/product source assets. `index.html` carries ATEX metadata; `public/manus-routes.json` declares `/`.

Preserve the existing Wrangler Static Assets binding and Worker delegation, Cloudflare build output `dist`, and managed publisher command `npm ci && npm run build`. Keep `.github/workflows/deploy.yml` and README instructions intact for future GitHub CI/CD. Repository ownership or live publication is outside this redesign request; do not open a GitHub transfer or publish. Project checkpoints stay on the configured managed canonical remote.
