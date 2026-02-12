<script lang="ts">
	import { browser } from '$app/environment';

	function redirectToStore() {
		if (!browser) return;

		const userAgent = navigator.userAgent || navigator.vendor;

		if (/android/i.test(userAgent)) {
			window.open('https://play.google.com/store/apps/details?id=com.rainmatch.app');
		} else {
			window.open('https://apps.apple.com/gb/app/rainmatch-partner-earn/id6754579970');
		}
	}
</script>

<header>
	<a class="headerP1" href="/">
		<img class="logo" src="/Logo_store_transparent.png" alt="RainMatch Logo" />
		<span>RainMatch</span>
	</a>

	<a class="btn headerP2" href="/">About</a>
	<a class="btn headerP2" href="/faq">FAQ</a>
	<a class="btn headerP2" href="/contact">Contact</a>
	<button class="btn primary headerP1" onclick={redirectToStore}>Download &#8599;</button>
</header>

<style>
	header {
		position: sticky;
		top: 1rem;
		padding-right: 1rem;
		padding-left: 1rem;
		align-items: center;
		gap: 2rem;
		border-radius: 9999px;
		display: flex;
		max-width: var(--max-width);
		background-color: #111827;
		color: white;
		z-index: 9999;
		box-shadow: hsl(0deg 0% 0% / 0.45) 1.5px 3px 3px;
	}

	.headerP1 {
		align-items: center;
		display: flex;
		font-weight: bold;
	}

	.logo {
		aspect-ratio: 1;
		max-height: 4rem;
	}

	.btn {
		cursor: pointer;
		transition: all 0.15s ease;
		text-decoration: none;
		display: inline-block;
		border: none;
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 8px;
		padding-bottom: 8px;
		background: transparent;
		color: white;
		font-size: 1rem;
	}

	.btn:hover {
		transform: scale(1.05);
	}

	.primary {
		background-color: hsl(210, 97%, 51%);
		border-radius: 9999px;
	}

	.primary:hover {
		background-color: hsl(210, 97%, 45%);
	}

	@media (max-width: 1024px) {
		header {
			gap: 1rem;
		}
	}

	@media (max-width: 768px) {
		.headerP2 {
			display: none;
		}
	}
</style>
