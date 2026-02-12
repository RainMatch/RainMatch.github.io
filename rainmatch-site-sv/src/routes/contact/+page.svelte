<svelte:head>
	<title>Contact Us - RainMatch | Curated Business Partner Matching Platform</title>
	<meta
		name="description"
		content="Contact RainMatch, the curated business partner matching platform. Questions about how to find business partners, accelerate business partnerships, or our expert-assisted recommendations? We're here to help."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://rainmatch.ai/contact" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rainmatch.ai/contact" />
	<meta
		property="og:title"
		content="Contact Us - RainMatch | Curated Business Partner Matching Platform"
	/>
	<meta
		property="og:description"
		content="Contact RainMatch, the curated business partner matching platform. Questions about finding strategic business partners or our expert-assisted recommendations? We're here to help."
	/>
	<meta property="og:image" content="https://rainmatch.ai/Logo_store_transparent.png" />
	<meta property="og:site_name" content="RainMatch" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:url" content="https://rainmatch.ai/contact" />
	<meta
		name="twitter:title"
		content="Contact Us - RainMatch | Curated Business Partner Matching Platform"
	/>
	<meta
		name="twitter:description"
		content="Contact RainMatch, the curated business partner matching platform. Questions about finding strategic business partners or our expert-assisted recommendations? We're here to help."
	/>
	<meta name="twitter:image" content="https://rainmatch.ai/Logo_store_transparent.png" />
</svelte:head>

<section class="contact-section">
	<div class="contact-container">
		<div class="contact-icon">&#x1F4E7;</div>
		<h1>Get in Touch</h1>
		<p class="subtitle">
			Have questions about RainMatch? We'd love to hear from you. Send us an email and we'll
			respond as soon as possible.
		</p>

		<div class="email-container">
			<div class="email-label">Email Us At</div>
			<div class="email-address">rainmaker@rainmatch.ai</div>
			<a href="mailto:rainmaker@rainmatch.ai" class="email-link">
				<span>Send Email</span>
				<span>&#8594;</span>
			</a>
		</div>

		<p class="info-text">
			Whether you're a sales professional looking to accelerate your deals or a partner wanting to
			monetize your network, we're here to help you succeed.
		</p>

		<a href="/" class="back-link">&#8592; Return to Homepage</a>
	</div>
</section>

<style>
	.contact-section {
		min-height: calc(100vh - 200px);
		padding: 6rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.contact-container {
		max-width: 800px;
		width: 100%;
		background: white;
		border-radius: 24px;
		padding: 4rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
		text-align: center;
	}

	.contact-icon {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #1a2942 0%, #2d4a6f 100%);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 2rem;
		font-size: 2.5rem;
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

	.email-container {
		background: linear-gradient(135deg, #1a2942 0%, #2d4a6f 100%);
		border-radius: 16px;
		padding: 2.5rem;
		margin-bottom: 2rem;
	}

	.email-label {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin-bottom: 1rem;
	}

	.email-address {
		font-size: 1.8rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1.5rem;
	}

	.email-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #fbbf24;
		color: #1f2937;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.email-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}

	.info-text {
		color: #6b7280;
		font-size: 1rem;
		line-height: 1.8;
	}

	.back-link {
		display: inline-block;
		margin-top: 2rem;
		color: #1f2937;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.back-link:hover {
		color: #4a6b8a;
	}

	@media (max-width: 768px) {
		.contact-container {
			padding: 2.5rem 1.5rem;
		}

		h1 {
			font-size: 2rem;
		}

		.email-address {
			font-size: 1.3rem;
		}

		.contact-section {
			padding: 3rem 1rem;
		}
	}
</style>
