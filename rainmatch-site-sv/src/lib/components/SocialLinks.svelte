<script lang="ts">
	const socialLinks = [
		{
			id: 'tiktok',
			href: 'https://www.tiktok.com/@rainmatch',
			viewBox: '0 0 24 24',
			width: 24,
			height: 24,
			path: 'M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48'
		},
		{
			id: 'instagram',
			href: 'https://www.instagram.com/rainmatch/',
			viewBox: '0 0 24 24',
			width: 24,
			height: 24,
			path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'
		},
		{
			id: 'x-twitter',
			href: 'https://x.com/RainMatch2025',
			viewBox: '0 0 14 14',
			width: 14,
			height: 14,
			path: 'M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z',
			hasClipPath: true
		},
		{
			id: 'youtube',
			href: 'https://www.youtube.com/@rainmatch',
			viewBox: '0 0 24 24',
			width: 24,
			height: 24,
			path: 'm10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73'
		},
		{
			id: 'linkedin',
			href: 'https://www.linkedin.com/company/rainmatch',
			viewBox: '0 0 24 24',
			width: 24,
			height: 24,
			path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
		}
	];
</script>

<div class="social-links">
	{#each socialLinks as link (link.id)}
		<a id={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={link.width}
				height={link.height}
				viewBox={link.viewBox}
			>
				{#if link.hasClipPath}
					<g fill="none">
						<g clip-path="url(#clip-{link.id})">
							<path fill="#fff" d={link.path} />
						</g>
						<defs>
							<clipPath id="clip-{link.id}">
								<path fill="#fff" d="M0 0h14v14H0z" />
							</clipPath>
						</defs>
					</g>
				{:else}
					<path fill="#fff" d={link.path} />
				{/if}
			</svg>
		</a>
	{/each}
</div>

<style>
	.social-links {
		display: flex;
		flex-direction: row;
		max-height: 2rem;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.social-links a {
		cursor: pointer;
	}
</style>
