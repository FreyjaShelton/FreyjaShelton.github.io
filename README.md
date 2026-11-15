# FreyjaShelton.github.io

Freyja Shelton's personal portfolio site, live at <https://freyjashelton.github.io/>.

It's a plain static site: no framework, no build step, no bundler. What you see in the repo is what gets served.

## How the site works

| File | Purpose |
| --- | --- |
| `index.html` | The whole site. HTML, CSS (in a `<style>` block) and a small inline script (click-to-copy email) all live in this one file. Sections: work, projects, education, skills, contact footer. |
| `pfp.jpg` | Profile photo used by `index.html`. |
| `resume.pdf` | The PDF the "Resume" pills in `index.html` link to. |
| `resume_template_tech.html` | Source for the tech-focused resume. |
| `resume_template_non_tech.html` | Source for the non-tech resume. |
| `resume_tech.pdf`, `resume_non_tech.pdf` | Generated output of the two templates above. |
| `gen_resume.js` | Node + Playwright script that renders the resume templates to PDF. |
| `package.json` | Only dependency is `playwright`, used by `gen_resume.js`. |
| `.claude/launch.json` | Dev-server config for the Claude desktop app preview (see below). |

Fonts (Fraunces, Inter, JetBrains Mono) are loaded from Google Fonts, so you need an internet connection for the page to look right.

## Running the site locally

Because it's static, you can open `index.html` directly in a browser, or serve the folder:

```bash
npx --yes serve -l 5500 .
```

Then visit <http://localhost:5500>.

## Hosting and deployment

GitHub Pages is configured to serve from the **`main` branch, root folder (`/`)** of this repo. There is no separate build or deploy step: **pushing to `main` is the deploy.** GitHub rebuilds the site automatically, usually within a minute or two.

```bash
git add -A
git commit -m "describe your change"
git push origin main
```

Notes:

- A local `gh-pages` branch exists but is **not** what Pages serves from. Don't push to it expecting a deploy.
- To check the deploy status, see the repo's **Actions** tab, or **Settings → Pages**.

## Generating the resume PDFs

The resumes are authored as HTML (`resume_template_*.html`) and rendered to Letter-size (8.5in × 11in) PDFs with zero margins using headless Chromium via Playwright.

### One-time setup

Requires [Node.js](https://nodejs.org/).

```bash
npm install
npx playwright install chromium
```

(`node_modules/` is git-ignored, so a fresh clone needs the `npm install`.)

### Generate the PDFs

```bash
node gen_resume.js
```

This produces both files in the repo root:

```
resume_template_tech.html     -> resume_tech.pdf
resume_template_non_tech.html -> resume_non_tech.pdf
```

To change what gets generated, edit the `RESUMES` array at the top of `gen_resume.js`.

### Updating the resume the site links to

`index.html` links to **`resume.pdf`**, which `gen_resume.js` does **not** write. After generating, copy whichever version you want on the site over it:

```bash
# tech resume
cp resume_tech.pdf resume.pdf

# or non-tech resume
cp resume_non_tech.pdf resume.pdf
```

On Windows PowerShell use `Copy-Item resume_tech.pdf resume.pdf -Force`.

Then commit and push (see [Hosting and deployment](#hosting-and-deployment)) to publish it.

### Typical resume update workflow

1. Edit `resume_template_tech.html` and/or `resume_template_non_tech.html`.
2. Run `node gen_resume.js`.
3. Open the generated PDFs and check them.
4. Copy the one you want live to `resume.pdf`.
5. `git add -A && git commit -m "update resume" && git push origin main`

## Other docs

- [LESSONS_LEARNED.md](LESSONS_LEARNED.md): working notes and preferences picked up while developing this site.
