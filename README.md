# giorgiobongermino.github.io

Personal academic website for Giorgio Bongermino.

## Website structure

- `index.html` – homepage
- `research.html` – research overview
- `teaching.html` – teaching activities
- `projects.html` – projects and ongoing work
- `publications.html` – published papers and working papers
- `presentations.html` – presentations with password-protected slides area
- `contact.html` – contact links
- `styles.css` – shared styles
- `script.js` – homepage interaction + presentations password gate

## Updating key content

- **CV button**: edit the OneDrive URL in `index.html` (`Open CV (OneDrive)` link).
- **Teaching links**: edit placeholders in `teaching.html` under Courses and Faculty/Colleagues.
- **Publications**: edit `publications.html` cards.
- **Presentations area**:
  1. set your password in `script.js` (`slidesPassword` value)
  2. upload PDF slides into a `slides/` folder
  3. update links in `presentations.html`

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
