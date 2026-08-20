---
title: "Other Harnesses"
description: "Connect Pi, Oh My Pi, Claude Code, Codex, Cursor, and other tools to Mimir."
---

The installer manages per-harness integrations and the shared Mimir skill.
Capture settings for OpenCode and Hermes have their own pages; the rest are
covered here.

## Pi

The installer manages a global Pi extension and the shared Mimir skill. The
extension routes Pi's OpenRouter provider through Mimir with exact session,
repository, and harness headers. For direct and subscription providers it
uploads bounded reconstructed completed turns, including tool results exposed by
Pi. Restart Pi after install or update. Ask Pi for Mimir memory normally; the
skill runs the machine-readable CLI and formats results.

## Oh My Pi

Oh My Pi is selected independently under the Pi group during setup. Mimir
installs its adapter at `~/.omp/agent/extensions/mimir.ts` (or the active OMP
profile), activates exact lifecycle heartbeats on the first real turn, and
captures OpenRouter plus bounded direct-provider evidence. Idle drafts do not
create dashboard sessions. Restart `omp` after install or update. Use
`OMP_CODING_AGENT_DIR` when OMP has a nonstandard agent home.

## Claude Code, Codex, and Cursor

The installer enrolls receipt-owned hook manifests in each harness's supported
location. Their start, prompt, completion, and end hooks invoke the hidden
`mimir _hook` adapter, which reconstructs bounded prompt/assistant exchanges and
queues delivery when the Worker is unavailable. Existing different hook files
are preserved as conflicts rather than merged or overwritten. Claude Code uses
`/reload-plugins` or a restart; Codex requires a restart; Cursor reloads
`hooks.json` when you open or continue an agent session.

## Other harnesses and tools

```bash
mimir connection
```

The connection manifest supplies proxy base URLs, credential sources, and
supported metadata headers. The CLI inspects and controls memory; it does not
capture unrelated model traffic.

## Session titles

Titles are first-class session metadata, separate from the original task intent.
The displayed title falls back through `title`, `intent`, then session ID. A
manual dashboard title has highest precedence, followed by a title reported by
the harness, a saved generated title exchange, and the first saved primary user
intent. Lower-precedence sources cannot overwrite a stronger title.