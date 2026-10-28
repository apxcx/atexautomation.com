# ATEX Automation landing page

A responsive, frontend-only website for ATEX Automation and Technologies Corp., built with Vite, React, JavaScript and CSS. The industrial editorial layout uses white/off-white surfaces, `#23334c` navy, the authentic ATEX logo, and imagery and content from ATEX's official Google Sites and custom-domain websites.

The page includes an introduction, facts strip, interactive equipment selector, service capabilities and maintenance examples, company/mission/vision content, the ATEX Automation Way, sourced recognition, office locations, and direct inquiry links. It does not store or submit contact data: calls to action open ATEX's official inquiry-information page, email client, or phone dialer.

## Structure

```text
.
├── .github/workflows/deploy.yml  # Main-branch GitHub build/deployment workflow
├── public/atex-brand/            # Official logo and real source-site imagery
├── public/manus-routes.json      # Managed Preview route manifest
├── src/App.jsx                   # Page sections, responsive nav, product selector
├── src/main.jsx                  # React entry point
├── src/styles.css                # Design tokens, typography, responsive sections
├── src/worker.js                 # Worker Static Assets delegator
├── index.html                    # HTML entry point and ATEX metadata
├── vite.config.js                # React plugin and specific Preview host allowlist
├── wrangler.toml                 # Cloudflare Workers Static Assets config
├── package.json                  # Project commands and pinned dependencies
├── package-lock.json             # Reproducible npm dependency installation
├── plan.md                       # Approved design and implementation direction
└── brand-spec.md                 # Sources, asset provenance and content guardrails
```

## Run locally

Use Node.js 22 or newer and the package-manager version recorded in `package.json`. From this project folder:

```bash
npm ci
npm run dev
```

The dev server listens on `http://localhost:3000`. A specific Manus Preview proxy host is allowed in `vite.config.js`; ordinary localhost development works without adding a host. If the managed sandbox hostname changes, update only the exact trusted hostname rather than allowing all hosts.

```bash
npm run build       # Build the production frontend in dist/
npm run check       # Same production build, used as the project check
npm run preview     # Preview the built frontend locally
```

## Cloudflare Workers deployment

Install Git and create a Cloudflare account with Workers enabled. Authenticate Wrangler on the deploying machine, then run:

```bash
npx wrangler login
npm run deploy
```

To validate packaging without making a live deployment:

```bash
npm run build
npx wrangler deploy --dry-run
```

`wrangler.toml` points `assets.directory` at `./dist`, exposes static files as `ASSETS`, and enables SPA fallback. `src/worker.js` forwards requests to `env.ASSETS.fetch(request)`. Set the Worker name and compatibility date in the existing configuration as appropriate for your Cloudflare account. The redesign preserves the starter's existing Worker name; it does not create or change a Cloudflare account or domain.

The Manus-managed static publisher is configured separately with build command `npm ci && npm run build` and output directory `dist`. Saving a checkpoint does not publish it while automatic publication is disabled.

## GitHub Actions continuous deployment

The included `.github/workflows/deploy.yml` triggers on `main` pushes and manual workflow runs. It installs dependencies from the lockfile, builds `dist`, and uses the official `cloudflare/wrangler-action` to deploy.

In the destination GitHub repository, add these under **Settings → Secrets and variables → Actions**:

| Secret | Required value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Token with Workers edit access restricted to the target Cloudflare account |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID owning the Worker |

Do not put credentials in frontend files, workflow literals, or commits. No deployment credentials are included in this starter.

For a **fresh local copy not already connected to a repository**, create/select an empty GitHub destination and run:

```bash
git init
git add .
git commit -m "Add ATEX Automation website"
git branch -M main
git remote add origin https://github.com/<OWNER>/<REPOSITORY>.git
git push -u origin main
```

Do not run `git remote add origin` over a managed project's existing `origin`, force-push, or overwrite an existing GitHub repository. For managed projects, leave the configured canonical remote untouched; use Webdev's repository-connection confirmation flow only when intentionally switching repositories.

Future pushes to the configured GitHub `main` branch will trigger deployment once the repository connection and secrets are set up. The presence of a workflow file alone is not confirmation of live CI/CD.

## Cloudflare native Git integration alternative

Choose this **instead of** GitHub Actions to avoid two deployment pipelines. In Cloudflare, go to **Workers & Pages → your Worker → Settings → Builds → Connect**, authorize GitHub, and select the desired repository. Use production branch `main`, build command `npm run build`, and deploy command `npx wrangler deploy`. Workers Builds installs from the npm lockfile and manages its own deployment authorization.

## Content and identity maintenance

Keep the official logo unchanged in the navigation and footer. Update the factual copy only from approved company sources, and do not invent project counts, founding dates, clients, certificates or performance guarantees. The plant image is editorial source-site imagery, not an identified ATEX installation. Asset provenance is recorded in `brand-spec.md`.

External inquiry and datasheet links intentionally open the original ATEX Google Sites destinations. Replace them only after a real new form/backend has been implemented and approved.

## Official references

- [ATEX source home](https://sites.google.com/view/atexautomation/home)
- [ATEX services](https://sites.google.com/view/atexautomation/services)
- [ATEX contact details](https://sites.google.com/view/atexautomation/contact-us)
- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Static Assets bindings](https://developers.cloudflare.com/workers/static-assets/binding/)
- [SPA routing](https://developers.cloudflare.com/workers/static-assets/routing/single-page-application/)
- [GitHub Actions for Workers](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)
- [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
