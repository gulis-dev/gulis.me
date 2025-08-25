# gulis.me — Portfolio (Static, EN-only, GitHub Pages)

Stack:
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + dark mode
- Contentlayer (MDX) for projects
- Cloudflare Web Analytics (free, cookieless)
- Sitemap + robots.txt (static)
- Deploy via GitHub Actions → GitHub Pages

Quick start:
1) Set repo Secret (Settings → Secrets → Actions):
   - NEXT_PUBLIC_CF_TOKEN=<your_cloudflare_token>
2) Enable Pages: Settings → Pages → Build from Actions.
3) Custom domain: add DNS CNAME gulis.me → gulis-dev.github.io and set it in Pages.
4) Install & run locally:
   - npm i
   - npm run dev

Build:
- GitHub Actions builds and deploys on push to main.
- Locally: `npm run build` → output in /out

Env:
- NEXT_PUBLIC_SITE_URL defaults to https://gulis.me (override if needed).

Content:
- Projects in /content/projects/<slug>/index.en.mdx
- Experience in /data/experience.en.json

License: MIT (adjust if needed).