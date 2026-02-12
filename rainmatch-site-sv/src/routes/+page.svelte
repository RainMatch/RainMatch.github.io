<script lang="ts">
	import { Carousel } from '$lib';

	let activeRole = $state<'sellers' | 'partners'>('sellers');

	function showRole(role: 'sellers' | 'partners') {
		activeRole = role;
	}

	const jsonLdApp = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'RainMatch',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'iOS, Android',
		description:
			'Curated business partner matching platform with expert-assisted recommendations. A networking app for sales professionals to find strategic business partners, accelerate business partnerships, and expand their sales network through commission-based partner matching.',
		url: 'https://rainmatch.ai',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		author: {
			'@type': 'Organization',
			name: 'Rainmakers LLC',
			url: 'https://rainmatch.ai'
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '5',
			ratingCount: '1'
		}
	};

	const jsonLdOrg = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'RainMatch',
		url: 'https://rainmatch.ai',
		logo: 'https://rainmatch.ai/Logo_store_transparent.png',
		description:
			'Curated matchmaking platform for sales professionals. A business partner collaboration platform and sales referral network helping entrepreneurs find strategic business partners for business growth.',
		sameAs: [
			'https://www.tiktok.com/@rainmatch',
			'https://www.instagram.com/rainmatch/',
			'https://x.com/RainMatch2025',
			'https://www.youtube.com/@rainmatch',
			'https://www.linkedin.com/company/rainmatch'
		],
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'rainmaker@rainmatch.ai',
			contactType: 'customer service'
		}
	};

	const jsonLdAppScript = `<script type="application/ld+json">${JSON.stringify(jsonLdApp)}</` + `script>`;
	const jsonLdOrgScript = `<script type="application/ld+json">${JSON.stringify(jsonLdOrg)}</` + `script>`;

	const sellersSteps = [
		{
			icon: '&#x1F4DD;',
			title: 'Post Projects',
			description:
				'Create detailed project listings including product descriptions, Ideal Customer Profiles (ICP), and commission offers.'
		},
		{
			icon: '&#x1F3AF;',
			title: 'Receive Matches',
			description:
				"Get curated Partner matches based on RainMatch' AI recommendations and Partner interest."
		},
		{
			icon: '&#x1F91D;',
			title: 'Connect & Collaborate',
			description: 'Like Partner profiles to initiate partnerships, then work together to close deals.'
		},
		{
			icon: '&#x1F4C8;',
			title: 'Share Success',
			description:
				'Share commission with Partner according to agreed terms and build credibility for future partnerships.'
		}
	];

	const partnersSteps = [
		{
			icon: '&#x1F440;',
			title: 'Browse Opportunities',
			description: 'View Seller project matches based on your expertise and interest.'
		},
		{
			icon: '&#x1F4CB;',
			title: 'Evaluate Projects',
			description: 'Review project details, commission structures, and Seller profiles.'
		},
		{
			icon: '&#x1F4A1;',
			title: 'Express Interest',
			description: 'Like promising projects to signal partnership interest.'
		},
		{
			icon: '&#x1F4B0;',
			title: 'Close Deals Together',
			description:
				'Leverage your network and expertise to accelerate sales cycles and maximize revenue. Build credibility as a Trusted Partner for advanced exposure to more Sellers.'
		}
	];
</script>

