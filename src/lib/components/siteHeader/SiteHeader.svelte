<script>
	import { RoutePaths } from '$lib/types';

	import { isSiteNavMenuOpen } from './SiteNavMenuToggleBtn.svelte';

	import logoSRC from '$assets/wordmark.svg';
	import SiteNav from './SiteNav.svelte';

	let scrollY = 0;
	let bgPrimary = false;

	$: bgPrimary = $isSiteNavMenuOpen || scrollY > 100;
</script>

<svelte:window bind:scrollY />

<header class="fixed w-full top-0 z-50 duration-300 transition-colors {bgPrimary ? 'bg-primary' : ''}">
	<div class="container flex justify-between p-4">
		<a href={RoutePaths.HOMEPAGE} class="b">
			<img src={logoSRC} alt="Honeybank Studios" class="w-56 sm:w-80" />
		</a>

		<SiteNav />
	</div>
</header>
