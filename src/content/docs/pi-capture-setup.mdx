---
title: "Pi & Oh My Pi Session Capture"
description: "How Mimir captures Pi and Oh My Pi sessions across OpenRouter and direct providers."
---

import HarnessIcon from '../../components/HarnessIcon.astro';

<div class="flex items-center gap-2 mb-6 text-sm text-zinc-400">
	<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">
		<HarnessIcon name="pi" size="1.1rem" />
		<strong>Pi</strong>
	</span>
	<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">
		<HarnessIcon name="oh-my-pi" size="1.1rem" />
		<strong>Oh My Pi</strong>
	</span>
</div>

Mimir integrates with both Pi and Oh My Pi to provide seamless session capture, liveness tracking, and memory recall.

## Pi

The installer manages a global Pi extension and the shared Mimir skill.

### How it works

1. **OpenRouter route**: The extension routes Pi's OpenRouter provider through Mimir with exact session (`x-mimir-session`), repository (`x-mimir-repo`), and harness headers.
2. **Direct providers**: For direct and subscription providers (Anthropic, OpenAI, etc.), it uploads bounded reconstructed completed turns, including tool execution results exposed by Pi.
3. **Memory skill**: The `mimir-use` skill allows Pi to query Mimir directly for past sessions, prior decisions, and evidence.

### Installation

```bash
mimir install --harness pi
```

This installs `~/.pi/agent/extensions/mimir.ts` (or `$PI_CODING_AGENT_DIR/extensions/mimir.ts`).

Restart Pi after install or update to activate the extension.

---

## Oh My Pi (OMP)

Oh My Pi is selected independently under the Pi group during setup.

### How it works

- Mimir installs its adapter at `~/.omp/agent/extensions/mimir.ts` (or the active OMP profile).
- Activates exact lifecycle heartbeats on the first real turn.
- Captures OpenRouter plus bounded direct-provider evidence.
- Idle drafts do not create dashboard sessions.

### Installation

```bash
mimir install --harness oh-my-pi
```

Restart `omp` after install or update.

When OMP has a nonstandard agent home directory, set the `OMP_CODING_AGENT_DIR` environment variable.
