# Discovery AI

A minimal Vite + React + JavaScript + CSS starter configured for Cloudflare Workers Static Assets.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # Build and deploy on pushes to main
├── public/manus-routes.json      # Managed preview route manifest
├── src/App.jsx                   # Blank React application shell
├── src/main.jsx                  # React entry point
├── src/styles.css                # Minimal global styles
├── src/worker.js                 # Cloudflare Worker asset delegator
├── index.html                    # Vite HTML entry point
├── vite.config.js                # Vite + React configuration
├── wrangler.toml                 # Workers Static Assets configuration
└── package.json                  # Scripts and pinned toolchain versions
```

## Prerequisites

Install Node.js 22 or newer, create a Cloudflare account with Workers enabled, and install Git. The repository uses npm and records its package-manager version in `package.json`.

## Run locally

From the project root:

```bash
npm install
npm run dev
```

Vite serves the development site on `http://localhost:3000`. Create a production build locally with:

```bash
npm run build
npm run preview
```

## Deploy manually with Wrangler

Authenticate Wrangler once on the machine that will perform the first manual deployment:

```bash
npx wrangler login
```

Then build and deploy the Worker:

```bash
npm run deploy
```

`wrangler.toml` points `assets.directory` to `./dist`, exposes the collection through the `ASSETS` binding, and enables SPA fallback for client-side navigation. The Worker in `src/worker.js` forwards requests to `env.ASSETS.fetch(request)`.

## GitHub Actions continuous deployment

The workflow at `.github/workflows/deploy.yml` runs on every push to `main` and can also be started manually from the Actions tab. It installs from `package-lock.json`, runs `npm run build`, and deploys with the official `cloudflare/wrangler-action`.

1. Create or select the GitHub repository for this project.
2. In Cloudflare, create an API token scoped to the target account with the Workers edit permission. Prefer the narrowest account scope available.
3. In the GitHub repository, open **Settings → Secrets and variables → Actions** and add these repository secrets:
   - `CLOUDFLARE_API_TOKEN`: the scoped Cloudflare API token.
   - `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID that owns the Worker.
4. Push the repository's default branch as `main`:

```bash
git init
git add .
git commit -m "Initialize Discovery AI"
git branch -M main
git remote add origin https://github.com/<OWNER>/<REPOSITORY>.git
git push -u origin main
```

After the push, open the repository's **Actions** tab to see the build and deployment run. Future pushes to `main` will repeat the same process automatically.

## Cloudflare native Git integration

Instead of GitHub Actions, connect the repository directly to Workers Builds. In the Cloudflare dashboard, open **Workers & Pages → your Worker → Settings → Builds → Connect**, authorize the GitHub account, and select the repository. Set the production branch to `main`, the build command to `npm run build`, and the deploy command to `npx wrangler deploy`. Workers Builds installs dependencies from `package-lock.json`, builds `dist/`, and deploys the Worker on every push to `main`. Leave the preview command as `npx wrangler preview` if branch previews are desired.

This native path is useful when the GitHub installation is not permitted to create files under `.github/workflows/`; it does not require Cloudflare API secrets in GitHub because Workers Builds manages its own deployment authorization.

## Useful commands

```bash
npm run dev       # Start the Vite development server
npm run build     # Create dist/ for Workers Static Assets
npm run check     # Run the production build as a lightweight project check
npm run deploy    # Build and deploy with Wrangler
```

## Cloudflare references

- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Static Assets bindings](https://developers.cloudflare.com/workers/static-assets/binding/)
- [Single-page application routing](https://developers.cloudflare.com/workers/static-assets/routing/single-page-application/)
- [GitHub Actions for Workers](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)
- [Workers Builds GitHub integration](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
