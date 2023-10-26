<header class="clip-header top-0 left-0 grid h-[100dvh] content-center absolute bg-primary w-full">
	<div class="container mt-20 text-tertiary mix-blend-color-dodge">
		<h1 class="text-[2.625rem] font-bold sm:text-[5.375rem] leading-tight max-w-[46rem]">
			Turning ideas into experiences with tech.
		</h1>

		<button class="px-5 py-2 mt-5 transition-colors duration-300 border rounded-full sm:py-4 sm:text-xl hover:bg-gray-600 hover:text-foreground"
			>More about us</button
		>
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