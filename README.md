# giorgiobongermino.github.io

Personal academic website for Giorgio Bongermino.

## Website structure

- `index.html` – homepage
- `research.html` – research overview
- `teaching.html` – teaching activities
- `projects.html` – projects and ongoing work
- `publications.html` – published papers and working papers
- `contact.html` – contact links
- `styles.css` – shared styles
- `script.js` – homepage interaction and dynamic CV link storage

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
