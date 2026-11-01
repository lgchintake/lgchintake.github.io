# Laxminarayan Chintake — Portfolio

A fast, accessible, fully **static** one-page portfolio built with **Next.js (static export) + React + TypeScript + Tailwind CSS**, deployed to **GitHub Pages**. There's no backend, no API routes and no server code.

Live URL (after deploying): **https://lgchintake.github.io**

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
npm start          # serve ./out locally to preview the production build
npm run lint       # ESLint
```

## Editing content

**All content lives in [`data/portfolio.ts`](data/portfolio.ts).** That includes the profile, summary, stats, skills, experience, projects, certifications, education, social links, SEO text and the resume path and updated date. Edit that file and rebuild; you never need to touch the components.

Search the file for `TODO` to find items that need confirming because the CV doesn't state them, for example your city, project dates and the certificate issuer.

## Replace the resume

1. Overwrite **`public/resume.pdf`** with your new CV. Keep the same file name.
2. In `data/portfolio.ts`, update `resume.updated` (format `YYYY-MM-DD`). The footer shows "Resume updated …".
3. Optionally change `resume.fileName`, which is the name visitors get when they download it.

## Replace your photo

1. Put your photo in **`public/images/`**, for example `public/images/profile.jpg`. A portrait or passport-style photo (3:4 or 4:5, at least 600×750 px) gives the best result.
2. In `data/portfolio.ts`, set `profile.photo` to `"/images/profile.jpg"`.
3. Use `profile.photoPosition` to adjust the crop. It is a CSS `object-position`: `"50% 50%"` is the centre, and `"50% 20%"` keeps more of the top. Passport photos usually look best at `"50% 50%"`.
4. Set `profile.photo` to `""` to show the placeholder avatar instead (`public/images/profile-placeholder.svg`).
5. *(Optional)* Regenerate the social-share image and icons so they use the new photo: `npm run images`.

## Replace the certificate image and project covers

- **Certificate:** add your certificate image (PNG, JPG or SVG) to `public/images/certs/` and set `certifications[0].image` to its path. Clicking it opens the image in a lightbox. The **Verify credential** button links to `verifyUrl`.
- **Project covers:** replace the SVGs in `public/images/projects/` or point `projects[i].image` at new files. Use a 16:9 ratio.

## Deploy to GitHub Pages

The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs `npm ci` and then `npm run build`, and deploys the **`out`** folder on every push to `master`.

1. Create a GitHub repository named **`lgchintake.github.io`**.
2. Push this project to its `master` branch:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M master
   git remote add origin https://github.com/lgchintake/lgchintake.github.io.git
   git push -u origin master
   ```
3. On GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Watch the **Actions** tab. When the run finishes, the site is live at https://lgchintake.github.io.

**Using a project repo instead** (e.g. `github.com/lgchintake/portfolio`, served at `/portfolio`):

- Add `basePath: "/portfolio"` and `assetPrefix: "/portfolio/"` in `next.config.ts`.
- Update `seo.siteUrl` in `data/portfolio.ts`.
- Prefix the `/`-rooted asset paths in `data/portfolio.ts` with `/portfolio`.

**Custom domain:** add a `public/CNAME` file containing your domain, configure DNS, and update `seo.siteUrl`.

## Project structure

```
data/portfolio.ts        ← all editable content
app/                     ← layout (SEO/OG metadata, theme script), page, robots, sitemap
components/              ← one component per section
public/                  ← resume.pdf, images, favicon, og-image.png
scripts/generate-images.mjs  ← regenerates og-image.png + PNG icons (npm run images)
.github/workflows/deploy.yml
```

## Features

- Dark theme by default, with a light/dark toggle that is saved in `localStorage` and applied before first paint, so there is no flash.
- Mobile-first responsive layout, semantic HTML, a skip link, visible focus rings, AA contrast, and support for reduced motion.
- SEO: meta tags, Open Graph and Twitter cards, JSON-LD `Person` data, `sitemap.xml`, `robots.txt` and a favicon.
- Lighthouse on a local build: Performance 94 on mobile and 100 on desktop; Accessibility, Best Practices and SEO 100 on both.
