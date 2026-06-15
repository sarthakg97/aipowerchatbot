# Deploying to Vercel

Quick steps to enable automatic deploys from this repository:

1. Install Vercel CLI (optional, for local deploys):

```bash
npm i -g vercel
```

2. Create a Vercel project linked to this GitHub repo (via Vercel dashboard).

3. Add the following GitHub Secrets in the repository settings:

- `VERCEL_TOKEN` — a Vercel personal token (from https://vercel.com/account/tokens)
- `VERCEL_ORG_ID` — your Vercel organization ID (from project settings)
- `VERCEL_PROJECT_ID` — your Vercel project ID (from project settings)

4. The workflow `.github/workflows/vercel-deploy.yml` will run on pushes to `main` and deploy automatically.

Local deploy command (once you have `VERCEL_TOKEN`):

```bash
npx vercel --prod --confirm --token $VERCEL_TOKEN
```

If you want, paste the `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` here and I can guide setting them (do NOT paste tokens in chat if you prefer privacy). Alternatively, I can walk you through linking the repo in the Vercel dashboard.
