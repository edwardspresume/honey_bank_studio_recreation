<script>
	export let viewPortHeight = 100;
</script>

<header
	style="min-block-size:{viewPortHeight}vh;"
	class="relative grid content-center w-full py-16 clip-header bg-primary"
>
	<div class="container mt-20 text-tertiary mix-blend-color-dodge">
		<slot />
	</div>
</header>

<style>
	.clip-header::before {
		content: '';
		position: absolute;
		inset-block-start: 0;
		inset-inline-start: 0;
		inset-inline-end: 0;
		inset-block-end: 0;
		background-color: #a13f87;
		clip-path: polygon(400px 0%, 100% 0%, 100% 100%, 0px 100%, 0 600px);
	}

	@media (width > 629px) {
		.clip-header::before {
			clip-path: polygon(800px 0%, 100% 0%, 100% 100%, 0px 100%, 0 1200px);
		}
	}
</style>
