# Srivihar Reddy — Portfolio

A static, scroll-driven portfolio focused on agentic AI engineering work. No build step: plain HTML, CSS, and JS, ready to serve directly from GitHub Pages.

## Structure

```
index.html
css/style.css          all styles, tokens at the top
js/main.js             mobile menu, hero canvas graph, GSAP scroll-jacking, reveal
assets/fonts/          self-hosted Geist + Geist Mono (variable woff2)
assets/vendor/         self-hosted GSAP + ScrollTrigger
assets/icons/          Phosphor icons (nav, links) + Simple Icons (tech marquee)
assets/img/projects/   real screenshots pulled from the RAG-Ultra / SpendWise /
                       Agentic-Taskmanager repos
```

## Before you publish

1. **Check the featured repos are public** and their default branch is `main` (RAG-Ultra, spendwise-mcp, Agentic-Taskmanager, Project-Assistant, SAP-Warehouse-Agent). If any repo is renamed or made private, update the matching link in the Work section.
2. **Add a LinkedIn link** next to GitHub in the nav/contact if you'd like one; it was left out since no URL was provided.
3. **Keep the Experience dates current.** The Deloitte USI row says "Present"; update it whenever that changes.

## Deploying to GitHub Pages

This repository is configured to deploy automatically to `https://sriviharreddy.github.io/`.

- Pushes to `main` run `.github/workflows/pages.yml` and publish the site with GitHub Pages.
- The workflow can also be started manually from the repository's Actions tab.
- The first deployment may take a minute or two to become available.

## Local preview

Any static file server works, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes on the scroll-jacking

- The **Process** section pins horizontally and pans through five steps; the **Work** section pins and stacks five project cards. Both use GSAP ScrollTrigger.
- Both degrade gracefully: under 768px width, or with "reduce motion" turned on at the OS level, the hijack is skipped entirely and everything reads as a normal scrolling page (horizontal swipe for Process, vertical stack for Work).
