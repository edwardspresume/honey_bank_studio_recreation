<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;

	export { className as class };
</script>

<h2 class={cn('font-bold text-[1.333125rem] sm:text-[2.16625rem]', className)}>
	<slot />
</h2>
