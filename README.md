# BrainBuzz

BrainBuzz is a React + Vite application built with Tailwind CSS. It is set up for GitHub Pages deployment through GitHub Actions.

## Features

- React app created with Vite
- Tailwind styling enabled
- GitHub Actions deployment workflow for static hosting
- Local development workflow with Vite

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## GitHub Pages deployment

This project includes a GitHub Actions workflow that builds the app and deploys it to GitHub Pages.

### Required repository setup

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to Pages.
4. Set the Source to GitHub Actions.
5. Commit to the `main` branch to trigger the deployment workflow.

The workflow file is located at `.github/workflows/deploy.yml`.

### Notes

- The Vite config uses a production base path matching the repository name (`/brainbuzz/`).
- If you rename the repository, update the base path in `vite.config.js` to match the new repository name.

## Project scripts

- `npm run dev` — starts the local Vite development server
- `npm run build` — creates the production bundle in `dist/`
- `npm run preview` — previews the production build locally
- `npm run lint` — runs ESLint across the project