<svelte:head>
	<title>RainMatch - Curated Business Partner Matching Platform</title>
	<meta
		name="description"
		content="RainMatch is the best business partner matching platform with expert-assisted recommendations. Expand your sales network with our curated matching system. Match sellers with sales consultants for commission-based partner matching and business growth."
	/>
	<meta
		name="keywords"
		content="curated business partner matching, business partner collaboration platform, networking platform for sales professionals, sales referral network, commission-based partner matching, strategic business partner matching, networking app for sales professionals, match sellers with sales consultants, business partner platform for entrepreneurs"
	/>
	<meta name="author" content="Rainmakers LLC" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://rainmatch.ai/" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rainmatch.ai/" />
	<meta property="og:title" content="RainMatch - Curated Business Partner Matching Platform" />
	<meta
		property="og:description"
		content="The best business partner matching platform with expert-assisted recommendations. A network-driven deal-closing platform to accelerate business partnerships and expand your sales network."
	/>
	<meta property="og:image" content="https://rainmatch.ai/Logo_store_transparent.png" />
	<meta property="og:site_name" content="RainMatch" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://rainmatch.ai/" />
	<meta name="twitter:title" content="RainMatch - Curated Business Partner Matching Platform" />
	<meta
		name="twitter:description"
		content="The best business partner matching platform with expert-assisted recommendations. A network-driven deal-closing platform to accelerate business partnerships and expand your sales network."
	/>
	<meta name="twitter:image" content="https://rainmatch.ai/Logo_store_transparent.png" />

	{@html jsonLdAppScript}
	{@html jsonLdOrgScript}
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<img
			class="logo-large"
			src="/Logo_store_transparent.png"
			alt="RainMatch - Curated Business Partner Matching Platform"
		/>
		<h1>The platform for businesspeople</h1>
		<p class="hero-description">
			Curated networking and matchmaking platform for businesspeople to collaborate, close more
			deals and share the outcome.
		</p>

		<div class="store-badges-container">
			<a
				class="hero-badges"
				href="https://play.google.com/store/apps/details?id=com.rainmatch.app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					class="store-badges"
					src="/GetItOnGooglePlay_Badge_Web_color_English.png"
					alt="Get RainMatch on Google Play"
				/>
			</a>

			<a
				class="hero-badges"
				href="https://apps.apple.com/gb/app/rainmatch-partner-earn/id6754579970"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					class="store-badges"
					src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
					alt="Download RainMatch on the App Store"
				/>
			</a>
		</div>
	</div>

	<Carousel />
</section>

