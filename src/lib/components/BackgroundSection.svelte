<script lang="ts">
	import Container from './Container.svelte';

	export let backgroundUrl: string;
	export let sectionId: string = '';
</script>

<section
	id={sectionId}
	class="relative homepage-section before:bg-primary sm:before:bg-cover before:right-0 before:absolute before:top-0 before:bottom-0"
	style="--background-image: url({backgroundUrl});"
>
	<Container>
		<div
			class="relative z-10 grid gap-3 py-6 text-sm inner-container sm:w-[75%] sm:gap-8 sm:text-xl sm:py-24"
		>
			<slot />
		</div>
	</Container>
</section>

<style lang="postcss">
	:global(.homepage-section .inner-container p) {
		inline-size: 60%;
	}

	.homepage-section:nth-of-type(1)::before {
		--clip-start-percentage: 50%;
		--clip-end-percentage: 0%;

		inline-size: 20%;

		clip-path: polygon(
			var(--clip-start-percentage) 0%,
			100% 0%,
			100% 100%,
			var(--clip-end-percentage) 100%
		);
	}

	.homepage-section:nth-of-type(2)::before {
		--clip-start-percentage: 40%;
		--clip-end-percentage: 100%;

		inline-size: 50%;
		inset-inline-end: unset;

		clip-path: polygon(
			0% 0%,
			var(--clip-start-percentage) 0%,
			var(--clip-end-percentage) 100%,
			0% 100%
		);
	}

	:global(.homepage-section:nth-of-type(2) > .container) {
		text-align: end;
	}

	:global(.homepage-section:nth-of-type(2) .inner-container) {
		justify-items: end;
		margin-inline-start: auto;
	}

	.homepage-section:nth-of-type(3) {
		background-color: var(--secondary-color);

		&::before {
			--clip-start-percentage: 40%;
			--clip-end-percentage: 50%;

			inline-size: 50%;

			clip-path: polygon(
				var(--clip-start-percentage) 0%,
				100% 0%,
				100% 100%,
				var(--clip-end-percentage) 100%
			);
		}
	}

	@media (width > 640px) {
		.homepage-section::before {
			background-image: var(--background-image);
		}

		:global(.homepage-section .inner-container p) {
			inline-size: 80%;
		}

		.homepage-section:nth-of-type(1)::before,
		.homepage-section:nth-of-type(3)::before {
			inline-size: 50%;
			background-position: right;
			mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%);
		}

		.homepage-section:nth-of-type(2)::before {
			background-position: 30%;
			mask-image: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%);
		}

		.homepage-section:nth-of-type(3)::before {
			--clip-start-percentage: 50%;
			--clip-end-percentage: 10%;
		}
	}
</style>
