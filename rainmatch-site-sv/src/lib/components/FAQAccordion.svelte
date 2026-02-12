<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		question: string;
		children: Snippet;
	}

	let { question, children }: Props = $props();

	let isOpen = $state(false);

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="faq-item" class:active={isOpen}>
	<button class="faq-question" onclick={toggle} aria-expanded={isOpen}>
		<span>{question}</span>
		<span class="faq-icon">+</span>
	</button>
	<div class="faq-answer">
		<div class="faq-answer-content">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.faq-item {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		margin-bottom: 1rem;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.faq-item:hover {
		border-color: rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.08);
	}

	.faq-question {
		width: 100%;
		padding: 1.25rem 1.5rem;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
		color: white;
		font-size: 1.1rem;
		background: none;
		border: none;
		text-align: left;
	}

	.faq-question:hover {
		color: #fbbf24;
	}

	.faq-icon {
		font-size: 1.5rem;
		transition: transform 0.3s ease;
		color: #fbbf24;
	}

	.faq-item.active .faq-icon {
		transform: rotate(45deg);
	}

	.faq-answer {
		max-height: 0;
		overflow: hidden;
		transition:
			max-height 0.3s ease,
			padding 0.3s ease;
	}

	.faq-item.active .faq-answer {
		max-height: 500px;
	}

	.faq-answer-content {
		padding: 0 1.5rem 1.5rem;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.8;
	}

	.faq-answer-content :global(ul) {
		margin: 1rem 0 1rem 1.5rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.faq-answer-content :global(li) {
		margin-bottom: 0.5rem;
	}

	.faq-answer-content :global(strong) {
		color: #fbbf24;
	}

	.faq-answer-content :global(.highlight-box) {
		background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%);
		border-left: 4px solid #fbbf24;
		padding: 1rem 1.25rem;
		border-radius: 0 8px 8px 0;
		margin: 1rem 0;
		color: rgba(255, 255, 255, 0.9);
	}

	@media (max-width: 768px) {
		.faq-question {
			font-size: 1rem;
			padding: 1rem;
		}

		.faq-answer-content {
			padding: 0 1rem 1rem;
		}
	}
</style>