<!-- How It Works Section -->
<section class="how-it-works">
	<div class="section-container">
		<div class="section-header">
			<h2>What is RainMatch?</h2>
			<p>RainMatch is a platform for businesspeople to connect with the right people for two goals.</p>
			<p>
				As a Seller, if you need help selling your product, find the right Partners to help you win
				deals.
			</p>
			<p>
				As a Partner, if you have the network and customers in certain industries and are willing to
				offer help, connect with the right Sellers, and help them win deals.
			</p>
		</div>

		<h2 class="who-title">Who is RainMatch for?</h2>
		<div class="who-its-for">
			<div class="box sellers">
				<h3>Sellers</h3>
				<p>
					Sales professionals, business owners, and entrepreneurs who have products or services to
					sell but need expanded networks, industry expertise, and additional credibility to close
					more deals faster.
				</p>
			</div>

			<div class="box partners">
				<h3>Partners</h3>
				<p>
					Experienced sales professionals, consultants, industry veterans, and business development
					experts who possess valuable networks, relationships, and domain expertise that can help
					Sellers win more deals in exchange for commission sharing.
				</p>
			</div>
		</div>

		<h2>How It Works</h2>

		<div class="role-tabs">
			<button
				class="role-tab sellers"
				class:active={activeRole === 'sellers'}
				onclick={() => showRole('sellers')}
			>
				For Sellers
			</button>
			<button
				class="role-tab partners"
				class:active={activeRole === 'partners'}
				onclick={() => showRole('partners')}
			>
				For Partners
			</button>
		</div>

		{#if activeRole === 'sellers'}
			<div class="sellers-path">
				<h3 class="path-title">Accelerate Your Sales</h3>
				<p class="path-subtitle">
					Expand your network and close deals faster with strategic Partners
				</p>
				<div class="steps-grid">
					{#each sellersSteps as step, i (step.title)}
						<div class="step-card">
							<div class="step-icon">{@html step.icon}</div>
							<div class="step-header">
								<div class="step-title">{step.title}</div>
								<div class="step-number">Step {i + 1}</div>
							</div>
							<div class="step-description">{step.description}</div>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="partners-path">
				<h3 class="path-title">Monetize Your Network</h3>
				<p class="path-subtitle">Turn your expertise and connections into recurring revenue</p>
				<div class="steps-grid">
					{#each partnersSteps as step, i (step.title)}
						<div class="step-card">
							<div class="step-icon">{@html step.icon}</div>
							<div class="step-header">
								<div class="step-title">{step.title}</div>
								<div class="step-number">Step {i + 1}</div>
							</div>
							<div class="step-description">{step.description}</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		margin-top: -100px;
		max-width: var(--max-width);
		padding-right: 2rem;
		padding-left: 2rem;
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		gap: 2rem;
	}

	.logo-large {
		object-fit: contain;
		aspect-ratio: 1;
		max-height: 6rem;
	}

	.store-badges {
		height: 4rem;
		max-height: 4rem;
	}

	.hero-content {
		color: white;
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: flex-start;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}

	.hero-description {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 2.5rem;
		line-height: 1.8;
	}

	.how-it-works {
		padding: 6rem 2rem;
		border-radius: 16px;
		width: 100%;
	}

	.how-it-works h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: white;
		text-align: center;
	}

	.who-title {
		margin-top: 4rem;
	}

	.section-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 2rem;
		color: white;
	}

	.section-header p {
		font-size: 1.1rem;
		color: hsl(220, 9%, 70%);
		max-width: 800px;
		margin: 0 auto 1rem auto;
		line-height: 1.8;
	}

	.who-its-for {
		display: flex;
		justify-content: center;
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto 6rem auto;
	}

	.who-its-for .box {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 2.5rem;
		border-radius: 20px;
		color: white;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.who-its-for .box::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--primary), var(--primary));
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.who-its-for .sellers::before {
		background: linear-gradient(90deg, var(--primary), #60a5fa);
	}

	.who-its-for .partners::before {
		background: linear-gradient(90deg, var(--yellow), #fcd34d);
	}

	.who-its-for .box:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
	}

	.who-its-for .box:hover::before {
		opacity: 1;
	}

	.who-its-for h3 {
		font-weight: 700;
		font-size: 2rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, white, rgba(255, 255, 255, 0.8));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.who-its-for .sellers h3 {
		background: linear-gradient(135deg, var(--primary), #60a5fa);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.who-its-for .partners h3 {
		background: linear-gradient(135deg, var(--yellow), #fcd34d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.who-its-for p {
		font-size: 1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.85);
	}

	.role-tabs {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.role-tab {
		padding: 0.75rem 2rem;
		border-radius: 25px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid transparent;
		font-size: 1rem;
	}

	.role-tab.sellers {
		background: hsl(210, 97%, 51%);
		color: white;
	}

	.role-tab.partners {
		background: #fbbf24;
		color: #1f2937;
	}

	.role-tab:not(.active) {
		background: white;
		border: 2px solid #e5e7eb;
		color: #6b7280;
	}

	.role-tab:not(.active):hover {
		border-color: #1f2937;
		color: #1f2937;
	}

	.path-title {
		text-align: center;
		font-size: 1.8rem;
		color: white;
	}

	.path-subtitle {
		text-align: center;
		color: hsl(220, 9%, 70%);
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.step-card {
		background: white;
		padding: 2rem;
		border-radius: 16px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.step-card:hover {
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		transform: translateY(-5px);
	}

	.step-icon {
		width: 60px;
		height: 60px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
	}

	.sellers-path .step-icon {
		background: #1f2937;
		color: white;
	}

	.partners-path .step-icon {
		background: #fbbf24;
		color: #1f2937;
	}

	.step-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.step-title {
		font-size: 1.3rem;
		font-weight: 700;
		color: #1f2937;
	}

	.step-number {
		background: #f3f4f6;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		color: #6b7280;
	}

	.step-description {
		color: #6b7280;
		line-height: 1.6;
	}

	@media (max-width: 1024px) {
		.hero {
			margin-top: 3rem;
			flex-direction: column;
			align-items: center;
			gap: 0;
			width: 100%;
			text-align: center;
		}

		.hero-content {
			flex: 0;
			align-items: center;
		}

		.steps-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.who-its-for {
			flex-direction: column;
			align-items: center;
		}

		.hero h1 {
			font-size: 2.5rem;
		}
	}
</style>
