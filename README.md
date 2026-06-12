# recruiterphp.org

Source for the [RecruiterPHP](https://github.com/recruiterphp) organization website at **[recruiterphp.org](https://recruiterphp.org)**.

## Stack

Static HTML/CSS/JS — no build step. Hosted on GitHub Pages; pushing to `main` deploys automatically.

External dependencies are loaded via CDN:
- [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — Google Fonts
- [highlight.js](https://highlightjs.org/) — syntax highlighting

## Development

Open `index.html` directly in a browser, or serve locally to avoid CORS issues with fonts:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Contributing

This is the website for the [RecruiterPHP](https://github.com/recruiterphp) open source project. For issues with the job queue library itself, please open issues in the relevant package repository.
