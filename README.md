# Mimir Docs

Documentation site for [Mimir](https://github.com/cloudboy-jh/Mimir) — durable
session memory for coding agents. Built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build), themed with the Mimir design system.

## Develop

```bash
bun install
bun run dev
```

Use `astro dev --background` to run the dev server in the background and manage
it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Build

```bash
bun run build
bun run preview
```

## Content

Markdown pages live in `src/content/docs/`. Most were vendored from the Mimir
repo's `docs/` directory; the two authored landing pages are `index.mdx` and
`how-it-works.md`.

## Theme

Mimir's palette is mapped onto Starlight's CSS variables in
`src/styles/theme.css`: Instrument Teal (`#0f766e`) as the single accent, warm
Recorder Canvas neutrals, and a matching dark theme. IBM Plex Sans and IBM Plex
Mono are loaded via Fontsource.