<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface CarouselImage {
		url: string;
		caption: string;
	}

	const images: CarouselImage[] = [
		{
			url: '/Screenshot_20251123_130311_RainMatch.jpg',
			caption: 'Get projects that fit you'
		},
		{
			url: '/Screenshot_20251123_130332_RainMatch.jpg',
			caption: 'Discover partners and sellers'
		},
		{
			url: '/Screenshot_20251123_130339_RainMatch.jpg',
			caption: 'Post your own projects'
		}
	];

	let currentIndex = $state(0);

	function getItemClass(index: number): string {
		const total = images.length;
		if (index === currentIndex) return 'active';
		if (index === (currentIndex - 1 + total) % total) return 'left';
		if (index === (currentIndex + 1) % total) return 'right';
		return 'carousel-hidden';
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function previousSlide() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowLeft') previousSlide();
		if (event.key === 'ArrowRight') nextSlide();
	}

	onMount(() => {
		if (browser) {
			document.addEventListener('keydown', handleKeydown);
			return () => document.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

<div class="carousel-container">
	<div class="carousel">
		{#each images as image, index (image.url)}
			<div
				class="carousel-item {getItemClass(index)}"
				onclick={() => goToSlide(index)}
				onkeydown={(e) => e.key === 'Enter' && goToSlide(index)}
				role="button"
				tabindex="0"
			>
				<img src={image.url} alt={image.caption} />
				<div class="caption">{image.caption}</div>
			</div>
		{/each}
	</div>

	<div class="controls">
		<button class="control-btn" onclick={previousSlide} aria-label="Previous slide">
			&#8592;
		</button>
		<button class="control-btn" onclick={nextSlide} aria-label="Next slide">&#8594;</button>
	</div>
</div>

<style>
	.carousel-container {
		width: 100%;
		max-width: 100%;
		min-height: 60vh;
		max-height: 60vh;
		flex: 1;
		position: relative;
		perspective: 1500px;
	}

	.carousel {
		min-width: 100%;
		max-width: 100%;
		min-height: 100%;
		position: relative;
		transform-style: preserve-3d;
	}

	.carousel-item {
		position: absolute;
		max-height: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.carousel-item img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 12px;
		display: block;
	}

	.carousel-item.active {
		z-index: 10;
		transform: translate(-50%, -50%) translateZ(0) scale(1);
		box-shadow:
			0 0 40px rgba(59, 130, 246, 0.8),
			0 0 80px rgba(59, 130, 246, 0.4);
		border-radius: 12px;
	}

	.carousel-item.left {
		z-index: 5;
		transform: translate(-50%, -50%) translateX(-200px) translateZ(-200px) scale(0.8);
		opacity: 0.6;
	}

	.carousel-item.right {
		z-index: 5;
		transform: translate(-50%, -50%) translateX(200px) translateZ(-200px) scale(0.8);
		opacity: 0.6;
	}

	.carousel-item.carousel-hidden {
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.5);
		pointer-events: none;
	}

	.caption {
		position: absolute;
		padding-top: 10px;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		font-size: 1rem;
		text-align: center;
		opacity: 0;
		transition: opacity 0.6s ease;
		white-space: nowrap;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
	}

	.carousel-item.active .caption {
		opacity: 1;
	}

	.controls {
		position: absolute;
		bottom: 50%;
		left: 50%;
		width: 100%;
		justify-content: space-between;
		transform: translateX(-50%);
		display: flex;
		gap: 20px;
		z-index: 20;
	}

	.control-btn {
		background-color: transparent;
		border: none;
		color: white;
		padding: 6px 12px 12px 12px;
		text-align: center;
		place-items: center;
		border-radius: 99px;
		cursor: pointer;
		font-size: 24px;
		font-weight: bold;
		transition: all 0.3s ease;
		backdrop-filter: blur(20px);
	}

	.control-btn:hover {
		background: rgba(59, 130, 246, 0.3);
		border-color: rgba(59, 130, 246, 0.6);
		transform: scale(1.05);
	}

	.control-btn:active {
		transform: scale(0.95);
	}

	@media (max-width: 1024px) {
		.carousel-container {
			max-width: 100%;
		}

		.carousel-item.left {
			transform: translate(-50%, -50%) translateX(-150px) translateZ(-200px) scale(0.8);
		}

		.carousel-item.right {
			transform: translate(-50%, -50%) translateX(150px) translateZ(-200px) scale(0.8);
		}
	}

	@media (max-width: 768px) {
		.carousel-item.left {
			transform: translate(-50%, -50%) translateX(-120px) translateZ(-200px) scale(0.8);
		}

		.carousel-item.right {
			transform: translate(-50%, -50%) translateX(120px) translateZ(-200px) scale(0.8);
		}
	}

	@media (max-width: 400px) {
		.carousel-item.left {
			transform: translate(-50%, -50%) translateX(-100px) translateZ(-200px) scale(0.8);
		}

		.carousel-item.right {
			transform: translate(-50%, -50%) translateX(100px) translateZ(-200px) scale(0.8);
		}
	}
</style>
