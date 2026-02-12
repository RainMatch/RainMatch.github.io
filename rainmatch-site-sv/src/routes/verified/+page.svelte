<svelte:head>
	<title>Email Verified - RainMatch</title>
	<meta
		name="description"
		content="Your email has been verified. Return to the RainMatch app to continue."
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="verified-section">
	<div class="verified-container">
		<h1>Email Verified</h1>
		<p class="subtitle">Thanks for verifying your email! Get back to the app below.</p>

		<a href="rainmatch:///" class="btn primary">Return to RainMatch</a>
	</div>
</section>

<style>
	.verified-section {
		min-height: calc(100vh - 200px);
		padding: 6rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.verified-container {
		max-width: 800px;
		width: 100%;
		background: white;
		border-radius: 24px;
		padding: 4rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
		text-align: center;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1f2937;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #6b7280;
		margin-bottom: 3rem;
		line-height: 1.8;
	}

	.btn {
		cursor: pointer;
		transition: all 0.15s ease;
		text-decoration: none;
		display: inline-block;
		border: none;
		padding: 1rem 2rem;
		font-size: 1rem;
		font-weight: 600;
	}

	.btn:hover {
		transform: scale(1.05);
	}

	.primary {
		background-color: hsl(210, 97%, 51%);
		border-radius: 9999px;
		color: white;
	}

	.primary:hover {
		background-color: hsl(210, 97%, 45%);
	}

	@media (max-width: 768px) {
		.verified-container {
			padding: 2.5rem 1.5rem;
		}

		h1 {
			font-size: 2rem;
		}

		.verified-section {
			padding: 3rem 1rem;
		}
	}
</style>
