<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { IconMailFilled } from '@tabler/icons-svelte';

	import { SITE_NAV_ID, cn } from '$lib';
	import { RoutePaths } from '$lib/types';

	import SiteNavMenuToggleBtn, { isSiteNavMenuOpen } from './SiteNavMenuToggleBtn.svelte';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;
	export { className as class };
</script>

<SiteNavMenuToggleBtn />

<nav
	id={SITE_NAV_ID}
	aria-label="Main Navigation"
	class={cn(
		`absolute z-50 top-full left-0 h-[100dvh] w-full px-4 pt-10 transition-transform duration-300 sm:h-full sm:relative sm:w-fit sm:-translate-x-0 sm:px-0  sm:pt-0 sm:mt-0 bg-secondary sm:bg-transparent ${
			!$isSiteNavMenuOpen ? '-translate-x-full' : ''
		}`,
		className
	)}
>
	<a
		href={RoutePaths.CONTACT}
		tabindex={$isSiteNavMenuOpen ? 0 : -1}
		class="flex items-center justify-center w-full gap-2 p-2 border rounded-full sm:p-4 sm:text-xl whitespace-nowrap"
	>
		<IconMailFilled size={20} class="w-4 sm:w-full" />

		<span>Contact us</span>
	</a>
</nav>
