<script>
	import SiteHeader from '$components/siteHeader/SiteHeader.svelte';

	import '../app.postcss';
</script>

<SiteHeader />

<main>
	<slot />
</main>

<footer class="relative p-2 text-center bg-secondary sm:p-4">
	<p class="text-sm sm:text-base">Copyright © 2023 Honeybank Studios LTD</p>

	<img
		class="absolute hidden object-cover w-16 transition-all duration-300 rotate-6 sm:block right-8 bottom-2 hover:scale-[2] hover:-translate-x-8 hover:-translate-y-9"
		src="https://assets.honeybankstudios.com/polaroid/b-3.webp"
		loading="lazy"
		alt="Polaroid"
	/>
</footer>
