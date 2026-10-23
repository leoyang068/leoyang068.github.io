# Leo Yang — Technical Portfolio

A minimalist, no-gradients, responsive engineering portfolio based on **Master Technical Resume v9**. It is a plain static site: no server, database, account, or build tool needed.

## Preview

Open `index.html` in your browser. Or in this folder run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish using GitHub Pages

1. Create a **public** GitHub repository named **`leoyang068.github.io`** under the `leoyang068` account.
2. Upload **the contents of this folder** to the repository root (not the enclosing folder).
3. In the repository, go to **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, then `main` and `/(root)`; save.
5. Once GitHub completes publishing, visit https://leoyang068.github.io.

If using a different GitHub account, rename the repository to `<username>.github.io` and update the social links in the HTML files.

## Add or edit projects

Open `projects.js`. Each object is one project and includes a title, short summary, long overview and highlights. Fields `links`, `media`, and `files` are **optional**. The homepage and project detail pages update automatically. Slugs must be unique.

Example optional media and downloadable files inside a project:

```js
links: [{ label: 'Repository', url: 'https://github.com/USER/REPO' }],
media: [
  { type: 'image', src: 'assets/projects/my-project/photo.jpg', caption: 'Bench setup' },
  { type: 'video', src: 'assets/projects/my-project/demo.mp4', caption: 'Demo' },
  { type: 'youtube', src: 'https://www.youtube-nocookie.com/embed/VIDEO_ID', caption: 'Walkthrough' }
],
files: [
  { label: 'Schematic PDF', url: 'assets/projects/my-project/schematic.pdf', download: true },
  { label: 'Board files ZIP', url: 'assets/projects/my-project/pcb.zip', download: true },
  { label: '3D model STEP', url: 'assets/projects/my-project/enclosure.step', download: true }
]
```

You can use PDF, STEP, STL, 3MF, OBJ, KiCad/Altium exports, Gerber ZIPs, code archives, CSV, JSON and other formats as normal file links. For very large videos/archives, prefer YouTube or GitHub Releases and link externally. For PDFs, browser viewers will typically open the document instead of saving unless `download` is provided.

## Resume PDF

**Not bundled intentionally.** The source Master Resume v9 is a private extended reference and includes a phone number, provisional details and a watermark explicitly saying it is not a one-page application resume. Avoid publicly uploading that document. Once a public-ready PDF is approved, put it at `assets/Leo_Yang_Resume.pdf` and add a link to it in `index.html` (for example in `.cta`).

## Content accuracy

Project descriptions are adapted from v9 and avoid claiming that the ADC board was fabricated or electrically validated, or that the guitar's real-time audio feedback was completed. No speculative completion dates, ADC part numbers, or unverified project links are published. A number of projects intentionally have no media yet; these sections will appear only once you provide files.

## Files

- `index.html`: home page and content sections
- `project.html`: reusable project detail template (`?slug=freshpeek`)
- `projects.js`: project content and optional assets
- `main.js`: category filters and project rendering
- `style.css`: dark technical design; modify tokens at top
- `assets/`: media, downloads and favicon

No gradients, tracking scripts, remote fonts, CDNs, frameworks or dependencies.
