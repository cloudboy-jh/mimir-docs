// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const mermaidScript = `import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose',
  theme: 'neutral',
  fontFamily: 'IBM Plex Mono, ui-monospace, monospace',
});
document.addEventListener('DOMContentLoaded', async () => {
  await mermaid.run({ querySelector: 'pre.mermaid, .mermaid' });
});
export default {};
`;

// https://astro.build/config
export default defineConfig({
	site: 'https://mimir-docs.pages.dev',
	integrations: [
		starlight({
			title: 'Mimir',
			description: 'Durable session memory for coding agents.',
			logo: {
				src: './src/assets/logo.png',
				alt: 'Mimir',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/cloudboy-jh/Mimir' },
			],
			head: [{ tag: 'script', attrs: { type: 'module' }, content: mermaidScript }],
			components: {
				Header: './src/components/Header.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			customCss: [
				'@fontsource-variable/ibm-plex-sans',
				'@fontsource/ibm-plex-mono/latin-400.css',
				'@fontsource/ibm-plex-mono/latin-500.css',
				'./src/styles/theme.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Overview', link: '/' },
						{ label: 'Installation', slug: 'installation' },
					],
				},
				{
					label: 'How Mimir Works',
					items: [
						{ label: 'How It Works', slug: 'how-it-works' },
						{ label: 'Worker Architecture', slug: 'architecture' },
						{ label: 'Session Lifecycle', slug: 'session-lifecycle' },
					],
				},
				{
					label: 'Capture Setup',
					items: [
						{ label: 'OpenCode', slug: 'opencode-capture-setup' },
						{ label: 'Pi & Oh My Pi', slug: 'pi-capture-setup' },
						{ label: 'Hermes', slug: 'hermes-capture-setup' },
						{ label: 'Other Harnesses', slug: 'other-harnesses' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'CLI Reference', slug: 'cli' },
						{ label: 'Implementation Spec', slug: 'spec' },
						{ label: 'Operations', slug: 'operations' },
						{ label: 'Troubleshooting', slug: 'troubleshooting' },
					],
				},
				{
					label: 'Design & Product',
					items: [
						{ label: 'Product', slug: 'product' },
						{ label: 'Design System', slug: 'design-system' },
						{ label: 'Next Steps', slug: 'next-steps' },
					],
				},
			],
		}),
	],
});