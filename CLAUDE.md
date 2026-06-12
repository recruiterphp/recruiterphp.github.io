# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static marketing site for the [RecruiterPHP](https://github.com/recruiterphp) GitHub organization, hosted at **recruiterphp.org** via GitHub Pages. No build step — changes to files in `main` deploy directly.

## Structure

Three files make up the entire site:

- `index.html` — single-page site with all content and markup
- `style.css` — all styles; uses CSS custom properties defined in `:root`
- `script.js` — scroll animations (IntersectionObserver), sticky nav, mobile hamburger, copy-to-clipboard

External dependencies loaded via CDN (no local build):
- **Bricolage Grotesque** + **DM Sans** + **JetBrains Mono** — Google Fonts
- **highlight.js 11.9** (cdnjs) — syntax highlighting for PHP/bash code blocks

## Design Tokens

All colors, fonts, radii, and shadows are CSS variables in `:root` inside `style.css`. Key tokens:

| Variable | Value | Use |
|---|---|---|
| `--accent` | `#f97316` | Orange — primary CTA, links, highlights |
| `--accent-2` | `#fbbf24` | Amber — hover states, gradient end |
| `--gradient` | orange → amber | Buttons, stat numbers, step circles |
| `--font-display` | Bricolage Grotesque | All headings (h1–h3) |
| `--font-body` | DM Sans | Body text |
| `--font-mono` | JetBrains Mono | Code, package names, years |

## Scroll Animations

Elements with `.fade-up` start at `opacity:0; translateY(28px)` and transition to visible when the IntersectionObserver fires. Stagger delay via inline `style="--delay:0.1s"`. Adding a new animated element: give it `class="fade-up"` and optionally a `--delay`.

## Deployment

Push to `main` → GitHub Pages serves automatically. No CI, no build pipeline.
