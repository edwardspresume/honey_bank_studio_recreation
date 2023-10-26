<header class="clip-header top-0 left-0 grid h-[100dvh] content-center absolute bg-primary w-full">
	<div class="container mt-20 text-tertiary mix-blend-color-dodge">
	<slot></slot>
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