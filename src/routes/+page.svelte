<script>
	import H1 from "$components/H1.svelte";
	import PageHeader from "$components/PageHeader.svelte";

</script>

<PageHeader>

        <H1>
            Turning ideas into experiences with tech.
        </H1>


		<button class="px-5 py-2 mt-5 transition-colors duration-300 border rounded-full sm:py-4 sm:text-xl hover:bg-gray-600 hover:text-foreground"
			>More about us</button
		>
</PageHeader>




<!-- <section class="mt-[100vh] flex">
	<div class="max-w-[50%] grid justify-items-end">
		<h2 class="text-xl font-medium">
			Small town, <span>big ideas</span>
			<svg class="hide-svg"
				><filter xmlns="http://www.w3.org/2000/svg" id="refract_32628-335"
					><feTurbulence baseFrequency="0.04" seed="96" /><feDisplacementMap
						in="SourceGraphic"
						in2="map"
						scale="4"
						xChannelSelector="R"
						yChannelSelector="G"
					/></filter
				></svg
			>.
		</h2>

		<p>
			We're Honeybank Studios, based in simple St Leonards, a cosy British town on the coast. But
			our tech? It's big and it's global, and it's seen by millions.
		</p>
		<p>
			But we like to keep it simple, build awesome tech that scales, while staying true to our core.
			We'll bring you the cutting-edge solutions that make a real difference, wherever you are in
			the world.
		</p>
	</div>

	<aside />
</section>

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


    aside {
		--clip-start-percentage: 50%;
		--clip-end-percentage: 0%;
		height: 100px;
		right: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		-o-object-fit: cover;
		object-fit: cover;
		z-index: 0;
		background-color: #a13f87;
		mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%);
		clip-path: polygon(
			var(--clip-start-percentage) 0%,
			100% 0%,
			100% 100%,
			var(--clip-end-percentage) 100%
		);
		/* clip-path: polygon(400px 0%, 100% 0%, 100% 100%, 0px 100%, 0 600px); */
	}

	h2 span {
		display: inline-block;
		position: relative;
		-webkit-user-select: text;
		-moz-user-select: text;
		user-select: text;
		white-space: nowrap;

		&::before {
			content: '';
			position: absolute;
			left: -0.125rem;
			right: -0.125rem;
			bottom: 0;
			top: 0;
			background: red;
			opacity: 0.8;
			mix-blend-mode: screen;
			transform: skew(10deg);
			filter: url(#refract_32628-335);
		}
	}

	.hide-svg {
		position: fixed;
		width: 0;
		height: 0;
		pointer-events: none;
		left: 0;
		top: 0;
	}

    </style> -->