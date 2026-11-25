# site-vzdelavanisrespektem-cz

Web [vzdelavanisrespektem.cz](https://vzdelavanisrespektem.cz), built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Development

Requires Node.js 22.23.4 or newer.

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the local server at `http://localhost:4321` |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the built site |

## Where things are

- `src/pages/index.astro`: landing page sections
- `src/site.ts`: site name, navigation and search visibility
- `src/styles/global.css`: colours and base styles
- `public/`: files served as they are

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`. In the repository settings, **Pages → Source** must be set to **GitHub Actions**; the custom domain is set on the same page.
