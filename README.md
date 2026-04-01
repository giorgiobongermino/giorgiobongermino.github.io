# giorgiobongermino.github.io

Personal academic website for Giorgio Bongermino.

## Website structure

- `index.html` – homepage
- `research.html` – research overview
- `teaching.html` – teaching activities
- `projects.html` – projects and ongoing work
- `publications.html` – published papers and working papers
- `presentations.html` – presentations and slides links (public/protected per item)
- `contact.html` – contact links
- `styles.css` – shared styles
- `script.js` – homepage interaction

## Updating key content

- **CV section**: edit OneDrive CV and LinkedIn URLs in `index.html`.
- **Teaching Hub**: edit the course table in `teaching.html` (course page, professor/tutor, academic year).
- **Publications**: edit `publications.html` cards.
- **Presentations** (item-by-item):
  1. duplicate a card in `presentations.html`
  2. set title and add a short abstract below the title
  3. choose access type badge: `badge-public` or `badge-protected`
  4. set link: public URL or provider-protected URL (OneDrive/SharePoint)

## Security note

Do not rely on client-side JavaScript passwords for private content on static hosting.
Use server-side/storage access control instead.

## Publishing workflow

This repository is a static website (HTML/CSS/JS). No build step is required.

1. Commit your changes to `work`.
2. Open a pull request from `work` to `main`.
3. Merge the PR.
4. Ensure GitHub Pages is configured to publish from `main`.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
